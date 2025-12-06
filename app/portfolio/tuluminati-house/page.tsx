import ProjectPage from "../components/ProjectPage";

export const metadata = {
  title: "Tuluminati House — Siamo Design",
  description: "A celebration of Tulum’s natural materials and local craftsmanship.",
};

export default function TuluminatiHousePage() {
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
    "Living Room & Balcony",
    "Primary Suite",
    "Guest Room",
    "Bathrooms",
    "Terrace",
    "2D Furnished Floor Plan",
  ];

  const sections = [
    {
      title: "Living Room & Balcony",
      mainImage: {
        src: "/assets/tuluminati-house/living-room-9.jpg",
        alt: "Living room with natural textures and warm tones",
      },
      isSquare: true,
      duoImages: [
        { src: "/assets/tuluminati-house/living-room-2.jpg", alt: "Living room vertical vignette" },
        { src: "/assets/tuluminati-house/balcony-1.jpg", alt: "Living room vertical detail" },
      ],
      secondaryImage: {
        src: "/assets/tuluminati-house/living-room-4.jpg",
        alt: "Secondary living room view",
        isSquare: true,
      },
      extraImages: [
        {
          src: "/assets/tuluminati-house/living-room-5.jpg",
          alt: "Additional living room detail",
          isSquare: true,
        },
      ],
    },
    {
      title: "Primary Suite",
      mainImage: {
        src: "/assets/tuluminati-house/bedroom-1.jpg",
        alt: "Primary bedroom with layered neutrals",
      },
      isSquare: true,
      duoImages: [
        { src: "/assets/tuluminati-house/bedroom-6.jpg", alt: "Primary bedroom bedside detail" },
        { src: "/assets/tuluminati-house/bedroom-7.jpg", alt: "Primary bedroom vertical view" },
      ],
      secondaryImage: {
        src: "/assets/tuluminati-house/details-1.jpg",
        alt: "Primary bedroom secondary detail",
        isSquare: true,
      },
    },
    {
      title: "Guest Room",
      mainImage: {
        src: "/assets/tuluminati-house/bedroom-4.jpg",
        alt: "Guest bedroom with coastal tones",
      },
      isSquare: true,
      duoImages: [
        { src: "/assets/tuluminati-house/bedroom-3.jpg", alt: "Guest room vertical detail" },
        { src: "/assets/tuluminati-house/details-2.jpg", alt: "Textural bedside detail" },
      ],
    },
    {
      title: "Bathrooms",
      duoImages: [
        { src: "/assets/tuluminati-house/bathroom-2.jpg", alt: "Bathroom vertical view" },
        { src: "/assets/tuluminati-house/bathroom-1.jpg", alt: "Shower detail with warm tones" },
      ],
    },
    {
      title: "Terrace",
      mainImage: {
        src: "/assets/tuluminati-house/terrace-1.jpg",
        alt: "Terrace with woven accents and greenery",
      },
      isSquare: true,
      duoImages: [
        { src: "/assets/tuluminati-house/terrace-7.jpg", alt: "Vertical terrace view" },
        { src: "/assets/tuluminati-house/terrace-8.jpg", alt: "Vertical terrace seating detail" },
      ],
      secondaryImage: {
        src: "/assets/tuluminati-house/terrace-4.jpg",
        alt: "Additional terrace view",
        isSquare: true,
      },
      extraImages: [
        {
          src: "/assets/tuluminati-house/terrace-5.jpg",
          alt: "Balcony detail with chair",
          isSquare: true,
        },
      ],
    },
    {
      title: "2D Furnished Floor Plan",
      mainImage: {
        src: "/assets/tuluminati-house/floor-plan.png",
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
      title: "Roots Tulum",
      location: "Tulum",
      summary: "A timeless expression of pure, natural materials.",
      image: "/assets/raices-tulum/bedroom-4.jpg",
      href: "/portfolio/roots-tulum",
    },
    {
      title: "Mid-Century Waves",
      location: "Akumal",
      summary: "A calm, textural retreat shaped around warm tones and coastal serenity.",
      image: "/assets/mid-century-waves/terrace-1.jpg",
      href: "/portfolio/mid-century-waves",
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
      title="Tuluminati House"
      styleVars={styleVars}
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
