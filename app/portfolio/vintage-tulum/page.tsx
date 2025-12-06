import ProjectPage from "../components/ProjectPage";

export const metadata = {
  title: "Vintage Tulum — Siamo Design",
  description: "A vintage-inspired retreat in Tulum blending natural textures with warm character.",
};

export default function VintageTulumPage() {
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

  const contents = ["Living Salon", "Bedroom Suite", "Outdoor Terrace"];

  const sections = [
    {
      title: "Living Salon",
      mainImage: {
        src: "/assets/vintage-tulum/kitchen-2.jpg",
        alt: "Vintage Tulum living area with kitchen view",
      },
      isSquare: true,
      duoImages: [
        { src: "/assets/vintage-tulum/living-room-3.jpg", alt: "Vertical view of living room vignette" },
        { src: "/assets/vintage-tulum/details-5.jpg", alt: "Vertical detail with pendant lighting" },
      ],
      secondaryImage: {
        src: "/assets/vintage-tulum/living-room-2.jpg",
        alt: "Horizontal view of living room with seating",
        isSquare: true,
      },
      extraImages: [
        {
          src: "/assets/vintage-tulum/living-terrace-1.jpg",
          alt: "Living terrace view with seating",
          isSquare: true,
        },
      ],
    },
    {
      title: "Bedroom Suite",
      mainImage: {
        src: "/assets/vintage-tulum/bedroom-3.jpg",
        alt: "Bedroom suite with layered neutrals and textiles",
      },
      isSquare: true,
      duoImages: [
        { src: "/assets/vintage-tulum/bedroom-2.jpg", alt: "Bedside detail with ceramic lamp" },
        { src: "/assets/vintage-tulum/details-1.jpg", alt: "Drapery and woven pendant detail" },
      ],
    },
    {
      title: "Outdoor Terrace",
      mainImage: {
        src: "/assets/vintage-tulum/terrace-1.jpg",
        alt: "Outdoor terrace with dining and natural finishes",
      },
      isSquare: true,
      extraImages: [
        {
          src: "/assets/vintage-tulum/terrace-2.jpg",
          alt: "Outdoor terrace secondary view",
          isSquare: true,
        },
      ],
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
      title="Vintage Tulum"
      styleVars={styleVars}
      hero={{
        backgroundImage: "/assets/vintage-tulum/details-4.jpg",
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
