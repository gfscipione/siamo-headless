import Link from "next/link";
import type { Metadata } from "next";
import PortfolioNav from "../../../../components/PortfolioNav";
import FaqAccordion from "../../../../components/FaqAccordion";
import HeroVideo from "../../../../(en)/services/HeroVideo";
import VideoWithOverlay from "../../../../components/VideoWithOverlay";
import { playfairFont, poppinsFont } from "../../../../fonts";
import { getSiteUrl } from "../../../../lib/siteUrl";

const TITLE = "Diseño de Interiores Virtual | Asesoría Online Personalizada";
const DESCRIPTION =
  "Transforma tu espacio con diseño de interiores virtual: concepto, distribución, paleta de color y lista de compras. Servicio online, claro y profesional.";
const OG_IMAGE = "https://siamodesign.com/es/wp-content/uploads/2025/06/Virtual-design.png";
const canonicalPath = "/es/servicios/diseno-virtual/";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: {
    canonical: canonicalPath,
    languages: {
      en: "/services/virtual-design/",
      es: canonicalPath,
      "x-default": "/services/virtual-design/",
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
        width: 64,
        height: 64,
        type: "image/png",
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

export default function VirtualDesignPage() {
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
        thumbnailUrl: OG_IMAGE,
        datePublished: "2025-04-23T23:51:40+00:00",
        dateModified: "2025-04-23T23:59:46+00:00",
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
        width: 64,
        height: 64,
        caption: "Diseño de Interiores Virtual",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: esRoot },
          { "@type": "ListItem", position: 2, name: "Servicios", item: `${esRoot}servicios/` },
          { "@type": "ListItem", position: 3, name: "Diseño de Interiores Virtual" },
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
      title: "Costo Eficiente",
      copy: "Ahorra en honorarios tradicionales sin renunciar a un diseño transformador.",
      icon: "wallet",
    },
    {
      title: "Implementación Flexible",
      copy: "Aprovecha tu tiempo trabajando el proceso de diseño desde tu casa.",
      icon: "clock",
    },
    {
      title: "Diseñadoras Expertas",
      copy: "Recibe un plan de diseño personalizado según tus preferencias.",
      icon: "spark",
    },
  ];

  const deliverables = [
    {
      title: "Mood Board",
      copy:
        "Una base esencial. Tu diseñadora curará un conjunto de imágenes, colores y elementos de diseño para inspirar el look y el concepto de tu proyecto.",
      icon: "mood",
    },
    {
      title: "Modelado 3D",
      copy:
        "Visualiza tu espacio completamente amueblado y estilizado antes de hacer compras o iniciar la fabricación. A través del modelado 3D, nuestras diseñadoras definen cada detalle, seleccionando mobiliario según tu estilo de vida, escala, paleta de color y presupuesto.",
      icon: "space",
    },
    {
      title: "Lista de compras con enlaces",
      copy:
        "Te entregaremos una lista de compras curada con enlaces directos a cada elemento seleccionado, para que puedas implementarla a tu ritmo.",
      icon: "leaf",
    },
    {
      title: "Documentación del Proyecto",
      copy:
        "El plano maestro de tu proyecto. Incluye planos técnicos para fabricación, eléctricos e instalaciones, asegurando una ejecución precisa.",
      icon: "cabinet",
    },
  ];

  const faqs = [
    {
      question:
        "¿Cuál es la diferencia entre Diseño de Interiores Llave en Mano y Diseño de Interiores Virtual?",
      answer:
        "El diseño interior llave en mano abarca proyectos de mayor escala e incluye consultas presenciales, gestión integral del proyecto, visitas a obra, compra de mobiliario e instalación. El diseño interior virtual ofrece un enfoque remoto y flexible, pensado para un solo espacio a la vez, con planes de diseño personalizados y listas de compras que puedes implementar según tu tiempo y presupuesto.",
    },
    {
      question: "¿Cómo sé cuál servicio es el adecuado para mí?",
      answer: (
        <>
          Para ayudarte a elegir el servicio que mejor se adapta a ti y a tu estilo de vida, hay
          algunos factores clave a considerar: el tiempo disponible, el tamaño y alcance del
          proyecto, tu presupuesto y qué tan involucrado quieres estar.
          <br />
          <br />
          Si tienes poco tiempo, no estás en el lugar donde está el proyecto, o simplemente quieres
          que todo esté listo cuando llegues sin tener que gestionar nada, entonces nuestro{" "}
          <a href="/es/servicios/diseno-llave-en-mano/" style={{ fontWeight: 600, textDecoration: "underline" }}>
            Diseño de Interiores Llave en Mano
          </a>{" "}
          es la opción ideal.
          <br />
          <br />
          Si, por el contrario, sí tienes tiempo, prefieres ejecutar tu proyecto por fases, estás
          local y principalmente necesitas dirección profesional para enfocar tus ideas, entonces
          nuestro{" "}
          <a
            href="/es/servicios/diseno-virtual/"
            style={{ fontWeight: 600, textDecoration: "underline" }}
          >
            Diseño de Interiores Virtual
          </a>{" "}
          es perfecto para ti.
        </>
      ),
    },
    {
      question: "¿Cuánto cuestan sus servicios de diseño?",
      answer: (
        <>
          Nuestros honorarios varían según el alcance del proyecto, el tamaño de los espacios y las
          necesidades específicas de cada cliente. Te invitamos a{" "}
          <a href="/es/cuestionario/" style={{ fontWeight: 600, textDecoration: "underline" }}>
            completar nuestro cuestionario
          </a>{" "}
          para agendar una consulta—esto nos ayuda a entender tu proyecto y preparar una propuesta
          personalizada, que incluye una tarifa de diseño fija y un presupuesto estimado de
          mobiliario/inversión, sin compromiso.
        </>
      ),
    },
    {
      question: "¿Puedo ver ejemplos de su trabajo anterior?",
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
      question: "¿Trabajan con clientes fuera de su zona local?",
      answer:
        "Sí. Atendemos a clientes tanto locales como remotos. Para proyectos en sitio, viajamos cuando es necesario; para proyectos a distancia, nuestro servicio de Diseño de Interiores Virtual mantiene todo coordinado.",
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

  return (
    <>
      <script
        type="application/ld+json"
        className="yoast-schema-graph"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />
      <PortfolioNav
        styleVars={styleVars}
        isHero
        langHref="/services/virtual-design/"
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

      <main className="services-page overscroll-safe about-hero-page">
        <section
          className="services-hero hero-virtual-compact"
          aria-label="Hero de diseño virtual"
          style={{
            backgroundImage: "none",
            alignItems: "flex-start",
            ["--virtual-hero-bg-h" as any]: `${heroBgHeightPx}px`,
            ["--virtual-hero-pad-top" as any]: "9rem",
            ["--virtual-hero-pad-x" as any]: "24px",
          }}
        >
          <div className="services-hero__content">
            <section className="portfolio-hero-block" aria-label="Introducción de diseño virtual">
              <div
                className="portfolio-crumb"
                style={{
                  color: "#ffffff",
                  opacity: 1,
                  position: "relative",
                  top: "-5rem",
                }}
              >
                <Link href="/es/">INICIO</Link> • <Link href="/es/servicios/">SERVICIOS</Link> • DISEÑO VIRTUAL
              </div>
              <h1
                className={`portfolio-hero-title fullservice-title ${playfairFont.className}`}
                style={{ color: "#ffffff", opacity: 1, margin: "0 0 1.5rem" }}
              >
                Diseño de Interiores Virtual (Asesoría Online)
              </h1>
              <div className="portfolio-filter-row">
                <button className="portfolio-filter-btn">
                  FILTRAR <span className="chevron">⌄</span>
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

        <section className="about-story" aria-label="Descripción del servicio">
          <h2 className={`about-story__headline ${playfairFont.className}`}>
            Descubre la comodidad y flexibilidad del Diseño de Interiores Virtual de Siamo Design:
            una asesoría online personalizada que te permite avanzar a tu ritmo con claridad y
            dirección profesional.
          </h2>
        </section>

        <section className="how-it-works" aria-label="Cómo funciona">
          <div className="how-it-works__inner">
            <h2 className={`how-it-works__title ${playfairFont.className}`}>Cómo funciona</h2>
            <div className="how-it-works__grid">
              <article className="how-step">
                <div className={`how-step__number ${playfairFont.className}`}>1</div>
                <div className={`how-step__label ${playfairFont.className}`}>
                  Elige un servicio
                  <br />
                  y tu espacio
                </div>
              </article>
              <article className="how-step">
                <div className={`how-step__number ${playfairFont.className}`}>2</div>
                <div className={`how-step__label ${playfairFont.className}`}>
                  Creación de diseño
                  <br />
                  personalizada
                </div>
              </article>
              <article className="how-step">
                <div className={`how-step__number ${playfairFont.className}`}>3</div>
                <div className={`how-step__label ${playfairFont.className}`}>
                  Sesiones de revisión
                </div>
              </article>
              <article className="how-step">
                <div className={`how-step__number ${playfairFont.className}`}>4</div>
                <div className={`how-step__label ${playfairFont.className}`}>Toques finales</div>
              </article>
              <article className="how-step">
                <div className={`how-step__number ${playfairFont.className}`}>5</div>
                <div className={`how-step__label ${playfairFont.className}`}>
                  Implementa el
                  <br />
                  diseño
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="virtual-benefits" aria-label="Beneficios del diseño virtual">
          <div className="virtual-benefits__inner">
            <h2 className={`virtual-benefits__title ${playfairFont.className}`}>
              Beneficios del Diseño Virtual
            </h2>
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

        <section className="virtual-video-bridge" aria-label="Sección de video del servicio">
          <div className="virtual-video-bridge__inner">
            <VideoWithOverlay
              src="/assets/services/virtual-design-2.mp4"
              poster="/assets/services/virtual-design-1.webp"
              preload="metadata"
            />
          </div>
        </section>

        <section className="virtual-deliverables" aria-label="Entregables">
          <div className="virtual-deliverables__inner">
            <h2 className={`virtual-deliverables__title ${playfairFont.className}`}>Entregables</h2>
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

        <section className="faq-section" aria-label="Preguntas frecuentes">
          <div className="faq-section__inner">
            <div className="faq-section__title-col">
              <h2 className={`faq-section__title ${playfairFont.className}`}>
                Preguntas Frecuentes
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
      </main>
    </>
  );
}
