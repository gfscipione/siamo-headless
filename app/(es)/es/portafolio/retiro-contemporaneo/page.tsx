import ProjectPage from "../../../../(en)/portfolio/components/ProjectPage";
import { getSiteUrl } from "../../../../lib/siteUrl";

const TITLE = "Retiro Contemporáneo: Diseño de Interiores | Siamo Design";
const DESCRIPTION =
  "Conoce Retiro Contemporáneo, un departamento de 90 m² en Puerto Cancún con diseño de interiores residencial, materiales refinados y tonos neutros.";

export const metadata = {
  title: { absolute: TITLE },
  description:
    DESCRIPTION,
  openGraph: {
    title: TITLE,
    description:
      DESCRIPTION,
    url: "/es/portafolio/retiro-contemporaneo/",
    siteName: "Siamo Design",
    type: "website",
    locale: "es_MX",
    images: [
      {
        url: "/assets/retiro-contemporaneo/living-room-4.png",
        width: 3413,
        height: 1920,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description:
      DESCRIPTION,
    images: ["/assets/retiro-contemporaneo/living-room-4.png"],
  },
  alternates: {
    canonical: "/es/portafolio/retiro-contemporaneo/",
    languages: {
      "en": "/portfolio/contemporary-retreat/",
      "es": "/es/portafolio/retiro-contemporaneo/",
      "x-default": "/portfolio/contemporary-retreat/",
    },
  },
};

export default function RetiroContemporaneoPageEs() {
  const siteUrl = getSiteUrl();
  const canonical = `${siteUrl}/es/portafolio/retiro-contemporaneo/`;
  const primaryImageUrl = `${siteUrl}/assets/retiro-contemporaneo/living-room-4.png`;
  const siteEsRoot = `${siteUrl}/es/`;

  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": canonical,
        url: canonical,
        name: TITLE,
        description: DESCRIPTION,
        isPartOf: { "@id": `${siteEsRoot}#website` },
        primaryImageOfPage: { "@id": `${canonical}#primaryimage` },
        image: { "@id": `${canonical}#primaryimage` },
        breadcrumb: { "@id": `${canonical}#breadcrumb` },
        inLanguage: "es",
        potentialAction: [{ "@type": "ReadAction", target: [canonical] }],
      },
      {
        "@type": "ImageObject",
        "@id": `${canonical}#primaryimage`,
        inLanguage: "es",
        url: primaryImageUrl,
        contentUrl: primaryImageUrl,
        width: 3413,
        height: 1920,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonical}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Portada", item: siteEsRoot },
          { "@type": "ListItem", position: 2, name: "Portafolio", item: `${siteEsRoot}portafolio/` },
          { "@type": "ListItem", position: 3, name: "Retiro Contemporáneo" },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteEsRoot}#website`,
        url: siteEsRoot,
        name: "Siamo Design",
        publisher: { "@id": `${siteEsRoot}#organization` },
        inLanguage: "es",
        potentialAction: [
          {
            "@type": "SearchAction",
            target: { "@type": "EntryPoint", urlTemplate: `${siteEsRoot}?s={search_term_string}` },
            "query-input": {
              "@type": "PropertyValueSpecification",
              valueRequired: true,
              valueName: "search_term_string",
            },
          },
        ],
      },
      {
        "@type": "Organization",
        "@id": `${siteEsRoot}#organization`,
        name: "Siamo Design",
        url: siteEsRoot,
        logo: {
          "@type": "ImageObject",
          "@id": `${siteEsRoot}#/schema/logo/image/`,
          inLanguage: "es",
          url: `${siteUrl}/assets/img/logotipo.png`,
          contentUrl: `${siteUrl}/assets/img/logotipo.png`,
          caption: "Siamo Design",
        },
        image: { "@id": `${siteEsRoot}#/schema/logo/image/` },
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
    "Dormitorio",
    "Plano Amueblado En 2D",
    "Resumen del Proyecto",
  ];

  const sections = [
    {
      title: "Sala",
      mainImage: {
        src: "/assets/retiro-contemporaneo/living-room-2.png",
        alt: "Interior de la sala",
      },
      isSquare: true,
      duoImages: [
        {
          src: "/assets/retiro-contemporaneo/living-room-1.png",
          alt: "Detalle de la sala 1",
        },
        {
          src: "/assets/retiro-contemporaneo/living-room-5.png",
          alt: "Detalle de la sala 2",
        },
      ],
      secondaryImage: {
        src: "/assets/retiro-contemporaneo/living-room-4.png",
        alt: "Vista adicional de la sala",
        isSquare: true,
      },
    },
    {
      title: "Dormitorio",
      mainImage: {
        src: "/assets/retiro-contemporaneo/bedroom-1.png",
        alt: "Interior del dormitorio",
      },
      isSquare: true,
      duoImages: [
        { src: "/assets/retiro-contemporaneo/bedroom-3.png", alt: "Detalle del dormitorio 1" },
        { src: "/assets/retiro-contemporaneo/bedroom-4.png", alt: "Detalle del dormitorio 2" },
      ],
    },
    {
      title: "Plano Amueblado En 2D",
      mainImage: {
        src: "/assets/retiro-contemporaneo/floor-plan.png",
        alt: "Plano amueblado en 2D",
      },
      isFloorplan: true,
    },
    {
      title: "Resumen del Proyecto",
      description:
        "Retiro Contemporáneo es un departamento de 90 m² en Puerto Cancún, concebido como un hogar sereno y cómodo para los padres jubilados de un cliente. Su diseño de interiores combina una paleta neutra, materiales refinados y una iluminación cuidada para crear espacios acogedores para la vida cotidiana. La sala y el dormitorio mantienen una continuidad de líneas contemporáneas y tonos suaves, con énfasis en la comodidad y el uso práctico. Recorre los ambientes y el plano amueblado para conocer una propuesta cálida y atemporal.",
    },
  ];

  const featuredProjects = [
    {
      title: "Naturaleza Atemporal",
      location: "Puerto Morelos",
      summary: "Una fusión atemporal entre elementos naturales y diseño contemporáneo.",
      image: "/assets/timeless-nature/living-room-19.jpg",
      href: "/es/portafolio/naturaleza-atemporal/",
    },
    {
      title: "Raíces Tulum",
      location: "Tulum",
      summary: "Una expresión atemporal de materiales puros y naturales.",
      image: "/assets/raices-tulum/bedroom-4.jpg",
      href: "/es/portafolio/raices-tulum",
    },
    {
      title: "Olas Mid-Century",
      location: "Akumal",
      summary: "Un refugio sereno y lleno de textura, diseñado con tonos cálidos y una calma costera.",
      image: "/assets/mid-century-waves/terrace-1.jpg",
      href: "/es/portafolio/mid-century-waves",
    },
  ];

  const socialItems = [
    {
      image: "/assets/img/post1.jpeg",
      text: "Tonos neutros y materiales cálidos que invitan a quedarse.",
    },
    {
      image: "/assets/img/post2.jpeg",
      text: "Madera cálida, cerámica turquesa e iluminación suave para un comedor sereno.",
    },
    {
      image: "/assets/img/post3.jpeg",
      text: "Terraza con vista al mar, muebles de teca y textiles en tonos azules suaves.",
    },
    {
      image: "/assets/img/post4.jpeg",
      text: "Detalle de la terraza",
    },
    {
      image: "/assets/img/post5.jpeg",
      text: "Cocina y comedor de concepto abierto con detalles de latón.",
    },
    {
      image: "/assets/img/post6.jpeg",
      text: "Pasillo tipo galería con lámparas colgantes y pisos de mármol en tonos cálidos.",
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
        lang="es"
        sharedTextLanguage="es"
        title="Retiro Contemporáneo"
        styleVars={styleVars}
        footerLegal={{
          line1: (
            <span className="legal-full">Siamo Design | Estudio de diseño de interiores</span>
          ),
          line2: (
            <span className="legal-full">
              © 2025 Siamo Design. Todos los derechos reservados.
            </span>
          ),
          sig: (
            <a href="https://donebyelevator.com/website-redesign-service" target="_blank" rel="noopener noreferrer sponsored">
              Diseñado y desarrollado por Elevator
            </a>
          ),
        }}
        navLabels={{
          getToKnowUs: "CONÓCENOS",
          services: "SERVICIOS",
          portfolio: "PORTAFOLIO",
          langDesktop: "ENGLISH",
          langMobile: "EN",
          cta: "CONTÁCTANOS",
        }}
        metaLabels={{
          location: "Ubicación",
          workWithUs: "Trabajemos juntos",
          bookConsultation: "Conoce nuestro servicio de diseño llave en mano",
          share: "Compartir",
        }}
        sectionLabels={{
          contentsTitleRight: "Contenido",
          featuredProjects: "Proyectos Destacados",
          follow: "Síguenos",
        }}
        footerNavLabels={{
          services: "Servicios",
          portfolio: "Portafolio",
          about: "Conócenos",
          email: "Correo",
          whatsapp: "WhatsApp",
        }}
        navLangHref="/portfolio/contemporary-retreat"
        hero={{
          backgroundImage: "/assets/retiro-contemporaneo/living-room-2.png",
          titleSize: "64px",
          titleSizeMobile: "50px",
          align: "center",
          padTopDesktopPx: 400,
          padBottom: "clamp(4rem, 8vh, 7rem)",
          contentPadX: "24px",
        }}
        contents={contents}
        meta={{
          location: "Cancún",
          workLinkHref: "/es/servicios/diseno-llave-en-mano/",
          shareLinks: [
            { label: "Facebook", href: "#", aria: "Compartir en Facebook" },
            { label: "Pinterest", href: "#", aria: "Compartir en Pinterest" },
            { label: "Correo", href: "#", aria: "Compartir por correo" },
          ],
        }}
        sections={sections}
        featuredProjects={featuredProjects}
        socialItems={socialItems}
        followHandle="@siamo_design"
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
