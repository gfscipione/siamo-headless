import ProjectPage from "../../../../(en)/portfolio/components/ProjectPage";
import type { Metadata } from "next";
import { getSiteUrl } from "../../../../lib/siteUrl";

const canonicalPath = "/es/portafolio/serene-jungle/";
const TITLE = "Serene Jungle - Siamo Design";
const DESCRIPTION =
  "Interiores suaves y luminosos, enmarcados por la selva, con maderas cálidas, luz natural y una paleta serena de la Riviera Maya.";
const OG_IMAGE_PATH = "/assets/serene-jungle/terrace-2.webp";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: {
    canonical: canonicalPath,
    languages: {
      en: "/portfolio/serene-jungle/",
      es: canonicalPath,
      "x-default": "/portfolio/serene-jungle/",
    },
  },
  openGraph: {
    type: "article",
    locale: "es_ES",
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

export default function SereneJungleEsPage() {
  const siteUrl = getSiteUrl();
  const canonical = `${siteUrl}${canonicalPath}`;
  const esRoot = `${siteUrl}/es/`;
  const primaryImageUrl = `${siteUrl}${OG_IMAGE_PATH}`;

  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": canonical,
        url: canonical,
        name: TITLE,
        isPartOf: { "@id": `${esRoot}#website` },
        primaryImageOfPage: { "@id": `${canonical}#primaryimage` },
        image: { "@id": `${canonical}#primaryimage` },
        thumbnailUrl: primaryImageUrl,
        breadcrumb: { "@id": `${canonical}#breadcrumb` },
        inLanguage: "es",
        potentialAction: [{ "@type": "ReadAction", target: [canonical] }],
      },
      {
        "@type": "ImageObject",
        inLanguage: "es",
        "@id": `${canonical}#primaryimage`,
        url: primaryImageUrl,
        contentUrl: primaryImageUrl,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonical}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Portada", item: esRoot },
          { "@type": "ListItem", position: 2, name: "Portafolio", item: `${esRoot}portafolio/` },
          { "@type": "ListItem", position: 3, name: "Serene Jungle" },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${esRoot}#website`,
        url: esRoot,
        name: "Siamo Design",
        description: "",
        publisher: { "@id": `${esRoot}#organization` },
        potentialAction: [
          {
            "@type": "SearchAction",
            target: { "@type": "EntryPoint", urlTemplate: `${esRoot}?s={search_term_string}` },
            "query-input": {
              "@type": "PropertyValueSpecification",
              valueRequired: true,
              valueName: "search_term_string",
            },
          },
        ],
        inLanguage: "es",
      },
      {
        "@type": "Organization",
        "@id": `${esRoot}#organization`,
        name: "Siamo Design",
        url: esRoot,
        logo: {
          "@type": "ImageObject",
          inLanguage: "es",
          "@id": `${esRoot}#/schema/logo/image/`,
          url: "https://siamodesign.com/wp-content/uploads/2024/03/cropped-9019c03768d3a9dc34a90a32adf82d72.png",
          contentUrl:
            "https://siamodesign.com/wp-content/uploads/2024/03/cropped-9019c03768d3a9dc34a90a32adf82d72.png",
          width: 499,
          height: 167,
          caption: "Siamo Design",
        },
        image: { "@id": `${esRoot}#/schema/logo/image/` },
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
    "Sala",
    "Cocina",
    "Suite principal",
    "Suite de invitados",
    "Terraza",
  ];

  const sections = [
    {
      title: "Sala",
      mainImage: {
        src: "/assets/serene-jungle/living-room-2.webp",
        alt: "Sala con asientos suaves y vista a la selva",
      },
      isSquare: true,
      duoImages: [
        { src: "/assets/serene-jungle/living-room-1.webp", alt: "Rincón de la sala con luz natural" },
        { src: "/assets/serene-jungle/living-room-5.webp", alt: "Viñeta de la sala con vegetación" },
      ],
      secondaryImage: {
        src: "/assets/serene-jungle/living-room-3.webp",
        alt: "Vista alterna con texturas tejidas",
        isSquare: true,
      },
    },
    {
      title: "Cocina",
      mainImage: {
        src: "/assets/serene-jungle/kitchen-1.webp",
        alt: "Cocina con maderas cálidas y cubiertas de piedra",
      },
      isSquare: true,
      secondaryImage: {
        src: "/assets/serene-jungle/kitchen-2.webp",
        alt: "Isla de cocina con asientos",
        isSquare: true,
      },
      extraImages: [
        {
          src: "/assets/serene-jungle/kitchen-3.webp",
          alt: "Repisas de cocina con cerámica",
          isSquare: true,
        },
      ],
    },
    {
      title: "Suite principal",
      mainImage: {
        src: "/assets/serene-jungle/master-room-1.webp",
        alt: "Suite principal con textiles en capas y luz suave",
      },
      isSquare: true,
      extraImages: [
        {
          src: "/assets/serene-jungle/master-room-2.webp",
          alt: "Detalle de buró en la suite principal",
          isSquare: true,
        },
      ],
    },
    {
      title: "Suite de invitados",
      mainImage: {
        src: "/assets/serene-jungle/guest-room-3.webp",
        alt: "Suite de invitados con textiles en capas y luz suave",
      },
      isSquare: true,
      secondaryImage: {
        src: "/assets/serene-jungle/guest-room-4.webp",
        alt: "Rincón sereno con vista a la selva",
        isSquare: true,
      },
      extraImages: [
        {
          src: "/assets/serene-jungle/guest-room-1.webp",
          alt: "Rincón de asientos en la suite de invitados",
          isSquare: true,
        },
      ],
    },
    {
      title: "Terraza",
      mainImage: {
        src: "/assets/serene-jungle/terrace-1.webp",
        alt: "Terraza con asientos tejidos y selva al fondo",
      },
      isSquare: true,
      secondaryImage: {
        src: "/assets/serene-jungle/terrace-2.webp",
        alt: "Vista alterna de la terraza con vegetación",
        isSquare: true,
      },
    },
  ];

  const featuredProjects = [
    {
      title: "Mayan Sanctuary",
      location: "Tulum",
      summary: "Un refugio sereno que integra artesanía local, piedra caliza y vegetación exuberante.",
      image: "/assets/mayan-sanctuary/lounge-terrace-3.webp",
      href: "/portfolio/mayan-sanctuary",
    },
    {
      title: "Soul in Concrete",
      location: "Tulum",
      summary: "Calidez brutalista con volúmenes de concreto esculpidos y capas suaves y texturales.",
      image: "/assets/soul-in-concrete/master-bedroom-4.webp",
      href: "/portfolio/soul-in-concrete",
    },
    {
      title: "Timeless Nature",
      location: "Puerto Morelos",
      summary: "Una mezcla atemporal de elementos naturales y diseño contemporáneo.",
      image: "/assets/timeless-nature/living-room-19.jpg",
      href: "/portfolio/timeless-nature",
    },
  ];

  const socialItems = [
    { image: "/assets/serene-jungle/living-room-1.jpg", text: "Sala iluminada por el sol enmarcada por la selva." },
    { image: "/assets/serene-jungle/kitchen-1.jpg", text: "Repisas abiertas con cerámica artesanal." },
    { image: "/assets/serene-jungle/guest-room-1.jpg", text: "Calma en la suite de invitados con texturas tejidas." },
    { image: "/assets/serene-jungle/living-room-2.jpg", text: "Asientos suaves frente a la vegetación." },
    { image: "/assets/serene-jungle/guest-room-4.jpg", text: "Detalle de buró con luz cálida." },
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
        navLangHref="/portfolio/serene-jungle/"
        navLabels={{
          getToKnowUs: "CONÓCENOS",
          services: "SERVICIOS",
          portfolio: "PORTAFOLIO",
          langDesktop: "ENGLISH",
          langMobile: "EN",
          cta: "AGENDAR CONSULTA",
        }}
        metaLabels={{
          location: "Ubicación",
          workWithUs: "Trabaja con nosotros",
          bookConsultation: "Agendar consulta",
        }}
        sectionLabels={{
          contentsTitleRight: "Contenido",
          featuredProjects: "Proyectos destacados",
          follow: "Síguenos",
        }}
        footerNavLabels={{
          services: "Servicios",
          portfolio: "Portafolio",
          about: "Conócenos",
          email: "Email",
          whatsapp: "WhatsApp",
        }}
        footerLegal={{
          line1: "Siamo Design | Estudio de Diseño de Interiores",
          line2: "© 2025 Siamo Design. Todos los derechos reservados.",
          sig: (
            <a
              href="https://donebyelevator.com/website-redesign-service"
              target="_blank"
              rel="noopener noreferrer sponsored"
            >
              Diseñado y construido por Elevator
            </a>
          ),
        }}
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
          workLinkHref: "/es/cuestionario/",
          shareLinks: [
            { label: "Facebook", href: "#", aria: "Compartir en Facebook" },
            { label: "Pinterest", href: "#", aria: "Compartir en Pinterest" },
            { label: "Email", href: "#", aria: "Compartir por email" },
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
