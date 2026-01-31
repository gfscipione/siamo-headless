import { headers } from "next/headers";
import type { Metadata } from "next";
import ParallaxDemo from "./components/ParallaxDemo";
import { getSiteUrl } from "./lib/siteUrl";

export const revalidate = 60; // revalidate WP fetch every 60s

const HOME_TITLE =
  "Siamo Design - Interior design in the Mayan Riviera, Playa del Carmen, Tulum, Cancun.";
const HOME_DESCRIPTION =
  "We create bespoke interiors in Tulum and Playa del Carmen. At Siamo Design, we design functional, elegant spaces ready to live in. Discover our approach to interior design in the Mayan Riviera!";
const HOME_OG_IMAGE = "https://siamodesign.com/wp-content/uploads/2025/03/SD-150x100.webp";
const HOME_SCHEMA_IMAGE = "https://siamodesign.com/wp-content/uploads/2025/03/SD.webp";

export const metadata: Metadata = {
  title: { absolute: HOME_TITLE },
  description: HOME_DESCRIPTION,
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      es: "/es/",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    url: "/",
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    siteName: "Siamo Design",
    images: [
      {
        url: HOME_OG_IMAGE,
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

const WP_URL = process.env.NEXT_PUBLIC_WP_URL || "https://siamodesign.com";
const WP_PAGE_SLUG = process.env.WP_PAGE_SLUG || ""; // set in .env.local if you know it
const WP_LANG = process.env.WP_LANG || ""; // e.g., "en" or "es" for WPML/Polylang (optional)

function stripTags(html: string) {
  return html.replace(/<[^>]*>/g, "").trim();
}

type WpPage = {
  title?: { rendered?: string };
  yoast_head_json?: { og_url?: string; canonical?: string };
  _embedded?: { ["wp:featuredmedia"]?: Array<{ source_url?: string }> };
};

async function fetchPageBySlug(slug: string, lang?: string) {
  const langParam = lang ? `&lang=${lang}` : "";
  const url = `${WP_URL}/wp-json/wp/v2/pages?slug=${encodeURIComponent(slug)}&_embed${langParam}`;
  const res = await fetch(url, { next: { revalidate } });
  if (!res.ok) {
    console.log("[WP] non-200 for", url, res.status);
    return null;
  }
  const data = await res.json().catch(() => null);
  if (!Array.isArray(data) || data.length === 0) return null;

  const page: WpPage = data[0];
  return {
    title: stripTags(page?.title?.rendered || ""),
    heroUrl: page?._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null,
  };
}

async function getWpHome() {
  // Try env slug first, then the common ones. Also try with and without lang.
  const candidates = [WP_PAGE_SLUG, "home", "inicio"].filter(Boolean);
  for (const slug of candidates) {
    let hit = await fetchPageBySlug(slug, WP_LANG);
    if (!hit && WP_LANG) hit = await fetchPageBySlug(slug); // retry without lang
    if (hit) {
      console.log("[WP] Using page:", slug, "lang:", WP_LANG || "(none)");
      return hit;
    }
  }
  console.log("[WP] No page found via REST. Falling back to local asset.");
  return null;
}

export default async function Home() {
  const wp = await getWpHome();

  const ua = (await headers()).get("user-agent") || "";
  const initialIsMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile/i.test(
    ua
  );

  const hero = wp?.heroUrl || "/assets/img/hero.webp";
  const DEFAULT_TITLE = "Designing your dream home\njust became a reality.";
  const title =
    wp?.title && wp.title.toLowerCase() !== "home" ? wp.title : DEFAULT_TITLE;

  const siteUrl = getSiteUrl();
  const canonical = `${siteUrl}/`;

  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": canonical,
        url: canonical,
        name: HOME_TITLE,
        isPartOf: { "@id": `${canonical}#website` },
        about: { "@id": `${canonical}#organization` },
        primaryImageOfPage: { "@id": `${canonical}#primaryimage` },
        image: { "@id": `${canonical}#primaryimage` },
        thumbnailUrl: HOME_OG_IMAGE,
        description: HOME_DESCRIPTION,
        breadcrumb: { "@id": `${canonical}#breadcrumb` },
        inLanguage: "en",
        potentialAction: [{ "@type": "ReadAction", target: [canonical] }],
      },
      {
        "@type": "ImageObject",
        inLanguage: "en",
        "@id": `${canonical}#primaryimage`,
        url: HOME_SCHEMA_IMAGE,
        contentUrl: HOME_SCHEMA_IMAGE,
        width: 200,
        height: 100,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonical}#breadcrumb`,
        itemListElement: [{ "@type": "ListItem", position: 1, name: "Home" }],
      },
      {
        "@type": "WebSite",
        "@id": `${canonical}#website`,
        url: canonical,
        name: "Siamo Design",
        publisher: { "@id": `${canonical}#organization` },
        potentialAction: [
          {
            "@type": "SearchAction",
            target: { "@type": "EntryPoint", urlTemplate: `${canonical}?s={search_term_string}` },
            "query-input": { "@type": "PropertyValueSpecification", valueRequired: true, valueName: "search_term_string" },
          },
        ],
        inLanguage: "en",
      },
      {
        "@type": "Organization",
        "@id": `${canonical}#organization`,
        name: "Siamo Design",
        url: canonical,
        logo: {
          "@type": "ImageObject",
          inLanguage: "en",
          "@id": `${canonical}#/schema/logo/image/`,
          url: "https://siamodesign.com/wp-content/uploads/2024/03/cropped-9019c03768d3a9dc34a90a32adf82d72.png",
          contentUrl: "https://siamodesign.com/wp-content/uploads/2024/03/cropped-9019c03768d3a9dc34a90a32adf82d72.png",
          width: 499,
          height: 167,
          caption: "Siamo Design",
        },
        image: { "@id": `${canonical}#/schema/logo/image/` },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        className="yoast-schema-graph"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />
      <ParallaxDemo initialIsMobile={initialIsMobile} />
    </>
  );
}
