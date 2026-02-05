import Link from "next/link";
import type { Metadata } from "next";
import PortfolioNav from "../../../components/PortfolioNav";
import FaqAccordion from "../../../components/FaqAccordion";
import HeroVideo from "../HeroVideo";
import { playfairFont, poppinsFont } from "../../../fonts";
import { getSiteUrl } from "../../../lib/siteUrl";

const canonicalPath = "/services/virtual-design/";
const yoastDescription =
  "This service allows us to design according to your tastes and needs to adapt your spaces to your lifestyle. With this virtual design tool, you can explore options guided by professionals and visualize how your spaces will look before making decisions, all from the comfort of your home.";

export const metadata: Metadata = {
  title: { absolute: "Virtual Design - Siamo Design" },
  description: yoastDescription,
  alternates: {
    canonical: canonicalPath,
  },
  openGraph: {
    type: "article",
    locale: "en_US",
    title: "Virtual Design - Siamo Design",
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

export default function VirtualDesignPage() {
  const siteUrl = getSiteUrl();
  const canonicalUrl = `${siteUrl}${canonicalPath}`;

  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": canonicalUrl,
        url: canonicalUrl,
        name: "Virtual Design - Siamo Design",
        isPartOf: { "@id": `${siteUrl}/#website` },
        primaryImageOfPage: { "@id": `${canonicalUrl}#primaryimage` },
        image: { "@id": `${canonicalUrl}#primaryimage` },
        thumbnailUrl: "https://siamodesign.com/wp-content/uploads/2025/03/briefing.png",
        datePublished: "2025-04-23T23:51:40+00:00",
        dateModified: "2025-04-23T23:59:46+00:00",
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
        caption: "Virtual Design",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
          { "@type": "ListItem", position: 2, name: "Services", item: `${siteUrl.replace(/\/$/, "")}/services/` },
          { "@type": "ListItem", position: 3, name: "Virtual Design" },
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
      title: "Cost Effective",
      copy: "Save on traditional designer fees while still receiving transformed home designs.",
      icon: "wallet",
    },
    {
      title: "Flexible Implementation",
      copy: "Maximise your time by working through the design process from your own home.",
      icon: "clock",
    },
    {
      title: "Expert Designers",
      copy: "Receive a custom design plan tailored to your style preferences.",
      icon: "spark",
    },
  ];

  const deliverables = [
    {
      title: "Mood Board",
      copy: "An important foundation! Your designer will curate a group of images, colors, and design elements to inspire the look and concept of your project.",
      icon: "mood",
    },
    {
      title: "Space Plan & Elevations",
      copy: "We provide you with a floorplan, focusing on improving flow and functionality of each space. Your designer will draw your interior elevations for your builder to implement the design.",
      icon: "space",
    },
    {
      title: "Finishes Selection",
      copy: "Our team designs every detail of your project for a cohesive and beautiful design, from tile and hardwood to fixtures and faucets.",
      icon: "swatch",
    },
    {
      title: "Furniture Selection",
      copy: "Our designers select furnishings with attention to all the details—lifestyle, scale, color, and budget. Our styling team adds the finishing touches to elevate your design and tell your story.",
      icon: "diamond",
    },
    {
      title: "Video Walkthrough",
      copy: "Our designers will send you videos you can use to review your project with your builder or refer back to them as you order products for your new space.",
      icon: "video",
    },
    {
      title: "Shoppable Item List",
      copy: "Our designers will provide you with a list with links for every selection, allowing you to implement on your own timeline. We also extend a discount for any McGee & Co. pieces on your list!",
      icon: "leaf",
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
      answer:
        "To identify what service better suits you and your lifestyle, there are several key project factors to consider, including time frame, size and scope, budget, and level of involvement. Please visit our Virtual Interior Design page and our Full Service Interior Design page to review the key differences in more depth and determine the service that best meets your project needs.",
    },
    {
      question: "How much do your design services cost?",
      answer:
        "Fees vary by scope. We start with a consultation to define your needs, then share a tailored proposal with a flat design fee and estimated furnishings budget.",
    },
    {
      question: "Can I see examples of your past work?",
      answer: (
        <>
          In a range of styles while all embracing the Siamo Design aesthetic, our design
          portfolio showcases our recent projects and provides endless inspiration:{" "}
          <a href="/portfolio">View Our Portfolio</a>
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
      answer:
        "We have garnered a reputation for beautifully balanced spaces that feel both refreshingly modern and endlessly classic. The signature Siamo Design style is warm, thoughtful, and inviting. We have designed homes with traditional details and vintage pieces, and homes with sleek lines and organic materials, all while weaving our signature style throughout. Our talented team of design professionals tailor their work to the needs of each client, taking into account how they’ll live within the space, and whether the home is a new build or a renovation. We also work to matchmake, aligning each design team to a client’s unique aesthetic and lifestyle.",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        className="yoast-schema-graph"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />
      <PortfolioNav styleVars={styleVars} isHero langHref="/es/servicios/" />

      <main className="services-page overscroll-safe about-hero-page">
        <section
          className="services-hero hero-virtual-compact"
          aria-label="Virtual design hero"
          style={{
            backgroundImage: "none",
            alignItems: "flex-start",
            ["--virtual-hero-bg-h" as any]: `${heroBgHeightPx}px`,
            ["--virtual-hero-pad-top" as any]: "9rem",
            ["--virtual-hero-pad-x" as any]: "24px",
          }}
        >
          <div className="services-hero__content">
            <section className="portfolio-hero-block" aria-label="Virtual design intro">
              <div
                className="portfolio-crumb"
                style={{
                  color: "#ffffff",
                  opacity: 1,
                  position: "relative",
                  top: "-5rem",
                }}
              >
                <Link href="/">HOME</Link> • <Link href="/services">SERVICES</Link> • VIRTUAL DESIGN
              </div>
              <h1
                className={`portfolio-hero-title fullservice-title ${playfairFont.className}`}
                style={{ color: "#ffffff", opacity: 1, margin: "0 0 1.5rem" }}
              >
                Virtual Interior Design
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
            src="/assets/services/virtual-design-1.mp4"
            playbackRate={0.75}
            autoPlay
            preload="metadata"
            poster="/assets/services/virtual-design-1.webp"
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
          <div className="virtual-hero-image__scrim" aria-hidden="true" />
        </div>

        <section className="about-story" aria-label="About Siamo story">
          <h2 className={`about-story__headline ${playfairFont.className}`}>
            Discover the convenience and flexibility of Siamo Design's Virtual Interior Design Services—an efficient alternative to our traditional full-service projects. Ideal for clients who prefer an approach that can be adapted to their lifestyle and executed on their own terms.
          </h2>
        </section>

        <section className="how-it-works" aria-label="How it works">
          <div className="how-it-works__inner">
            <h2 className={`how-it-works__title ${playfairFont.className}`}>How it Works</h2>
            <div className="how-it-works__grid">
              <article className="how-step">
                <div className={`how-step__number ${playfairFont.className}`}>1</div>
                <div className={`how-step__label ${playfairFont.className}`}>
                  Select a Service
                  <br />
                  &amp; Your Room
                </div>
              </article>
              <article className="how-step">
                <div className={`how-step__number ${playfairFont.className}`}>2</div>
                <div className={`how-step__label ${playfairFont.className}`}>
                  Personalized
                  <br />
                  Design Creation
                </div>
              </article>
              <article className="how-step">
                <div className={`how-step__number ${playfairFont.className}`}>3</div>
                <div className={`how-step__label ${playfairFont.className}`}>Design Review Sessions</div>
              </article>
              <article className="how-step">
                <div className={`how-step__number ${playfairFont.className}`}>4</div>
                <div className={`how-step__label ${playfairFont.className}`}>Finishing Touches</div>
              </article>
              <article className="how-step">
                <div className={`how-step__number ${playfairFont.className}`}>5</div>
                <div className={`how-step__label ${playfairFont.className}`}>
                  Implement the
                  <br />
                  Design
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="virtual-benefits" aria-label="Benefits of virtual design">
          <div className="virtual-benefits__inner">
            <h2 className={`virtual-benefits__title ${playfairFont.className}`}>Benefits of Virtual Design</h2>
            <div className="virtual-benefits__grid">
              {benefits.map((benefit) => (
                <article className="virtual-benefit" key={benefit.title}>
                  <div className="virtual-benefit__icon" aria-hidden="true">
                    {benefit.icon === "wallet" && (
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
                          d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3"
                        />
                      </svg>
                    )}
                    {benefit.icon === "clock" && (
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
                          d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                    )}
                    {benefit.icon === "spark" && (
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
                          d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
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
          <div className="virtual-video-bridge__inner">
            <div className="virtual-video-bridge__frame">
              <video
                className="virtual-video-bridge__poster"
                src="/assets/services/virtual-design-2.mp4"
                poster="/assets/services/virtual-design-2-thumb.jpg"
                preload="metadata"
                controls
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
              <div className="virtual-video-bridge__play" aria-hidden="true">▶</div>
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
                  </div>
                  <h3 className={`virtual-deliverable__title ${playfairFont.className}`}>{item.title}</h3>
                  <p className={`virtual-deliverable__copy ${poppinsFont.className}`}>{item.copy}</p>
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
