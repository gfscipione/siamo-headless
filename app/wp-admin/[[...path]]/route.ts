import type { NextRequest } from "next/server";
import { proxyToWordPress } from "../../lib/wpProxy";

export const runtime = "nodejs";

function getUpstreamPath(request: NextRequest) {
  const url = new URL(request.url);
  return `${url.pathname}${url.search}`;
}

const adminResponseHeaders = {
  "cache-control": "no-store, max-age=0",
  "x-robots-tag": "noindex, nofollow",
};

export function GET(request: NextRequest) {
  const url = new URL(request.url);
  return proxyToWordPress(request, {
    upstreamPath: getUpstreamPath(request),
    hostHeader: url.host,
    rewriteBodyOrigins: true,
    responseHeaders: adminResponseHeaders,
  });
}

export function HEAD(request: NextRequest) {
  const url = new URL(request.url);
  return proxyToWordPress(request, {
    upstreamPath: getUpstreamPath(request),
    hostHeader: url.host,
    rewriteBodyOrigins: false,
    responseHeaders: adminResponseHeaders,
  });
}

export function POST(request: NextRequest) {
  const url = new URL(request.url);
  return proxyToWordPress(request, {
    upstreamPath: getUpstreamPath(request),
    hostHeader: url.host,
    rewriteBodyOrigins: true,
    responseHeaders: adminResponseHeaders,
  });
}

