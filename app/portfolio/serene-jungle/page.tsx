import ProjectPage from "../components/ProjectPage";
import type { Metadata } from "next";
import { getSiteUrl } from "../../lib/siteUrl";

const canonicalPath = "/portfolio/serene-jungle/";
const TITLE = "Serene Jungle - Siamo Design";
const DESCRIPTION =
  "Soft, airy interiors nestled in the jungle canopy with warm woods, natural light, and a calm Riviera Maya palette.";
const OG_IMAGE_PATH = "/assets/serene-jungle/terrace-2.webp";

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

export default function SereneJunglePage() {
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
          { "@type": "ListItem", position: 3, name: "Serene Jungle" },
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
    "Kitchen",
    "Master Suite",
    "Guest Suite",
    "Terrace",
  ];

  const sections = [
    {
      title: "Living Room",
      mainImage: {
        src: "/assets/serene-jungle/living-room-2.webp",
        alt: "Living room with soft seating and jungle views",
      },
      isSquare: true,
      duoImages: [
        { src: "/assets/serene-jungle/living-room-1.webp", alt: "Living room corner with natural light" },
        { src: "/assets/serene-jungle/living-room-5.webp", alt: "Living room vignette with greenery" },
      ],
      secondaryImage: {
        src: "/assets/serene-jungle/living-room-3.webp",
        alt: "Alternate lounge perspective with woven textures",
        isSquare: true,
      },
    },
    {
      title: "Kitchen",
      mainImage: {
        src: "/assets/serene-jungle/kitchen-1.webp",
        alt: "Kitchen with warm wood cabinetry and stone tops",
      },
      isSquare: true,
      secondaryImage: {
        src: "/assets/serene-jungle/kitchen-2.webp",
        alt: "Kitchen island with seating",
        isSquare: true,
      },
      extraImages: [
        {
          src: "/assets/serene-jungle/kitchen-3.webp",
          alt: "Kitchen shelving with ceramics",
          isSquare: true,
        },
      ],
    },
    {
      title: "Master Suite",
      mainImage: {
        src: "/assets/serene-jungle/master-room-1.webp",
        alt: "Master suite with layered linens and soft light",
      },
      isSquare: true,
      extraImages: [
        {
          src: "/assets/serene-jungle/master-room-2.webp",
          alt: "Master suite bedside detail",
          isSquare: true,
        },
      ],
    },
    {
      title: "Guest Suite",
      mainImage: {
        src: "/assets/serene-jungle/guest-room-3.webp",
        alt: "Guest suite with layered linens and soft light",
      },
      isSquare: true,
      secondaryImage: {
        src: "/assets/serene-jungle/guest-room-4.webp",
        alt: "Calm seating nook with jungle view",
        isSquare: true,
      },
      extraImages: [
        {
          src: "/assets/serene-jungle/guest-room-1.webp",
          alt: "Guest suite seating corner",
          isSquare: true,
        },
      ],
    },
    {
      title: "Terrace",
      mainImage: {
        src: "/assets/serene-jungle/terrace-1.webp",
        alt: "Terrace with woven seating and jungle backdrop",
      },
      isSquare: true,
      secondaryImage: {
        src: "/assets/serene-jungle/terrace-2.webp",
        alt: "Alternate terrace angle with greenery",
        isSquare: true,
      },
    },
  ];

  const featuredProjects = [
    {
      title: "Mayan Sanctuary",
      location: "Tulum",
      summary: "A serene retreat weaving local craft, limestone, and lush greenery into a calm sanctuary.",
      image: "/assets/mayan-sanctuary/lounge-terrace-3.webp",
      href: "/portfolio/mayan-sanctuary",
    },
    {
      title: "Soul in Concrete",
      location: "Tulum",
      summary: "Brutalist warmth with sculpted concrete volumes and soft, textural layers.",
      image: "/assets/soul-in-concrete/master-bedroom-4.webp",
      href: "/portfolio/soul-in-concrete",
    },
    {
      title: "Timeless Nature",
      location: "Puerto Morelos",
      summary: "A timeless blend of natural elements and contemporary design.",
      image: "/assets/timeless-nature/living-room-19.jpg",
      href: "/portfolio/timeless-nature",
    },
  ];

  const socialItems = [
    { image: "/assets/serene-jungle/living-room-1.jpg", text: "Sunlit lounge framed by the jungle." },
    { image: "/assets/serene-jungle/kitchen-1.jpg", text: "Open shelving with crafted ceramics." },
    { image: "/assets/serene-jungle/guest-room-1.jpg", text: "Guest suite calm with woven texture." },
    { image: "/assets/serene-jungle/living-room-2.jpg", text: "Soft seating facing greenery." },
    { image: "/assets/serene-jungle/guest-room-4.jpg", text: "Bedside detail with warm light." },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        className="yoast-schema-graph"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />
      <ProjectPage
        title="Serene Jungle"
        styleVars={styleVars}
        hero={{
          backgroundImage: "/assets/serene-jungle/terrace-2.webp",
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
