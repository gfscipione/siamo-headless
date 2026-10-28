import PlanningGuideLink from "../../../components/PlanningGuideLink";
import Image from "next/image";
import Link from "next/link";
import PortfolioNav from "../../../components/PortfolioNav";
import FaqAccordion from "../../../components/FaqAccordion";
import HeroVideo from "../../../(en)/services/HeroVideo";

import { playfairFont, poppinsFont } from "../../../fonts";
import { getSiteUrl } from "../../../lib/siteUrl";

const TITLE = "Servicios de Diseño de Interiores | Siamo Design";
const DESCRIPTION =
  "Conoce nuestro diseño de interiores llave en mano para viviendas en Riviera Maya y Cancún, o el diseño virtual con un plan que puedes ejecutar por tu cuenta.";
const OG_IMAGE = "https://siamodesign.com/wp-content/uploads/2025/05/Virtual-design.png";

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: {
    canonical: "/es/servicios/",
    languages: {
      en: "/services/",
      es: "/es/servicios/",
      "x-default": "/services/",
    },
  },
  openGraph: {
    type: "article",
    url: "/es/servicios/",
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Siamo Design",
    locale: "es_ES",
    images: [{ url: OG_IMAGE, width: 750, height: 400, type: "image/png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
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
    title: "Diseño de Interiores Llave en Mano",
    subtitle: "Tu vivienda completa, del diseño a la instalación.",
    description:
      "Para quienes quieren dejar los detalles en manos de un equipo. Reunimos el diseño, la selección de mobiliario, las compras y la instalación para que disfrutes tu hogar, aunque vivas en otro país.",
    image: "/assets/People/full-service.mp4",
    poster: "/assets/People/full-service-poster.webp",
    cta: "Conoce el servicio llave en mano",
    href: "/es/servicios/diseno-llave-en-mano/",
    mediaType: "video",
    playbackThreshold: 1,
  },
  {
    title: "Diseño de Interiores Virtual",
    subtitle: "Un plan de diseño que tú llevas a la práctica.",
    description:
      "Para quienes buscan orientación profesional y prefieren gestionar las compras y la ejecución. Recibe una propuesta de distribución y una lista de compras seleccionada para avanzar a tu ritmo.",
    image: "/assets/services/virtual-design-1.mp4",
    mediaType: "video",
    playbackThreshold: 1,
    preload: "metadata",
    poster: "/assets/services/virtual-design-1.webp",
    cta: "Conoce el diseño virtual",
    href: "/es/servicios/diseno-virtual/",
  },
];

const promises = [
  {
    title: "Trayectoria Comprobada",
    copy:
      "Nuestro portafolio residencial reúne distintas viviendas, materiales y formas de habitar. Es un punto de partida para imaginar tu propio proyecto.",
    icon: "desk",
  },
  {
    title: "Planificación Minuciosa",
    copy:
      "En el servicio llave en mano coordinamos diseño, compras e instalación. En el diseño virtual recibes un plan para guiar la ejecución por tu cuenta.",
    icon: "checklist",
  },
  {
    title: "Diseño Intencional",
    copy:
      "Partimos de tus gustos, necesidades y rutinas para crear interiores personales, cómodos y pensados para tu vida diaria.",
    icon: "cabinet",
  },
];

const featuredProjects = [
  {
    title: "Naturaleza Atemporal",
    location: "Puerto Morelos",
    summary: "Una mezcla atemporal de elementos naturales y diseño contemporáneo.",
    image: "/assets/timeless-nature/living-room-19.jpg",
    href: "/es/portafolio/naturaleza-atemporal/",
  },
  {
    title: "Raíces Tulum",
    location: "Tulum",
    summary: "Una expresión atemporal de materiales puros y naturales.",
    image: "/assets/raices-tulum/bedroom-4.jpg",
    href: "/es/portafolio/raices-tulum/",
  },
  {
    title: "Olas Mid-Century",
    location: "Akumal",
    summary: "Un refugio sereno y texturizado, construido alrededor de tonos cálidos y calma costera.",
    image: "/assets/mid-century-waves/terrace-1.jpg",
    href: "/es/portafolio/mid-century-waves/",
  },
];

const faqs = [
  {
    question: "¿Cuál es la diferencia entre el diseño llave en mano y el diseño virtual?",
    answer:
      "El servicio llave en mano reúne diseño, compras e instalación para una vivienda completa. El diseño virtual te ofrece una propuesta de distribución y una lista de compras que ejecutas por tu cuenta. La diferencia principal es quién gestiona el proyecto, no dónde vives.",
  },
  {
    question: "¿Cómo sé qué servicio es el adecuado para mí?",
    answer: (
      <>
        {"Si quieres delegar el diseño, las compras y la instalación de tu vivienda, conoce nuestro "}
        <a href="/es/servicios/diseno-llave-en-mano/" style={{ fontWeight: 600, textDecoration: "underline" }}>
          {"Diseño de Interiores Llave en Mano"}
        </a>
        {". Vivir fuera de la zona no significa que necesites diseño virtual."}
        <br />
        <br />
        {"Si prefieres gestionar las compras y la ejecución, el "}
        <a href="/es/servicios/diseno-virtual/" style={{ fontWeight: 600, textDecoration: "underline" }}>
          {"Diseño de Interiores Virtual"}
        </a>
        {" te ofrece un plan profesional para hacerlo."}
      </>
    ),
  },
  {
    question: "¿Cuánto cuestan sus servicios de diseño?",
    answer: (
      <>
        {"Los honorarios dependen del tamaño de la vivienda y del alcance del trabajo. Cuéntanos sobre tu proyecto en "}
        <a href="/es/cuestionario/" style={{ fontWeight: 600, textDecoration: "underline" }}>
          {"nuestro cuestionario"}
        </a>
        {" para entender qué necesitas y conversar sobre el servicio adecuado y los siguientes pasos."}
      </>
    ),
  },
  {
    question: "¿Puedo ver ejemplos de su trabajo?",
    answer: (
      <>
        Sí. Nuestro portafolio muestra una selección de proyectos recientes en distintos estilos,
        ya que cada diseño se basa en los gustos, necesidades y estilo de vida de cada cliente.
        Aunque todos mantienen la esencia de Siamo Design, cada proyecto es único y creado a
        medida. Nuestro portafolio está pensado para inspirarte y ayudarte a imaginar lo que
        podemos crear juntos.
        <br />
        <br />
        <a href="/es/portafolio/" style={{ fontWeight: 600, textDecoration: "underline" }}>
          Ver Portafolio
        </a>
      </>
    ),
  },
  {
    question: "¿Puedo contratar el servicio llave en mano si vivo fuera de México?",
    answer: (
      <>
        {"Sí. Si tu vivienda está en Riviera Maya o Cancún y quieres que un equipo gestione el diseño, las compras y la instalación en la zona, el "}
        <a href="/es/servicios/diseno-llave-en-mano/" style={{ fontWeight: 600, textDecoration: "underline" }}>
          {"servicio llave en mano"}
        </a>
        {" puede ser la opción adecuada. El diseño virtual es otra modalidad, para quienes prefieren recibir un plan y ejecutarlo por su cuenta."}
      </>
    ),
  },
  {
    question: "¿En qué estilos de diseño de interiores se especializan?",
    answer: (
      <>
        Hemos construido nuestra reputación creando espacios bellamente equilibrados que se sienten
        frescos y atemporales. El estilo distintivo de Siamo Design es cálido, intencional y
        acogedor—basado en la integración de materiales naturales, piezas curadas y texturas en
        capas.
        <br />
        <br />
        Hemos diseñado hogares con detalles tradicionales y hallazgos vintage, así como espacios
        definidos por líneas limpias y materiales orgánicos—siempre integrando nuestra esencia en
        cada proyecto.
        <br />
        <br />
        Nuestro equipo adapta cada diseño a las necesidades, gustos y estilo de vida del cliente,
        con el objetivo de crear espacios que aporten bienestar y armonía a la vida cotidiana.
      </>
    ),
  },
];

const socialItems = [
  {
    image: "/assets/img/post1.jpeg",
    text: "Neutrales en capas y materiales cálidos que invitan a quedarse.",
  },
  {
    image: "/assets/img/post2.jpeg",
    text: "Escaleras escultóricas y acentos tonales para un gesto sutil.",
  },
  {
    image: "/assets/img/post3.jpeg",
    text: "Una sala que combina carpintería clásica con confort moderno.",
  },
  {
    image: "/assets/img/post4.jpeg",
    text: "Color y textura lúdicos en un espacio hecho para la imaginación.",
  },
  {
    image: "/assets/img/post5.jpeg",
    text: "Espacios de reunión llenos de luz con acabados naturales en capas.",
  },
  {
    image: "/assets/img/post6.jpeg",
    text: "Comedor interior-exterior enmarcado por cortinas suaves y vegetación.",
  },
];

export default function ServicesPage() {
  const siteUrl = getSiteUrl();
  const canonical = `${siteUrl}/es/servicios/`;
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
        primaryImageOfPage: { "@id": `${canonical}#primaryimage` },
        image: { "@id": `${canonical}#primaryimage` },
        thumbnailUrl: OG_IMAGE,
        datePublished: "2024-03-19T03:12:16+00:00",
        dateModified: "2026-10-15T20:09:21Z",
        breadcrumb: { "@id": `${canonical}#breadcrumb` },
        inLanguage: "es",
        potentialAction: [{ "@type": "ReadAction", target: [canonical] }],
      },
      {
        "@type": "ImageObject",
        inLanguage: "es",
        "@id": `${canonical}#primaryimage`,
        url: OG_IMAGE,
        contentUrl: OG_IMAGE,
        width: 750,
        height: 400,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonical}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: esRoot },
          { "@type": "ListItem", position: 2, name: "Servicios" },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${esRoot}#website`,
        url: esRoot,
        name: "Siamo Design",
        publisher: { "@id": `${esRoot}#organization` },
        potentialAction: [
          {
            "@type": "SearchAction",
            target: { "@type": "EntryPoint", urlTemplate: `${esRoot}?s={search_term_string}` },
            "query-input": { "@type": "PropertyValueSpecification", valueRequired: true, valueName: "search_term_string" },
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
          contentUrl: "https://siamodesign.com/wp-content/uploads/2024/03/cropped-9019c03768d3a9dc34a90a32adf82d72.png",
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
        lang="es"
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
        langHref="/services/"
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

      <main className="services-page overscroll-safe">
        <section
          className="services-hero"
          aria-label="Hero de servicios"
          style={{
            ["--project-hero-pad-top-m" as any]: "2rem",
            ["--project-hero-pad-bottom-m" as any]: "5rem",
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
            <h1 className={`services-hero__title ${playfairFont.className}`}>Servicios</h1>
            <p
              className={`services-hero__lead services-hero__lead--desktop ${playfairFont.className}`}
            >
              Diseño de interiores llave en mano para viviendas en Riviera Maya y Cancún: diseño, compras e instalación en un mismo servicio. Si prefieres gestionar el proyecto por tu cuenta, el diseño virtual te ofrece un plan profesional para llevarlo a la práctica.
            </p>
            <p
              className={`services-hero__lead services-hero__lead--mobile ${playfairFont.className}`}
            >
              Diseño de interiores llave en mano para viviendas en Riviera Maya y Cancún, o diseño virtual con un plan que ejecutas por tu cuenta.
            </p>
          </div>
        </section>

        <section className="services-heading" aria-label="Encabezado de servicios">
          <div className="services-section__inner">
            <h2 className={`promises-title ${playfairFont.className}`}>Nuestros Servicios</h2>
          </div>
        </section>

        <section className="services-section" aria-label="Nuestros servicios">
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
                    href={
                      service.href ||
                      (service.title.toLowerCase().includes("virtual")
                        ? "/es/servicios/diseno-virtual/"
                        : "/es/servicios/#on-site")
                    }
                  >
                    {service.cta}
                  </Link>
                </div>
              </article>
            ))}
            </div>
          </div>
        </section>

        <section className="promises-section" aria-label="Nuestras promesas">
          <div className="promises-section__inner">
            <div className="promises-header">
              <h2 className={`promises-title ${playfairFont.className}`}>Nuestras Promesas</h2>
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

        <section className="featured-projects" aria-label="Proyectos destacados">
          <div className="featured-projects__inner">
            <h2 className={`featured-projects__title ${playfairFont.className}`}>Proyectos Destacados</h2>
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

        <section className="faq-section" aria-label="Preguntas frecuentes">
          <div className="faq-section__inner">
            <div className="faq-section__title-col">
              <h2 className={`faq-section__title ${playfairFont.className}`}>
                Preguntas frecuentes
              </h2>
            </div>
            <FaqAccordion items={faqs} />
          </div>
        </section>

        <section className="social-follow" aria-label="Síguenos">
          <div className="social-follow__inner">
            <div className="social-follow__title-col">
              <h2 className={`social-follow__title ${playfairFont.className}`}>Síguenos</h2>
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
            ["--footer-lift" as any]: "0px",
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
                <PlanningGuideLink />
                <a href="/es/servicios/">Servicios</a>
                <a href="/es/portafolio/">Portafolio</a>
                <a href="/es/conocenos/">Conócenos</a>
                <a href="mailto:hello@siamodesign.com" aria-label="Escríbenos">Correo</a>
                <a href="https://wa.me/529842111989" target="_blank" rel="noopener noreferrer" aria-label="Chat en WhatsApp">
                  WhatsApp
                </a>
              </nav>
              <div className="social" aria-label="Redes sociales">
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

            <div className="footer-legal" aria-label="Legal">
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
