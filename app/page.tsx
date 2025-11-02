import ParallaxDemo from "./components/ParallaxDemo";

export const revalidate = 60; // revalidate WP fetch every 60s

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

  const hero = wp?.heroUrl || "/assets/img/hero.webp";
  const DEFAULT_TITLE = "Designing your dream home\njust became a reality.";
  const title =
    wp?.title && wp.title.toLowerCase() !== "home" ? wp.title : DEFAULT_TITLE;

  return <ParallaxDemo />;
}
