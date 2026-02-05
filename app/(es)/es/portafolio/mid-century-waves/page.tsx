import ProjectPage from "../../../../(en)/portfolio/components/ProjectPage";

export const metadata = {
  title: "Olas Mid-Century — Siamo Design",
  description:
    "Un refugio sereno y lleno de textura, diseñado con tonos cálidos y una calma costera en Akumal.",
  alternates: {
    canonical: "/es/portafolio/mid-century-waves/",
    languages: {
      "en": "/portfolio/mid-century-waves/",
      "es": "/es/portafolio/mid-century-waves/",
      "x-default": "/portfolio/mid-century-waves/",
    },
  },
};

export default function MidCenturyWavesPageEs() {
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
    "Dormitorio Principal y Balcón",
    "Dormitorio Doble de Invitados",
    "Terraza",
    "Plano Amueblado En 2D",
    "Resumen del Proyecto",
  ];

  const sections = [
    {
      title: "Sala",
      mainImage: {
        src: "/assets/mid-century-waves/living-room-1.jpg",
        alt: "Sala inspirada en el estilo mid-century",
      },
      isSquare: true,
      duoImages: [
        { src: "/assets/mid-century-waves/living-room-2.jpg", alt: "Vista vertical de la sala" },
        { src: "/assets/mid-century-waves/living-room-12.jpg", alt: "Texturas y detalles de la sala" },
      ],
      secondaryImage: {
        src: "/assets/mid-century-waves/living-room-11.jpg",
        alt: "Vista secundaria de la sala",
        isSquare: true,
      },
    },
    {
      title: "Dormitorio Principal y Balcón",
      mainImage: {
        src: "/assets/mid-century-waves/master-bedroom-2.jpg",
        alt: "Dormitorio principal con tonos cálidos y acentos costeros",
      },
      isSquare: true,
      duoImages: [
        { src: "/assets/mid-century-waves/master-bedroom-1.jpg", alt: "Vista vertical del dormitorio principal" },
        { src: "/assets/mid-century-waves/balcony-2.jpg", alt: "Vista vertical del balcón con área de estar" },
      ],
      secondaryImage: {
        src: "/assets/mid-century-waves/balcony-1.jpg",
        alt: "Vista horizontal del balcón",
        isSquare: true,
      },
    },
    {
      title: "Dormitorio Doble de Invitados",
      mainImage: {
        src: "/assets/mid-century-waves/bedroom-2.jpg",
        alt: "Dormitorio doble de invitados con tonos cálidos",
      },
      isSquare: true,
      secondaryImage: {
        src: "/assets/mid-century-waves/bedroom-4.jpg",
        alt: "Vista adicional del dormitorio doble de invitados",
        isSquare: true,
      },
    },
    {
      title: "Terraza",
      mainImage: {
        src: "/assets/mid-century-waves/terrace-12.jpg",
        alt: "Terraza con estilo costero",
      },
      isSquare: true,
      duoImages: [
        { src: "/assets/mid-century-waves/terrace-1.jpg", alt: "Vista vertical de la terraza" },
        { src: "/assets/mid-century-waves/terrace-8.jpg", alt: "Detalle vertical de la terraza" },
      ],
      secondaryImage: {
        src: "/assets/mid-century-waves/terrace-3.jpg",
        alt: "Vista adicional de la terraza",
        isSquare: true,
      },
    },
    {
      title: "Plano Amueblado En 2D",
      mainImage: {
        src: "/assets/mid-century-waves/floor-plan.png",
        alt: "Plano amueblado en 2D",
      },
      isFloorplan: true,
    },
    {
      title: "Resumen del Proyecto",
      description:
        "Una fusión del estilo mid-century con la frescura del diseño costero en un departamento frente al mar en Akumal. Madera local y acabados contemporáneos se combinan con acentos en naranjas y azules para reflejar la energía y la calma del océano. El resultado: un lujo relajado, sereno y atemporal, inspirado en la estética de los años 50.",
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
      title: "Raíces Tulum",
      location: "Tulum",
      summary: "Una expresión atemporal de materiales puros y naturales.",
      image: "/assets/raices-tulum/bedroom-4.jpg",
      href: "/es/portafolio/raices-tulum",
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
      title="Olas Mid-Century"
      styleVars={styleVars}
      navLabels={{
        getToKnowUs: "CONÓCENOS",
        services: "SERVICIOS",
        portfolio: "PORTAFOLIO",
        langDesktop: "ENGLISH",
        langMobile: "EN",
        cta: "CONTÁCTANOS",
      }}
      navLangHref="/portfolio/mid-century-waves"
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
          <a href="https://donebyelevator.com/website-redesign-service" target="_blank" rel="noopener noreferrer sponsored">
            Diseñado y desarrollado por Elevator
          </a>
        ),
      }}
      hero={{
        backgroundImage: "/assets/mid-century-waves/terrace-12.jpg",
        titleSize: "64px",
        titleSizeMobile: "50px",
        align: "center",
        padTopDesktopPx: 140,
        padBottom: "clamp(4rem, 8vh, 7rem)",
        contentPadX: "24px",
      }}
      contents={contents}
      meta={{
        location: "Akumal",
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
