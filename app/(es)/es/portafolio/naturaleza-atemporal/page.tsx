import ProjectPage from "../../../../(en)/portfolio/components/ProjectPage";
import type { Metadata } from "next";
import { getSiteUrl } from "../../../../lib/siteUrl";

const TITLE = "Naturaleza Atemporal - Siamo Design";
const DESCRIPTION =
  "Naturaleza Atemporal 90 M2 2 Habitaciones 2 Baños Naturaleza Atemporal Es la fusión perfecta entre materiales naturales y diseño contemporáneo en la Riviera Maya. La madera, el yute y las texturas orgánicas se combinan con líneas limpias, iluminación LED y detalles en metal negro para crear un espacio moderno, sofisticado y acogedor. Este diseño equilibra […]";
const OG_IMAGE = "https://siamodesign.com/es/wp-content/uploads/2025/02/1-1-1.png";
const OG_IMAGE_WIDTH = 594;
const OG_IMAGE_HEIGHT = 420;
const OG_IMAGE_TYPE = "image/png";
const DATE_PUBLISHED = "2025-02-20T01:48:10+00:00";
const DATE_MODIFIED = "2025-03-27T23:18:50+00:00";
const canonicalPath = "/es/portafolio/naturaleza-atemporal/";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: {
    canonical: canonicalPath,
    languages: {
      en: "/portfolio/timeless-nature/",
      es: canonicalPath,
      "x-default": "/portfolio/timeless-nature/",
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

export default function TimelessNatureEsPage() {
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
          { "@type": "ListItem", position: 3, name: "Naturaleza Atemporal" },
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
    "Recámara principal",
    "Recámara de invitados",
    "Plano amueblado 2D",
  ];

  const sections = [
    {
      title: "Sala",
      mainImage: {
        src: "/assets/timeless-nature/living-room-13.jpg",
        alt: "Sala con texturas naturales en capas",
      },
      isSquare: true,
      duoImages: [
        { src: "/assets/timeless-nature/living-room-1.jpg", alt: "Detalle vertical de la sala" },
        { src: "/assets/timeless-nature/living-room-4.png", alt: "Vista vertical de la sala con luz natural" },
      ],
      secondaryImage: {
        src: "/assets/timeless-nature/living-room-14.jpg",
        alt: "Vista secundaria de la sala",
        isSquare: true,
      },
    },
    {
      title: "Recámara principal",
      mainImage: {
        src: "/assets/timeless-nature/master-bedroom-1.jpg",
        alt: "Recámara principal con paleta natural serena",
      },
      isSquare: true,
      duoImages: [
        { src: "/assets/timeless-nature/master-bedroom-4.jpg", alt: "Detalle de buró en la recámara principal" },
        { src: "/assets/timeless-nature/master-bedroom-3.jpg", alt: "Detalle de muro texturizado" },
      ],
      secondaryImage: {
        src: "/assets/timeless-nature/master-bedroom-3.jpg",
        alt: "Ángulo alterno de la recámara principal",
        isSquare: true,
      },
    },
    {
      title: "Recámara de invitados",
      mainImage: {
        src: "/assets/timeless-nature/guest-bedroom-8.jpg",
        alt: "Recámara de invitados con textiles cálidos",
      },
      isSquare: true,
      duoImages: [
        { src: "/assets/timeless-nature/guest-bedroom-7.jpg", alt: "Detalle de buró en la recámara de invitados" },
        { src: "/assets/timeless-nature/guest-bedroom-9.jpg", alt: "Vista vertical de la recámara de invitados" },
      ],
    },
    {
      title: "Plano amueblado 2D",
      mainImage: {
        src: "/assets/timeless-nature/floor-plan.png",
        alt: "Plano amueblado 2D",
      },
      isFloorplan: true,
    },
  ];

  const featuredProjects = [
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
    {
      title: "Tuluminati House",
      location: "Cancún",
      summary: "Una celebración de los materiales naturales de Tulum y la artesanía local.",
      image: "/assets/tuluminati-house/living-room-7.jpg",
      href: "/portfolio/tuluminati-house",
    },
  ];

  const socialItems = [
    { image: "/assets/timeless-nature/living-room-12.jpg", text: "Momento textural de sala." },
    { image: "/assets/timeless-nature/living-room-16.jpg", text: "Viñeta de asientos en capas." },
    { image: "/assets/timeless-nature/master-bedroom-2.jpg", text: "Detalle sereno de la recámara principal." },
    { image: "/assets/timeless-nature/living-room-17.jpg", text: "Composición de materiales naturales." },
    { image: "/assets/timeless-nature/master-bedroom-5.jpg", text: "Estilismo cálido de buró." },
    { image: "/assets/timeless-nature/guest-bedroom-8.jpg", text: "Texturas de la suite de invitados." },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        className="yoast-schema-graph"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />
      <ProjectPage
        title="Naturaleza Atemporal"
        styleVars={styleVars}
        navLangHref="/portfolio/timeless-nature/"
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
