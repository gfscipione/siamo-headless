import ProjectPage from "../components/ProjectPage";

export const metadata = {
  title: "Contemporary Retreat — Siamo Design",
  description: "Modern architecture with refined, high-end materials in a contemporary retreat by Siamo Design.",
};

export default function ContemporaryRetreatPage() {
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

  const contents = ["Living Room", "Bedroom", "2D Furnished Floor Plan"];

  const sections = [
    {
      title: "Living Room",
      mainImage: {
        src: "/assets/retiro-contemporaneo/living-room-2.png",
        alt: "Living room interior",
      },
      isSquare: true,
      duoImages: [
        { src: "/assets/retiro-contemporaneo/living-room-1.png", alt: "Living room detail 1" },
        { src: "/assets/retiro-contemporaneo/living-room-5.png", alt: "Living room detail 2" },
      ],
      secondaryImage: {
        src: "/assets/retiro-contemporaneo/living-room-4.png",
        alt: "Living room detail secondary",
        isSquare: true,
      },
    },
    {
      title: "Bedroom",
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
      title: "2D Furnished Floor Plan",
      mainImage: {
        src: "/assets/retiro-contemporaneo/floor-plan.png",
        alt: "2D furnished floor plan",
      },
      isFloorplan: true,
    },
  ];

  const featuredProjects = [
    {
      title: "Hillside Room",
      location: "Playa del Carmen",
      summary: "Layered neutrals with brass accents and custom upholstery.",
      image: "/assets/img/post1.jpeg",
    },
    {
      title: "Casa Maranta",
      location: "Tulum",
      summary: "Textural ceramics, soft drapery, and dried botanicals.",
      image: "/assets/img/post2.jpeg",
    },
    {
      title: "Warm Lodge",
      location: "Cancún",
      summary: "Moody lighting, leather seating, and stone fireplace.",
      image: "/assets/img/post3.jpeg",
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
      title="Contemporary Retreat"
      styleVars={styleVars}
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
      footerStyleVars={{
        ['--footer-lift' as any]: "0px",
        ['--footer-overlap' as any]: "0px",
        ['--footer-pad-top-mobile' as any]: "0px",
        ['--footer-pad-bottom-mobile' as any]: "18px",
        ['--footer-overlap-mobile' as any]: "0px",
        ['--footer-h' as any]: "200px",
        ['--footer-bottom-maxw' as any]: "1100px",
      }}
    />
  );
}
