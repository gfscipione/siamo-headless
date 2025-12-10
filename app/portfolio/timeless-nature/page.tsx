import ProjectPage from "../components/ProjectPage";

export const metadata = {
  title: "Timeless Nature — Siamo Design",
  description: "Natural elements paired with contemporary lines for a serene retreat in Tulum.",
};

export default function TimelessNaturePage() {
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
    "Master Bedroom",
    "Guest Bedroom",
    "2D Furnished Floor Plan",
  ];

  const sections = [
    {
      title: "Living Room",
      mainImage: {
        src: "/assets/timeless-nature/living-room-13.jpg",
        alt: "Living room with layered natural textures",
      },
      isSquare: true,
      duoImages: [
        { src: "/assets/timeless-nature/living-room-1.jpg", alt: "Living room vertical detail" },
        { src: "/assets/timeless-nature/living-room-4.png", alt: "Living room vertical view with natural light" },
      ],
      secondaryImage: {
        src: "/assets/timeless-nature/living-room-14.jpg",
        alt: "Secondary living room perspective",
        isSquare: true,
      },
    },
    {
      title: "Master Bedroom",
      mainImage: {
        src: "/assets/timeless-nature/master-bedroom-1.jpg",
        alt: "Master bedroom with calm natural palette",
      },
      isSquare: true,
      duoImages: [
        { src: "/assets/timeless-nature/master-bedroom-4.jpg", alt: "Master bedroom bedside vignette" },
        { src: "/assets/timeless-nature/master-bedroom-3.jpg", alt: "Master bedroom textured wall detail" },
      ],
      secondaryImage: {
        src: "/assets/timeless-nature/master-bedroom-3.jpg",
        alt: "Master bedroom alternate angle",
        isSquare: true,
      },
    },
    {
      title: "Guest Bedroom",
      mainImage: {
        src: "/assets/timeless-nature/guest-bedroom-8.jpg",
        alt: "Guest bedroom with warm textiles",
      },
      isSquare: true,
      duoImages: [
        { src: "/assets/timeless-nature/guest-bedroom-7.jpg", alt: "Guest bedroom bedside detail" },
        { src: "/assets/timeless-nature/guest-bedroom-9.jpg", alt: "Guest bedroom vertical view" },
      ],
    },
    {
      title: "2D Furnished Floor Plan",
      mainImage: {
        src: "/assets/timeless-nature/floor-plan.png",
        alt: "2D furnished floor plan",
      },
      isFloorplan: true,
    },
  ];

  const featuredProjects = [
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
    {
      title: "Tuluminati House",
      location: "Cancún",
      summary: "A celebration of Tulum’s natural materials and local craftsmanship.",
      image: "/assets/tuluminati-house/living-room-7.jpg",
      href: "/portfolio/tuluminati-house",
    },
  ];

  const socialItems = [
    { image: "/assets/timeless-nature/living-room-12.jpg", text: "Textural living room moment." },
    { image: "/assets/timeless-nature/living-room-16.jpg", text: "Layered seating vignette." },
    { image: "/assets/timeless-nature/master-bedroom-2.jpg", text: "Serene master bedroom detail." },
    { image: "/assets/timeless-nature/living-room-17.jpg", text: "Natural materials composition." },
    { image: "/assets/timeless-nature/master-bedroom-5.jpg", text: "Warm bedside styling." },
    { image: "/assets/timeless-nature/guest-bedroom-8.jpg", text: "Guest suite textures." },
  ];

  return (
    <ProjectPage
      title="Timeless Nature"
      styleVars={styleVars}
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
