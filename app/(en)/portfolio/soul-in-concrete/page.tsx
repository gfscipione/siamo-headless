import ProjectPage from "../components/ProjectPage";
import type { Metadata } from "next";
import { getSiteUrl } from "../../../lib/siteUrl";

const canonicalPath = "/portfolio/soul-in-concrete/";
const TITLE = "Soul in Concrete - Siamo Design";
const DESCRIPTION =
  "Brutalist warmth with sculpted concrete volumes, softened by layered textiles and organic light in Tulum.";
const OG_IMAGE_PATH = "/assets/soul-in-concrete/master-bedroom-3.webp";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: canonicalPath },
  openGraph: {
    type: "article",
    locale: "en_US",
    title: TITLE,
    description: DESCRIPTION,
    url: canonicalPath,
    siteName: "Siamo Design",
    images: [{ url: OG_IMAGE_PATH }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE_PATH],
  },
};

export default function SoulInConcretePage() {
  const siteUrl = getSiteUrl();
  const canonical = `${siteUrl}${canonicalPath}`;
  const primaryImageUrl = `${siteUrl}${OG_IMAGE_PATH}`;

  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": canonical,
        url: canonical,
        name: TITLE,
        isPartOf: { "@id": `${siteUrl}/#website` },
        primaryImageOfPage: { "@id": `${canonical}#primaryimage` },
        image: { "@id": `${canonical}#primaryimage` },
        thumbnailUrl: primaryImageUrl,
        breadcrumb: { "@id": `${canonical}#breadcrumb` },
        inLanguage: "en",
        potentialAction: [{ "@type": "ReadAction", target: [canonical] }],
      },
      {
        "@type": "ImageObject",
        inLanguage: "en",
        "@id": `${canonical}#primaryimage`,
        url: primaryImageUrl,
        contentUrl: primaryImageUrl,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonical}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
          { "@type": "ListItem", position: 2, name: "Portfolio", item: `${siteUrl}/portfolio/` },
          { "@type": "ListItem", position: 3, name: "Soul in Concrete" },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: `${siteUrl}/`,
        name: "Siamo Design",
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
    "Master Suite",
    "Guest Suite",
    "Terraces",
  ];

  const sections = [
    {
      title: "Living Room",
      mainImage: {
        src: "/assets/soul-in-concrete/living-room-6.webp",
        alt: "Living room wrapped in concrete with layered textures",
      },
      isSquare: true,
      duoImages: [
        { src: "/assets/soul-in-concrete/living-room-4.webp", alt: "Living room corner with organic seating" },
        { src: "/assets/soul-in-concrete/living-room-3.webp", alt: "Living room vignette with sculptural lighting" },
      ],
      secondaryImage: {
        src: "/assets/soul-in-concrete/living-room-1.webp",
        alt: "Alternate living room perspective with warm light",
        isSquare: true,
      },
    },
    {
      title: "Master Suite",
      mainImage: {
        src: "/assets/soul-in-concrete/master-bedroom-4.webp",
        alt: "Master bedroom with soft bedding against concrete planes",
      },
      isSquare: true,
      duoImages: [
        { src: "/assets/soul-in-concrete/master-bedroom-4.webp", alt: "Bedside detail with warm sconces" },
        { src: "/assets/soul-in-concrete/master-bedroom-1.webp", alt: "Master bedroom angle with layered linens" },
      ],
      secondaryImage: {
        src: "/assets/soul-in-concrete/master-bedroom-3.webp",
        alt: "Master bedroom seating nook",
        isSquare: true,
      },
    },
    {
      title: "Guest Suite",
      mainImage: {
        src: "/assets/soul-in-concrete/guest-bedroom-2.webp",
        alt: "Guest bedroom with tonal bedding and concrete walls",
      },
      isSquare: true,
      duoImages: [
        { src: "/assets/soul-in-concrete/guest-bedroom-3.webp", alt: "Guest bedroom bedside detail" },
        { src: "/assets/soul-in-concrete/guest-bedroom-4.webp", alt: "Guest bedroom angle with art" },
      ],
      secondaryImage: {
        src: "/assets/soul-in-concrete/guest-bedroom-1.webp",
        alt: "Guest bedroom alternate view with bench",
        isSquare: true,
      },
    },
    {
      title: "Terraces",
      mainImage: {
        src: "/assets/soul-in-concrete/terrace-1.webp",
        alt: "Terrace with concrete seating and greenery",
      },
      isSquare: true,
      duoImages: [
        { src: "/assets/soul-in-concrete/terrace-3.webp", alt: "Terrace lounge moment" },
        { src: "/assets/soul-in-concrete/terrace-2.webp", alt: "Terrace dining scene at sunset" },
      ],
      secondaryImage: {
        src: "/assets/soul-in-concrete/terrace-4.webp",
        alt: "Terrace corner with sculptural planters",
        isSquare: true,
      },
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
    { image: "/assets/soul-in-concrete/living-room-7.webp", text: "Layered seating in sculpted concrete." },
    { image: "/assets/soul-in-concrete/master-bedroom-1.webp", text: "Soft textures warming the master suite." },
    { image: "/assets/soul-in-concrete/guest-bedroom-2.webp", text: "Guest room calm in tonal neutrals." },
    { image: "/assets/soul-in-concrete/terrace-2.webp", text: "Outdoor living framed by concrete planes." },
    { image: "/assets/soul-in-concrete/living-room-2.webp", text: "Brutalist lines balanced with light." },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        className="yoast-schema-graph"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />
      <ProjectPage
        title="Soul in Concrete"
        styleVars={styleVars}
        hero={{
          backgroundImage: "/assets/soul-in-concrete/master-bedroom-3.webp",
          titleSize: "64px",
          titleSizeMobile: "50px",
          align: "center",
          padTopDesktopPx: 200,
          padBottom: "clamp(5rem, 10vh, 8rem)",
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
