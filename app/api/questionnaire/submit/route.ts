import { createHash, randomUUID } from "node:crypto";
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import nodemailer from "nodemailer";
import { buildQuestionnaireEmail, type QuestionnairePayload } from "../emailTemplate";

export const runtime = "nodejs";

const supabaseUrl = process.env.SUPABASE_URL ?? "";
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY ?? "";
const supabaseBucket = process.env.SUPABASE_BUCKET ?? "";

const INSIGHTS_SITE_ID = "siamo";
const INSIGHTS_EVENT_URL = "https://insights-dashboard-six.vercel.app/api/events";
const INSIGHTS_LEADS_SUBMIT_URL =
  "https://insights-dashboard-six.vercel.app/api/leads/submit";
const INSIGHTS_SESSION_COOKIE = "__insights_sid_siamo";
const INSIGHTS_VISITOR_COOKIE = "__insights_vid_siamo";

type SubmitBody = {
  files?: unknown;
  submissionId?: unknown;
  submission_id?: unknown;
  locale?: unknown;
  pagePath?: unknown;
  page_path?: unknown;
  referrer?: unknown;
  entry_page?: unknown;
  utm_source?: unknown;
  utm_medium?: unknown;
  utm_campaign?: unknown;
  utm_content?: unknown;
  utm_term?: unknown;
  gclid?: unknown;
  insights_session_id?: unknown;
  insights_visitor_id?: unknown;
  language?: unknown;
  email?: unknown;
  [key: string]: unknown;
};

const supabase =
  supabaseUrl && supabaseServiceRoleKey
    ? createClient(supabaseUrl, supabaseServiceRoleKey, {
        auth: { persistSession: false },
      })
    : null;

function readNonEmptyString(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : null;
}

function normalizeEmail(value: unknown): string | null {
  const email = readNonEmptyString(value);
  if (!email) return null;
  return email.toLowerCase();
}

function hashEmailSha256(value: string | null): string | null {
  if (!value) return null;
  return createHash("sha256").update(value).digest("hex");
}

function parseCookieHeader(cookieHeader: string | null): Record<string, string> {
  if (!cookieHeader) return {};
  const out: Record<string, string> = {};
  cookieHeader
    .split(";")
    .map((part) => part.trim())
    .filter(Boolean)
    .forEach((part) => {
      const idx = part.indexOf("=");
      if (idx === -1) return;
      const key = part.slice(0, idx).trim();
      const value = part.slice(idx + 1).trim();
      if (!key) return;
      try {
        out[key] = decodeURIComponent(value);
      } catch {
        out[key] = value;
      }
    });
  return out;
}

function getRefDomain(referrer: string): string {
  try {
    return new URL(referrer).hostname;
  } catch {
    return "";
  }
}

function readPagePath(body: SubmitBody, refererHeader: string | null): string | null {
  const explicitPath = readNonEmptyString(body.pagePath) ?? readNonEmptyString(body.page_path);
  if (explicitPath) return explicitPath;

  if (!refererHeader) return null;
  try {
    const refererUrl = new URL(refererHeader);
    return refererUrl.pathname || null;
  } catch {
    return null;
  }
}

function readLocale(bodyLocale: unknown, pagePath: string | null): "en" | "es" {
  const explicitLocale = readNonEmptyString(bodyLocale);
  if (explicitLocale === "en" || explicitLocale === "es") return explicitLocale;
  return pagePath?.startsWith("/es/") ? "es" : "en";
}

function readStringArray(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value
    .map((item) => {
      const clean = readNonEmptyString(item);
      return clean ?? String(item ?? "").trim();
    })
    .filter((item) => item.length > 0);
}

function readStringRecord(value: unknown): Record<string, string> {
  if (!value || typeof value !== "object") return {};
  const record = value as Record<string, unknown>;
  const result: Record<string, string> = {};
  for (const [key, raw] of Object.entries(record)) {
    const normalized = readNonEmptyString(raw);
    if (normalized) result[key] = normalized;
  }
  return result;
}

