import type { NextRequest } from "next/server";
import https from "node:https";

export const runtime = "nodejs";

const WP_ORIGIN_URL = (process.env.WP_ORIGIN_URL ?? "https://origin.siamodesign.com").replace(
  /\/+$/,
  "",
);

type ProxyOptions = {
  upstreamPath: string;
  /**
   * If provided, overrides the Host header sent to WordPress. This is critical
   * to prevent origin leaks in canonical redirects and redirect_to params.
   */
  hostHeader?: string;
  /**
   * Whether to attempt a safe textual rewrite of origin hostnames in HTML/JSON
   * responses (best-effort to prevent origin leaks).
   */
  rewriteBodyOrigins?: boolean;
  /**
   * If set, overrides caching/robots headers on the response (admin/login).
   */
  responseHeaders?: Record<string, string>;
};

function isHopByHopHeader(name: string) {
  return new Set([
    "connection",
    "keep-alive",
    "proxy-authenticate",
    "proxy-authorization",
    "te",
    "trailer",
    "transfer-encoding",
    "upgrade",
  ]).has(name.toLowerCase());
}

function shouldRewriteBody(contentType: string) {
  const ct = contentType.toLowerCase();
  return ct.includes("text/html") || ct.includes("application/json") || ct.includes("text/plain");
}

function rewriteOriginHostnames(body: string, publicOrigin: URL, origin: URL) {
  const publicHost = publicOrigin.host;
  const publicProtocol = publicOrigin.protocol;

  const originHost = origin.host;
  const originOrigin = `${origin.protocol}//${originHost}`;
  const publicOriginStr = `${publicProtocol}//${publicHost}`;

  return body
    .replaceAll(originOrigin, publicOriginStr)
    .replaceAll(originHost, publicHost);
}

export async function proxyToWordPress(request: NextRequest, options: ProxyOptions) {
  const url = new URL(request.url);
  const upstreamOrigin = new URL(WP_ORIGIN_URL);
  const upstreamUrl = new URL(options.upstreamPath, upstreamOrigin);

  const method = request.method.toUpperCase();
  const isBodyMethod = !["GET", "HEAD"].includes(method);
  const requestBody = isBodyMethod ? Buffer.from(await request.arrayBuffer()) : undefined;

  return await new Promise<Response>((resolve, reject) => {
    const upstreamHeaders: Record<string, string> = {
      accept: request.headers.get("accept") ?? "text/html,*/*;q=0.8",
      "accept-language": request.headers.get("accept-language") ?? "",
      "user-agent": request.headers.get("user-agent") ?? "",
      cookie: request.headers.get("cookie") ?? "",
      referer: request.headers.get("referer") ?? "",
      origin: request.headers.get("origin") ?? "",
      "content-type": request.headers.get("content-type") ?? "",
      "accept-encoding": "identity",
      Host: options.hostHeader ?? url.host,
    };

    if (requestBody) {
      upstreamHeaders["content-length"] = String(requestBody.byteLength);
    }

    for (const [k, v] of Object.entries(upstreamHeaders)) {
      if (v === "") delete upstreamHeaders[k];
    }

    const req = https.request(
      {
        protocol: upstreamOrigin.protocol,
        hostname: upstreamOrigin.hostname,
        port: upstreamOrigin.port ? Number(upstreamOrigin.port) : 443,
        path: upstreamUrl.pathname + upstreamUrl.search,
        method,
        servername: upstreamOrigin.hostname,
        headers: upstreamHeaders,
      },
      (res) => {
        const status = res.statusCode ?? 502;
        const headers = new Headers();

        for (const [key, value] of Object.entries(res.headers)) {
          if (!key || isHopByHopHeader(key)) continue;
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
          if (
            redirectUrl.host === upstreamOrigin.host ||
            redirectUrl.host === "siamodesign.com" ||
            redirectUrl.host === "www.siamodesign.com"
          ) {
            redirectUrl.host = url.host;
            redirectUrl.protocol = url.protocol;
            headers.set("location", redirectUrl.toString());
          }
        }

        const contentType = headers.get("content-type") ?? "";
        const wantRewrite =
          options.rewriteBodyOrigins === true && shouldRewriteBody(contentType) && method !== "HEAD";

        if (method === "HEAD") {
          res.resume();
          const mergedHeaders = new Headers(headers);
          if (options.responseHeaders) {
            for (const [k, v] of Object.entries(options.responseHeaders)) mergedHeaders.set(k, v);
          }
          resolve(new Response(null, { status, headers: mergedHeaders }));
          return;
        }

        const chunks: Buffer[] = [];
        res.on("data", (chunk) => chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk)));
        res.on("end", () => {
          const raw = Buffer.concat(chunks);
          let body: BodyInit | null = raw.length ? new Uint8Array(raw) : null;

          const mergedHeaders = new Headers(headers);

          if (wantRewrite) {
            const decoded = raw.toString("utf8");
            body = rewriteOriginHostnames(decoded, url, upstreamOrigin);
            // Body size changed; drop upstream content-length to avoid mismatches.
            mergedHeaders.delete("content-length");
          }

          if (options.responseHeaders) {
            for (const [k, v] of Object.entries(options.responseHeaders)) mergedHeaders.set(k, v);
          }

          resolve(
            new Response(body, {
              status,
              headers: mergedHeaders,
            }),
          );
        });
      },
    );

    req.on("error", reject);
    if (requestBody) req.write(requestBody);
    req.end();
  });
}
