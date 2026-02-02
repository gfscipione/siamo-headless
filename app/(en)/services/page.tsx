import Image from "next/image";
import Link from "next/link";
import PortfolioNav from "../../components/PortfolioNav";
import FaqAccordion from "../../components/FaqAccordion";
import HeroVideo from "./HeroVideo";

import { playfairFont, poppinsFont } from "../../fonts";
import { getSiteUrl } from "../../lib/siteUrl";

const TITLE = "Services - Siamo Design";
const DESCRIPTION =
  "Explore our interior design services—from Virtual Design to full-service execution—tailored to your lifestyle across the Riviera Maya.";
const OG_IMAGE = "https://siamodesign.com/wp-content/uploads/2025/05/Virtual-design.png";

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: {
    canonical: "/services/",
    languages: {
      en: "/services/",
      es: "/es/servicios/",
      "x-default": "/services/",
    },
  },
  openGraph: {
    type: "article",
    url: "/services/",
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Siamo Design",
    locale: "en_US",
    images: [{ url: OG_IMAGE, width: 750, height: 400, type: "image/png" }],
  },
  twitter: {
    card: "summary_large_image",
  },
};

type Service = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  cta: string;
  href?: string;
  mediaType: "video" | "image";
  playbackThreshold?: number;
  preload?: "auto" | "metadata" | "none";
  poster?: string;
};

const services: Service[] = [
  {
    title: "Full-Service Interior Design",
    subtitle: "The luxury of a professionally designed home tailored to your lifestyle.",
    description:
      "Experience custom design creation with our Full-Service Interior Design. Our experts manage every detail, from space planning to final installation, providing a personalized and stress-free journey to your dream home.",
    image: "/assets/People/full-service.mp4",
    cta: "Find out more",
    href: "/services/full-service",
    mediaType: "video",
    playbackThreshold: 1,
  },
  {
    title: "Virtual Interior Design",
    subtitle: "Reimagine your space effortlessly on your own timeline.",
    description:
      "Our Virtual Interior Design service delivers the same custom design creation paired with the flexibility of remote collaboration. Reimagine your space with tailored plans and curated shopping lists from our designers.",
    image: "/assets/services/virtual-design-1.mp4",
    mediaType: "video",
    playbackThreshold: 1,
    preload: "metadata",
    poster: "/assets/services/virtual-design-1.webp",
    cta: "Find out more",
    href: "/services/virtual-design",
  },
];

