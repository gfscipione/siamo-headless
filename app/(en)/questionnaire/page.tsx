import type { Metadata } from "next";
import PortfolioNav from "../../components/PortfolioNav";
import { getSiteUrl } from "../../lib/siteUrl";
import QuestionnaireForm from "./QuestionnaireForm";

const canonicalPath = "/questionnaire/";
const TITLE = "Questionnaire - Siamo Design";
const OG_DESCRIPTION =
  "Por favor, activa JavaScript en tu navegador para completar este formulario.Nombre y Apellido *Teléfono de contacto *Correo Electrónico *Dirección de la propiedad *Seleccione servicio *Escoge la opción de tu preferenciaDiseño VirtualDiseño y Ejecución / Servicio Full¿Tiene planos específicos de la propiedad? *A) Si, cuento con planos.B) Tengo un croquis con los m2.C) No, requiero contratar […]";
const DATE_PUBLISHED = "2024-04-28T21:00:50+00:00";
const DATE_MODIFIED = "2025-03-21T22:04:32+00:00";
const HERO_SLIDES = [
  "/assets/serene-jungle/living-room-3.webp",
  "/assets/mayan-sanctuary/lounge-terrace-3.webp",
  "/assets/timeless-nature/living-room-19.jpg",
];

export const metadata: Metadata = {
  title: { absolute: TITLE },
  alternates: {
    canonical: canonicalPath,
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

export default function QuestionnairePage() {
  const siteUrl = getSiteUrl();
  const canonical = `${siteUrl}${canonicalPath}`;

  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": canonical,
        url: canonical,
        name: TITLE,
        isPartOf: { "@id": `${siteUrl}/#website` },
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
          { "@type": "ListItem", position: 1, name: "Portada", item: `${siteUrl}/` },
          { "@type": "ListItem", position: 2, name: "Questionnaire" },
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
            target: { "@type": "EntryPoint", urlTemplate: `${siteUrl}/?s={search_term_string}` },
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
        "@id": `${siteUrl}/#organization`,
        name: "Siamo Design",
        url: `${siteUrl}/`,
        logo: {
          "@type": "ImageObject",
          inLanguage: "es",
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
      <PortfolioNav styleVars={styleVars} langHref="/es/cuestionario/" hideCta />
      <main className="questionnaire-page">
        <section className="questionnaire-hero" aria-label="Contact introduction">
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
                <p className="questionnaire-eyebrow">BEFORE WE MEET</p>
                <h2 className="questionnaire-subhead">Let&apos;s make our call count.</h2>
                <p className="questionnaire-body">
                  Before our video call, please share a few details about your space and what
                  you’re trying to achieve. It takes 3–5 minutes and helps us come prepared.
                </p>
              </div>
            </div>
            <h1 className="questionnaire-title">Contact</h1>
          </div>
        </section>

        <section className="questionnaire-form-section" aria-label="Contact form">
          <div className="questionnaire-form-inner">
            <QuestionnaireForm />
          </div>
        </section>
      </main>
    </>
  );
}
