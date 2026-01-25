import type { NextRequest } from "next/server";

export const runtime = "nodejs";

const WP_ORIGIN_URL = process.env.WP_ORIGIN_URL ?? "https://origin.siamodesign.com";

async function proxyGet(request: NextRequest) {
  const url = new URL(request.url);
  const upstream = new URL("/es/", WP_ORIGIN_URL);

  const upstreamResponse = await fetch(upstream, {
    method: "GET",
    redirect: "manual",
    headers: {
      accept: request.headers.get("accept") ?? "text/html,*/*;q=0.8",
      "accept-language": request.headers.get("accept-language") ?? "",
      "user-agent": request.headers.get("user-agent") ?? "",
      cookie: request.headers.get("cookie") ?? "",
      // Critical: avoid WordPress redirecting to the public domain when the origin host differs.
      host: "siamodesign.com",
      "accept-encoding": "identity",
    },
  });

  const location = upstreamResponse.headers.get("location");
  if (location) {
    const redirectUrl = new URL(location, upstream);
    const originHost = new URL(WP_ORIGIN_URL).host;
    if (
      redirectUrl.host === originHost ||
      redirectUrl.host === "siamodesign.com" ||
      redirectUrl.host === "www.siamodesign.com"
    ) {
      redirectUrl.host = url.host;
      redirectUrl.protocol = url.protocol;
      return Response.redirect(redirectUrl.toString(), upstreamResponse.status);
    }
  }

  const contentType = upstreamResponse.headers.get("content-type") ?? "text/html; charset=UTF-8";
  const cacheControl = upstreamResponse.headers.get("cache-control") ?? "public, max-age=0";
  const body = await upstreamResponse.text();

  return new Response(body, {
    status: upstreamResponse.status,
    headers: {
      "content-type": contentType,
      "cache-control": cacheControl,
    },
  });
}

export function GET(request: NextRequest) {
  return proxyGet(request);
}

export function HEAD(request: NextRequest) {
  return proxyGet(request);
}