const promises = [
  {
    title: "Proven Track Record",
    copy:
      "Our designers bring years of experience and a collaborative process that pairs tailored perspectives with flawless delivery.",
    icon: "desk",
  },
  {
    title: "Detail-Oriented Planning",
    copy:
      "From finish schedules to procurement and installation, every step is managed with precision, keeping you as involved as you want to be.",
    icon: "checklist",
  },
  {
    title: "Intentional Design",
    copy:
      "We curate spaces that feel elevated and timeless, with every project crafted uniquely for the client and their lifestyle.",
    icon: "cabinet",
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

const socialItems = [
  {
    image: "/assets/img/post1.jpeg",
    text: "Layered neutrals and warm materials that invite you to linger.",
  },
  {
    image: "/assets/img/post2.jpeg",
    text: "Sculptural stairs and tonal accents for a quiet statement.",
  },
  {
    image: "/assets/img/post3.jpeg",
    text: "A living room that blends classic millwork with modern comfort.",
  },
  {
    image: "/assets/img/post4.jpeg",
    text: "Playful color and texture in a space made for imagination.",
  },
  {
    image: "/assets/img/post5.jpeg",
    text: "Light-filled gathering spaces with layered natural finishes.",
  },
  {
    image: "/assets/img/post6.jpeg",
    text: "Indoor-outdoor dining framed by soft drapery and greenery.",
  },
];

export default function ServicesPage() {
  const siteUrl = getSiteUrl();
  const canonical = `${siteUrl}/services/`;

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
        datePublished: "2024-03-19T03:12:16+00:00",
        dateModified: "2025-06-03T23:35:50+00:00",
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
        width: 750,
        height: 400,
        caption: "Virtual Design",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonical}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
          { "@type": "ListItem", position: 2, name: "Services" },
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
          ['--wwd-title-w' as any]: "400",
          ['--nav-cta-padx' as any]: "42px",
          ['--nav-cta-pady' as any]: "14px",
          ['--hero-cta-padx-m' as any]: "22px",
          ['--hero-cta-pady-m' as any]: "8px",
          ['--nav-cta-bg' as any]: "#F4F2EA",
          ['--nav-cta-ink' as any]: "#111111",
          ['--nav-cta-bg-hover' as any]: "#F4F2EA",
        }}
        langHref="/es/servicios/"
        isHero
      />

      <main className="services-page overscroll-safe">
        <section
          className="services-hero"
          aria-label="Services hero"
          style={{
            ['--project-hero-pad-top-m' as any]: "2rem",
            ['--project-hero-pad-bottom-m' as any]: "5rem",
          }}
        >
          <HeroVideo
            className="services-hero__bg"
            src="/assets/People/services.mp4"
            playbackRate={0.75}
            autoPlay
            preload="metadata"
            poster="/assets/People/services-thumb.webp"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div className="services-hero__scrim" />
          <div className="services-hero__content">
            <h1 className={`services-hero__title ${playfairFont.className}`}>Services</h1>
            <p className={`services-hero__lead ${playfairFont.className}`}>
              Siamo Design offers full-service interior design and virtual interior design services. We combine thoughtful materials and layered textures to create spaces that support well-being. Based in the Riviera Maya, we design relaxed, refined interiors for local residential projects and for clients worldwide—turning every space into a true home.
            </p>
          </div>
        </section>

        <section className="services-heading" aria-label="Our services heading">
          <div className="services-section__inner">
            <h2 className={`promises-title ${playfairFont.className}`}>Our Services</h2>
          </div>
        </section>

        <section className="services-section" aria-label="Our services">
          <div className="services-section__inner">
            <div className="services-grid">
              {services.map((service) => (
                <article
                  className="service-card"
                  key={service.title}
                  id={service.title.toLowerCase().includes("virtual") ? "virtual" : "on-site"}
                >
                  <div className="service-card__media">
                    {service.mediaType === "video" ? (
                      <HeroVideo
                        className="service-card__video"
                        src={service.image}
                        playbackRate={1}
                        threshold={service.playbackThreshold ?? 0.25}
                        autoPlay={false}
                        preload={service.preload ?? "metadata"}
                        poster={service.poster}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    ) : (
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={false}
                      />
                    )}
                  </div>
                  <div className="service-card__body">
                  <h3 className={`service-card__title ${playfairFont.className}`}>
                    {service.title}
                  </h3>
                  <p className={`service-card__subtitle ${playfairFont.className}`}>
                    {service.subtitle}
                  </p>
                  <p className={`service-card__copy ${poppinsFont.className}`}>
                    {service.description}
                  </p>
                  <Link
                    className="service-card__cta"
                    href={service.href || (service.title.toLowerCase().includes("virtual") ? "/services/virtual-design" : "/services#on-site")}
                  >
                    {service.cta}
                  </Link>
                </div>
              </article>
            ))}
            </div>
          </div>
        </section>

        <section className="promises-section" aria-label="Our promises">
          <div className="promises-section__inner">
            <div className="promises-header">
              <h2 className={`promises-title ${playfairFont.className}`}>Our Promises</h2>
            </div>

            <div className="promises-grid">
              {promises.map((promise) => (
                <article className="promise-card" key={promise.title}>
              <div className="promise-card__icon" aria-hidden="true">
                {promise.icon === "desk" && (
                  <svg
                    viewBox="0 0 24 24"
                    role="presentation"
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="0.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    vectorEffect="non-scaling-stroke"
                  >
                    <path d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
                  </svg>
                )}
                {promise.icon === "book" && (
                  <svg viewBox="0 0 64 64" role="presentation">
                    <path d="M18 14h28v36H18z" />
                    <path d="M24 18h16v2H24zM24 24h16v2H24zM24 30h16v2H24zM24 36h10v2H24z" />
                  </svg>
                )}
                {promise.icon === "checklist" && (
                  <svg
                    viewBox="0 0 24 24"
                    role="presentation"
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="0.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    vectorEffect="non-scaling-stroke"
                  >
                    <path d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" />
                  </svg>
                )}
                {promise.icon === "cabinet" && (
                  <svg
                    viewBox="0 0 24 24"
                    role="presentation"
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="0.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    vectorEffect="non-scaling-stroke"
                  >
                    <path d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                  </svg>
                )}
                  </div>
                  <h3 className={`promise-card__title ${playfairFont.className}`}>
                    {promise.title}
                  </h3>
                  <p className={`promise-card__copy ${poppinsFont.className}`}>
                    {promise.copy}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="featured-projects" aria-label="Featured projects">
          <div className="featured-projects__inner">
            <h2 className={`featured-projects__title ${playfairFont.className}`}>Featured Projects</h2>
            <div className="featured-projects__grid">
              {featuredProjects.map((project) => {
                const Card = (
                  <>
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
                  </>
                );

                return project.href ? (
                  <a key={project.title} className="featured-project" href={project.href}>
                    {Card}
                  </a>
                ) : (
                  <article key={project.title} className="featured-project">
                    {Card}
                  </article>
                );
              })}
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

        <section className="social-follow" aria-label="Follow on social">
          <div className="social-follow__inner">
            <div className="social-follow__title-col">
              <h2 className={`social-follow__title ${playfairFont.className}`}>Follow</h2>
              <p className={`social-follow__handle ${playfairFont.className}`}>
                @siamo_design
              </p>
            </div>
            <div className="social-follow__list" role="list">
              {socialItems.map((item) => (
                <article className="social-card" role="listitem" key={item.image}>
                  <div className="social-card__media">
                    <Image
                      src={item.image}
                      alt="Siamo Design post"
                      fill
                      sizes="(max-width: 768px) 90vw, 240px"
                      priority={false}
                    />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

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
