import type { NextConfig } from "next";

const wpOrigin = (process.env.WP_ORIGIN_URL ?? "https://origin.siamodesign.com").replace(/\/+$/, "");

const nextConfig: NextConfig = {
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
      { source: "/english/portafolio", destination: "/portfolio/", permanent: true },
      { source: "/english/portafolio/", destination: "/portfolio/", permanent: true },
      { source: "/english/portafolio/:path*", destination: "/portfolio/:path*", permanent: true },

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
        { source: "/questionnaire/:path*", destination: `${wpOrigin}/questionnaire/:path*` },
        { source: "/es/cuestionario/:path*", destination: `${wpOrigin}/es/cuestionario/:path*` },

        // WPForms thank-you pages (currently served by WP).
        // NOTE: These are inverted on the live site: EN → /gracias/ and ES → /es/thank-you/.
        { source: "/gracias/:path*", destination: `${wpOrigin}/gracias/:path*` },
        { source: "/es/thank-you/:path*", destination: `${wpOrigin}/es/thank-you/:path*` },

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

export default nextConfig;
