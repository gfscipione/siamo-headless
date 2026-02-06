import PortfolioNav from "../../../components/PortfolioNav";
import { playfairFont, poppinsFont } from "../../../fonts";
import AboutHeroVideo from "../../../(en)/get-to-know-us/video";
import type { Metadata } from "next";
import { getSiteUrl } from "../../../lib/siteUrl";
import DragScroll from "../../../(en)/get-to-know-us/DragScroll";

const TITLE = "Conocenos - Siamo Design";
const DESCRIPTION =
  "¿Quiénes somos? Siamo Design nace de la iniciativa de Stephania Scipione y Krystle Torres, quienes observaron que muchas personas se sentían insatisfechas con sus hogares a pesar de haber invertido tiempo y dinero en ellos.";
const OG_IMAGE = "https://siamodesign.com/es/wp-content/uploads/2025/03/Diseno-sin-titulo-1.webp";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: {
    canonical: "/es/conocenos/",
    languages: {
      en: "/get-to-know-us/",
      es: "/es/conocenos/",
      "x-default": "/get-to-know-us/",
    },
  },
  openGraph: {
    type: "article",
    url: "/es/conocenos/",
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Siamo Design",
    locale: "es_ES",
    images: [{ url: OG_IMAGE, width: 555, height: 630, type: "image/webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
};

export default function ConocenosPage() {
  const siteUrl = getSiteUrl();
  const canonical = `${siteUrl}/es/conocenos/`;
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
        datePublished: "2024-03-19T15:56:34+00:00",
        dateModified: "2025-03-27T22:51:20+00:00",
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
        width: 555,
        height: 630,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonical}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: esRoot },
          { "@type": "ListItem", position: 2, name: "Conócenos" },
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

  const wwdItems = [
    {
      title: "Diseño de Interiores Llave en Mano",
      copy:
        "Nos encargamos de todo, de principio a fin: diseño, compras, coordinación de contratistas, entregas e instalación, hasta el styling final. Tú solo llegas a habitarlo.",
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
      title: "Diseño Virtual a Distancia",
      copy:
        "Un servicio remoto para cualquier parte del mundo: definimos el concepto, seleccionamos materiales y mobiliario, y te entregamos un plan claro para ejecutarlo a tu ritmo.",
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
    {
      title: "Siamo Real Life",
      copy:
        "Mostramos el detrás de cámaras real de cada proyecto: el proceso, las decisiones y la transformación, de inicio a final.",
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
  ];

  const journeyEntries = [
    {
      year: "2016",
      title: "El comienzo",
      copy:
        "Todo comenzó como Stephania Design. La idea tomó forma cuando Stephania trabajaba en un showroom de piedra y superficies, donde vio de cerca cómo muchas personas elegían acabados con duda e incertidumbre. Esa experiencia definió un propósito claro: crear servicios de diseño interior que guiaran a los clientes en cada decisión para que elegir materiales y acabados se sienta seguro, claro y sin estrés.",
      image: "/assets/People/about-2.webp",
    },
    {
      year: "2018",
      title: "Compromiso total",
      copy:
        "Ese año, Stephania se dedicó por completo a Stephania Design. Los proyectos se enfocaban principalmente en remodelaciones, selección de materiales y acabados, y asesorías personalizadas de diseño interior—ayudando a los clientes a tomar decisiones seguras y a integrar sus espacios con claridad y estilo.",
      image: "/assets/People/about-3.webp",
    },
    {
      year: "2020",
      title: "Crecimiento del equipo",
      copy:
        "Krystle se unió al equipo para fortalecer el enfoque en decoración y styling interior—sumando una mirada refinada y detallista que elevó la dirección creativa de cada espacio y consolidó el sello de la marca.",
      image: "/assets/People/about-4.webp",
    },
    {
      year: "2022",
      title: "Nace Siamo Design",
      copy:
        "Refinamos nuestro enfoque en proyectos residenciales de alcance completo y dimos un gran paso: nos rebrandeamos como Siamo Design, un nombre que refleja una visión más clara y madura y una identidad alineada con los servicios de diseño interior que queríamos construir.",
      image: "/assets/People/about-6.webp",
    },
    {
      year: "2025",
      title: "Siamo Real Life",
      copy:
        "Expandimos nuestra visión y lanzamos nuestro canal de YouTube, Siamo Real Life, para compartir lo que pasa detrás de cada proyecto: el proceso, las decisiones, los retos y el lado real del diseño desde el concepto hasta la entrega.",
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
        langHref="/get-to-know-us/"
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

      <main className="about-hero-page overscroll-safe">
        <section className="about-hero" aria-label="Sobre el estudio">
          <div className="about-hero__content">
            <h1 className={`about-hero__title ${playfairFont.className}`}>Conócenos</h1>
          </div>
          <div className="about-hero__media">
            <AboutHeroVideo src="/assets/videos/about.mp4" ariaLabel="Siamo Design" />
          </div>
        </section>

        <section className="about-story" aria-label="Historia de Siamo">
          <h2 className={`about-story__headline ${playfairFont.className}`}>
            Siamo Design es un estudio de diseño interior multidisciplinario que crea espacios cálidos y atemporales, con un estilo que se siente a la vez clásico y actual.
          </h2>

          <div className="about-story__grid">
            <div className="about-story__media">
              <AboutHeroVideo
                src="/assets/People/about-1.mp4"
                ariaLabel="Video sobre Siamo Design"
                className="about-story__media-video"
                preload="none"
                poster="/assets/People/about-1-thumb.png"
              />
            </div>
            <div className="about-story__body">
              <h3 className={`about-story__title ${playfairFont.className}`}>
                Nuestra misión es crear interiores que eleven tu forma de vivir.
              </h3>
              <p className={poppinsFont.className}>
                En Siamo Design creemos que un espacio no es solo algo que ves: es algo que sientes. Y como lo habitas todos los días —comes, descansas y desconectas— tu entorno influye directamente en tu bienestar y en cómo experimentas la vida. Nuestro propósito es hacer consciente ese impacto y convertirlo en interiores pensados para vivirse, a través de servicios de diseño interior intencionales.
              </p>
              <p className={poppinsFont.className}>
                Las cofundadoras, Stephania Scipione y Krystle Torres, notaron que amueblar y decorar un hogar suele volverse estresante e incierto. Por eso creamos un proceso claro y guiado: para que trabajar con nuestras diseñadoras se sienta fluido, organizado y genuinamente disfrutable de principio a fin.
              </p>
              <h3
                className={`about-story__title about-story__title--spaced ${playfairFont.className}`}
              >
                ¿Qué significa Siamo Design?
              </h3>
              <p className={poppinsFont.className}>
                “Siamo Design” significa “Somos diseño”. Para nosotras, cada persona es diseño a su manera: tus gustos, tu estilo, tus colores y esas formas que te hacen sentir en casa. Esa idea es la base de nuestro trabajo y el punto de partida de cada proyecto.
              </p>
              <p className={poppinsFont.className}>
                Por eso vemos cada proyecto como una oportunidad de transformar un espacio en un verdadero hogar: equilibrando belleza y funcionalidad mediante materiales bien elegidos, texturas en capas y una sensibilidad real hacia tu forma de vivir.
              </p>
              <p className={poppinsFont.className}>
                Acompañamos a nuestros clientes durante todo el recorrido —desde el primer concepto hasta la instalación final— afinando cada detalle para que el resultado se sienta auténtico, elevado y completamente tuyo.
              </p>
            </div>
          </div>
        </section>

        <section className="about-wwd" aria-label="Lo que hacemos">
          <div className="about-wwd__inner">
            <h2 className={`about-wwd__title ${playfairFont.className}`}>Lo Que Hacemos</h2>
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

        <section className="about-journey-placeholder" aria-label="Línea de tiempo">
          <div className="about-journey-placeholder__inner">
            <h2 className={`about-journey__title ${playfairFont.className}`}>Siamo Design</h2>
            <p className={`about-journey__subtitle ${playfairFont.className}`}>A través de los años</p>
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

        <section className="about-cta" aria-label="Explorar servicios">
          <div className="about-cta__inner">
            <div className="about-cta__text">
              <h3 className={`about-cta__headline ${playfairFont.className}`}>
                ¿Tienes un proyecto en mente?<br />Conoce nuestros servicios de diseño
              </h3>
            </div>
            <a className="about-cta__btn" href="/es/servicios/">Conoce más</a>
            <div className="about-cta__media">
              <img src="/assets/img/post5.jpeg" alt="Comedor diseñado por Siamo Design" loading="lazy" />
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

            <div className="footer-explore" aria-label="Explorar y redes">
              <nav className="explore" aria-label="Explorar">
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
