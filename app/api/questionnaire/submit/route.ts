import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import nodemailer from "nodemailer";
import { buildQuestionnaireEmail } from "../emailTemplate";

export const runtime = "nodejs";

const supabaseUrl = process.env.SUPABASE_URL ?? "";
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY ?? "";
const supabaseBucket = process.env.SUPABASE_BUCKET ?? "";

const supabase =
  supabaseUrl && supabaseServiceRoleKey
    ? createClient(supabaseUrl, supabaseServiceRoleKey, {
        auth: { persistSession: false },
      })
    : null;

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
    subject: `New Questionnaire Submission${body.contactName ? ` - ${body.contactName}` : ""}`,
    html,
    text,
  });

  return NextResponse.json({ ok: true });
}
