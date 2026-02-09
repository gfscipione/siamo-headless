import type { Metadata } from "next";
import PortfolioNav from "../../../components/PortfolioNav";
import { getSiteUrl } from "../../../lib/siteUrl";
import QuestionnaireForm from "./QuestionnaireForm";

const canonicalPath = "/es/cuestionario/";
const TITLE = "Cuestionario - Siamo Design";
const OG_DESCRIPTION =
  "Please enable JavaScript in your browser to complete this form.Nombre y Apellido *Teléfono de contacto *Correo Electrónico *Dirección de la propiedad *Seleccione servicio *Escoge la opción de tu preferenciaDiseño VirtualDiseño y Ejecución / Servicio Full¿Tiene planos específicos de la propiedad? *A) Si, cuento con planos.B) Tengo un croquis con los m2.C) No, requiero contratar una […]";
const DATE_PUBLISHED = "2024-04-28T21:00:50+00:00";
const DATE_MODIFIED = "2025-03-21T22:10:12+00:00";
const HERO_SLIDES = [
  "/assets/serene-jungle/living-room-3.webp",
  "/assets/mayan-sanctuary/lounge-terrace-3.webp",
  "/assets/timeless-nature/living-room-19.jpg",
];

export const metadata: Metadata = {
  title: { absolute: TITLE },
  alternates: {
    canonical: canonicalPath,
    languages: {
      en: "/questionnaire/",
      es: canonicalPath,
      "x-default": "/questionnaire/",
    },
  },
  openGraph: {
    type: "article",
    locale: "es_ES",
    title: TITLE,
    description: OG_DESCRIPTION,
    url: canonicalPath,
    siteName: "Siamo Design",
  },
};

export default function CuestionarioPage() {
  const siteUrl = getSiteUrl();
  const canonical = `${siteUrl}${canonicalPath}`;
  const esRoot = `${siteUrl}/es/`;

  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": canonical,
        url: canonical,
        name: TITLE,
        isPartOf: { "@id": `${esRoot}#website` },
        datePublished: DATE_PUBLISHED,
        dateModified: DATE_MODIFIED,
        breadcrumb: { "@id": `${canonical}#breadcrumb` },
        inLanguage: "es",
        potentialAction: [{ "@type": "ReadAction", target: [canonical] }],
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonical}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Portada", item: esRoot },
          { "@type": "ListItem", position: 2, name: "Cuestionario" },
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
            target: { "@type": "EntryPoint", urlTemplate: `${esRoot}?s={search_term_string}` },
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

  return (
    <>
      <script
        type="application/ld+json"
        className="yoast-schema-graph"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />
      <PortfolioNav
        styleVars={styleVars}
        langHref="/questionnaire/"
        hideCta
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
      <main className="questionnaire-page">
        <section className="questionnaire-hero" aria-label="Introducción de contacto">
          <div className="questionnaire-inner">
            <div className="questionnaire-top">
              <div className="questionnaire-photo" aria-hidden="true">
                <div className="questionnaire-slideshow">
                  {HERO_SLIDES.map((src) => (
                    <img
                      key={src}
                      src={src}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className="questionnaire-slide"
                    />
                  ))}
                </div>
              </div>
              <div className="questionnaire-copy">
                <p className="questionnaire-eyebrow">ANTES DE LA LLAMADA</p>
                <h2 className="questionnaire-subhead">Hagamos que la llamada cuente.</h2>
                <p className="questionnaire-body">
                  Antes de la videollamada, comparte algunos detalles sobre tu espacio y lo que
                  quieres lograr. Toma 3–5 minutos y nos ayuda a llegar preparados.
                </p>
              </div>
            </div>
            <h1 className="questionnaire-title">Empecemos</h1>
          </div>
        </section>

        <section className="questionnaire-form-section" aria-label="Formulario de contacto">
          <div className="questionnaire-form-inner">
            <QuestionnaireForm />
          </div>
        </section>
      </main>
      <footer
        className="portfolio-footer"
        style={{
          ["--footer-lift" as any]: "var(--footer-h)",
          ["--footer-overlap" as any]: "0px",
          ["--footer-pad-top-mobile" as any]: "0px",
          ["--footer-pad-bottom-mobile" as any]: "18px",
          ["--footer-overlap-mobile" as any]: "0px",
          ["--footer-h" as any]: "200px",
          ["--footer-bottom-maxw" as any]: "1100px",
        }}
      >
        <div className="footer-inner">
          <div className="footer-explore" aria-label="Explorar y redes">
            <nav className="explore" aria-label="Explorar">
              <a href="/es/servicios/">Servicios</a>
              <a href="/es/portafolio/">Portafolio</a>
              <a href="/es/conocenos/">Conócenos</a>
              <a href="mailto:hello@siamodesign.com" aria-label="Envíanos un correo">
                Email
              </a>
              <a
                href="https://wa.me/529842111989"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chatea por WhatsApp"
              >
                WhatsApp
              </a>
            </nav>
            <div className="social" aria-label="Perfiles sociales">
              <a
                className="social__link"
                href="https://www.linkedin.com/company/siamo-design/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M6.5 9h2.9v9H6.5V9Zm1.4-4.5a1.7 1.7 0 1 1 0 3.4 1.7 1.7 0 0 1 0-3.4ZM10.8 9h2.8v1.2h.1c.4-.8 1.4-1.6 2.9-1.6 3.1 0 3.7 2 3.7 4.6V18h-2.9v-4.2c0-1-.1-2.3-1.5-2.3-1.5 0-1.8 1.1-1.8 2.2V18h-2.9V9Z" />
                </svg>
              </a>
              <a
                className="social__link"
                href="https://www.youtube.com/@siamodesign"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M21.7 8.2s-.2-1.5-.8-2.2c-.7-.8-1.5-.8-1.8-.9C16.2 5 12 5 12 5h0s-4.2 0-7.1.1c-.3 0-1.1 0-1.8.9-.6.7-.8 2.2-.8 2.2S2 9.9 2 11.6v.8c0 1.7.2 3.4.2 3.4s.2 1.5.8 2.2c.7.8 1.7.8 2.2.9 1.6.2 6.8.2 6.8.2s4.2 0 7.1-.1c.3 0 1.1 0 1.8-.9.6-.7.8-2.2.8-2.2s.2-1.7.2-3.4v-.8c0-1.7-.2-3.4-.2-3.4Z" />
                  <path d="m10 9.8 4.7 2.2L10 14.2V9.8Z" fill="#fff" />
                </svg>
              </a>
              <a
                className="social__link"
                href="https://www.tiktok.com/@siamodesign"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M15.5 4.2c.6.8 1.5 1.3 2.5 1.3h.4v2.5c-.9 0-1.8-.2-2.6-.6v5.5a5.08 5.08 0 1 1-5.1-5.1c.3 0 .6 0 .9.1v2.7a2.4 2.4 0 0 0-.9-.2 2.38 2.38 0 1 0 2.38 2.4V3h2.5v1.2Z" />
                </svg>
              </a>
              <a
                className="social__link"
                href="https://www.instagram.com/siamo_design/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
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
              <span className="legal-full">Siamo Design | Interior Design Studio</span>
            </p>
            <p className="legal-line">
              <span className="legal-full">© 2025 Siamo Design. All rights reserved.</span>
            </p>
            <p className="legal-sig">
              <a
                href="https://donebyelevator.com/website-redesign-service"
                target="_blank"
                rel="noopener noreferrer sponsored"
              >
                Designed & Built by Elevator
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
