import type { NextRequest } from "next/server";
import https from "node:https";

export const runtime = "nodejs";

const WP_ORIGIN_URL = process.env.WP_ORIGIN_URL ?? "https://origin.siamodesign.com";

function proxyRequest(request: NextRequest) {
  const url = new URL(request.url);
  const upstreamOrigin = new URL(WP_ORIGIN_URL);
  const upstreamPath = `/es/${url.search}`;

  return new Promise<Response>((resolve, reject) => {
    const req = https.request(
      {
        protocol: upstreamOrigin.protocol,
        hostname: upstreamOrigin.hostname,
        port: upstreamOrigin.port ? Number(upstreamOrigin.port) : 443,
        path: upstreamPath,
        method: request.method,
        servername: upstreamOrigin.hostname,
        headers: {
          Accept: request.headers.get("accept") ?? "text/html,*/*;q=0.8",
          "Accept-Language": request.headers.get("accept-language") ?? "",
          "User-Agent": request.headers.get("user-agent") ?? "",
          Cookie: request.headers.get("cookie") ?? "",
          "Accept-Encoding": "identity",
          // Critical: WordPress decides canonical redirects based on Host.
          Host: "siamodesign.com",
        },
      },
      (res) => {
        const status = res.statusCode ?? 502;
        const headers = new Headers();

        const hopByHop = new Set([
          "connection",
          "keep-alive",
          "proxy-authenticate",
          "proxy-authorization",
          "te",
          "trailer",
          "transfer-encoding",
          "upgrade",
        ]);

        for (const [key, value] of Object.entries(res.headers)) {
          if (!key || hopByHop.has(key.toLowerCase())) continue;
          if (value === undefined) continue;
          if (Array.isArray(value)) {
            for (const v of value) headers.append(key, v);
          } else {
            headers.set(key, value);
          }
        }

        const location = headers.get("location");
        if (location) {
          const redirectUrl = new URL(location, upstreamOrigin);
          const originHost = upstreamOrigin.host;
          if (
            redirectUrl.host === originHost ||
            redirectUrl.host === "siamodesign.com" ||
            redirectUrl.host === "www.siamodesign.com"
          ) {
            redirectUrl.host = url.host;
            redirectUrl.protocol = url.protocol;
            headers.set("location", redirectUrl.toString());
          }
        }

        if (request.method === "HEAD") {
          res.resume();
          resolve(new Response(null, { status, headers }));
          return;
        }

        const chunks: Buffer[] = [];
        res.on("data", (chunk) => chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk)));
        res.on("end", () => {
          resolve(new Response(Buffer.concat(chunks), { status, headers }));
        });
      },
    );

    req.on("error", reject);
    req.end();
  });
}

export function GET(request: NextRequest) {
  return proxyRequest(request);
}

export function HEAD(request: NextRequest) {
  return proxyRequest(request);
}
