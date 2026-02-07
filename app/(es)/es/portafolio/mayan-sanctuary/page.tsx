import ProjectPage from "../../../../(en)/portfolio/components/ProjectPage";
import type { Metadata } from "next";
import { getSiteUrl } from "../../../../lib/siteUrl";

const canonicalPath = "/es/portafolio/mayan-sanctuary/";
const TITLE = "Mayan Sanctuary - Siamo Design";
const DESCRIPTION =
  "Un refugio sereno que entreteje piedra caliza, artesanía local y vegetación exuberante para crear un santuario de calma en Playa del Carmen.";
const OG_IMAGE_PATH = "/assets/mayan-sanctuary/details-1.webp";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: {
    canonical: canonicalPath,
    languages: {
      en: "/portfolio/mayan-sanctuary/",
      es: canonicalPath,
      "x-default": "/portfolio/mayan-sanctuary/",
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

export default function MayanSanctuaryEsPage() {
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
          { "@type": "ListItem", position: 3, name: "Mayan Sanctuary" },
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
    "Comedor",
    "Sala principal",
    "Cocina",
    "Recámara principal",
    "Suite de invitados",
    "Terraza de alberca",
    "Terraza lounge",
    "Sala multimedia",
    "Suite infantil",
  ];

  const sections = [
    {
      title: "Comedor",
      mainImage: {
        src: "/assets/mayan-sanctuary/dining-room-3.webp",
        alt: "Comedor con muros de piedra caliza y mesa artesanal",
      },
      isSquare: true,
      duoImages: [
        { src: "/assets/mayan-sanctuary/dining-room-1.webp", alt: "Rincón del comedor con vegetación" },
        { src: "/assets/mayan-sanctuary/dining-room-4.webp", alt: "Detalle del comedor con textiles" },
      ],
    },
    {
      title: "Sala principal",
      mainImage: {
        src: "/assets/mayan-sanctuary/main-lounge-4.webp",
        alt: "Sala principal con asientos en capas y texturas tejidas",
      },
      isSquare: true,
      duoImages: [
        { src: "/assets/mayan-sanctuary/main-lounge-1.webp", alt: "Rincón de la sala principal con iluminación suave" },
        { src: "/assets/mayan-sanctuary/main-lounge-2.webp", alt: "Viñeta de sala principal con vegetación" },
      ],
      secondaryImage: {
        src: "/assets/mayan-sanctuary/main-lounge-5.webp",
        alt: "Vista alterna de la sala principal",
        isSquare: true,
      },
    },
    {
      title: "Cocina",
      mainImage: {
        src: "/assets/mayan-sanctuary/kitchen-3.webp",
        alt: "Cocina con maderas cálidas y texturas de piedra caliza",
      },
      isSquare: true,
      duoImages: [
        { src: "/assets/mayan-sanctuary/kitchen-1.webp", alt: "Detalle de repisas en la cocina" },
        { src: "/assets/mayan-sanctuary/kitchen-2.webp", alt: "Detalle de materiales en la encimera" },
      ],
    },
    {
      title: "Recámara principal",
      mainImage: {
        src: "/assets/mayan-sanctuary/master-bedroom-1.webp",
        alt: "Recámara principal con textiles en capas y acentos tejidos",
      },
      isSquare: true,
      duoImages: [
        {
          src: "/assets/mayan-sanctuary/master-bedroom-7.webp",
          alt: "Detalle de buró con aplique en la recámara principal",
        },
        { src: "/assets/mayan-sanctuary/master-bedroom-8.webp", alt: "Rincón de lectura en la recámara principal" },
      ],
      secondaryImage: {
        src: "/assets/mayan-sanctuary/master-bedroom-3.webp",
        alt: "Ángulo alterno de la recámara principal",
        isSquare: true,
      },
    },
    {
      title: "Suite de invitados",
      mainImage: {
        src: "/assets/mayan-sanctuary/guest-room-1.webp",
        alt: "Suite de invitados con textiles naturales y vegetación",
      },
      isSquare: true,
    },
    {
      title: "Terraza de alberca",
      mainImage: {
        src: "/assets/mayan-sanctuary/pool-terrace-1.webp",
        alt: "Terraza de alberca con lounge y vegetación",
      },
      isSquare: true,
      duoImages: [
        { src: "/assets/mayan-sanctuary/pool-terrace-2.webp", alt: "Rincón lounge en la terraza de alberca" },
        { src: "/assets/mayan-sanctuary/pool-terrace-3.webp", alt: "Área de comedor en la terraza de alberca" },
      ],
    },
    {
      title: "Terraza lounge",
      mainImage: {
        src: "/assets/mayan-sanctuary/lounge-terrace-3.webp",
        alt: "Terraza lounge con asientos tejidos y vegetación",
      },
      isSquare: true,
      duoImages: [
        { src: "/assets/mayan-sanctuary/lounge-terrace-1.webp", alt: "Rincón de asientos en la terraza lounge" },
        { src: "/assets/mayan-sanctuary/lounge-terrace-2.webp", alt: "Vista del comedor en la terraza lounge" },
      ],
    },
    {
      title: "Sala multimedia",
      mainImage: {
        src: "/assets/mayan-sanctuary/media-room-2.webp",
        alt: "Sala multimedia con asientos mullidos e iluminación cálida",
      },
      isSquare: true,
      duoImages: [
        { src: "/assets/mayan-sanctuary/media-room-4.webp", alt: "Rincón de la sala multimedia con apliques" },
        { src: "/assets/mayan-sanctuary/media-room-8.webp", alt: "Viñeta de la sala multimedia" },
      ],
      secondaryImage: {
        src: "/assets/mayan-sanctuary/media-room-5.webp",
        alt: "Ángulo alterno de la sala multimedia",
        isSquare: true,
      },
    },
    {
      title: "Suite infantil",
      mainImage: {
        src: "/assets/mayan-sanctuary/kids-suite-1.webp",
        alt: "Suite infantil con textiles lúdicos",
      },
      isSquare: true,
      secondaryImage: {
        src: "/assets/mayan-sanctuary/kids-suite-2.webp",
        alt: "Mezcla de materiales en la suite infantil",
        isSquare: true,
      },
    },
  ];

  const featuredProjects = [
    {
      title: "Timeless Nature",
      location: "Puerto Morelos",
      summary: "Una mezcla atemporal de elementos naturales y diseño contemporáneo.",
      image: "/assets/timeless-nature/living-room-19.jpg",
      href: "/portfolio/timeless-nature",
    },
    {
      title: "Soul in Concrete",
      location: "Tulum",
      summary: "Calidez brutalista con volúmenes de concreto esculpidos y capas suaves y texturales.",
      image: "/assets/soul-in-concrete/master-bedroom-4.webp",
      href: "/portfolio/soul-in-concrete",
    },
    {
      title: "Roots Tulum",
      location: "Tulum",
      summary: "Una expresión atemporal de materiales puros y naturales.",
      image: "/assets/raices-tulum/bedroom-4.jpg",
      href: "/portfolio/roots-tulum",
    },
  ];

  const socialItems = [
    { image: "/assets/mayan-sanctuary/dining-room-1.webp", text: "Comedor de piedra caliza bañado en luz." },
    { image: "/assets/mayan-sanctuary/kitchen-1.webp", text: "Calidez en cocina con maderas artesanales." },
    { image: "/assets/mayan-sanctuary/guest-room-1.webp", text: "Calma en la suite de invitados en tonos neutros." },
    { image: "/assets/mayan-sanctuary/kids-suite-1.webp", text: "Suite infantil con texturas tejidas." },
    { image: "/assets/mayan-sanctuary/details-3.webp", text: "Materialidad en piedra y fibra." },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        className="yoast-schema-graph"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />
      <ProjectPage
        title="Mayan Sanctuary"
        styleVars={styleVars}
        navLangHref="/portfolio/mayan-sanctuary/"
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
          backgroundImage: "/assets/mayan-sanctuary/details-1.webp",
          titleSize: "64px",
          titleSizeMobile: "50px",
          align: "center",
          padTopDesktopPx: 200,
          padBottom: "clamp(5rem, 10vh, 8rem)",
          contentPadX: "24px",
        }}
        contents={contents}
        meta={{
          location: "Playa del Carmen",
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
