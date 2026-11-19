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
  "/es/",
  "/es/guias/planificar-diseno-equipamiento-vivienda/",
  "/guides/planning-home-design-and-furnishing/",
  "/guides/interior-design-during-home-construction/",
  "/guides/choosing-an-interior-designer/",
  "/es/guias/elegir-estudio-interiorismo/",
  "/guides/custom-vs-ready-made-furniture/",
  "/es/guias/muebles-a-medida-o-de-catalogo/",
  "/es/guias/diseno-interiores-casa-en-construccion/",
  "/get-to-know-us/",
  "/es/conocenos/",
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
  "/es/portafolio/mid-century-waves/",
  "/es/portafolio/raices-tulum/",
  "/es/portafolio/retiro-contemporaneo/",
  "/portfolio/mid-century-waves/",
  "/portfolio/roots-tulum/",
  "/portfolio/contemporary-retreat/",
];

// Only the guide pair has a verified revision date in this change.
const guideRevisionDate: Record<string, string> = {
  "/es/guias/planificar-diseno-equipamiento-vivienda/": "2026-11-19",
  "/guides/planning-home-design-and-furnishing/": "2026-11-19",
};

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
        const lastmod = guideRevisionDate[path];
        return `  <url>\n    <loc>${escapeXml(loc)}</loc>\n${lastmod ? `    <lastmod>${lastmod}</lastmod>\n` : ""}  </url>\n`;
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
