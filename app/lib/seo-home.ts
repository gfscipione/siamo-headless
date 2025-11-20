import type { Metadata } from "next";

const TITLE = "Siamo Design | Interior Design in Riviera Maya";
const DESCRIPTION =
  "Designing your dream space just became a reality. Remote and on-site interior design, styling, and build services across the Riviera Maya.";
const HERO_IMAGE = "/assets/img/hero.webp";

export function getHomeSeo(baseUrl?: string): Metadata {
  // Normaliza baseUrl y evita barras dobles
  const normalizedBase = (baseUrl ?? "").replace(/\/+$/, "");
  const canonical = normalizedBase ? `${normalizedBase}/` : undefined;
  const imageUrl =
    HERO_IMAGE.startsWith("http") || !normalizedBase
      ? HERO_IMAGE
      : new URL(HERO_IMAGE, normalizedBase).toString();

  return {
    title: TITLE,
    description: DESCRIPTION,
    alternates: canonical ? { canonical } : undefined,
    openGraph: {
      title: TITLE,
      description: DESCRIPTION,
      url: canonical,
      images: [{ url: imageUrl, width: 1200, height: 630, type: "image/webp" }],
      type: "website",
      locale: "es_ES",
    },
    twitter: {
      card: "summary_large_image",
      title: TITLE,
      description: DESCRIPTION,
      images: [imageUrl],
    },
  };
}

export const homeSeo = {
  title: TITLE,
  description: DESCRIPTION,
  image: HERO_IMAGE,
};
