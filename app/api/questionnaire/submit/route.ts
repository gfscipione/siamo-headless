import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import nodemailer from "nodemailer";
import { buildQuestionnaireEmail } from "../emailTemplate";
import crypto from "crypto";

export const runtime = "nodejs";

const supabaseUrl = process.env.SUPABASE_URL ?? "";
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY ?? "";
const supabaseBucket = process.env.SUPABASE_BUCKET ?? "";

type InsightsContext = {
  page_path?: string;
  referrer?: string;
  entry_page?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  gclid?: string;
  insights_session_id?: string;
  insights_visitor_id?: string;
  language?: string;
};

const supabase =
  supabaseUrl && supabaseServiceRoleKey
    ? createClient(supabaseUrl, supabaseServiceRoleKey, {
        auth: { persistSession: false },
      })
    : null;

const parseCookieHeader = (cookieHeader: string) => {
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
      out[key] = decodeURIComponent(value);
    });
  return out;
};

const sha256Hex = (value: string) =>
  crypto.createHash("sha256").update(value, "utf8").digest("hex");

const safeString = (value: unknown) => (typeof value === "string" ? value : "");

const getRefDomain = (referrer: string) => {
  try {
    return new URL(referrer).hostname;
  } catch {
    return "";
  }
};

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

  const body = await request.json().catch(() => null);
  if (!body) {
    return NextResponse.json({ error: "Invalid payload." }, { status: 400 });
  }

  // Conversion tracking: generate a stable id for 1:1 audit of submit -> analytics event.
  const submissionId = `dlzsv-${Date.now()}-${crypto.randomBytes(6).toString("hex")}`;

  const cookieHeader = request.headers.get("cookie") ?? "";
  const cookies = parseCookieHeader(cookieHeader);
  const insightsFromBody = body as InsightsContext;
  const insightsSessionId =
    cookies["__insights_sid_siamo"] || safeString(insightsFromBody.insights_session_id);
  const insightsVisitorId =
    cookies["__insights_vid_siamo"] || safeString(insightsFromBody.insights_visitor_id);

  const pagePath = safeString(insightsFromBody.page_path);
  const referrer = safeString(insightsFromBody.referrer);
  const entryPage = safeString(insightsFromBody.entry_page) || pagePath;
  const acceptLanguage = request.headers.get("accept-language") ?? safeString(insightsFromBody.language);
  const country = request.headers.get("x-vercel-ip-country") ?? "";

  const email = safeString((body as { email?: unknown }).email).trim().toLowerCase();
  const emailHash = email ? sha256Hex(email) : "";

  const files = Array.isArray(body.files) ? body.files : [];
  const signedFiles = await Promise.all(
    files.map(async (file: { name?: string; size?: number; path?: string }) => {
      if (!file?.path) return { ...file, signedUrl: "" };
      const { data } = await supabase.storage
        .from(supabaseBucket)
        .createSignedUrl(file.path, 60 * 60 * 24 * 7);
      return { ...file, signedUrl: data?.signedUrl ?? "" };
    })
  );

  const { html, text } = buildQuestionnaireEmail(body, signedFiles);

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
    replyTo: body.email || undefined,
    subject: `New Questionnaire Submission [${submissionId}]`,
    html,
    text,
  });

  // Emit server-side conversion event (no PII).
  // NOTE: This should never block the submission flow.
  try {
    const apiKey = process.env.NEXT_PUBLIC_INSIGHTS_API_KEY ?? "";
    const endpoint = "https://insights-dashboard-six.vercel.app/api/events";
    const payload = {
      site_id: "siamo",
      api_key: apiKey,
      event_name: "contact_form_submit",
      page_path: pagePath,
      referrer,
      ref_domain: referrer ? getRefDomain(referrer) : "",
      utm_source: safeString(insightsFromBody.utm_source),
      utm_medium: safeString(insightsFromBody.utm_medium),
      utm_campaign: safeString(insightsFromBody.utm_campaign),
      utm_content: safeString(insightsFromBody.utm_content),
      utm_term: safeString(insightsFromBody.utm_term),
      gclid: safeString(insightsFromBody.gclid),
      entry_page: entryPage,
      visitor_id: insightsVisitorId,
      session_id: insightsSessionId,
      language: acceptLanguage,
      country,
      metadata: {
        submission_id: submissionId,
        email_hash: emailHash || undefined,
        source: "server_submit",
        form_id: "questionnaire",
      },
    };

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 1500);
    await fetch(endpoint, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
      signal: controller.signal,
    }).finally(() => clearTimeout(timeout));
  } catch {
    // ignore analytics errors
  }

  return NextResponse.json({ ok: true, submission_id: submissionId });
}
