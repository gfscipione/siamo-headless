import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import PortfolioNav from "../../../components/PortfolioNav";
import FaqAccordion from "../../../components/FaqAccordion";
import HeroVideo from "../HeroVideo";
import { playfairFont, poppinsFont } from "../../../fonts";
import { getSiteUrl } from "../../../lib/siteUrl";

const canonicalPath = "/services/full-service/";
const yoastDescription =
  "Our design and project execution service combines the creativity of design with the practical experience of execution, achieving the materialization of spaces that reflect your style and are functional in your daily life with the help of professionals in design and project execution.";

export const metadata: Metadata = {
  title: { absolute: "Project Design and Execution - Siamo Design" },
  description: yoastDescription,
  alternates: {
    canonical: canonicalPath,
    languages: {
      en: canonicalPath,
      es: "/es/servicios/diseno-llave-en-mano/",
      "x-default": canonicalPath,
    },
  },
  openGraph: {
    type: "article",
    locale: "en_US",
    title: "Project Design and Execution - Siamo Design",
    description: yoastDescription,
    url: canonicalPath,
    images: [
      {
        url: "https://siamodesign.com/wp-content/uploads/2025/03/briefing.png",
        width: 64,
        height: 64,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function FullServicePage() {
  const siteUrl = getSiteUrl();
  const canonicalUrl = `${siteUrl}${canonicalPath}`;

  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": canonicalUrl,
        url: canonicalUrl,
        name: "Project Design and Execution - Siamo Design",
        isPartOf: { "@id": `${siteUrl}/#website` },
        primaryImageOfPage: { "@id": `${canonicalUrl}#primaryimage` },
        image: { "@id": `${canonicalUrl}#primaryimage` },
        thumbnailUrl: "https://siamodesign.com/wp-content/uploads/2025/03/briefing.png",
        datePublished: "2025-04-23T23:56:03+00:00",
        dateModified: "2025-04-24T00:00:41+00:00",
        description: yoastDescription,
        breadcrumb: { "@id": `${canonicalUrl}#breadcrumb` },
        inLanguage: "en",
        potentialAction: [
          {
            "@type": "ReadAction",
            target: [canonicalUrl],
          },
        ],
      },
      {
        "@type": "ImageObject",
        inLanguage: "en",
        "@id": `${canonicalUrl}#primaryimage`,
        url: "https://siamodesign.com/wp-content/uploads/2025/03/briefing.png",
        contentUrl: "https://siamodesign.com/wp-content/uploads/2025/03/briefing.png",
        width: 64,
        height: 64,
        caption: "Project Design and Execution",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl.replace(/\/$/, "")}/` },
          { "@type": "ListItem", position: 2, name: "Services", item: `${siteUrl.replace(/\/$/, "")}/services/` },
          { "@type": "ListItem", position: 3, name: "Project Design and Execution" },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl.replace(/\/$/, "")}/#website`,
        url: `${siteUrl.replace(/\/$/, "")}/`,
        name: "Siamo Design",
        description: "",
        publisher: { "@id": `${siteUrl.replace(/\/$/, "")}/#organization` },
        potentialAction: [
          {
            "@type": "SearchAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate: `${siteUrl.replace(/\/$/, "")}/?s={search_term_string}`,
            },
            "query-input": {
              "@type": "PropertyValueSpecification",
              valueRequired: true,
              valueName: "search_term_string",
            },
          },
        ],
        inLanguage: "en",
      },
      {
        "@type": "Organization",
        "@id": `${siteUrl.replace(/\/$/, "")}/#organization`,
        name: "Siamo Design",
        url: `${siteUrl.replace(/\/$/, "")}/`,
        logo: {
          "@type": "ImageObject",
          inLanguage: "en",
          "@id": `${siteUrl.replace(/\/$/, "")}/#/schema/logo/image/`,
          url: "https://siamodesign.com/wp-content/uploads/2024/03/cropped-9019c03768d3a9dc34a90a32adf82d72.png",
          contentUrl:
            "https://siamodesign.com/wp-content/uploads/2024/03/cropped-9019c03768d3a9dc34a90a32adf82d72.png",
          width: 499,
          height: 167,
          caption: "Siamo Design",
        },
        image: { "@id": `${siteUrl.replace(/\/$/, "")}/#/schema/logo/image/` },
      },
    ],
  };

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
    ["--wwd-title-w" as any]: "400",
    ["--nav-cta-padx" as any]: "42px",
    ["--nav-cta-pady" as any]: "14px",
    ["--hero-cta-padx-m" as any]: "22px",
    ["--hero-cta-pady-m" as any]: "8px",
    ["--nav-cta-bg" as any]: "#F4F2EA",
    ["--nav-cta-ink" as any]: "#111111",
    ["--nav-cta-bg-hover" as any]: "#F4F2EA",
  };

  const heroBgHeightPx = 390;

  const benefits = [
    {
      title: "Personalized Approach",
      copy: "Custom design plans tailored to your unique style and preferences.",
      icon: "bars",
    },
    {
      title: "Seamless Experience",
      copy: "End-to-end project management for a stress-free design journey.",
      icon: "arrows",
    },
    {
      title: "Expert Guidance",
      copy: "Benefit from our extensive industry knowledge and expertise.",
      icon: "bulb",
    },
  ];

  const deliverables = [
    {
      title: "Mood Board",
      copy: "An important foundation! Your designer will curate a group of images, colors, and design elements to inspire the look and concept of your project.",
      icon: "mood",
    },
    {
      title: "3D Modeling",
      copy: "See your space fully furnished and styled before making any purchases or starting fabrication. Through 3D modeling, our designers define every detail—selecting furniture based on your lifestyle, scale, color palette, and budget.",
      icon: "space",
    },
    {
      title: "Shopping List with Links",
      copy: "We’ll deliver a curated shopping list with direct links to each selected item, so you can implement it at your own pace.",
      icon: "leaf",
    },
    {
      title: "Project Documentation",
      copy: "The blueprint of your project. It includes technical drawings for fabrication, electrical, and installations—ensuring precise execution.",
      icon: "cabinet",
    },
    {
      title: "Purchasing & Vendor Coordination",
      copy: "Our team coordinates with vendors and warehouses to order, track, and resolve any issues related to your furniture and décor. You’ll have access to the status of every item.",
      icon: "checklist",
    },
    {
      title: "Project Management",
      copy: "We handle every detail from start to finish to keep your project organized, on time, and on track.",
      icon: "calendar",
    },
    {
      title: "Turnkey Installation",
      copy: "A full-service experience that includes delivery, assembly, and placement of furniture in your home, following the design plan in detail for a seamless final reveal.",
      icon: "key",
    },
    {
      title: "Professional Photography",
      copy: "A final photo shoot to document and showcase your finished project.",
      icon: "video",
    },
  ];

  const faqs = [
    {
      question: "What is the difference between Full Service Interior Design and Virtual Interior Design?",
      answer:
        "Full Service Interior Design involves larger scale projects and include in-person consultations, comprehensive project management, site visits, furniture procurement, and hands-on installation. Virtual Interior Design offers a more flexible, remote approach for one space at a time to create custom design plans and shopping lists that can be implemented on your own as time and budget allow.",
    },
    {
      question: "How do I know which service is right for me?",
      answer: (
        <>
          To help you choose the service that best fits you and your lifestyle, there are a few key
          factors to consider—your available time, the size and scope of the project, your budget,
          and how hands-on you’d like to be.
          <br />
          <br />
          If you’re short on time, you’re not located where the project is, or you simply want
          everything ready when you arrive without having to manage a thing, then our{" "}
          <a href="/services/full-service/" style={{ fontWeight: 600, textDecoration: "underline" }}>
            Full-Service Interior Design
          </a>{" "}
          is the ideal fit.
          <br />
          <br />
          If, on the other hand, you do have the time, prefer to execute your project in phases,
          you’re local, and you mainly need professional direction to bring your ideas into focus,
          then our{" "}
          <a
            href="/services/virtual-design/"
            style={{ fontWeight: 600, textDecoration: "underline" }}
          >
            Virtual Interior Design
          </a>{" "}
          is perfect for you.
        </>
      ),
    },
    {
      question: "How much do your design services cost?",
      answer: (
        <>
          Our fees vary depending on the scope of the project, the size of the spaces, and each
          client’s specific needs. We invite you to{" "}
          <a href="/questionnaire/" style={{ fontWeight: 600, textDecoration: "underline" }}>
            complete our questionnaire
          </a>{" "}
          to schedule a consultation—this helps us understand your project and prepare a personalized
          proposal, including a fixed design fee and an estimated furniture/investment budget, with
          no obligation.
        </>
      ),
    },
    {
      question: "Can I see examples of your past work?",
      answer: (
        <>
          Yes. Our portfolio features a selection of recent projects across different styles, since
          each design is based on each client’s tastes, needs, and lifestyle. While all projects
          carry the essence of Siamo Design, every one is unique and created to fit the client.
          Our portfolio is meant to inspire you and help you imagine what we can create together.
          <br />
          <br />
          <a href="/portfolio" style={{ fontWeight: 600, textDecoration: "underline" }}>
            View Portfolio
          </a>
        </>
      ),
    },
    {
      question: "Do you work with clients outside of your local area?",
      answer:
        "Yes. We serve clients both locally and remotely. For on-site projects, we travel as needed; for remote projects, our Virtual Interior Design service keeps everything coordinated from afar.",
    },
    {
      question: "What interior design styles do you specialize in?",
      answer: (
        <>
          We’ve built our reputation by creating beautifully balanced spaces that feel both fresh and
          timeless. Siamo Design’s signature style is warm, intentional, and welcoming—grounded in
          the integration of natural materials, curated pieces, and layered textures.
          <br />
          <br />
          We’ve designed homes with traditional details and vintage finds, as well as spaces defined
          by clean lines and organic materials—always weaving our essence into every project.
          <br />
          <br />
          Our team tailors each design to the client’s needs, tastes, and lifestyle, with the goal of
          creating spaces that bring a sense of well-being and harmony to everyday life.
        </>
      ),
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

  return (
    <>
      <script
        type="application/ld+json"
        className="yoast-schema-graph"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />
      <PortfolioNav styleVars={styleVars} isHero langHref="/es/servicios/diseno-llave-en-mano/" />

      <main className="services-page overscroll-safe about-hero-page">
        <section
          className="services-hero hero-virtual-compact"
          aria-label="Full service hero"
          style={{
            backgroundImage: "none",
            alignItems: "flex-start",
            ["--virtual-hero-bg-h" as any]: `${heroBgHeightPx}px`,
            ["--virtual-hero-pad-top" as any]: "9rem",
            ["--virtual-hero-pad-x" as any]: "24px",
          }}
        >
          <div className="services-hero__content">
            <section className="portfolio-hero-block" aria-label="Full service intro">
              <div
                className="portfolio-crumb"
                style={{
                  color: "#ffffff",
                  opacity: 1,
                  position: "relative",
                  top: "-5rem",
                }}
              >
                <Link href="/">HOME</Link> • <Link href="/services">SERVICES</Link> • FULL-SERVICE INTERIOR DESIGN
              </div>
              <h1
                className={`portfolio-hero-title fullservice-title ${playfairFont.className}`}
                style={{
                  color: "#ffffff",
                  opacity: 1,
                  margin: "0 0 1.5rem",
                }}
              >
                Full-Service Interior Design
              </h1>
              <div className="portfolio-filter-row">
                <button className="portfolio-filter-btn">
                  FILTER <span className="chevron">⌄</span>
                </button>
              </div>
            </section>
          </div>
        </section>

        <div className="virtual-hero-image">
          <HeroVideo
            className="virtual-hero-image__media"
            src="/assets/services/full-service.mp4"
            playbackRate={0.75}
            autoPlay
            preload="metadata"
            poster="/assets/People/full-service-thumb.webp"
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
          <div className="virtual-hero-image__scrim" aria-hidden="true" />
        </div>

        <section className="about-story" aria-label="About Siamo story">
          <h2 className={`about-story__headline ${playfairFont.className}`}>
            Full-service interior design—handled from start to finish. We manage the design,
            sourcing, ordering, and installation, so your home is ready to live in (or rent)
            without the stress.
          </h2>
        </section>

        <section className="how-it-works" aria-label="How it works">
          <div className="how-it-works__inner">
            <h2 className={`how-it-works__title ${playfairFont.className}`}>How it Works</h2>
            <div className="how-it-works__grid">
              <article className="how-step">
                <div className={`how-step__number ${playfairFont.className}`}>1</div>
                <div className={`how-step__label ${playfairFont.className}`}>
                  Site Review
                  <br />
                  &amp; Measurements
                </div>
              </article>
              <article className="how-step">
                <div className={`how-step__number ${playfairFont.className}`}>2</div>
                <div className={`how-step__label ${playfairFont.className}`}>
                  Furniture &amp;
                  <br />
                  D&eacute;cor Selection
                </div>
              </article>
              <article className="how-step">
                <div className={`how-step__number ${playfairFont.className}`}>3</div>
                <div className={`how-step__label ${playfairFont.className}`}>3D Renderings</div>
              </article>
              <article className="how-step">
                <div className={`how-step__number ${playfairFont.className}`}>4</div>
                <div className={`how-step__label ${playfairFont.className}`}>
                  Purchasing &amp;
                  <br />
                  Project Management
                </div>
              </article>
              <article className="how-step">
                <div className={`how-step__number ${playfairFont.className}`}>5</div>
                <div className={`how-step__label ${playfairFont.className}`}>
                  Installation
                  <br />
                  &amp; Styling
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="virtual-benefits" aria-label="Benefits of virtual design">
          <div className="virtual-benefits__inner">
            <h2 className={`virtual-benefits__title ${playfairFont.className}`}>Benefits of Full Service Design</h2>
            <div className="virtual-benefits__grid">
              {benefits.map((benefit) => (
                <article className="virtual-benefit" key={benefit.title}>
                  <div className="virtual-benefit__icon" aria-hidden="true">
                    {benefit.icon === "bars" && (
                      <svg
                        viewBox="0 0 24 24"
                        role="presentation"
                        fill="none"
                        stroke="currentColor"
                        style={{ strokeWidth: 0.5 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5" />
                      </svg>
                    )}
                    {benefit.icon === "arrows" && (
                      <svg
                        viewBox="0 0 24 24"
                        role="presentation"
                        fill="none"
                        stroke="currentColor"
                        style={{ strokeWidth: 0.5 }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
                        />
                      </svg>
                    )}
                    {benefit.icon === "bulb" && (
                      <svg
                        viewBox="0 0 24 24"
                        role="presentation"
                        fill="none"
                        stroke="currentColor"
                        style={{ strokeWidth: 0.5 }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                        />
                      </svg>
                    )}
                  </div>
                  <h3 className={`virtual-benefit__title ${playfairFont.className}`}>{benefit.title}</h3>
                  <p className={`virtual-benefit__copy ${poppinsFont.className}`}>{benefit.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="virtual-video-bridge" aria-label="Virtual design video teaser">
          <div className="virtual-video-bridge__inner virtual-video-bridge__inner--double">
            <div className="virtual-video-bridge__frame">
              <Image
                src="/assets/services/full-service-3.jpg"
                alt="Full service inspiration 1"
                fill
                sizes="100vw"
                priority={false}
                className="virtual-video-bridge__poster"
              />
            </div>
            <div className="virtual-video-bridge__frame">
              <Image
                src="/assets/services/full-service-2.jpg"
                alt="Full service inspiration 2"
                fill
                sizes="100vw"
                priority={false}
                className="virtual-video-bridge__poster"
              />
            </div>
          </div>
        </section>

        <section className="virtual-deliverables" aria-label="Deliverables">
          <div className="virtual-deliverables__inner">
            <h2 className={`virtual-deliverables__title ${playfairFont.className}`}>Deliverables</h2>
            <div className="virtual-deliverables__grid">
              {deliverables.map((item) => (
                <article className="virtual-deliverable" key={item.title}>
                  <div className="virtual-deliverable__icon" aria-hidden="true">
                    {item.icon === "mood" && (
                      <svg
                        viewBox="0 0 24 24"
                        role="presentation"
                        fill="none"
                        stroke="currentColor"
                        style={{ strokeWidth: 0.5 }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122"
                        />
                      </svg>
                    )}
                    {item.icon === "space" && (
                      <svg
                        viewBox="0 0 24 24"
                        role="presentation"
                        fill="none"
                        stroke="currentColor"
                        style={{ strokeWidth: 0.5 }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3"
                        />
                      </svg>
                    )}
                    {item.icon === "plan" && (
                      <svg viewBox="0 0 64 64" role="presentation">
                        <rect x="12" y="10" width="40" height="44" rx="3" />
                        <path d="M20 10v44M44 26H20M32 10v10M32 36v18" />
                        <path d="M32 26h12v18H32" />
                      </svg>
                    )}
                    {item.icon === "tower" && (
                      <svg
                        viewBox="0 0 24 24"
                        role="presentation"
                        fill="none"
                        stroke="currentColor"
                        style={{ strokeWidth: 0.5 }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819"
                        />
                      </svg>
                    )}
                    {item.icon === "swatch" && (
                      <svg
                        viewBox="0 0 24 24"
                        role="presentation"
                        fill="none"
                        stroke="currentColor"
                        style={{ strokeWidth: 0.5 }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.098 19.902a3.75 3.75 0 0 0 5.304 0l6.401-6.402M6.75 21A3.75 3.75 0 0 1 3 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 0 0 3.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008Z"
                        />
                      </svg>
                    )}
                    {item.icon === "diamond" && (
                      <svg
                        viewBox="0 0 24 24"
                        role="presentation"
                        fill="none"
                        stroke="currentColor"
                        style={{ strokeWidth: 0.5 }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                        />
                      </svg>
                    )}
                    {item.icon === "book" && (
                      <svg
                        viewBox="0 0 24 24"
                        role="presentation"
                        fill="none"
                        stroke="currentColor"
                        style={{ strokeWidth: 0.5 }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6A2.25 2.25 0 0 1 6 3.75h1.5m9 0h-9"
                        />
                      </svg>
                    )}
                    {item.icon === "video" && (
                      <svg
                        viewBox="0 0 24 24"
                        role="presentation"
                        fill="none"
                        stroke="currentColor"
                        style={{ strokeWidth: 0.5 }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
                        />
                      </svg>
                    )}
                    {item.icon === "checklist" && (
                      <svg
                        viewBox="0 0 24 24"
                        role="presentation"
                        fill="none"
                        stroke="currentColor"
                        style={{ strokeWidth: 0.5 }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"
                        />
                      </svg>
                    )}
                    {item.icon === "cabinet" && (
                      <svg
                        viewBox="0 0 24 24"
                        role="presentation"
                        fill="none"
                        stroke="currentColor"
                        style={{ strokeWidth: 0.5 }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                        />
                      </svg>
                    )}
                    {item.icon === "leaf" && (
                      <svg
                        viewBox="0 0 24 24"
                        role="presentation"
                        fill="none"
                        stroke="currentColor"
                        style={{ strokeWidth: 0.5 }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"
                        />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
                      </svg>
                    )}
                    {item.icon === "calendar" && (
                      <svg
                        viewBox="0 0 24 24"
                        role="presentation"
                        fill="none"
                        stroke="currentColor"
                        style={{ strokeWidth: 0.5 }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5m-6.75-6h2.25m-9 2.25h4.5m.002-2.25h.005v.006H12v-.006Zm-.001 4.5h.006v.006h-.006v-.005Zm-2.25.001h.005v.006H9.75v-.006Zm-2.25 0h.005v.005h-.006v-.005Zm6.75-2.247h.005v.005h-.005v-.005Zm0 2.247h.006v.006h-.006v-.006Zm2.25-2.248h.006V15H16.5v-.005Z"
                        />
                      </svg>
                    )}
                    {item.icon === "key" && (
                      <svg
                        viewBox="0 0 24 24"
                        role="presentation"
                        fill="none"
                        stroke="currentColor"
                        style={{ strokeWidth: 0.5 }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"
                        />
                      </svg>
                    )}
                  </div>
                  <h3 className={`virtual-deliverable__title ${playfairFont.className}`}>{item.title}</h3>
                  <p className={`virtual-deliverable__copy ${poppinsFont.className}`}>{item.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="featured-projects" aria-label="Featured projects">
          <div className="featured-projects__inner">
            <h2 className={`featured-projects__title ${playfairFont.className}`}>Featured Projects</h2>
            <div className="featured-projects__grid">
              {featuredProjects.map((project) => (
                <article key={project.title} className="featured-project">
                  <div className="featured-project__media">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      priority={false}
                    />
                  </div>
                  <div className="featured-project__body">
                    <h3 className={`featured-project__title ${playfairFont.className}`}>
                      {project.title}
                    </h3>
                    <p className={`featured-project__summary ${playfairFont.className}`}>
                      {project.summary}
                    </p>
                    <p className={`featured-project__location ${poppinsFont.className}`}>
                      {project.location}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="faq-section" aria-label="Frequently asked questions">
          <div className="faq-section__inner">
            <div className="faq-section__title-col">
              <h2 className={`faq-section__title ${playfairFont.className}`}>
                Frequently Asked Questions
              </h2>
            </div>
            <FaqAccordion items={faqs} />
          </div>
        </section>

        <footer
          className="portfolio-footer"
          style={{
            ["--footer-lift" as any]: "0px",
            ["--footer-overlap" as any]: "40px",
            ["--footer-pad-top" as any]: "82px",
            ["--footer-pad-top-mobile" as any]: "32px",
            ["--footer-pad-bottom-mobile" as any]: "18px",
            ["--footer-overlap-mobile" as any]: "40px",
            ["--footer-h" as any]: "200px",
            ["--footer-bottom-maxw" as any]: "1100px",
          }}
        >
          <div className="footer-inner">
            <section className="footer-seo" aria-label="Service areas and keyword index">
              <ul className="seo-col">
                <li><span className="check" aria-hidden="true">✓</span> Interior design playa del carmen</li>
                <li><span className="check" aria-hidden="true">✓</span> Interior design services playa del carmen</li>
                <li><span className="check" aria-hidden="true">✓</span> Home staging playa del carmen</li>
                <li><span className="check" aria-hidden="true">✓</span> Commercial interior design playa del carmen</li>
              </ul>
              <ul className="seo-col">
                <li><span className="check" aria-hidden="true">✓</span> Interior design riviera maya</li>
                <li><span className="check" aria-hidden="true">✓</span> Interior designers and decorators riviera maya</li>
                <li><span className="check" aria-hidden="true">✓</span> Home staging riviera maya</li>
                <li><span className="check" aria-hidden="true">✓</span> Commercial interior design riviera maya</li>
              </ul>
              <ul className="seo-col">
                <li><span className="check" aria-hidden="true">✓</span> Interior design Cancun</li>
                <li><span className="check" aria-hidden="true">✓</span> Interior designers and decorators Cancun</li>
                <li><span className="check" aria-hidden="true">✓</span> Home staging Cancun</li>
                <li><span className="check" aria-hidden="true">✓</span> Commercial interior design Cancun</li>
              </ul>
              <ul className="seo-col">
                <li><span className="check" aria-hidden="true">✓</span> Interior design tulum</li>
                <li><span className="check" aria-hidden="true">✓</span> Interior design services tulum</li>
                <li><span className="check" aria-hidden="true">✓</span> Interior designers and decorators tulum</li>
                <li><span className="check" aria-hidden="true">✓</span> Home staging tulum</li>
                <li><span className="check" aria-hidden="true">✓</span> Commercial interior design tulum</li>
              </ul>
            </section>

            <div className="footer-explore" aria-label="Explore and social">
              <nav className="explore" aria-label="Explore">
                <a href="/services">Services</a>
                <a href="/portfolio">Portfolio</a>
                <a href="/get-to-know-us">About</a>
                <a href="mailto:hello@siamodesign.com" aria-label="Email us">Email</a>
                <a href="https://wa.me/529842111989" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
                  WhatsApp
                </a>
              </nav>
              <div className="social" aria-label="Social profiles">
                <a className="social__link" href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M6.5 9h2.9v9H6.5V9Zm1.4-4.5a1.7 1.7 0 1 1 0 3.4 1.7 1.7 0 0 1 0-3.4ZM10.8 9h2.8v1.2h.1c.4-.8 1.4-1.6 2.9-1.6 3.1 0 3.7 2 3.7 4.6V18h-2.9v-4.2c0-1-.1-2.3-1.5-2.3-1.5 0-1.8 1.1-1.8 2.2V18h-2.9V9Z" />
                  </svg>
                </a>
                <a className="social__link" href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M21.7 8.2s-.2-1.5-.8-2.2c-.7-.8-1.5-.8-1.8-.9C16.2 5 12 5 12 5h0s-4.2 0-7.1.1c-.3 0-1.1 0-1.8.9-.6.7-.8 2.2-.8 2.2S2 9.9 2 11.6v.8c0 1.7.2 3.4.2 3.4s.2 1.5.8 2.2c.7.8 1.7.8 2.2.9 1.6.2 6.8.2 6.8.2s4.2 0 7.1-.1c.3 0 1.1 0 1.8-.9.6-.7.8-2.2.8-2.2s.2-1.7.2-3.4v-.8c0-1.7-.2-3.4-.2-3.4Z" />
                    <path d="m10 9.8 4.7 2.2L10 14.2V9.8Z" fill="#fff" />
                  </svg>
                </a>
                <a className="social__link" href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M15.5 4.2c.6.8 1.5 1.3 2.5 1.3h.4v2.5c-.9 0-1.8-.2-2.6-.6v5.5a5.08 5.08 0 1 1-5.1-5.1c.3 0 .6 0 .9.1v2.7a2.4 2.4 0 0 0-.9-.2 2.38 2.38 0 1 0 2.38 2.4V3h2.5v1.2Z" />
                  </svg>
                </a>
                <a className="social__link" href="https://www.instagram.com/siamo_design" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M7.2 4.5h9.6A2.7 2.7 0 0 1 19.5 7v9.6a2.7 2.7 0 0 1-2.7 2.7H7.2A2.7 2.7 0 0 1 4.5 16.6V7a2.7 2.7 0 0 1 2.7-2.7Zm0-1.5A4.2 4.2 0 0 0 3 7v9.6A4.2 4.2 0 0 0 7.2 20.8h9.6A4.2 4.2 0 0 0 21 16.6V7a4.2 4.2 0 0 0-4.2-4.2H7.2Z" />
                    <path d="M12 8.4A3.6 3.6 0 1 1 8.4 12 3.6 3.6 0 0 1 12 8.4Zm0-1.5A5.1 5.1 0 1 0 17.1 12 5.1 5.1 0 0 0 12 6.9Z" />
                    <circle cx="17.4" cy="6.6" r="1" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="footer-legal" aria-label="Legal information">
              <p className="legal-line">
                <span className="legal-full">Siamo Design | Interior Design Studio</span>
              </p>
              <p className="legal-line">
                <span className="legal-full">© 2025 Siamo Design. All rights reserved.</span>
              </p>
              <p className="legal-sig"><a href="https://donebyelevator.com/website-redesign-service" target="_blank" rel="noopener noreferrer sponsored">Designed & Built by Elevator</a></p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
