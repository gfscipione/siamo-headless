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

const paths = [
  "/",
  "/get-to-know-us/",
  "/services/",
  "/es/servicios/",
  "/services/virtual-design/",
  "/services/full-service/",
  "/es/servicios/diseno-llave-en-mano/",
  "/es/servicios/diseno-virtual/",
  "/portfolio/",
  "/es/portafolio/",
  "/portfolio/serene-jungle/",
  "/portfolio/mayan-sanctuary/",
  "/portfolio/timeless-nature/",
  "/portfolio/soul-in-concrete/",
  "/es/portafolio/serene-jungle/",
  "/portfolio/tuluminati-house/",
  "/es/portafolio/soul-in-concrete/",
  "/es/portafolio/mayan-sanctuary/",
  "/es/portafolio/naturaleza-atemporal/",
  "/es/portafolio/tuluminati-house/",
  "/portfolio/mid-century-waves/",
  "/portfolio/roots-tulum/",
  "/portfolio/contemporary-retreat/",
];

const lastmod = new Date().toISOString();

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export function GET(_request: NextRequest) {
  const siteUrl = getSiteUrl();

  const body =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    paths
      .map((path) => {
        const loc = `${siteUrl}${path}`;
        return `  <url>\n    <loc>${escapeXml(loc)}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>\n`;
      })
      .join("") +
    `</urlset>\n`;

  return new Response(body, {
    headers: {
      "content-type": "application/xml; charset=utf-8",
      "cache-control": "no-store, max-age=0",
    },
  });
}
