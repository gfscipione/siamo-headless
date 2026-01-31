import Image from "next/image";
import type { Metadata } from "next";
import { playfairFont, poppinsFont } from "../fonts";
import PortfolioNav from "../components/PortfolioNav";
import { getSiteUrl } from "../lib/siteUrl";

type Project = {
  title: string;
  location: string;
  summary: string;
  image: string;
  href?: string;
};

const projects: Project[] = [
  {
    title: "Serene Jungle",
    location: "Tulum",
    summary: "Soft, airy interiors nestled in the jungle canopy with warm woods and natural light.",
    image: "/assets/serene-jungle/living-room-3.webp",
    href: "/portfolio/serene-jungle",
  },
  {
    title: "Mayan Sanctuary",
    location: "Playa del Carmen",
    summary: "A serene retreat weaving local craft, limestone, and lush greenery into a calm sanctuary.",
    image: "/assets/mayan-sanctuary/lounge-terrace-3.webp",
    href: "/portfolio/mayan-sanctuary",
  },
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
    title: "Tuluminati House",
    location: "Cancún",
    summary: "A celebration of Tulum’s natural materials and local craftsmanship.",
    image: "/assets/tuluminati-house/living-room-7.jpg",
    href: "/portfolio/tuluminati-house",
  },
  {
    title: "Mid-Century Waves",
    location: "Akumal",
    summary: "A calm, textural retreat shaped around warm tones and coastal serenity.",
    image: "/assets/mid-century-waves/terrace-1.jpg",
    href: "/portfolio/mid-century-waves",
  },
  {
    title: "Roots Tulum",
    location: "Tulum",
    summary: "A timeless expression of pure, natural materials.",
    image: "/assets/raices-tulum/bedroom-4.jpg",
    href: "/portfolio/roots-tulum",
  },
  {
    title: "Contemporary Retreat",
    location: "Cancún",
    summary: "Modern architecture with refined, high-end materials.",
    image: "/assets/retiro-contemporaneo/living-room-1.png",
    href: "/portfolio/contemporary-retreat",
  },
];

const canonicalPath = "/portfolio/";
const yoastDescription =
  "Discover the unique value we can bring to your project. Get a quote by filling out our form and let us provide you with a quality service. We are ready to bring your vision to life!";

