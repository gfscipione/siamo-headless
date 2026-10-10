import type { NextRequest } from "next/server";

const headers = {
  "cache-control": "no-store, max-age=0",
  "x-robots-tag": "noindex, nofollow",
};

// Existing bookmarks may open origin; Next no longer relays WP requests or credentials.
export function GET(request: NextRequest) {
  const incoming = new URL(request.url);
  const destination = new URL("https://origin.siamodesign.com/wp-login.php");
  // Discard public-domain redirect_to and old login actions; use the independent panel.
  destination.searchParams.set("redirect_to", "https://origin.siamodesign.com/wp-admin/");
  return new Response(null, {
    status: 307,
    headers: { ...headers, location: destination.toString() },
  });
}

export const HEAD = GET;

export function POST() {
  return new Response("WordPress requests must use origin.siamodesign.com directly.", {
    status: 410,
    headers,
  });
}
