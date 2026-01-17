import ProjectPage from "../components/ProjectPage";

export const metadata = {
  title: "Mayan Sanctuary — Siamo Design",
  description: "A serene retreat blending limestone, local craft, and lush greenery into a calm sanctuary.",
};

export default function MayanSanctuaryPage() {
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
    "Dining Room",
    "Main Lounge",
    "Kitchen",
    "Master Bedroom",
    "Guest Suite",
    "Pool Terrace",
    "Lounge Terrace",
    "Media Room",
    "Kids Suite",
  ];

  const sections = [
    {
      title: "Dining Room",
      mainImage: {
        src: "/assets/mayan-sanctuary/dining-room-3.webp",
        alt: "Dining room with limestone walls and crafted table",
      },
      isSquare: true,
      duoImages: [
        { src: "/assets/mayan-sanctuary/dining-room-1.webp", alt: "Dining room corner with greenery" },
        { src: "/assets/mayan-sanctuary/dining-room-4.webp", alt: "Dining room detail with textiles" },
      ],
    },
    {
      title: "Main Lounge",
      mainImage: {
        src: "/assets/mayan-sanctuary/main-lounge-4.webp",
        alt: "Main lounge with layered seating and woven textures",
      },
      isSquare: true,
      duoImages: [
        { src: "/assets/mayan-sanctuary/main-lounge-1.webp", alt: "Main lounge corner with soft lighting" },
        { src: "/assets/mayan-sanctuary/main-lounge-2.webp", alt: "Main lounge vignette with greenery" },
      ],
      secondaryImage: {
        src: "/assets/mayan-sanctuary/main-lounge-5.webp",
        alt: "Alternate perspective of the main lounge",
        isSquare: true,
      },
    },
    {
      title: "Kitchen",
      mainImage: {
        src: "/assets/mayan-sanctuary/kitchen-3.webp",
        alt: "Kitchen with warm wood and limestone textures",
      },
      isSquare: true,
      duoImages: [
        { src: "/assets/mayan-sanctuary/kitchen-1.webp", alt: "Kitchen shelving detail" },
        { src: "/assets/mayan-sanctuary/kitchen-2.webp", alt: "Countertop material close-up" },
      ],
    },
    {
      title: "Master Bedroom",
      mainImage: {
        src: "/assets/mayan-sanctuary/master-bedroom-1.webp",
        alt: "Master bedroom with layered linens and woven accents",
      },
      isSquare: true,
      duoImages: [
        { src: "/assets/mayan-sanctuary/master-bedroom-7.webp", alt: "Master bedroom bedside detail with sconce" },
        { src: "/assets/mayan-sanctuary/master-bedroom-8.webp", alt: "Master bedroom seating nook" },
      ],
      secondaryImage: {
        src: "/assets/mayan-sanctuary/master-bedroom-3.webp",
        alt: "Master bedroom alternate angle",
        isSquare: true,
      },
    },
    {
      title: "Guest Suite",
      mainImage: {
        src: "/assets/mayan-sanctuary/guest-room-1.webp",
        alt: "Guest suite with natural linens and greenery",
      },
      isSquare: true,
    },
    {
      title: "Pool Terrace",
      mainImage: {
        src: "/assets/mayan-sanctuary/pool-terrace-1.webp",
        alt: "Pool terrace with lounge seating and greenery",
      },
      isSquare: true,
      duoImages: [
        { src: "/assets/mayan-sanctuary/pool-terrace-2.webp", alt: "Pool terrace lounge corner" },
        { src: "/assets/mayan-sanctuary/pool-terrace-3.webp", alt: "Pool terrace dining area" },
      ],
    },
    {
      title: "Lounge Terrace",
      mainImage: {
        src: "/assets/mayan-sanctuary/lounge-terrace-3.webp",
        alt: "Lounge terrace with woven seating and greenery",
      },
      isSquare: true,
      duoImages: [
        { src: "/assets/mayan-sanctuary/lounge-terrace-1.webp", alt: "Lounge terrace seating corner" },
        { src: "/assets/mayan-sanctuary/lounge-terrace-2.webp", alt: "Lounge terrace dining view" },
      ],
    },
    {
      title: "Media Room",
      mainImage: {
        src: "/assets/mayan-sanctuary/media-room-2.webp",
        alt: "Media room with plush seating and warm lighting",
      },
      isSquare: true,
      duoImages: [
        { src: "/assets/mayan-sanctuary/media-room-4.webp", alt: "Media room corner with sconces" },
        { src: "/assets/mayan-sanctuary/media-room-8.webp", alt: "Media room vignette" },
      ],
      secondaryImage: {
        src: "/assets/mayan-sanctuary/media-room-5.webp",
        alt: "Media room alternative angle",
        isSquare: true,
      },
    },
    {
      title: "Kids Suite",
      mainImage: {
        src: "/assets/mayan-sanctuary/kids-suite-1.webp",
        alt: "Kids suite with playful textiles",
      },
      isSquare: true,
      secondaryImage: {
        src: "/assets/mayan-sanctuary/kids-suite-2.webp",
        alt: "Kids suite material mix",
        isSquare: true,
      },
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
      title: "Soul in Concrete",
      location: "Tulum",
      summary: "Brutalist warmth with sculpted concrete volumes and soft, textural layers.",
      image: "/assets/soul-in-concrete/master-bedroom-4.webp",
      href: "/portfolio/soul-in-concrete",
    },
    {
      title: "Roots Tulum",
      location: "Tulum",
      summary: "A timeless expression of pure, natural materials.",
      image: "/assets/raices-tulum/bedroom-4.jpg",
      href: "/portfolio/roots-tulum",
    },
  ];

  const socialItems = [
    { image: "/assets/mayan-sanctuary/dining-room-1.webp", text: "Limestone dining bathed in light." },
    { image: "/assets/mayan-sanctuary/kitchen-1.webp", text: "Kitchen warmth with crafted wood." },
    { image: "/assets/mayan-sanctuary/guest-room-1.webp", text: "Guest suite calm in neutral tones." },
    { image: "/assets/mayan-sanctuary/kids-suite-1.webp", text: "Playful suite with woven textures." },
    { image: "/assets/mayan-sanctuary/details-3.webp", text: "Materiality in stone and fiber." },
  ];

  return (
    <ProjectPage
      title="Mayan Sanctuary"
      styleVars={styleVars}
      hero={{
        backgroundImage: "/assets/mayan-sanctuary/details-1.webp",
        titleSize: "64px",
        titleSizeMobile: "50px",
        align: "center",
        padTopDesktopPx: 200,
        padBottom: "clamp(5rem, 10vh, 8rem)",
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