async function submitLegacyInsightsEvent({
  submissionId,
  emailHash,
  pagePath,
  referrer,
  entryPage,
  sessionId,
  visitorId,
  body,
  acceptLanguage,
  country,
}: {
  submissionId: string;
  emailHash: string | null;
  pagePath: string | null;
  referrer: string | null;
  entryPage: string | null;
  sessionId: string | null;
  visitorId: string | null;
  body: SubmitBody;
  acceptLanguage: string | null;
  country: string | null;
}) {
  try {
    const apiKey = readNonEmptyString(process.env.INSIGHTS_SERVER_API_KEY);
    if (!apiKey) {
      console.warn(
        `[questionnaire/submit] missing INSIGHTS_SERVER_API_KEY; skipping legacy analytics event submission_id=${submissionId}`
      );
      return;
    }

    const payload = {
      site_id: INSIGHTS_SITE_ID,
      api_key: apiKey,
      event_name: "contact_form_submit",
      source: "server_submit",
      submission_id: submissionId,
      page_path: pagePath ?? "",
      referrer: referrer ?? "",
      ref_domain: referrer ? getRefDomain(referrer) : "",
      utm_source: readNonEmptyString(body.utm_source) ?? "",
      utm_medium: readNonEmptyString(body.utm_medium) ?? "",
      utm_campaign: readNonEmptyString(body.utm_campaign) ?? "",
      utm_content: readNonEmptyString(body.utm_content) ?? "",
      utm_term: readNonEmptyString(body.utm_term) ?? "",
      gclid: readNonEmptyString(body.gclid) ?? "",
      entry_page: entryPage ?? "",
      visitor_id: visitorId ?? "",
      session_id: sessionId ?? "",
      language: acceptLanguage ?? "",
      country: country ?? "",
      metadata: {
        submission_id: submissionId,
        email_hash: emailHash ?? undefined,
        source: "server_submit",
        form_id: "questionnaire",
      },
    };

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 1500);
    const response = await fetch(INSIGHTS_EVENT_URL, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
      signal: controller.signal,
      cache: "no-store",
    }).finally(() => clearTimeout(timeout));

    if (!response.ok) {
      console.warn(
        `[questionnaire/submit] legacy analytics event failed status=${response.status} submission_id=${submissionId}`
      );
    }
  } catch {
    // Keep submission flow resilient.
  }
}

async function submitInsightsLeadAudit({
  submissionId,
  submittedAt,
  emailHash,
  sessionId,
  visitorId,
  locale,
  pagePath,
}: {
  submissionId: string;
  submittedAt: string;
  emailHash: string | null;
  sessionId: string | null;
  visitorId: string | null;
  locale: "en" | "es";
  pagePath: string | null;
}) {
  const apiKey = readNonEmptyString(process.env.INSIGHTS_SERVER_API_KEY);
  if (!apiKey) {
    console.warn(
      `[insights] missing INSIGHTS_SERVER_API_KEY, skipping lead audit submission_id=${submissionId}`
    );
    return;
  }

  const payload = {
    site_id: INSIGHTS_SITE_ID,
    submission_id: submissionId,
    submitted_at: submittedAt,
    email_hash: emailHash,
    status: "accepted",
    session_id: sessionId,
    visitor_id: visitorId,
    metadata: {
      source: "server_submit",
      form_id: "questionnaire",
      locale,
      page_path: pagePath,
    },
  };

  try {
    const response = await fetch(INSIGHTS_LEADS_SUBMIT_URL, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(payload),
      cache: "no-store",
    });

    if (!response.ok) {
      const responseSnippet = (await response.text()).replace(/\s+/g, " ").slice(0, 200);
      console.warn(
        `[insights] lead audit failed status=${response.status} submission_id=${submissionId} body=${responseSnippet}`
      );
      return;
    }

    console.info(`[insights] lead audit accepted submission_id=${submissionId}`);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.warn(
      `[insights] lead audit request error submission_id=${submissionId} message=${message}`
    );
  }
}

