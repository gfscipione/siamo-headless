import ProjectPage from "../components/ProjectPage";

export const metadata = {
  title: "Roots Tulum — Siamo Design",
  description: "A timeless expression of pure, natural materials.",
};

export default function RootsTulumPage() {
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
    "Living Room",
    "Primary Suite",
    "Guest Room",
    "Bathrooms",
    "Terrace",
    "2D Furnished Floor Plan",
  ];

  const sections = [
    {
      title: "Living Room",
      mainImage: {
        src: "/assets/raices-tulum/living-room-6.jpg",
        alt: "Living room with natural materials",
      },
      isSquare: true,
      duoImages: [
        { src: "/assets/raices-tulum/living-room-2.jpg", alt: "Living room vertical vignette" },
        { src: "/assets/raices-tulum/living-room-5.jpg", alt: "Living room vertical detail" },
      ],
    },
    {
      title: "Primary Suite",
      mainImage: {
        src: "/assets/raices-tulum/bedroom-6.jpg",
        alt: "Primary bedroom with layered neutrals",
      },
      isSquare: true,
      duoImages: [
        { src: "/assets/raices-tulum/bedroom-8.jpg", alt: "Primary bedroom bedside detail" },
        { src: "/assets/raices-tulum/bedroom-7.jpg", alt: "Primary bedroom vertical view" },
      ],
    },
    {
      title: "Guest Room",
      mainImage: {
        src: "/assets/raices-tulum/bedroom-3.jpg",
        alt: "Guest bedroom with coastal tones",
      },
      isSquare: true,
      duoImages: [
        { src: "/assets/raices-tulum/bedroom-4.jpg", alt: "Guest room vertical detail" },
        { src: "/assets/raices-tulum/bedroom-5.jpg", alt: "Guest room vertical view" },
      ],
      secondaryImage: {
        src: "/assets/raices-tulum/bedroom-2.jpg",
        alt: "Guest bedroom secondary angle",
        isSquare: true,
      },
    },
    {
      title: "Bathrooms",
      mainImage: {
        src: "/assets/raices-tulum/bathroom-1.jpg",
        alt: "Bathroom with natural textures",
      },
      isSquare: true,
      duoImages: [
        { src: "/assets/raices-tulum/bathroom-2.jpg", alt: "Bathroom vertical view" },
      ],
    },
    {
      title: "Terrace",
      mainImage: {
        src: "/assets/raices-tulum/terrace-1.jpg",
        alt: "Terrace with greenery",
      },
      isSquare: true,
    },
    {
      title: "2D Furnished Floor Plan",
      mainImage: {
        src: "/assets/raices-tulum/floor-plan.png",
        alt: "2D furnished floor plan",
      },
      isFloorplan: true,
    },
  ];

  const featuredProjects = [
    {
      title: "Timeless Nature",
      location: "Puerto Morelos",
      summary: "A timeless blend of natural elements and contemporary design.",
      image: "/assets/timeless-nature/living-room-19.jpg",
      href: "/portfolio/timeless-nature",
    },
    {
      title: "Mid-Century Waves",
      location: "Akumal",
      summary: "A calm, textural retreat shaped around warm tones and coastal serenity.",
      image: "/assets/mid-century-waves/terrace-1.jpg",
      href: "/portfolio/mid-century-waves",
    },
    {
      title: "Tuluminati House",
      location: "Cancún",
      summary: "A celebration of Tulum’s natural materials and local craftsmanship.",
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
      title="Roots Tulum"
      styleVars={styleVars}
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
