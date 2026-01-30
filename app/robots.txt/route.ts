import type { NextRequest } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function getSiteUrl() {
  const deployEnv = (process.env.VERCEL_ENV ?? process.env.DEPLOY_ENV ?? "development").toLowerCase();
  const isProductionDeploy = deployEnv === "production";
  return (
    process.env.NEXT_PUBLIC_SITE_URL ??
    (isProductionDeploy
      ? "https://siamodesign.com"
      : process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : "http://localhost:3000")
  ).replace(/\/+$/, "");
}

export function GET(_request: NextRequest) {
  const deployEnv = (process.env.VERCEL_ENV ?? process.env.DEPLOY_ENV ?? "development").toLowerCase();
  const isProductionDeploy = deployEnv === "production";

  const lines = isProductionDeploy
    ? [
        "User-Agent: *",
        "Allow: /",
        "",
        `Sitemap: ${getSiteUrl()}/sitemap.xml`,
        `Sitemap: ${getSiteUrl()}/sitemap_index.xml`,
        "",
      ]
    : ["User-Agent: *", "Disallow: /", ""];

  return new Response(lines.join("\n"), {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "no-store, max-age=0",
    },
  });
}
