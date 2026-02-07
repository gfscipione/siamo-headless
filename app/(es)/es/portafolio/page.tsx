import Image from "next/image";
import type { Metadata } from "next";
import { playfairFont, poppinsFont } from "../../../fonts";
import PortfolioNav from "../../../components/PortfolioNav";
import { getSiteUrl } from "../../../lib/siteUrl";

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
    summary:
      "Interiores suaves y luminosos, envueltos por la selva, con maderas cálidas y luz natural.",
    image: "/assets/serene-jungle/living-room-3.webp",
    href: "/es/portafolio/serene-jungle",
  },
  {
    title: "Mayan Sanctuary",
    location: "Playa del Carmen",
    summary:
      "Un refugio sereno que integra artesanía local, piedra caliza y vegetación exuberante en un santuario de calma.",
    image: "/assets/mayan-sanctuary/lounge-terrace-3.webp",
    href: "/es/portafolio/mayan-sanctuary",
  },
  {
    title: "Naturaleza Atemporal",
    location: "Puerto Morelos",
    summary: "Una mezcla atemporal de elementos naturales y diseño contemporáneo.",
    image: "/assets/timeless-nature/living-room-19.jpg",
    href: "/es/portafolio/naturaleza-atemporal",
  },
  {
    title: "Soul in Concrete",
    location: "Tulum",
    summary: "Calidez brutalista con volúmenes de concreto esculpidos y capas suaves y texturales.",
    image: "/assets/soul-in-concrete/master-bedroom-4.webp",
    href: "/es/portafolio/soul-in-concrete",
  },
  {
    title: "Tuluminati House",
    location: "Cancún",
    summary: "Una celebración de los materiales naturales de Tulum y la artesanía local.",
    image: "/assets/tuluminati-house/living-room-7.jpg",
    href: "/es/portafolio/tuluminati-house",
  },
  {
    title: "Mid-Century Waves",
    location: "Akumal",
    summary: "Un refugio sereno y textural con tonos cálidos y calma costera.",
    image: "/assets/mid-century-waves/terrace-1.jpg",
    href: "/es/portafolio/mid-century-waves",
  },
  {
    title: "Roots Tulum",
    location: "Tulum",
    summary: "Una expresión atemporal de materiales puros y naturales.",
    image: "/assets/raices-tulum/bedroom-4.jpg",
    href: "/es/portafolio/roots-tulum",
  },
  {
    title: "Contemporary Retreat",
    location: "Cancún",
    summary: "Arquitectura moderna con materiales refinados y de alta gama.",
    image: "/assets/retiro-contemporaneo/living-room-1.png",
    href: "/es/portafolio/contemporary-retreat",
  },
];

const TITLE = "Portafolio - Siamo Design";
const DESCRIPTION =
  "Descubre el valor único que podemos aportar a tu proyecto. Cotiza con nosotros llenando nuestro formulario y permítenos brindarte una atención de calidad. ¡Estamos listos para dar vida a tu visión! Empezar un proyecto Naturaleza Atemporal Then Formerly Equilibra lo natural y lo contemporáneo, creando un espacio sofisticado, acogedor y atemporal. Raíces Tulum Then Formerly […]";
