import type { NextRequest } from "next/server";

export const runtime = "nodejs";

const WP_ORIGIN_URL = process.env.WP_ORIGIN_URL ?? "https://origin.siamodesign.com";

function rewriteAjaxUrls(html: string) {
  return html
    .replaceAll(
      "https://siamodesign.com/wp-admin/admin-ajax.php",
      "/wp-admin/admin-ajax.php",
    )
    .replaceAll(
      "https:\\/\\/siamodesign.com\\/wp-admin\\/admin-ajax.php",
      "\\/wp-admin\\/admin-ajax.php",
    );
}

async function proxyGet(request: NextRequest) {
  const url = new URL(request.url);
  const upstream = new URL(url.pathname + url.search, WP_ORIGIN_URL);

  const upstreamResponse = await fetch(upstream, {
    method: "GET",
    redirect: "manual",
    headers: {
      accept: request.headers.get("accept") ?? "text/html,*/*;q=0.8",
      "accept-language": request.headers.get("accept-language") ?? "",
      "user-agent": request.headers.get("user-agent") ?? "",
      cookie: request.headers.get("cookie") ?? "",
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
  const body = rewriteAjaxUrls(await upstreamResponse.text());

  return new Response(body, {
    status: upstreamResponse.status,
    headers: {
      "content-type": contentType,
      "cache-control": "no-store, max-age=0",
      "x-robots-tag": "noindex, follow",
    },
  });
}

export function GET(request: NextRequest) {
  return proxyGet(request);
}

export function HEAD(request: NextRequest) {
  return proxyGet(request);
}

