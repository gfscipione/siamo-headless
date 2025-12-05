import ProjectPage from "../components/ProjectPage";

export const metadata = {
  title: "Mid-Century Waves — Siamo Design",
  description: "A calm, textural retreat shaped around warm tones and coastal serenity in Akumal.",
};

export default function MidCenturyWavesPage() {
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
    "Master Bedroom & Balcony",
    "Double Guest Room",
    "Terrace",
    "2D Furnished Floor Plan",
  ];

  const sections = [
    {
      title: "Living Room",
      mainImage: {
        src: "/assets/mid-century-waves/living-room-1.jpg",
        alt: "Mid-century inspired living room",
      },
      isSquare: true,
      duoImages: [
        { src: "/assets/mid-century-waves/living-room-2.jpg", alt: "Vertical view of living room vignette" },
        { src: "/assets/mid-century-waves/living-room-12.jpg", alt: "Vertical view of living room textures" },
      ],
      secondaryImage: {
        src: "/assets/mid-century-waves/living-room-11.jpg",
        alt: "Secondary living room view",
        isSquare: true,
      },
    },
    {
      title: "Master Bedroom & Balcony",
      mainImage: {
        src: "/assets/mid-century-waves/master-bedroom-2.jpg",
        alt: "Master bedroom with warm tones and coastal accents",
      },
      isSquare: true,
      duoImages: [
        { src: "/assets/mid-century-waves/master-bedroom-1.jpg", alt: "Master bedroom vertical view" },
        { src: "/assets/mid-century-waves/balcony-2.jpg", alt: "Balcony vertical view with seating" },
      ],
      secondaryImage: {
        src: "/assets/mid-century-waves/balcony-1.jpg",
        alt: "Horizontal view of balcony",
        isSquare: true,
      },
    },
    {
      title: "Double Guest Room",
      mainImage: {
        src: "/assets/mid-century-waves/bedroom-2.jpg",
        alt: "Double guest room with warm tones",
      },
      isSquare: true,
      secondaryImage: {
        src: "/assets/mid-century-waves/bedroom-4.jpg",
        alt: "Additional view of double guest room",
        isSquare: true,
      },
    },
    {
      title: "Terrace",
      mainImage: {
        src: "/assets/mid-century-waves/terrace-12.jpg",
        alt: "Terrace with coastal styling",
      },
      isSquare: true,
      duoImages: [
        { src: "/assets/mid-century-waves/terrace-1.JPG", alt: "Vertical view of terrace" },
        { src: "/assets/mid-century-waves/terrace-8.jpg", alt: "Vertical view of terrace detail" },
      ],
      secondaryImage: {
        src: "/assets/mid-century-waves/terrace-3.jpg",
        alt: "Additional terrace view",
        isSquare: true,
      },
    },
    {
      title: "2D Furnished Floor Plan",
      mainImage: {
        src: "/assets/mid-century-waves/floor-plan.png",
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
    { image: "/assets/img/post1.jpeg", text: "Layered neutrals and warm materials that invite you to linger." },
    { image: "/assets/img/post2.jpeg", text: "Warm wood, teal ceramics, and soft lighting for a serene dining nook." },
    { image: "/assets/img/post3.jpeg", text: "Ocean-view terrace with teak furnishings and soft blue textiles." },
    { image: "/assets/img/post4.jpeg", text: "Terrace detail" },
    { image: "/assets/img/post5.jpeg", text: "Open-concept kitchen and dining with brass accents." },
    { image: "/assets/img/post6.jpeg", text: "Gallery hallway with lantern pendants and warm marble floors." },
  ];

  return (
    <ProjectPage
      title="Mid-Century Waves"
      styleVars={styleVars}
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