export const metadata: Metadata = {
  title: { absolute: "Portfolio - Siamo Design" },
  description: yoastDescription,
  alternates: {
    canonical: canonicalPath,
    languages: {
      en: canonicalPath,
      es: "/es/portafolio/",
      "x-default": canonicalPath,
    },
  },
  openGraph: {
    type: "article",
    locale: "en_US",
    title: "Portfolio - Siamo Design",
    description: yoastDescription,
    url: canonicalPath,
    images: [
      {
        url: "https://siamodesign.com/wp-content/uploads/2025/02/1-Despues.jpg",
        width: 1400,
        height: 933,
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function PortfolioPage() {
  const siteUrl = getSiteUrl();
  const canonicalUrl = `${siteUrl}${canonicalPath}`;

  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": canonicalUrl,
        url: canonicalUrl,
        name: "Portfolio - Siamo Design",
        isPartOf: { "@id": `${siteUrl}/#website` },
        primaryImageOfPage: { "@id": `${canonicalUrl}#primaryimage` },
        image: { "@id": `${canonicalUrl}#primaryimage` },
        thumbnailUrl: "https://siamodesign.com/wp-content/uploads/2025/02/1-Despues-768x512.jpg",
        datePublished: "2024-03-20T01:42:49+00:00",
        dateModified: "2025-03-27T22:52:55+00:00",
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
        url: "https://siamodesign.com/wp-content/uploads/2025/02/1-Despues.jpg",
        contentUrl: "https://siamodesign.com/wp-content/uploads/2025/02/1-Despues.jpg",
        width: 1400,
        height: 933,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
          { "@type": "ListItem", position: 2, name: "Portfolio" },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: `${siteUrl}/`,
        name: "Siamo Design",
        description: "",
        publisher: { "@id": `${siteUrl}/#organization` },
        potentialAction: [
          {
            "@type": "SearchAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate: `${siteUrl}/?s={search_term_string}`,
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
        "@id": `${siteUrl}/#organization`,
        name: "Siamo Design",
        url: `${siteUrl}/`,
        logo: {
          "@type": "ImageObject",
          inLanguage: "en",
          "@id": `${siteUrl}/#/schema/logo/image/`,
          url: "https://siamodesign.com/wp-content/uploads/2024/03/cropped-9019c03768d3a9dc34a90a32adf82d72.png",
          contentUrl:
            "https://siamodesign.com/wp-content/uploads/2024/03/cropped-9019c03768d3a9dc34a90a32adf82d72.png",
          width: 499,
          height: 167,
          caption: "Siamo Design",
        },
        image: { "@id": `${siteUrl}/#/schema/logo/image/` },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        className="yoast-schema-graph"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />
      <PortfolioNav
        styleVars={{
          ['--nav-col-gap' as any]: "0px",
          ['--nav-inner-maxw' as any]: "1700px",
          ['--nav-item-gap' as any]: "44px",
          ['--nav-title-fs' as any]: "14px",
          ['--nav-title-fs-m' as any]: "12px",
          ['--nav-bar-h-desktop' as any]: "50px",
          ['--nav-bar-h-mobile' as any]: "40px",
          ['--brand-fs' as any]: "22px",
          ['--brand-fs-m' as any]: "14px",
          ['--nav-link-weight' as any]: "400",
          ['--wwd-title-w' as any]: "400",
          ['--nav-cta-padx' as any]: "42px",
          ['--nav-cta-pady' as any]: "14px",
          ['--hero-cta-padx-m' as any]: "22px",
          ['--hero-cta-pady-m' as any]: "8px",
          ['--nav-cta-bg' as any]: "#F4F2EA",
          ['--nav-cta-ink' as any]: "#111111",
          ['--nav-cta-bg-hover' as any]: "#F4F2EA",
        }}
        langHref="/es/portafolio/"
      />

      <main className="portfolio-page overscroll-safe">
        <section className="portfolio-hero-block" aria-label="Portfolio intro">
          <div className="portfolio-crumb">
            <a href="/" aria-label="Go to homepage">HOME</a> • PORTFOLIO
          </div>
          <h1 className={`portfolio-hero-title ${playfairFont.className}`}>
            Portfolio
          </h1>
          <div className="portfolio-filter-row">
            <button className="portfolio-filter-btn">
              FILTER <span className="chevron">⌄</span>
            </button>
          </div>
          <hr className="portfolio-divider" />
        </section>

        <section className="portfolio-section" aria-label="All projects">
          <div className="portfolio-grid portfolio-grid--3cols">
            {projects.map((project) => (
                <article key={project.title} className="portfolio-card">
                  <a href={project.href || "#"} className="portfolio-card__link">
                    <div className="portfolio-card__media">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        priority={false}
                      />
                    </div>
                    <div className="portfolio-card__body">
                      <h2 className={`portfolio-card__title ${playfairFont.className}`}>
                        {project.title}
                      </h2>
                      <p className={`portfolio-card__summary ${playfairFont.className}`}>
                        {project.summary}
                      </p>
                      <p className={`portfolio-card__location ${poppinsFont.className}`}>
                        {project.location}
                      </p>
                    </div>
                  </a>
                </article>
            ))}
          </div>
        </section>
      </main>

      <footer
        className="portfolio-footer"
        style={{
          ['--footer-lift' as any]: "0px",
          ['--footer-overlap' as any]: "0px",
          ['--footer-pad-top-mobile' as any]: "0px",
        ['--footer-pad-bottom-mobile' as any]: "18px",
        ['--footer-overlap-mobile' as any]: "0px",
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
              <a className="social__link" href="https://www.linkedin.com/company/siamo-design/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M6.5 9h2.9v9H6.5V9Zm1.4-4.5a1.7 1.7 0 1 1 0 3.4 1.7 1.7 0 0 1 0-3.4ZM10.8 9h2.8v1.2h.1c.4-.8 1.4-1.6 2.9-1.6 3.1 0 3.7 2 3.7 4.6V18h-2.9v-4.2c0-1-.1-2.3-1.5-2.3-1.5 0-1.8 1.1-1.8 2.2V18h-2.9V9Z" />
                </svg>
              </a>
              <a className="social__link" href="https://www.youtube.com/@siamodesign" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M21.7 8.2s-.2-1.5-.8-2.2c-.7-.8-1.5-.8-1.8-.9C16.2 5 12 5 12 5h0s-4.2 0-7.1.1c-.3 0-1.1 0-1.8.9-.6.7-.8 2.2-.8 2.2S2 9.9 2 11.6v.8c0 1.7.2 3.4.2 3.4s.2 1.5.8 2.2c.7.8 1.7.8 2.2.9 1.6.2 6.8.2 6.8.2s4.2 0 7.1-.1c.3 0 1.1 0 1.8-.9.6-.7.8-2.2.8-2.2s.2-1.7.2-3.4v-.8c0-1.7-.2-3.4-.2-3.4Z" />
                  <path d="m10 9.8 4.7 2.2L10 14.2V9.8Z" fill="#fff" />
                </svg>
              </a>
              <a className="social__link" href="https://www.tiktok.com/@siamodesign" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M15.5 4.2c.6.8 1.5 1.3 2.5 1.3h.4v2.5c-.9 0-1.8-.2-2.6-.6v5.5a5.08 5.08 0 1 1-5.1-5.1c.3 0 .6 0 .9.1v2.7a2.4 2.4 0 0 0-.9-.2 2.38 2.38 0 1 0 2.38 2.4V3h2.5v1.2Z" />
                </svg>
              </a>
                <a className="social__link" href="https://www.instagram.com/siamo_design/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
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
    </>
  );
}
