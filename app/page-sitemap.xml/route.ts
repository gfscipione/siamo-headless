export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export function GET() {
  return new Response("Gone", {
    status: 410,
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "no-store, max-age=0",
      "x-robots-tag": "noindex, follow",
    },
  });
}

