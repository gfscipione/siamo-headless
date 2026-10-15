import ProjectPage from "../components/ProjectPage";
import type { Metadata } from "next";
import { getSiteUrl } from "../../../lib/siteUrl";

const canonicalPath = "/portfolio/contemporary-retreat/";
const TITLE = "Contemporary Retreat: Interior Design in Cancún | Siamo Design";
const DESCRIPTION =
  "Explore Contemporary Retreat, a 90 m² apartment in Puerto Cancún with residential interiors, refined materials and a warm, neutral palette.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: {
    canonical: canonicalPath,
    languages: {
      en: canonicalPath,
      es: "/es/portafolio/retiro-contemporaneo/",
      "x-default": canonicalPath,
    },
  },
  openGraph: {
    type: "article",
    locale: "en_US",
    title: TITLE,
    description: DESCRIPTION,
    url: canonicalPath,
    images: [
      {
        url: "https://siamodesign.com/wp-content/uploads/2025/02/1-1-4.png",
        width: 594,
        height: 420,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["https://siamodesign.com/wp-content/uploads/2025/02/1-1-4.png"],
  },
};

export default function ContemporaryRetreatPage() {
  const siteUrl = getSiteUrl();
  const canonicalUrl = `${siteUrl}${canonicalPath}`;

  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": canonicalUrl,
        url: canonicalUrl,
        name: TITLE,
        description: DESCRIPTION,
        isPartOf: { "@id": `${siteUrl}/#website` },
        primaryImageOfPage: { "@id": `${canonicalUrl}#primaryimage` },
        image: { "@id": `${canonicalUrl}#primaryimage` },
        thumbnailUrl: "https://siamodesign.com/wp-content/uploads/2025/02/1-1-4.png",
        datePublished: "2025-02-20T05:02:47+00:00",
        dateModified: "2026-10-15T19:13:51Z",
        breadcrumb: { "@id": `${canonicalUrl}#breadcrumb` },
        inLanguage: "en",
        potentialAction: [
          {
            "@type": "ReadAction",
            target: [canonicalUrl],
          },
        ],
      },
      {
        "@type": "ImageObject",
        inLanguage: "en",
        "@id": `${canonicalUrl}#primaryimage`,
        url: "https://siamodesign.com/wp-content/uploads/2025/02/1-1-4.png",
        contentUrl: "https://siamodesign.com/wp-content/uploads/2025/02/1-1-4.png",
        width: 594,
        height: 420,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
          { "@type": "ListItem", position: 2, name: "Portfolio", item: `${siteUrl}/portfolio/` },
          { "@type": "ListItem", position: 3, name: "Contemporary Retreat" },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: `${siteUrl}/`,
        name: "Siamo Design",
        description: "",
        publisher: { "@id": `${siteUrl}/#organization` },
        potentialAction: [
          {
            "@type": "SearchAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate: `${siteUrl}/?s={search_term_string}`,
            },
            "query-input": {
              "@type": "PropertyValueSpecification",
              valueRequired: true,
              valueName: "search_term_string",
            },
          },
        ],
        inLanguage: "en",
      },
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "Siamo Design",
        url: `${siteUrl}/`,
        logo: {
          "@type": "ImageObject",
          inLanguage: "en",
          "@id": `${siteUrl}/#/schema/logo/image/`,
          url: "https://siamodesign.com/wp-content/uploads/2024/03/cropped-9019c03768d3a9dc34a90a32adf82d72.png",
          contentUrl:
            "https://siamodesign.com/wp-content/uploads/2024/03/cropped-9019c03768d3a9dc34a90a32adf82d72.png",
          width: 499,
          height: 167,
          caption: "Siamo Design",
        },
        image: { "@id": `${siteUrl}/#/schema/logo/image/` },
      },
    ],
  };

  const styleVars = {
    ["--nav-col-gap" as any]: "0px",
    ["--nav-inner-maxw" as any]: "1700px",
    ["--nav-item-gap" as any]: "44px",
    ["--nav-title-fs" as any]: "14px",
    ["--nav-title-fs-m" as any]: "12px",
    ["--nav-bar-h-desktop" as any]: "50px",
    ["--nav-bar-h-mobile" as any]: "40px",
    ["--brand-fs" as any]: "22px",
    ["--brand-fs-m" as any]: "14px",
    ["--nav-link-weight" as any]: "400",
    ["--wwd-title-w" as any]: "400",
    ["--nav-cta-padx" as any]: "42px",
    ["--nav-cta-pady" as any]: "14px",
    ["--hero-cta-padx-m" as any]: "22px",
    ["--hero-cta-pady-m" as any]: "8px",
    ["--nav-cta-bg" as any]: "#F4F2EA",
    ["--nav-cta-ink" as any]: "#111111",
    ["--nav-cta-bg-hover" as any]: "#F4F2EA",
  };

  const contents = ["Living Room", "Bedroom", "2D Furnished Floor Plan", "Project Overview"];

  const sections = [
    {
      title: "Living Room",
      mainImage: {
        src: "/assets/retiro-contemporaneo/living-room-2.png",
        alt: "Living room interior",
      },
      isSquare: true,
      duoImages: [
        { src: "/assets/retiro-contemporaneo/living-room-1.png", alt: "Living room detail 1" },
        { src: "/assets/retiro-contemporaneo/living-room-5.png", alt: "Living room detail 2" },
      ],
      secondaryImage: {
        src: "/assets/retiro-contemporaneo/living-room-4.png",
        alt: "Living room detail secondary",
        isSquare: true,
      },
    },
    {
      title: "Bedroom",
      mainImage: {
        src: "/assets/retiro-contemporaneo/bedroom-1.png",
        alt: "Bedroom interior",
      },
      isSquare: true,
      duoImages: [
        { src: "/assets/retiro-contemporaneo/bedroom-3.png", alt: "Bedroom detail 1" },
        { src: "/assets/retiro-contemporaneo/bedroom-4.png", alt: "Bedroom detail 2" },
      ],
    },
    {
      title: "2D Furnished Floor Plan",
      mainImage: {
        src: "/assets/retiro-contemporaneo/floor-plan.png",
        alt: "2D furnished floor plan",
      },
      isFloorplan: true,
    },
    {
      title: "Project Overview",
      description:
        "Contemporary Retreat is a 90 m² apartment in Puerto Cancún, conceived as a calm, comfortable home for retired parents. Its residential interior design combines a neutral palette, refined materials and considered lighting to create a welcoming setting for everyday life. The living room and bedroom continue this balance of contemporary lines and soft tones, with a focus on comfort and practical use. Explore the spaces and furnished floor plan to see how the layout and furnishings support a home with a warm, timeless character.",
    },
  ];

  const featuredProjects = [
    {
      title: "Timeless Nature",
      location: "Puerto Morelos",
      summary: "A timeless blend of natural elements and contemporary design.",
      image: "/assets/timeless-nature/living-room-19.jpg",
      href: "/portfolio/timeless-nature",
    },
    {
      title: "Roots Tulum",
      location: "Tulum",
      summary: "A timeless expression of pure, natural materials.",
      image: "/assets/raices-tulum/bedroom-4.jpg",
      href: "/portfolio/roots-tulum",
    },
    {
      title: "Mid-Century Waves",
      location: "Akumal",
      summary: "A calm, textural retreat shaped around warm tones and coastal serenity.",
      image: "/assets/mid-century-waves/terrace-1.jpg",
      href: "/portfolio/mid-century-waves",
    },
  ];

  const socialItems = [
    {
      image: "/assets/img/post1.jpeg",
      text: "Layered neutrals and warm materials that invite you to linger.",
    },
    {
      image: "/assets/img/post2.jpeg",
      text: "Warm wood, teal ceramics, and soft lighting for a serene dining nook.",
    },
    {
      image: "/assets/img/post3.jpeg",
      text: "Ocean-view terrace with teak furnishings and soft blue textiles.",
    },
    {
      image: "/assets/img/post4.jpeg",
      text: "Terrace detail",
    },
    {
      image: "/assets/img/post5.jpeg",
      text: "Open-concept kitchen and dining with brass accents.",
    },
    {
      image: "/assets/img/post6.jpeg",
      text: "Gallery hallway with lantern pendants and warm marble floors.",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        className="yoast-schema-graph"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />
      <ProjectPage
        title="Contemporary Retreat"
        styleVars={styleVars}
        hero={{
          backgroundImage: "/assets/retiro-contemporaneo/living-room-2.png",
          titleSize: "64px",
          titleSizeMobile: "50px",
          align: "center",
          padTopDesktopPx: 400,
          padBottom: "clamp(4rem, 8vh, 7rem)",
          contentPadX: "24px",
        }}
        metaLabels={{ bookConsultation: "Explore full-service interior design" }}
        contents={contents}
        meta={{
          location: "Cancún",
          workLinkHref: "/services/full-service/",
          shareLinks: [
            { label: "Facebook", href: "#", aria: "Share on Facebook" },
            { label: "Pinterest", href: "#", aria: "Share on Pinterest" },
            { label: "Email", href: "#", aria: "Share via Email" },
          ],
        }}
        sections={sections}
        featuredProjects={featuredProjects}
        socialItems={socialItems}
        followHandle="@siamo_design"
        navLangHref="/es/portafolio/retiro-contemporaneo/"
        footerStyleVars={{
          ["--footer-lift" as any]: "0px",
          ["--footer-overlap" as any]: "0px",
          ["--footer-pad-top-mobile" as any]: "0px",
          ["--footer-pad-bottom-mobile" as any]: "18px",
          ["--footer-overlap-mobile" as any]: "0px",
          ["--footer-h" as any]: "200px",
          ["--footer-bottom-maxw" as any]: "1100px",
        }}
      />
    </>
  );
}
