import ProjectPage from "../../../../(en)/portfolio/components/ProjectPage";
import type { Metadata } from "next";
import { getSiteUrl } from "../../../../lib/siteUrl";

const TITLE = "Tuluminati House - Siamo Design";
const DESCRIPTION =
  "Tuluminati House 100 M2 2 Habitaciones 2 Baños Tuluminati House Es un proyecto que rinde homenaje a la esencia de Tulum con un diseño que incorpora materiales naturales y artesanías locales. Con una paleta de colores neutros y el uso del chukum, esta decoración combina el diseño moderno con un toque local. Cada detalle refleja […]";
const OG_IMAGE = "https://siamodesign.com/es/wp-content/uploads/2025/02/1-.png";
const OG_IMAGE_WIDTH = 594;
const OG_IMAGE_HEIGHT = 420;
const OG_IMAGE_TYPE = "image/png";
const DATE_PUBLISHED = "2025-02-17T17:34:42+00:00";
const DATE_MODIFIED = "2025-03-27T23:30:27+00:00";
const canonicalPath = "/es/portafolio/tuluminati-house/";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: {
    canonical: canonicalPath,
    languages: {
      en: "/portfolio/tuluminati-house/",
      es: canonicalPath,
      "x-default": "/portfolio/tuluminati-house/",
    },
  },
  openGraph: {
    type: "article",
    locale: "es_ES",
    title: TITLE,
    description: DESCRIPTION,
    url: canonicalPath,
    siteName: "Siamo Design",
    images: [
      { url: OG_IMAGE, width: OG_IMAGE_WIDTH, height: OG_IMAGE_HEIGHT, type: OG_IMAGE_TYPE },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
};

export default function TuluminatiHousePage() {
  const siteUrl = getSiteUrl();
  const canonical = `${siteUrl}${canonicalPath}`;
  const esRoot = `${siteUrl}/es/`;

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
        thumbnailUrl: OG_IMAGE,
        datePublished: DATE_PUBLISHED,
        dateModified: DATE_MODIFIED,
        breadcrumb: { "@id": `${canonical}#breadcrumb` },
        inLanguage: "es",
        potentialAction: [{ "@type": "ReadAction", target: [canonical] }],
      },
      {
        "@type": "ImageObject",
        inLanguage: "es",
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
          { "@type": "ListItem", position: 1, name: "Portada", item: esRoot },
          { "@type": "ListItem", position: 2, name: "Portafolio", item: `${esRoot}portafolio/` },
          { "@type": "ListItem", position: 3, name: "Tuluminati House" },
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
    "Sala y balcón",
    "Suite principal",
    "Habitación de invitados",
    "Baños",
    "Terraza",
    "Plano amueblado 2D",
  ];

  const sections = [
    {
      title: "Sala y balcón",
      mainImage: {
        src: "/assets/tuluminati-house/living-room-9.jpg",
        alt: "Sala con texturas naturales y tonos cálidos",
      },
      isSquare: true,
      duoImages: [
        { src: "/assets/tuluminati-house/living-room-2.jpg", alt: "Detalle vertical de la sala" },
        { src: "/assets/tuluminati-house/balcony-1.jpg", alt: "Detalle vertical del balcón" },
      ],
      secondaryImage: {
        src: "/assets/tuluminati-house/living-room-4.jpg",
        alt: "Vista secundaria de la sala",
        isSquare: true,
      },
      extraImages: [
        {
          src: "/assets/tuluminati-house/living-room-5.jpg",
          alt: "Detalle adicional de la sala",
          isSquare: true,
        },
      ],
    },
    {
      title: "Suite principal",
      mainImage: {
        src: "/assets/tuluminati-house/bedroom-1.jpg",
        alt: "Recámara principal con neutros en capas",
      },
      isSquare: true,
      duoImages: [
        { src: "/assets/tuluminati-house/bedroom-6.jpg", alt: "Detalle de buró en la recámara principal" },
        { src: "/assets/tuluminati-house/bedroom-7.jpg", alt: "Vista vertical de la recámara principal" },
      ],
      secondaryImage: {
        src: "/assets/tuluminati-house/details-1.jpg",
        alt: "Detalle secundario de la recámara principal",
        isSquare: true,
      },
    },
    {
      title: "Habitación de invitados",
      mainImage: {
        src: "/assets/tuluminati-house/bedroom-4.jpg",
        alt: "Recámara de invitados con tonos costeros",
      },
      isSquare: true,
      duoImages: [
        { src: "/assets/tuluminati-house/bedroom-3.jpg", alt: "Detalle vertical de la recámara de invitados" },
        { src: "/assets/tuluminati-house/details-2.jpg", alt: "Detalle textural junto a la cama" },
      ],
    },
    {
      title: "Baños",
      duoImages: [
        { src: "/assets/tuluminati-house/bathroom-2.jpg", alt: "Vista vertical del baño" },
        { src: "/assets/tuluminati-house/bathroom-1.jpg", alt: "Detalle de regadera con tonos cálidos" },
      ],
    },
    {
      title: "Terraza",
      mainImage: {
        src: "/assets/tuluminati-house/terrace-1.jpg",
        alt: "Terraza con acentos tejidos y vegetación",
      },
      isSquare: true,
      duoImages: [
        { src: "/assets/tuluminati-house/terrace-7.jpg", alt: "Vista vertical de la terraza" },
        { src: "/assets/tuluminati-house/terrace-8.jpg", alt: "Detalle vertical de asientos en la terraza" },
      ],
      secondaryImage: {
        src: "/assets/tuluminati-house/terrace-4.jpg",
        alt: "Vista adicional de la terraza",
        isSquare: true,
      },
      extraImages: [
        {
          src: "/assets/tuluminati-house/terrace-5.jpg",
          alt: "Detalle del balcón con silla",
          isSquare: true,
        },
      ],
    },
    {
      title: "Plano amueblado 2D",
      mainImage: {
        src: "/assets/tuluminati-house/floor-plan.png",
        alt: "Plano amueblado 2D",
      },
      isFloorplan: true,
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
      title: "Roots Tulum",
      location: "Tulum",
      summary: "Una expresión atemporal de materiales puros y naturales.",
      image: "/assets/raices-tulum/bedroom-4.jpg",
      href: "/portfolio/roots-tulum",
    },
    {
      title: "Mid-Century Waves",
      location: "Akumal",
      summary: "Un refugio sereno y textural con tonos cálidos y calma costera.",
      image: "/assets/mid-century-waves/terrace-1.jpg",
      href: "/portfolio/mid-century-waves",
    },
  ];

  const socialItems = [
    { image: "/assets/img/post1.jpeg", text: "Neutros en capas y materiales cálidos que invitan a quedarse." },
    { image: "/assets/img/post2.jpeg", text: "Madera cálida, cerámica en tonos teal y luz suave para un comedor sereno." },
    { image: "/assets/img/post3.jpeg", text: "Terraza con vista al mar, mobiliario de teca y textiles azul suave." },
    { image: "/assets/img/post4.jpeg", text: "Detalle de la terraza." },
    { image: "/assets/img/post5.jpeg", text: "Cocina y comedor de concepto abierto con acentos en latón." },
    { image: "/assets/img/post6.jpeg", text: "Pasillo tipo galería con lámparas tipo farol y pisos de mármol cálido." },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        className="yoast-schema-graph"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />
      <ProjectPage
        title="Tuluminati House"
        styleVars={styleVars}
        navLangHref="/portfolio/tuluminati-house/"
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
          backgroundImage: "/assets/tuluminati-house/terrace-5.jpg",
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
