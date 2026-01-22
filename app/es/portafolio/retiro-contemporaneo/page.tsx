import ProjectPage from "../../../portfolio/components/ProjectPage";

export const metadata = {
  title: "Retiro Contemporáneo — Siamo Design",
  description:
    "Modern architecture with refined, high-end materials in a contemporary retreat by Siamo Design.",
};

export default function RetiroContemporaneoPageEs() {
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
        alt: "Living room interior",
      },
      isSquare: true,
      duoImages: [
        {
          src: "/assets/retiro-contemporaneo/living-room-1.png",
          alt: "Living room detail 1",
        },
        {
          src: "/assets/retiro-contemporaneo/living-room-5.png",
          alt: "Living room detail 2",
        },
      ],
      secondaryImage: {
        src: "/assets/retiro-contemporaneo/living-room-4.png",
        alt: "Living room detail secondary",
        isSquare: true,
      },
    },
    {
      title: "Dormitorio",
      mainImage: {
        src: "/assets/retiro-contemporaneo/bedroom-1.png",
        alt: "Bedroom interior",
      },
      isSquare: true,
      duoImages: [
        { src: "/assets/retiro-contemporaneo/bedroom-3.png", alt: "Bedroom detail 1" },
        { src: "/assets/retiro-contemporaneo/bedroom-4.png", alt: "Bedroom detail 2" },
      ],
    },
    {
      title: "Plano Amueblado En 2D",
      mainImage: {
        src: "/assets/retiro-contemporaneo/floor-plan.png",
        alt: "2D furnished floor plan",
      },
      isFloorplan: true,
    },
    {
      title: "Resumen del Proyecto",
      description:
        "Este departamento en Puerto Cancún fue diseñado para los padres jubilados de mi cliente, con el objetivo de crear un hogar sereno, cómodo y fácil de habitar. La propuesta combina arquitectura contemporánea, materiales refinados y una paleta neutra para lograr una estética cálida, elegante y atemporal. Cada detalle—desde la distribución hasta la iluminación—fue cuidadosamente seleccionado para construir un ambiente acogedor y funcional, ideal para disfrutar esta nueva etapa con tranquilidad.",
    },
  ];

  const featuredProjects = [
    {
      title: "Naturaleza Atemporal",
      location: "Puerto Morelos",
      summary: "Una fusión atemporal entre elementos naturales y diseño contemporáneo.",
      image: "/assets/timeless-nature/living-room-19.jpg",
      href: "/portfolio/timeless-nature",
    },
    {
      title: "Raices Tulum",
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
      text: "Layered neutrals and warm materials that invite you to linger.",
    },
    {
      image: "/assets/img/post2.jpeg",
      text: "Warm wood, teal ceramics, and soft lighting for a serene dining nook.",
    },
    {
      image: "/assets/img/post3.jpeg",
      text: "Ocean-view terrace with teak furnishings and soft blue textiles.",
    },
    {
      image: "/assets/img/post4.jpeg",
      text: "Terrace detail",
    },
    {
      image: "/assets/img/post5.jpeg",
      text: "Open-concept kitchen and dining with brass accents.",
    },
    {
      image: "/assets/img/post6.jpeg",
      text: "Gallery hallway with lantern pendants and warm marble floors.",
    },
  ];

  return (
    <ProjectPage
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
          <a href="https://donebyelevator.com" target="_blank" rel="noopener noreferrer">
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
        bookConsultation: "Agenda una consulta",
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
        location: "Cacun",
        workLinkHref: "/contact",
        shareLinks: [
          { label: "Facebook", href: "#", aria: "Share on Facebook" },
          { label: "Pinterest", href: "#", aria: "Share on Pinterest" },
          { label: "Email", href: "#", aria: "Share via Email" },
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
  );
}