export async function POST(request: Request) {
  const smtpHost = process.env.SMTP_HOST ?? "";
  const smtpUser = process.env.SMTP_USER ?? "";
  const smtpPass = process.env.SMTP_PASS ?? "";
  const smtpPort = Number(process.env.SMTP_PORT ?? 587);
  const smtpSecure = process.env.SMTP_SECURE === "true";
  const fromAddress = process.env.SMTP_FROM ?? smtpUser;
  const toAddress = process.env.QUESTIONNAIRE_TO ?? "";

  if (!smtpHost || !smtpUser || !smtpPass || !fromAddress || !toAddress) {
    return NextResponse.json(
      { error: "Email is not configured." },
      { status: 500 }
    );
  }

  if (!supabase || !supabaseBucket) {
    return NextResponse.json(
      { error: "Supabase is not configured." },
      { status: 500 }
    );
  }

  const body = (await request.json().catch(() => null)) as SubmitBody | null;
  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid payload." }, { status: 400 });
  }

  const submissionId =
    readNonEmptyString(body.submissionId) ??
    readNonEmptyString(body.submission_id) ??
    randomUUID();
  const normalizedEmail = normalizeEmail(body.email);
  const emailHash = hashEmailSha256(normalizedEmail);

  const cookieHeader = request.headers.get("cookie");
  const cookies = parseCookieHeader(cookieHeader);
  const sessionId =
    readNonEmptyString(cookies[INSIGHTS_SESSION_COOKIE]) ??
    readNonEmptyString(body.insights_session_id);
  const visitorId =
    readNonEmptyString(cookies[INSIGHTS_VISITOR_COOKIE]) ??
    readNonEmptyString(body.insights_visitor_id);

  const refererHeader = request.headers.get("referer");
  const pagePath = readPagePath(body, refererHeader);
  const locale = readLocale(body.locale, pagePath);
  const referrer = readNonEmptyString(body.referrer) ?? refererHeader;
  const entryPage = readNonEmptyString(body.entry_page) ?? pagePath;
  const acceptLanguage =
    request.headers.get("accept-language") ?? readNonEmptyString(body.language);
  const country = request.headers.get("x-vercel-ip-country");

  const files = Array.isArray(body.files) ? body.files : [];
  const signedFiles = await Promise.all(
    files.map(async (rawFile) => {
      const file = typeof rawFile === "object" && rawFile !== null ? rawFile : {};
      const name = readNonEmptyString((file as { name?: unknown }).name) ?? "";
      const sizeValue = (file as { size?: unknown }).size;
      const size = typeof sizeValue === "number" ? sizeValue : undefined;
      const path = readNonEmptyString((file as { path?: unknown }).path);

      if (!path) {
        return { name, size, path: "", signedUrl: "" };
      }

      const { data } = await supabase.storage
        .from(supabaseBucket)
        .createSignedUrl(path, 60 * 60 * 24 * 7);
      return { name, size, path, signedUrl: data?.signedUrl ?? "" };
    })
  );

  const emailPayload: QuestionnairePayload = {
    contactName: readNonEmptyString(body.contactName) ?? "",
    email: readNonEmptyString(body.email) ?? "",
    phoneCountry: readNonEmptyString(body.phoneCountry) ?? "",
    phone: readNonEmptyString(body.phone) ?? "",
    projectType: readNonEmptyString(body.projectType) ?? "",
    venue: readNonEmptyString(body.venue) ?? "",
    draw: readNonEmptyString(body.draw) ?? "",
    notes: readNonEmptyString(body.notes) ?? "",
    budgetVirtual: readNonEmptyString(body.budgetVirtual) ?? "",
    budgetFull: readNonEmptyString(body.budgetFull) ?? "",
    propertyStatusOther: readNonEmptyString(body.propertyStatusOther) ?? "",
    hasNoPlans: body.hasNoPlans === true,
    referralSources: readStringArray(body.referralSources),
    propertyStatus: readStringArray(body.propertyStatus),
    areas: readStringRecord(body.areas),
  };

  const { html, text } = buildQuestionnaireEmail(emailPayload, signedFiles);
  const replyTo = readNonEmptyString(body.email) ?? undefined;

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpSecure,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  await transporter.sendMail({
    from: fromAddress,
    to: toAddress,
    replyTo,
    subject: `New Questionnaire Submission [${submissionId}]`,
    html,
    text,
  });

  await submitLegacyInsightsEvent({
    submissionId,
    emailHash,
    pagePath,
    referrer,
    entryPage,
    sessionId,
    visitorId,
    body,
    acceptLanguage,
    country,
  });

  await submitInsightsLeadAudit({
    submissionId,
    submittedAt: new Date().toISOString(),
    emailHash,
    sessionId,
    visitorId,
    locale,
    pagePath,
  });

  return NextResponse.json({ ok: true, submission_id: submissionId, submissionId });
}
