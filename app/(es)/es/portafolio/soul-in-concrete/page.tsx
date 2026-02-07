import ProjectPage from "../../../../(en)/portfolio/components/ProjectPage";
import type { Metadata } from "next";
import { getSiteUrl } from "../../../../lib/siteUrl";

const canonicalPath = "/es/portafolio/soul-in-concrete/";
const TITLE = "Soul in Concrete - Siamo Design";
const DESCRIPTION =
  "Proyecto de interiorismo en Tulum con concreto aparente, textiles cálidos y luz orgánica que equilibran fuerza brutalista y calidez.";
const OG_IMAGE_PATH = "/assets/soul-in-concrete/master-bedroom-3.webp";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: {
    canonical: canonicalPath,
    languages: {
      en: "/portfolio/soul-in-concrete/",
      es: canonicalPath,
      "x-default": "/portfolio/soul-in-concrete/",
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

export default function SoulInConcretePageEs() {
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
          { "@type": "ListItem", position: 3, name: "Soul in Concrete" },
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
    "Suite principal",
    "Suite de invitados",
    "Terrazas",
  ];

  const sections = [
    {
      title: "Sala",
      mainImage: {
        src: "/assets/soul-in-concrete/living-room-6.webp",
        alt: "Sala envuelta en concreto con texturas en capas",
      },
      isSquare: true,
      duoImages: [
        { src: "/assets/soul-in-concrete/living-room-4.webp", alt: "Rincón de la sala con asientos orgánicos" },
        { src: "/assets/soul-in-concrete/living-room-3.webp", alt: "Viñeta de sala con iluminación escultórica" },
      ],
      secondaryImage: {
        src: "/assets/soul-in-concrete/living-room-1.webp",
        alt: "Vista alterna de la sala con luz cálida",
        isSquare: true,
      },
    },
    {
      title: "Suite principal",
      mainImage: {
        src: "/assets/soul-in-concrete/master-bedroom-4.webp",
        alt: "Recámara principal con textiles suaves frente al concreto",
      },
      isSquare: true,
      duoImages: [
        { src: "/assets/soul-in-concrete/master-bedroom-4.webp", alt: "Detalle de buró con apliques cálidos" },
        { src: "/assets/soul-in-concrete/master-bedroom-1.webp", alt: "Ángulo de la recámara principal con textiles en capas" },
      ],
      secondaryImage: {
        src: "/assets/soul-in-concrete/master-bedroom-3.webp",
        alt: "Rincón de lectura en la recámara principal",
        isSquare: true,
      },
    },
    {
      title: "Suite de invitados",
      mainImage: {
        src: "/assets/soul-in-concrete/guest-bedroom-2.webp",
        alt: "Recámara de invitados con textiles tonales y concreto expuesto",
      },
      isSquare: true,
      duoImages: [
        { src: "/assets/soul-in-concrete/guest-bedroom-3.webp", alt: "Detalle de buró en la recámara de invitados" },
        { src: "/assets/soul-in-concrete/guest-bedroom-4.webp", alt: "Ángulo de la recámara de invitados con arte" },
      ],
      secondaryImage: {
        src: "/assets/soul-in-concrete/guest-bedroom-1.webp",
        alt: "Vista alterna de la recámara de invitados con banca",
        isSquare: true,
      },
    },
    {
      title: "Terrazas",
      mainImage: {
        src: "/assets/soul-in-concrete/terrace-1.webp",
        alt: "Terraza con asientos de concreto y vegetación",
      },
      isSquare: true,
      duoImages: [
        { src: "/assets/soul-in-concrete/terrace-3.webp", alt: "Momento lounge en la terraza" },
        { src: "/assets/soul-in-concrete/terrace-2.webp", alt: "Comedor exterior al atardecer" },
      ],
      secondaryImage: {
        src: "/assets/soul-in-concrete/terrace-4.webp",
        alt: "Rincón de terraza con macetas escultóricas",
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
    { image: "/assets/soul-in-concrete/living-room-7.webp", text: "Asientos en capas sobre concreto esculpido." },
    { image: "/assets/soul-in-concrete/master-bedroom-1.webp", text: "Texturas suaves que calientan la suite principal." },
    { image: "/assets/soul-in-concrete/guest-bedroom-2.webp", text: "Calma de invitados en neutros tonales." },
    { image: "/assets/soul-in-concrete/terrace-2.webp", text: "Vida exterior enmarcada por planos de concreto." },
    { image: "/assets/soul-in-concrete/living-room-2.webp", text: "Líneas brutalistas equilibradas con luz." },
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
        navLangHref="/portfolio/soul-in-concrete/"
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
