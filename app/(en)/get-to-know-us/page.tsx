import PortfolioNav from "../../components/PortfolioNav";
import { playfairFont, poppinsFont } from "../../fonts";
import AboutHeroVideo from "./video";
import type { Metadata } from "next";
import { getSiteUrl } from "../../lib/siteUrl";
import DragScroll from "./DragScroll";

const TITLE = "Get to know us - Siamo Design";
const DESCRIPTION =
  "Who are we? Siamo Design was born from the initiative of Stephania Scipione and Krystle Torres, who observed that many people were dissatisfied with their homes despite having invested time and money in them.";
const OG_IMAGE = "https://siamodesign.com/wp-content/uploads/2025/03/Diseno-sin-titulo-1.webp";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: {
    canonical: "/get-to-know-us/",
    languages: {
      en: "/get-to-know-us/",
      es: "/es/conocenos/",
      "x-default": "/get-to-know-us/",
    },
  },
  openGraph: {
    type: "article",
    url: "/get-to-know-us/",
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Siamo Design",
    locale: "en_US",
    images: [{ url: OG_IMAGE, width: 555, height: 630, type: "image/webp" }],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function GetToKnowUsPage() {
  const siteUrl = getSiteUrl();
  const canonical = `${siteUrl}/get-to-know-us/`;

  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": canonical,
        url: canonical,
        name: TITLE,
        isPartOf: { "@id": `${siteUrl}/#website` },
        primaryImageOfPage: { "@id": `${canonical}#primaryimage` },
        image: { "@id": `${canonical}#primaryimage` },
        thumbnailUrl: OG_IMAGE,
        datePublished: "2024-03-19T15:56:34+00:00",
        dateModified: "2025-03-27T22:51:20+00:00",
        breadcrumb: { "@id": `${canonical}#breadcrumb` },
        inLanguage: "en",
        potentialAction: [{ "@type": "ReadAction", target: [canonical] }],
      },
      {
        "@type": "ImageObject",
        inLanguage: "en",
        "@id": `${canonical}#primaryimage`,
        url: OG_IMAGE,
        contentUrl: OG_IMAGE,
        width: 555,
        height: 630,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonical}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
          { "@type": "ListItem", position: 2, name: "Get to know us" },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: `${siteUrl}/`,
        name: "Siamo Design",
        publisher: { "@id": `${siteUrl}/#organization` },
        potentialAction: [
          {
            "@type": "SearchAction",
            target: { "@type": "EntryPoint", urlTemplate: `${siteUrl}/?s={search_term_string}` },
            "query-input": { "@type": "PropertyValueSpecification", valueRequired: true, valueName: "search_term_string" },
          },
        ],
        inLanguage: "en",
      },
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "Siamo Design",
        url: `${siteUrl}/`,
        logo: {
          "@type": "ImageObject",
          inLanguage: "en",
          "@id": `${siteUrl}/#/schema/logo/image/`,
          url: "https://siamodesign.com/wp-content/uploads/2024/03/cropped-9019c03768d3a9dc34a90a32adf82d72.png",
          contentUrl: "https://siamodesign.com/wp-content/uploads/2024/03/cropped-9019c03768d3a9dc34a90a32adf82d72.png",
          width: 499,
          height: 167,
          caption: "Siamo Design",
        },
        image: { "@id": `${siteUrl}/#/schema/logo/image/` },
      },
    ],
  };

  const wwdItems = [
    {
      title: "Interior Design Firm",
      copy:
        "We lead projects end-to-end under our creative direction, crafting balanced spaces that feel classic and current.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="about-wwd__icon"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819"
          />
        </svg>
      ),
    },
    {
      title: "Editorial Content",
      copy:
        "We share guidance, lifestyle inspiration, and design stories to help you bring the Siamo aesthetic into your own spaces.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="about-wwd__icon"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
          />
        </svg>
      ),
    },
    {
      title: "Product Design",
      copy:
        "We collaborate with partners to design pieces that reflect our signature warmth and balance, from furniture to styling accents.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="about-wwd__icon"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
          />
        </svg>
      ),
    },
  ];

  const journeyEntries = [
    {
      year: "2016",
      title: "The Beginning",
      copy:
        "It all started as Stephania Design. The idea took shape while Stephania was working at a stone and surface showroom, where she saw firsthand how many people approached finish selections with doubt and uncertainty. That experience sparked a clear purpose: to create interior design services that guide clients through every decision—so choosing materials and finishes feels confident, clear, and stress-free.",
      image: "/assets/People/about-2.webp",
    },
    {
      year: "2018",
      title: "Full Commitment",
      copy:
        "That year, Stephania committed fully to Stephania Design. Projects focused primarily on remodels, finish and material selections, and personalized interior design consultations—helping clients make confident decisions and bring their spaces together with clarity and style.",
      image: "/assets/People/about-3.webp",
    },
    {
      year: "2020",
      title: "Team Growth",
      copy:
        "Krystle joined the team to bring a stronger focus on decoration and interior styling—adding a refined, detail-driven perspective that elevated the creative direction of each space and strengthened the brand’s signature look.",
      image: "/assets/People/about-4.webp",
    },
    {
      year: "2022",
      title: "Siamo Design Is Born",
      copy:
        "We refined our focus around full-scope residential projects and took a major step forward: we rebranded as Siamo Design—a name that reflects a clearer, more mature vision and a brand identity fully aligned with the elevated interior design services we set out to build.",
      image: "/assets/People/about-6.webp",
    },
    {
      year: "2025",
      title: "Siamo Real Life",
      copy:
        "We expanded our vision and launched our YouTube channel, Siamo Real Life, to share what happens behind every project—our process, the decisions, the challenges, and the real-life side of design from concept to completion.",
      image: "/assets/People/about-5.webp",
    },
  ];
  return (
    <>
      <script
        type="application/ld+json"
        className="yoast-schema-graph"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />
      <PortfolioNav
        styleVars={{
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
        }}
        isHero
        variant="gtku"
        langHref="/es/conocenos/"
      />

      <main className="about-hero-page overscroll-safe">
        <section className="about-hero" aria-label="About hero">
          <div className="about-hero__content">
            <h1 className={`about-hero__title ${playfairFont.className}`}>About</h1>
          </div>
          <div className="about-hero__media">
            <AboutHeroVideo src="/assets/videos/about.mp4" ariaLabel="About Siamo Design" />
          </div>
        </section>

        <section className="about-story" aria-label="About Siamo story">
          <h2 className={`about-story__headline ${playfairFont.className}`}>
            Siamo Design is a multi-disciplinary interior design studio creating warm, timeless spaces that feel both classic and current.
          </h2>

          <div className="about-story__grid">
            <div className="about-story__media">
              <AboutHeroVideo
                src="/assets/People/about-1.mp4"
                ariaLabel="About Siamo Design video"
                className="about-story__media-video"
                preload="none"
                poster="/assets/People/about-1-thumb.png"
              />
            </div>
            <div className="about-story__body">
              <h3 className={`about-story__title ${playfairFont.className}`}>
                Our mission is to create interiors that elevate the way you live.
              </h3>
              <p className={poppinsFont.className}>
                At Siamo Design, we believe a space isn’t just something you see—it’s something you feel. Because you live in it every day—eating, resting, and unwinding—your environment has a direct impact on your well-being and how you experience life. Our purpose is to bring awareness to that influence and turn it into thoughtful, livable interiors through intentional interior design services.
              </p>
              <p className={poppinsFont.className}>
                Co-founders Stephania Scipione and Krystle Torres noticed that furnishing and decorating a home often becomes stressful and uncertain. That’s why we created a clear, guided process—so working with our interior designers feels smooth, organized, and genuinely enjoyable from start to finish.
              </p>
              <h3
                className={`about-story__title about-story__title--spaced ${playfairFont.className}`}
              >
                What does Siamo Design mean?
              </h3>
              <p className={poppinsFont.className}>
                “Siamo Design” means “We are design.” To us, every person is design in their own way—your tastes, style, colors, and forms that make you feel most at home. That insight is the foundation of our work, and the starting point of every project.
              </p>
              <p className={poppinsFont.className}>
                That’s why we see each project as an opportunity to transform a space into a true home—balancing beauty and function through thoughtful materials, layered textures, and a strong sense of sensitivity to how you live.
              </p>
              <p className={poppinsFont.className}>
                We guide our clients through the full journey—from the first concept to the final installation—refining every detail so the end result feels authentic, elevated, and unmistakably yours.
              </p>
            </div>
          </div>
        </section>

        <section className="about-wwd" aria-label="What we do">
          <div className="about-wwd__inner">
            <h2 className={`about-wwd__title ${playfairFont.className}`}>What We Do</h2>
            <div className="about-wwd__grid">
              {wwdItems.map((item) => (
                <article className="about-wwd__item" key={item.title}>
                  {item.icon}
                  <h3 className={`${playfairFont.className}`}>{item.title}</h3>
                  <p className={poppinsFont.className}>{item.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-journey-placeholder" aria-label="Upcoming timeline section">
          <div className="about-journey-placeholder__inner">
            <h2 className={`about-journey__title ${playfairFont.className}`}>Siamo Design</h2>
            <p className={`about-journey__subtitle ${playfairFont.className}`}>Through The Years</p>
            <DragScroll className="about-journey__grid" aria-label="Timeline">
              {journeyEntries.map((entry) => (
                <article className="about-journey__item" key={entry.image}>
                  <div className="about-journey__image">
                    <img
                      src={entry.image}
                      alt={`${entry.title} (${entry.year})`}
                      loading="lazy"
                      draggable={false}
                    />
                  </div>
                  <div className="about-journey__meta">
                    <p className={`about-journey__year ${playfairFont.className}`}>{entry.year}</p>
                    <h3 className={`about-journey__entry-title ${playfairFont.className}`}>{entry.title}</h3>
                    <p className={`about-journey__copy ${poppinsFont.className}`}>{entry.copy}</p>
                  </div>
                </article>
              ))}
            </DragScroll>
          </div>
        </section>

        <section className="about-cta" aria-label="Explore design services">
          <div className="about-cta__inner">
            <div className="about-cta__text">
              <h3 className={`about-cta__headline ${playfairFont.className}`}>
                Have a project in mind?<br />Explore Our Design Services
              </h3>
            </div>
            <a className="about-cta__btn" href="/services">Find out more</a>
            <div className="about-cta__media">
              <img src="/assets/img/post5.jpeg" alt="Dining room styled by Siamo Design" loading="lazy" />
            </div>
          </div>
        </section>

        <footer
          className="portfolio-footer"
          style={{
            ['--footer-lift' as any]: "0px",
            ['--footer-overlap' as any]: "40px",
            ['--footer-pad-top' as any]: "82px",
            ['--footer-pad-top-mobile' as any]: "32px",
            ['--footer-pad-bottom-mobile' as any]: "18px",
            ['--footer-overlap-mobile' as any]: "40px",
            ['--footer-h' as any]: "200px",
            ['--footer-bottom-maxw' as any]: "1100px",
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
            <p className="legal-sig"><a href="https://donebyelevator.com" target="_blank" rel="noopener noreferrer">Designed & Built by Elevator</a></p>
          </div>
        </div>
      </footer>

      </main>
    </>
  );
}
