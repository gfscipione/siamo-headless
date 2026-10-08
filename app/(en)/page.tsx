import { headers } from "next/headers";
import type { Metadata } from "next";
import ParallaxDemo from "../components/ParallaxDemo";
import { getSiteUrl } from "../lib/siteUrl";

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

export default async function Home() {
  const ua = (await headers()).get("user-agent") || "";
  const initialIsMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile/i.test(
    ua
  );

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
