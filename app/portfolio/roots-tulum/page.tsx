import ProjectPage from "../components/ProjectPage";
import type { Metadata } from "next";
import { getSiteUrl } from "../../lib/siteUrl";

const canonicalPath = "/portfolio/roots-tulum/";
const yoastDescription =
  "Roots Tulum 120 M2 2 Rooms 2 Bathrooms Roots Tulum highlights the authenticity of natural materials in their purest form. Solid wood furniture, like tree trunks repurposed as nightstands or TV stands, blends with rustic woven lamps to create a space full of character and personality. Walls in lead gray and deep green add depth and sophistication, […]";
const OG_IMAGE = "https://siamodesign.com/wp-content/uploads/2025/02/1-1-3.png";
const OG_IMAGE_WIDTH = 594;
const OG_IMAGE_HEIGHT = 420;
const OG_IMAGE_TYPE = "image/png";
const DATE_PUBLISHED = "2025-02-20T04:35:56+00:00";
const DATE_MODIFIED = "2025-03-27T22:06:00+00:00";

export const metadata: Metadata = {
  title: { absolute: "Roots Tulum - Siamo Design" },
  description: yoastDescription,
  alternates: {
    canonical: canonicalPath,
    languages: {
      en: canonicalPath,
      es: "/es/portafolio/raices-tulum/",
      "x-default": canonicalPath,
    },
  },
  openGraph: {
    type: "article",
    locale: "en_US",
    title: "Roots Tulum - Siamo Design",
    description: yoastDescription,
    url: canonicalPath,
    siteName: "Siamo Design",
    images: [
      { url: OG_IMAGE, width: OG_IMAGE_WIDTH, height: OG_IMAGE_HEIGHT, type: OG_IMAGE_TYPE },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Roots Tulum - Siamo Design",
    description: yoastDescription,
    images: [OG_IMAGE],
  },
};

export default function RootsTulumPage() {
  const siteUrl = getSiteUrl();
  const canonical = `${siteUrl}${canonicalPath}`;

  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": canonical,
        url: canonical,
        name: "Roots Tulum - Siamo Design",
        isPartOf: { "@id": `${siteUrl}/#website` },
        primaryImageOfPage: { "@id": `${canonical}#primaryimage` },
        image: { "@id": `${canonical}#primaryimage` },
        thumbnailUrl: OG_IMAGE,
        datePublished: DATE_PUBLISHED,
        dateModified: DATE_MODIFIED,
        breadcrumb: { "@id": `${canonical}#breadcrumb` },
        inLanguage: "en",
        potentialAction: [{ "@type": "ReadAction", target: [canonical] }],
      },
      {
        "@type": "ImageObject",
        inLanguage: "en",
        "@id": `${canonical}#primaryimage`,
        url: OG_IMAGE,
        contentUrl: OG_IMAGE,
        width: OG_IMAGE_WIDTH,
        height: OG_IMAGE_HEIGHT,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonical}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
          { "@type": "ListItem", position: 2, name: "Portfolio", item: `${siteUrl}/portfolio/` },
          { "@type": "ListItem", position: 3, name: "Roots Tulum" },
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
            target: { "@type": "EntryPoint", urlTemplate: `${siteUrl}/?s={search_term_string}` },
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

  const contents = [
    "Living Room",
    "Primary Suite",
    "Guest Room",
    "Bathrooms",
    "Terrace",
    "2D Furnished Floor Plan",
    "Project Overview",
  ];

  const sections = [
    {
      title: "Living Room",
      mainImage: {
        src: "/assets/raices-tulum/living-room-6.jpg",
        alt: "Living room with natural materials",
      },
      isSquare: true,
      duoImages: [
        { src: "/assets/raices-tulum/living-room-2.jpg", alt: "Living room vertical vignette" },
        { src: "/assets/raices-tulum/living-room-5.jpg", alt: "Living room vertical detail" },
      ],
    },
    {
      title: "Primary Suite",
      mainImage: {
        src: "/assets/raices-tulum/bedroom-6.jpg",
        alt: "Primary bedroom with layered neutrals",
      },
      isSquare: true,
      duoImages: [
        { src: "/assets/raices-tulum/bedroom-8.jpg", alt: "Primary bedroom bedside detail" },
        { src: "/assets/raices-tulum/bedroom-7.jpg", alt: "Primary bedroom vertical view" },
      ],
    },
    {
      title: "Guest Room",
      mainImage: {
        src: "/assets/raices-tulum/bedroom-3.jpg",
        alt: "Guest bedroom with coastal tones",
      },
      isSquare: true,
      duoImages: [
        { src: "/assets/raices-tulum/bedroom-4.jpg", alt: "Guest room vertical detail" },
        { src: "/assets/raices-tulum/bedroom-5.jpg", alt: "Guest room vertical view" },
      ],
      secondaryImage: {
        src: "/assets/raices-tulum/bedroom-2.jpg",
        alt: "Guest bedroom secondary angle",
        isSquare: true,
      },
    },
    {
      title: "Bathrooms",
      mainImage: {
        src: "/assets/raices-tulum/bathroom-1.jpg",
        alt: "Bathroom with natural textures",
      },
      isSquare: true,
      duoImages: [
        { src: "/assets/raices-tulum/bathroom-2.jpg", alt: "Bathroom vertical view" },
      ],
    },
    {
      title: "Terrace",
      mainImage: {
        src: "/assets/raices-tulum/terrace-1.jpg",
        alt: "Terrace with greenery",
      },
      isSquare: true,
    },
    {
      title: "2D Furnished Floor Plan",
      mainImage: {
        src: "/assets/raices-tulum/floor-plan.png",
        alt: "2D furnished floor plan",
      },
      isFloorplan: true,
    },
    {
      title: "Project Overview",
      description:
        "Raíces Tulum highlights the pure beauty of natural materials. Solid wood pieces, woven lighting, and rope details pair with deep gray and leafy green tones to create warmth, character, and quiet sophistication. The result is an organic yet contemporary interior—designed to feel distinctive, functional, and memorable, whether as a personal retreat or a vacation rental in Tulum.",
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
      title: "Mid-Century Waves",
      location: "Akumal",
      summary: "A calm, textural retreat shaped around warm tones and coastal serenity.",
      image: "/assets/mid-century-waves/terrace-1.jpg",
      href: "/portfolio/mid-century-waves",
    },
    {
      title: "Tuluminati House",
      location: "Cancún",
      summary: "A celebration of Tulum’s natural materials and local craftsmanship.",
      image: "/assets/tuluminati-house/living-room-7.jpg",
      href: "/portfolio/tuluminati-house",
    },
  ];

  const socialItems = [
    { image: "/assets/img/post1.jpeg", text: "Layered neutrals and warm materials that invite you to linger." },
    { image: "/assets/img/post2.jpeg", text: "Warm wood, teal ceramics, and soft lighting for a serene dining nook." },
    { image: "/assets/img/post3.jpeg", text: "Ocean-view terrace with teak furnishings and soft blue textiles." },
    { image: "/assets/img/post4.jpeg", text: "Terrace detail" },
    { image: "/assets/img/post5.jpeg", text: "Open-concept kitchen and dining with brass accents." },
    { image: "/assets/img/post6.jpeg", text: "Gallery hallway with lantern pendants and warm marble floors." },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        className="yoast-schema-graph"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />
      <ProjectPage
        title="Roots Tulum"
        styleVars={styleVars}
        navLangHref="/es/portafolio/raices-tulum/"
        hero={{
          backgroundImage: "/assets/raices-tulum/bedroom-6.jpg",
          titleSize: "64px",
          titleSizeMobile: "50px",
          align: "center",
          padTopDesktopPx: 140,
          padBottom: "clamp(4rem, 8vh, 7rem)",
          contentPadX: "24px",
        }}
        contents={contents}
        meta={{
          location: "Tulum",
          workLinkHref: "/questionnaire/",
          shareLinks: [
            { label: "Facebook", href: "#", aria: "Share on Facebook" },
            { label: "Pinterest", href: "#", aria: "Share on Pinterest" },
            { label: "Email", href: "#", aria: "Share via Email" },
          ],
        }}
        sections={sections}
        featuredProjects={featuredProjects}
        socialItems={socialItems}
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
