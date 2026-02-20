import type { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants";

const wpOrigin = (process.env.WP_ORIGIN_URL ?? "https://origin.siamodesign.com").replace(/\/+$/, "");
const wpQuestionnaireHosts = ["siamodesign.com", "www.siamodesign.com"];

const nextConfig = (phase: string): NextConfig => {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "";
  const isLocal =
    siteUrl.includes("localhost") ||
    siteUrl.includes("127.0.0.1") ||
    siteUrl.includes("0.0.0.0");
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  const useWpQuestionnaire =
    !isDev &&
    process.env.VERCEL_ENV === "production" &&
    process.env.NODE_ENV === "production" &&
    !isLocal;

  return {
  // NOTE: App Router no longer supports `i18n` in next.config.*.
  // We handle locales via routes (e.g. `/es/...`) and optional middleware.

  // Match WordPress style URLs (avoid duplicates without trailing slash).
  trailingSlash: true,

  async redirects() {
    return [
      // Canonicalize www → root.
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.siamodesign.com" }],
        destination: "https://siamodesign.com/:path*",
        permanent: true,
      },
      // WP blog is empty/legacy: keep traffic safe.
      { source: "/blog/:path*", destination: "/", permanent: true },

      // Common legacy mismatch: some systems use `/es/portfolio/*` but live site uses `/es/portafolio/*`.
      { source: "/es/portfolio", destination: "/es/portafolio/", permanent: true },
      { source: "/es/portfolio/", destination: "/es/portafolio/", permanent: true },
      { source: "/es/portfolio/:path*", destination: "/es/portafolio/:path*", permanent: true },

      // Legacy WP Spanish paths without `/es/` prefix (seen in GSC): keep backlinks alive.
      { source: "/portafolio", destination: "/es/portafolio/", permanent: true },
      { source: "/portafolio/", destination: "/es/portafolio/", permanent: true },
      { source: "/portafolio/:path*", destination: "/es/portafolio/:path*", permanent: true },

      // Legacy WPML-style English folder (seen in GSC).
      { source: "/english", destination: "/", permanent: true },
      { source: "/english/", destination: "/", permanent: true },
      { source: "/english/services", destination: "/services/", permanent: true },
      { source: "/english/services/", destination: "/services/", permanent: true },
      { source: "/english/portafolio", destination: "/portfolio/", permanent: true },
      { source: "/english/portafolio/", destination: "/portfolio/", permanent: true },
      { source: "/english/portafolio/:path*", destination: "/portfolio/:path*", permanent: true },

      // `/en/` prefix is not used on this site; send old links to EN homepage.
      { source: "/en", destination: "/", permanent: true },
      { source: "/en/", destination: "/", permanent: true },

      // Legacy author archive from WP.
      { source: "/author/stephania", destination: "/get-to-know-us/", permanent: true },
      { source: "/author/stephania/", destination: "/get-to-know-us/", permanent: true },

      // Yoast sitemap legacy service slugs (EN).
      {
        source: "/services/virtual-design-interior-design/:path*",
        destination: "/services/virtual-design/",
        permanent: true,
      },
      {
        source: "/services/project-design-and-execution-interior-design-services/:path*",
        destination: "/services/full-service/",
        permanent: true,
      },
      {
        source: "/es/servicios/full-service/:path*",
        destination: "/es/servicios/diseno-llave-en-mano/:path*",
        permanent: true,
      },
      {
        source: "/es/servicios/virtual-design/:path*",
        destination: "/es/servicios/diseno-virtual/:path*",
        permanent: true,
      },

      // Old portfolio project removed from Next: keep backlinks alive.
      { source: "/portfolio/vintage-tulum/:path*", destination: "/portfolio/", permanent: true },
    ];
  },

  async rewrites() {
    return {
      // Run these first so WP-generated asset URLs like `/es/wp-content/...css` don't 404 on Vercel.
      beforeFiles: [
        { source: "/es/wp-content/:path*", destination: `${wpOrigin}/wp-content/:path*` },
        { source: "/es/wp-includes/:path*", destination: `${wpOrigin}/wp-includes/:path*` },
        { source: "/es/wp-admin/:path*", destination: `${wpOrigin}/wp-admin/:path*` },
        { source: "/es/wp-json/:path*", destination: `${wpOrigin}/wp-json/:path*` },
      ],
      afterFiles: [
        // Yoast sitemap (WP origin) during hybrid.
        { source: "/sitemap_index.xml", destination: `${wpOrigin}/sitemap_index.xml` },
        { source: "/:path*-sitemap.xml", destination: `${wpOrigin}/:path*-sitemap.xml` },

        // WPForms questionnaire (WP origin).
        ...(useWpQuestionnaire
          ? [
              ...wpQuestionnaireHosts.map((host) => ({
                source: "/questionnaire/:path*",
                has: [{ type: "host" as const, value: host }],
                destination: `${wpOrigin}/questionnaire/:path*`,
              })),
              ...wpQuestionnaireHosts.map((host) => ({
                source: "/es/cuestionario/:path*",
                has: [{ type: "host" as const, value: host }],
                destination: `${wpOrigin}/es/cuestionario/:path*`,
              })),
            ]
          : []),

        // WPForms thank-you pages (currently served by WP).
        // NOTE: These are inverted on the live site: EN → /gracias/ and ES → /es/thank-you/.
        ...(useWpQuestionnaire
          ? [
              ...wpQuestionnaireHosts.map((host) => ({
                source: "/gracias/:path*",
                has: [{ type: "host" as const, value: host }],
                destination: `${wpOrigin}/gracias/:path*`,
              })),
              ...wpQuestionnaireHosts.map((host) => ({
                source: "/es/thank-you/:path*",
                has: [{ type: "host" as const, value: host }],
                destination: `${wpOrigin}/es/thank-you/:path*`,
              })),
            ]
          : []),

        // Minimal WP endpoints/assets required for the questionnaire + uploads.
        { source: "/wp-content/:path*", destination: `${wpOrigin}/wp-content/:path*` },
        { source: "/wp-includes/:path*", destination: `${wpOrigin}/wp-includes/:path*` },
        { source: "/wp-json/:path*", destination: `${wpOrigin}/wp-json/:path*` },
        { source: "/wp-admin/admin-ajax.php", destination: `${wpOrigin}/wp-admin/admin-ajax.php` },
      ],
      fallback: [
        // Spanish fallback: serve any non-migrated `/es/*` page from WP (origin) without leaking the origin host.
        // WordPress issues absolute redirects on trailing-slash canonicalization, so always proxy with a trailing slash.
        { source: "/es", destination: `${wpOrigin}/es/` },
        { source: "/es/", destination: `${wpOrigin}/es/` },
        { source: "/es/:path*/", destination: `${wpOrigin}/es/:path*/` },
      ],
    };
  },

  async headers() {
    const noStore = [
      { key: "Cache-Control", value: "no-store, max-age=0" },
      { key: "CDN-Cache-Control", value: "no-store" },
      { key: "Vercel-CDN-Cache-Control", value: "no-store" },
      { key: "Pragma", value: "no-cache" },
      { key: "Expires", value: "0" },
    ];

    return [
      // Keep questionnaire pages out of the index (still allow link discovery).
      {
        source: "/questionnaire/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, follow" }, ...noStore],
      },
      {
        source: "/es/cuestionario/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, follow" }, ...noStore],
      },

      // Thank-you pages are transactional; don't cache and don't index.
      {
        source: "/gracias/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, follow" }, ...noStore],
      },
      {
        source: "/es/thank-you/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, follow" }, ...noStore],
      },

      // Avoid caching for WPForms endpoints and WP REST responses.
      { source: "/wp-admin/admin-ajax.php", headers: noStore },
      { source: "/wp-json/:path*", headers: noStore },
      { source: "/es/wp-admin/admin-ajax.php", headers: noStore },
      { source: "/es/wp-json/:path*", headers: noStore },
    ];
  },
  };
};

export default nextConfig;
