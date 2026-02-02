import ProjectPage from "../components/ProjectPage";
import type { Metadata } from "next";
import { getSiteUrl } from "../../../lib/siteUrl";

const canonicalPath = "/portfolio/timeless-nature/";
const yoastDescription =
  "Timeless Nature 90 M2 2 Rooms 2 Bathrooms Timeless Nature It’s the perfect fusion of natural materials and contemporary design in the Riviera Maya. Wood, jute, and organic textures blend seamlessly with clean lines, LED lighting, and black metal accents to create a modern, sophisticated, and inviting space. This design balances elegance and nature, offering […]";
const OG_IMAGE = "https://siamodesign.com/wp-content/uploads/2025/02/1-1-1.png";
const OG_IMAGE_WIDTH = 594;
const OG_IMAGE_HEIGHT = 420;
const OG_IMAGE_TYPE = "image/png";
const DATE_PUBLISHED = "2025-02-20T04:15:16+00:00";
const DATE_MODIFIED = "2025-03-27T21:56:03+00:00";

export const metadata: Metadata = {
  title: { absolute: "Timeless Nature - Siamo Design" },
  description: yoastDescription,
  alternates: {
    canonical: canonicalPath,
    languages: {
      en: canonicalPath,
      es: "/es/portafolio/naturaleza-atemporal/",
      "x-default": canonicalPath,
    },
  },
  openGraph: {
    type: "article",
    locale: "en_US",
    title: "Timeless Nature - Siamo Design",
    description: yoastDescription,
    url: canonicalPath,
    siteName: "Siamo Design",
    images: [
      { url: OG_IMAGE, width: OG_IMAGE_WIDTH, height: OG_IMAGE_HEIGHT, type: OG_IMAGE_TYPE },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Timeless Nature - Siamo Design",
    description: yoastDescription,
    images: [OG_IMAGE],
  },
};

export default function TimelessNaturePage() {
  const siteUrl = getSiteUrl();
  const canonical = `${siteUrl}${canonicalPath}`;

  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": canonical,
        url: canonical,
        name: "Timeless Nature - Siamo Design",
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
          { "@type": "ListItem", position: 3, name: "Timeless Nature" },
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
    "Master Bedroom",
    "Guest Bedroom",
    "2D Furnished Floor Plan",
  ];

  const sections = [
    {
      title: "Living Room",
      mainImage: {
        src: "/assets/timeless-nature/living-room-13.jpg",
        alt: "Living room with layered natural textures",
      },
      isSquare: true,
      duoImages: [
        { src: "/assets/timeless-nature/living-room-1.jpg", alt: "Living room vertical detail" },
        { src: "/assets/timeless-nature/living-room-4.png", alt: "Living room vertical view with natural light" },
      ],
      secondaryImage: {
        src: "/assets/timeless-nature/living-room-14.jpg",
        alt: "Secondary living room perspective",
        isSquare: true,
      },
    },
    {
      title: "Master Bedroom",
      mainImage: {
        src: "/assets/timeless-nature/master-bedroom-1.jpg",
        alt: "Master bedroom with calm natural palette",
      },
      isSquare: true,
      duoImages: [
        { src: "/assets/timeless-nature/master-bedroom-4.jpg", alt: "Master bedroom bedside vignette" },
        { src: "/assets/timeless-nature/master-bedroom-3.jpg", alt: "Master bedroom textured wall detail" },
      ],
      secondaryImage: {
        src: "/assets/timeless-nature/master-bedroom-3.jpg",
        alt: "Master bedroom alternate angle",
        isSquare: true,
      },
    },
    {
      title: "Guest Bedroom",
      mainImage: {
        src: "/assets/timeless-nature/guest-bedroom-8.jpg",
        alt: "Guest bedroom with warm textiles",
      },
      isSquare: true,
      duoImages: [
        { src: "/assets/timeless-nature/guest-bedroom-7.jpg", alt: "Guest bedroom bedside detail" },
        { src: "/assets/timeless-nature/guest-bedroom-9.jpg", alt: "Guest bedroom vertical view" },
      ],
    },
    {
      title: "2D Furnished Floor Plan",
      mainImage: {
        src: "/assets/timeless-nature/floor-plan.png",
        alt: "2D furnished floor plan",
      },
      isFloorplan: true,
    },
  ];

  const featuredProjects = [
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
    {
      title: "Tuluminati House",
      location: "Cancún",
      summary: "A celebration of Tulum’s natural materials and local craftsmanship.",
      image: "/assets/tuluminati-house/living-room-7.jpg",
      href: "/portfolio/tuluminati-house",
    },
  ];

  const socialItems = [
    { image: "/assets/timeless-nature/living-room-12.jpg", text: "Textural living room moment." },
    { image: "/assets/timeless-nature/living-room-16.jpg", text: "Layered seating vignette." },
    { image: "/assets/timeless-nature/master-bedroom-2.jpg", text: "Serene master bedroom detail." },
    { image: "/assets/timeless-nature/living-room-17.jpg", text: "Natural materials composition." },
    { image: "/assets/timeless-nature/master-bedroom-5.jpg", text: "Warm bedside styling." },
    { image: "/assets/timeless-nature/guest-bedroom-8.jpg", text: "Guest suite textures." },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        className="yoast-schema-graph"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />
      <ProjectPage
        title="Timeless Nature"
        styleVars={styleVars}
        navLangHref="/es/portafolio/naturaleza-atemporal/"
        hero={{
          backgroundImage: "/assets/timeless-nature/details-2.jpg",
          titleSize: "64px",
          titleSizeMobile: "50px",
          align: "center",
          padTopDesktopPx: 200,
          padBottom: "clamp(5rem, 10vh, 8rem)",
          contentPadX: "24px",
        }}
        contents={contents}
        meta={{
          location: "Puerto Morelos",
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
