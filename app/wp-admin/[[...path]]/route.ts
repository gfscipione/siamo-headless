import type { NextRequest } from "next/server";

const headers = {
  "cache-control": "no-store, max-age=0",
  "x-robots-tag": "noindex, nofollow",
};

// Existing bookmarks may open origin; Next no longer relays WP requests or credentials.
export function GET(request: NextRequest) {
  const incoming = new URL(request.url);
  if (incoming.pathname.replace(/\/$/, "") === "/wp-admin/admin-ajax.php") {
    return new Response("Gone", { status: 410, headers });
  }
  const destination = new URL(incoming.pathname, "https://origin.siamodesign.com");
  destination.search = incoming.search;
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
