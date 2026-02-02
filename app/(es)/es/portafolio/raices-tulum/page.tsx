import ProjectPage from "../../../../(en)/portfolio/components/ProjectPage";

export const metadata = {
  title: "Raíces Tulum — Siamo Design",
  description: "Una expresión atemporal de materiales puros y naturales.",
  alternates: {
    canonical: "/es/portafolio/raices-tulum/",
    languages: {
      "en": "/portfolio/roots-tulum/",
      "es": "/es/portafolio/raices-tulum/",
      "x-default": "/portfolio/roots-tulum/",
    },
  },
};

export default function RaicesTulumPageEs() {
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
    "Suite Principal",
    "Dormitorio de Invitados",
    "Baños",
    "Terraza",
    "Plano Amueblado En 2D",
    "Resumen del Proyecto",
  ];

  const sections = [
    {
      title: "Sala",
      mainImage: {
        src: "/assets/raices-tulum/living-room-6.jpg",
        alt: "Sala con materiales naturales",
      },
      isSquare: true,
      duoImages: [
        { src: "/assets/raices-tulum/living-room-2.jpg", alt: "Detalle vertical de la sala" },
        { src: "/assets/raices-tulum/living-room-5.jpg", alt: "Texturas y materiales en la sala" },
      ],
    },
    {
      title: "Suite Principal",
      mainImage: {
        src: "/assets/raices-tulum/bedroom-6.jpg",
        alt: "Suite principal con tonos neutros",
      },
      isSquare: true,
      duoImages: [
        { src: "/assets/raices-tulum/bedroom-8.jpg", alt: "Detalle junto a la cama" },
        { src: "/assets/raices-tulum/bedroom-7.jpg", alt: "Vista vertical de la suite principal" },
      ],
    },
    {
      title: "Dormitorio de Invitados",
      mainImage: {
        src: "/assets/raices-tulum/bedroom-3.jpg",
        alt: "Dormitorio de invitados con tonos cálidos",
      },
      isSquare: true,
      duoImages: [
        { src: "/assets/raices-tulum/bedroom-4.jpg", alt: "Detalle vertical del dormitorio de invitados" },
        { src: "/assets/raices-tulum/bedroom-5.jpg", alt: "Vista vertical del dormitorio de invitados" },
      ],
      secondaryImage: {
        src: "/assets/raices-tulum/bedroom-2.jpg",
        alt: "Ángulo secundario del dormitorio de invitados",
        isSquare: true,
      },
    },
    {
      title: "Baños",
      mainImage: {
        src: "/assets/raices-tulum/bathroom-1.jpg",
        alt: "Baño con texturas naturales",
      },
      isSquare: true,
      duoImages: [{ src: "/assets/raices-tulum/bathroom-2.jpg", alt: "Vista vertical del baño" }],
    },
    {
      title: "Terraza",
      mainImage: {
        src: "/assets/raices-tulum/terrace-1.jpg",
        alt: "Terraza con vegetación",
      },
      isSquare: true,
    },
    {
      title: "Plano Amueblado En 2D",
      mainImage: {
        src: "/assets/raices-tulum/floor-plan.png",
        alt: "Plano amueblado en 2D",
      },
      isFloorplan: true,
    },
    {
      title: "Resumen del Proyecto",
      description:
        "Raíces Tulum celebra la autenticidad de los materiales naturales en su forma más pura. Madera sólida, fibras tejidas y detalles en soga se combinan con tonos gris plomo y verde hoja para crear un espacio cálido, con carácter y sofisticación. El resultado: un interior orgánico y contemporáneo, diseñado para sentirse único, funcional y memorable —ideal para una casa de descanso o renta vacacional en Tulum.",
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
      title: "Olas Mid-Century",
      location: "Akumal",
      summary: "Un refugio sereno y lleno de textura, diseñado con tonos cálidos y una calma costera.",
      image: "/assets/mid-century-waves/terrace-1.jpg",
      href: "/es/portafolio/mid-century-waves",
    },
    {
      title: "Casa Tuluminati",
      location: "Cancún",
      summary: "Una celebración de materiales naturales y artesanía local.",
      image: "/assets/tuluminati-house/living-room-7.jpg",
      href: "/portfolio/tuluminati-house",
    },
  ];

  const socialItems = [
    { image: "/assets/img/post1.jpeg", text: "Layered neutrals and warm materials that invite you to linger." },
    { image: "/assets/img/post2.jpeg", text: "Warm wood, teal ceramics, and soft lighting for a serene dining nook." },
    { image: "/assets/img/post3.jpeg", text: "Ocean-view terrace with teak furnishings and soft blue textiles." },
    { image: "/assets/img/post4.jpeg", text: "Terrace detail" },
    { image: "/assets/img/post5.jpeg", text: "Open-concept kitchen and dining with brass accents." },
    { image: "/assets/img/post6.jpeg", text: "Gallery hallway with lantern pendants and warm marble floors." },
  ];

  return (
    <ProjectPage
      title="Raíces Tulum"
      styleVars={styleVars}
      navLabels={{
        getToKnowUs: "CONÓCENOS",
        services: "SERVICIOS",
        portfolio: "PORTAFOLIO",
        langDesktop: "ENGLISH",
        langMobile: "EN",
        cta: "CONTÁCTANOS",
      }}
      navLangHref="/portfolio/roots-tulum"
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
      footerLegal={{
        line1: <span className="legal-full">Siamo Design | Estudio de diseño de interiores</span>,
        line2: <span className="legal-full">© 2025 Siamo Design. Todos los derechos reservados.</span>,
        sig: (
          <a href="https://donebyelevator.com" target="_blank" rel="noopener noreferrer">
            Diseñado y desarrollado por Elevator
          </a>
        ),
      }}
      hero={{
        backgroundImage: "/assets/raices-tulum/bedroom-6.jpg",
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
