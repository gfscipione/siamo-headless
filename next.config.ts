import type { NextConfig } from "next";

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

      // Preserve the former WordPress Tuluminati project address.
      { source: "/es/tuluminati-house", destination: "/es/portafolio/tuluminati-house/", permanent: true },
      { source: "/es/tuluminati-house/", destination: "/es/portafolio/tuluminati-house/", permanent: true },

      // Resolve translated project slugs before the generic portfolio aliases.
      { source: "/portafolio/olas-mid-century", destination: "/es/portafolio/mid-century-waves/", permanent: true },
      { source: "/portafolio/olas-mid-century/", destination: "/es/portafolio/mid-century-waves/", permanent: true },
      { source: "/es/portafolio/olas-mid-century", destination: "/es/portafolio/mid-century-waves/", permanent: true },
      { source: "/es/portafolio/olas-mid-century/", destination: "/es/portafolio/mid-century-waves/", permanent: true },
      { source: "/es/portafolio/timeless-nature", destination: "/es/portafolio/naturaleza-atemporal/", permanent: true },
      { source: "/es/portafolio/timeless-nature/", destination: "/es/portafolio/naturaleza-atemporal/", permanent: true },
      { source: "/es/portfolio/timeless-nature", destination: "/es/portafolio/naturaleza-atemporal/", permanent: true },
      { source: "/es/portfolio/timeless-nature/", destination: "/es/portafolio/naturaleza-atemporal/", permanent: true },
      { source: "/es/portfolio/roots-tulum", destination: "/es/portafolio/raices-tulum/", permanent: true },
      { source: "/es/portfolio/roots-tulum/", destination: "/es/portafolio/raices-tulum/", permanent: true },
      { source: "/es/portafolio/roots-tulum", destination: "/es/portafolio/raices-tulum/", permanent: true },
      { source: "/es/portafolio/roots-tulum/", destination: "/es/portafolio/raices-tulum/", permanent: true },
      { source: "/es/portfolio/contemporary-retreat", destination: "/es/portafolio/retiro-contemporaneo/", permanent: true },
      { source: "/es/portfolio/contemporary-retreat/", destination: "/es/portafolio/retiro-contemporaneo/", permanent: true },
      { source: "/es/portafolio/contemporary-retreat", destination: "/es/portafolio/retiro-contemporaneo/", permanent: true },
      { source: "/es/portafolio/contemporary-retreat/", destination: "/es/portafolio/retiro-contemporaneo/", permanent: true },

      // Resolve legacy unprefixed project aliases directly to the confirmed ES pages.
      { source: "/portafolio/timeless-nature", destination: "/es/portafolio/naturaleza-atemporal/", permanent: true },
      { source: "/portafolio/timeless-nature/", destination: "/es/portafolio/naturaleza-atemporal/", permanent: true },
      { source: "/portafolio/roots-tulum", destination: "/es/portafolio/raices-tulum/", permanent: true },
      { source: "/portafolio/roots-tulum/", destination: "/es/portafolio/raices-tulum/", permanent: true },
      { source: "/portafolio/contemporary-retreat", destination: "/es/portafolio/retiro-contemporaneo/", permanent: true },
      { source: "/portafolio/contemporary-retreat/", destination: "/es/portafolio/retiro-contemporaneo/", permanent: true },

      // Common legacy mismatch: some systems use `/es/portfolio/*` but live site uses `/es/portafolio/*`.
      { source: "/es/portfolio", destination: "/es/portafolio/", permanent: true },
      { source: "/es/portfolio/", destination: "/es/portafolio/", permanent: true },
      { source: "/es/portfolio/:path*", destination: "/es/portafolio/:path*/", permanent: true },

      // Legacy WP Spanish paths without `/es/` prefix (seen in GSC): keep backlinks alive.
      { source: "/conocenos", destination: "/es/conocenos/", permanent: true },
      { source: "/conocenos/", destination: "/es/conocenos/", permanent: true },
      { source: "/servicios", destination: "/es/servicios/", permanent: true },
      { source: "/servicios/", destination: "/es/servicios/", permanent: true },
      { source: "/portafolio", destination: "/es/portafolio/", permanent: true },
      { source: "/portafolio/", destination: "/es/portafolio/", permanent: true },
      { source: "/portafolio/:path*", destination: "/es/portafolio/:path*/", permanent: true },

      // Legacy WPML-style English folder (seen in GSC).
      { source: "/english", destination: "/", permanent: true },
      { source: "/english/", destination: "/", permanent: true },
      { source: "/english/services", destination: "/services/", permanent: true },
      { source: "/english/services/", destination: "/services/", permanent: true },
      { source: "/english/portafolio", destination: "/portfolio/", permanent: true },
      { source: "/english/portafolio/", destination: "/portfolio/", permanent: true },
      { source: "/english/portafolio/:path*", destination: "/portfolio/:path*/", permanent: true },

      // `/en/` prefix is not used on this site; send old links to EN homepage.
      { source: "/en", destination: "/", permanent: true },
      { source: "/en/", destination: "/", permanent: true },

      // Legacy author archive from WP.
      { source: "/author/stephania", destination: "/get-to-know-us/", permanent: true },
      { source: "/author/stephania/", destination: "/get-to-know-us/", permanent: true },

      // Legacy WP thank-you path should resolve to the new ES thank-you page.
      { source: "/es/thank-you", destination: "/es/gracias/", permanent: true },
      { source: "/es/thank-you/", destination: "/es/gracias/", permanent: true },

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

    ];
  },
};

export default nextConfig;