const OG_IMAGE = "https://siamodesign.com/es/wp-content/uploads/2025/02/1-Despues-3.jpg";
const canonicalPath = "/es/portafolio/";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: {
    canonical: canonicalPath,
    languages: {
      en: "/portfolio/",
      es: canonicalPath,
      "x-default": "/portfolio/",
    },
  },
  openGraph: {
    type: "article",
    locale: "es_ES",
    title: TITLE,
    description: DESCRIPTION,
    url: canonicalPath,
    siteName: "Siamo Design",
    images: [
      {
        url: OG_IMAGE,
        width: 1400,
        height: 933,
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
};

export default function PortfolioPage() {
  const siteUrl = getSiteUrl();
  const canonicalUrl = `${siteUrl}${canonicalPath}`;
  const esRoot = `${siteUrl}/es/`;

  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": canonicalUrl,
        url: canonicalUrl,
        name: TITLE,
        isPartOf: { "@id": `${esRoot}#website` },
        primaryImageOfPage: { "@id": `${canonicalUrl}#primaryimage` },
        image: { "@id": `${canonicalUrl}#primaryimage` },
        thumbnailUrl: "https://siamodesign.com/es/wp-content/uploads/2025/02/1-Despues-3-768x512.jpg",
        datePublished: "2024-03-20T01:42:49+00:00",
        dateModified: "2025-03-27T23:49:30+00:00",
        description: DESCRIPTION,
        breadcrumb: { "@id": `${canonicalUrl}#breadcrumb` },
        inLanguage: "es",
        potentialAction: [
          {
            "@type": "ReadAction",
            target: [canonicalUrl],
          },
        ],
      },
      {
        "@type": "ImageObject",
        inLanguage: "es",
        "@id": `${canonicalUrl}#primaryimage`,
        url: OG_IMAGE,
        contentUrl: OG_IMAGE,
        width: 1400,
        height: 933,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Portada", item: esRoot },
          { "@type": "ListItem", position: 2, name: "Portafolio" },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${esRoot}#website`,
        url: esRoot,
        name: "Siamo Design",
        description: "",
        publisher: { "@id": `${esRoot}#organization` },
        potentialAction: [
          {
            "@type": "SearchAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate: `${esRoot}?s={search_term_string}`,
            },
            "query-input": {
              "@type": "PropertyValueSpecification",
              valueRequired: true,
              valueName: "search_term_string",
            },
          },
        ],
        inLanguage: "es",
      },
      {
        "@type": "Organization",
        "@id": `${esRoot}#organization`,
        name: "Siamo Design",
        url: esRoot,
        logo: {
          "@type": "ImageObject",
          inLanguage: "es",
          "@id": `${esRoot}#/schema/logo/image/`,
          url: "https://siamodesign.com/wp-content/uploads/2024/03/cropped-9019c03768d3a9dc34a90a32adf82d72.png",
          contentUrl:
            "https://siamodesign.com/wp-content/uploads/2024/03/cropped-9019c03768d3a9dc34a90a32adf82d72.png",
          width: 499,
          height: 167,
          caption: "Siamo Design",
        },
        image: { "@id": `${esRoot}#/schema/logo/image/` },
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
        langHref="/portfolio/"
        getToKnowUsHref="/es/conocenos/"
        servicesHref="/es/servicios/"
        portfolioHref="/es/portafolio/"
        ctaHref="/es/cuestionario/"
        labels={{
          getToKnowUs: "CONÓCENOS",
          services: "SERVICIOS",
          portfolio: "PORTAFOLIO",
          langDesktop: "ENGLISH",
          langMobile: "EN",
          cta: "AGENDAR CONSULTA",
          menuOpen: "MENÚ",
          menuClose: "CERRAR",
          follow: "Síguenos",
        }}
      />

      <main className="portfolio-page overscroll-safe">
        <section className="portfolio-hero-block" aria-label="Introducción de portafolio">
          <div className="portfolio-crumb">
            <a href="/es/" aria-label="Ir a inicio">INICIO</a> • PORTAFOLIO
          </div>
          <h1 className={`portfolio-hero-title ${playfairFont.className}`}>
            Portafolio
          </h1>
          <div className="portfolio-filter-row">
            <button className="portfolio-filter-btn">
              FILTRAR <span className="chevron">⌄</span>
            </button>
          </div>
          <hr className="portfolio-divider" />
        </section>

        <section className="portfolio-section" aria-label="Todos los proyectos">
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
        <section className="footer-seo" aria-label="Áreas de servicio y palabras clave">
          <ul className="seo-col">
            <li><span className="check" aria-hidden="true">✓</span> Diseño de interiores Playa del Carmen</li>
            <li><span className="check" aria-hidden="true">✓</span> Servicios de diseño de interiores Playa del Carmen</li>
            <li><span className="check" aria-hidden="true">✓</span> Home staging Playa del Carmen</li>
            <li><span className="check" aria-hidden="true">✓</span> Diseño de interiores comercial Playa del Carmen</li>
          </ul>
          <ul className="seo-col">
            <li><span className="check" aria-hidden="true">✓</span> Diseño de interiores Riviera Maya</li>
            <li><span className="check" aria-hidden="true">✓</span> Diseñadores de interiores y decoradores Riviera Maya</li>
            <li><span className="check" aria-hidden="true">✓</span> Home staging Riviera Maya</li>
            <li><span className="check" aria-hidden="true">✓</span> Diseño de interiores comercial Riviera Maya</li>
          </ul>
          <ul className="seo-col">
            <li><span className="check" aria-hidden="true">✓</span> Diseño de interiores Cancún</li>
            <li><span className="check" aria-hidden="true">✓</span> Diseñadores de interiores y decoradores Cancún</li>
            <li><span className="check" aria-hidden="true">✓</span> Home staging Cancún</li>
            <li><span className="check" aria-hidden="true">✓</span> Diseño de interiores comercial Cancún</li>
          </ul>
          <ul className="seo-col">
            <li><span className="check" aria-hidden="true">✓</span> Diseño de interiores Tulum</li>
            <li><span className="check" aria-hidden="true">✓</span> Servicios de diseño de interiores Tulum</li>
            <li><span className="check" aria-hidden="true">✓</span> Diseñadores de interiores y decoradores Tulum</li>
            <li><span className="check" aria-hidden="true">✓</span> Home staging Tulum</li>
            <li><span className="check" aria-hidden="true">✓</span> Diseño de interiores comercial Tulum</li>
          </ul>
        </section>

        <div className="footer-explore" aria-label="Explorar y redes">
          <nav className="explore" aria-label="Explorar">
            <a href="/es/servicios/">Servicios</a>
            <a href="/es/portafolio/">Portafolio</a>
            <a href="/es/conocenos/">Conócenos</a>
              <a href="mailto:hello@siamodesign.com" aria-label="Envíanos un correo">Email</a>
              <a href="https://wa.me/529842111989" target="_blank" rel="noopener noreferrer" aria-label="Chatea por WhatsApp">
                WhatsApp
              </a>
            </nav>
            <div className="social" aria-label="Perfiles sociales">
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

          <div className="footer-legal" aria-label="Información legal">
            <p className="legal-line">
              <span className="legal-full">Siamo Design | Estudio de Diseño de Interiores</span>
            </p>
            <p className="legal-line">
              <span className="legal-full">© 2025 Siamo Design. Todos los derechos reservados.</span>
            </p>
            <p className="legal-sig"><a href="https://donebyelevator.com/website-redesign-service" target="_blank" rel="noopener noreferrer sponsored">Diseñado y construido por Elevator</a></p>
          </div>
        </div>
      </footer>
    </>
  );
}
