import type { NextRequest } from "next/server";
import { proxyToWordPress } from "../lib/wpProxy";

export const runtime = "nodejs";

export function GET(request: NextRequest) {
  const url = new URL(request.url);
  return proxyToWordPress(request, {
    upstreamPath: `/wp-login.php${url.search}`,
    hostHeader: url.host,
    rewriteBodyOrigins: true,
    responseHeaders: {
      "cache-control": "no-store, max-age=0",
      "x-robots-tag": "noindex, nofollow",
    },
  });
}

export function HEAD(request: NextRequest) {
  const url = new URL(request.url);
  return proxyToWordPress(request, {
    upstreamPath: `/wp-login.php${url.search}`,
    hostHeader: url.host,
    rewriteBodyOrigins: false,
    responseHeaders: {
      "cache-control": "no-store, max-age=0",
      "x-robots-tag": "noindex, nofollow",
    },
  });
}

export function POST(request: NextRequest) {
  const url = new URL(request.url);
  return proxyToWordPress(request, {
    upstreamPath: `/wp-login.php${url.search}`,
    hostHeader: url.host,
    rewriteBodyOrigins: true,
    responseHeaders: {
      "cache-control": "no-store, max-age=0",
      "x-robots-tag": "noindex, nofollow",
    },
  });
}

