import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

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

const sanitizeFilename = (name: string) =>
  name
    .replace(/[^a-zA-Z0-9._-]/g, "_")
    .replace(/_{2,}/g, "_")
    .slice(0, 120);

export async function POST(request: Request) {
  if (!supabase || !supabaseBucket) {
    return NextResponse.json(
      { error: "Supabase is not configured." },
      { status: 500 }
    );
  }

  const body = await request.json().catch(() => null);
  const filename = typeof body?.filename === "string" ? body.filename : "";

  if (!filename) {
    return NextResponse.json(
      { error: "filename is required." },
      { status: 400 }
    );
  }

  const safeName = sanitizeFilename(filename);
  const dateFolder = new Date().toISOString().slice(0, 10);
  const path = `questionnaire/${dateFolder}/${crypto.randomUUID()}-${safeName}`;

  const { data, error } = await supabase.storage
    .from(supabaseBucket)
    .createSignedUploadUrl(path);

  if (error || !data?.signedUrl) {
    return NextResponse.json(
      { error: error?.message || "Failed to create upload URL." },
      { status: 500 }
    );
  }

  return NextResponse.json({ uploadUrl: data.signedUrl, path });
}
