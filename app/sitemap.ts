import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/+$/, "");
  const now = new Date();

  const paths = [
    "/",
    "/get-to-know-us/",
    "/services/",
    "/services/virtual-design/",
    "/services/full-service/",
    "/portfolio/",
    "/portfolio/serene-jungle/",
    "/portfolio/mayan-sanctuary/",
    "/portfolio/timeless-nature/",
    "/portfolio/soul-in-concrete/",
    "/portfolio/tuluminati-house/",
    "/portfolio/mid-century-waves/",
    "/portfolio/roots-tulum/",
    "/portfolio/contemporary-retreat/",
  ];

  return paths.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
  }));
}

