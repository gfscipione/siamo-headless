import type { Metadata } from "next";

const TITLE =
  "Siamo Design – Interior design in the Mayan Riviera, Playa del Carmen, Tulum, Cancun.";
const DESCRIPTION =
  "We create bespoke interiors in Tulum and Playa del Carmen. At Siamo Design, we design functional, elegant spaces ready to live in. Discover our approach to interior design in the Mayan Riviera!";
const HERO_IMAGE =
  "https://siamodesign.com/wp-content/uploads/2025/03/SD.webp"; // ideal: 1200×630

export function getHomeSeo(baseUrl?: string): Metadata {
  // normaliza base y evita barras dobles
  const base = (baseUrl ?? "").replace(/\/+$/, "");
  const canonical = base ? `${base}/` : undefined;

  // arma URL absoluta de la imagen OG si fuera relativa
  const imageUrl = HERO_IMAGE.startsWith("http")
    ? HERO_IMAGE
    : base
    ? `${base}${HERO_IMAGE}`
    : HERO_IMAGE;

  return {
    title: TITLE,
    description: DESCRIPTION,
    alternates: { canonical },
    openGraph: {
      title: TITLE,
      description: DESCRIPTION,
      url: canonical,
      siteName: "Siamo Design",
      type: "website",
      locale: "es_MX", // usa "es_ES" si prefieres España
      images: [{ url: imageUrl, width: 1200, height: 630, type: "image/webp" }],
    },
    twitter: {
      card: "summary_large_image",
      title: TITLE,
      description: DESCRIPTION,
      images: [imageUrl],
    },
  };
}

export const homeSeo = { title: TITLE, description: DESCRIPTION, image: HERO_IMAGE };