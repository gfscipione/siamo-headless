import { headers } from "next/headers";
import type { Metadata } from "next";
import ParallaxDemo from "../../components/ParallaxDemo";
import { getSiteUrl } from "../../lib/siteUrl";

const HOME_TITLE =
  "Siamo Design - Diseño de interiores en la Riviera Maya, Playa del Carmen, Tulum, Cancún.";
const HOME_DESCRIPTION =
  "Creamos interiores a medida en Tulum y Playa del Carmen. En Siamo Design, diseñamos espacios funcionales y elegantes listos para habitar. ¡Descubre nuestro enfoque del diseño de interiores en la Riviera Maya!";
const HOME_OG_IMAGE = "https://siamodesign.com/es/wp-content/uploads/2025/03/SD.webp";
const HOME_SCHEMA_IMAGE = "https://siamodesign.com/es/wp-content/uploads/2025/03/SD.webp";

export const metadata: Metadata = {
  title: { absolute: HOME_TITLE },
  description: HOME_DESCRIPTION,
  alternates: {
    canonical: "/es/",
    languages: {
      en: "/",
      es: "/es/",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    url: "/es/",
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    siteName: "Siamo Design",
    images: [
      {
        url: HOME_OG_IMAGE,
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    images: [HOME_OG_IMAGE],
  },
};

export default async function HomeEs() {
  const ua = (await headers()).get("user-agent") || "";
  const initialIsMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile/i.test(
    ua
  );

  const siteUrl = getSiteUrl();
  const canonical = `${siteUrl}/es/`;

  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": canonical,
        url: canonical,
        name: HOME_TITLE,
        isPartOf: { "@id": `${canonical}#website` },
        about: { "@id": `${canonical}#organization` },
        primaryImageOfPage: { "@id": `${canonical}#primaryimage` },
        image: { "@id": `${canonical}#primaryimage` },
        thumbnailUrl: HOME_OG_IMAGE,
        description: HOME_DESCRIPTION,
        breadcrumb: { "@id": `${canonical}#breadcrumb` },
        inLanguage: "es",
        potentialAction: [{ "@type": "ReadAction", target: [canonical] }],
      },
      {
        "@type": "ImageObject",
        inLanguage: "es",
        "@id": `${canonical}#primaryimage`,
        url: HOME_SCHEMA_IMAGE,
        contentUrl: HOME_SCHEMA_IMAGE,
        width: 200,
        height: 100,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonical}#breadcrumb`,
        itemListElement: [{ "@type": "ListItem", position: 1, name: "Inicio" }],
      },
      {
        "@type": "WebSite",
        "@id": `${canonical}#website`,
        url: canonical,
        name: "Siamo Design",
        publisher: { "@id": `${canonical}#organization` },
        potentialAction: [
          {
            "@type": "SearchAction",
            target: { "@type": "EntryPoint", urlTemplate: `${canonical}?s={search_term_string}` },
            "query-input": { "@type": "PropertyValueSpecification", valueRequired: true, valueName: "search_term_string" },
          },
        ],
        inLanguage: "es",
      },
      {
        "@type": "Organization",
        "@id": `${canonical}#organization`,
        name: "Siamo Design",
        url: canonical,
        logo: {
          "@type": "ImageObject",
          inLanguage: "es",
          "@id": `${canonical}#/schema/logo/image/`,
          url: "https://siamodesign.com/wp-content/uploads/2024/03/cropped-9019c03768d3a9dc34a90a32adf82d72.png",
          contentUrl: "https://siamodesign.com/wp-content/uploads/2024/03/cropped-9019c03768d3a9dc34a90a32adf82d72.png",
          width: 499,
          height: 167,
          caption: "Siamo Design",
        },
        image: { "@id": `${canonical}#/schema/logo/image/` },
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
    <ParallaxDemo
      initialIsMobile={initialIsMobile}
      title={"Hacer realidad el hogar de tus sueños\nya es posible."}
      titleMobile="EL HOGAR QUE SUEÑAS, DONDE QUIERAS."
      heroSubline="Espacios cálidos y atemporales diseñados para la vida moderna y rentas vacacionales."
      navAboutLabel="CONÓCENOS"
      navServicesLabel="SERVICIOS"
      navPortfolioLabel="PORTAFOLIO"
      navAboutHref="/es/conocenos/"
      navServicesHref="/es/servicios/"
      navPortfolioHref="/es/portafolio/"
      navMenuLabel="MENÚ"
      navCloseLabel="CERRAR"
      navLanguageLabel="ENGLISH"
      navLanguageShort="EN"
      navLanguageHref="/"
      ctaLabel="AGENDAR CONSULTA"
      ctaAriaLabel="Agendar consulta"
      ctaHref="/es/cuestionario/"
      wwdEyebrow="LO QUE HACEMOS"
      wwdIntro="En Siamo Design creamos refugios: modernos, restaurativos y hechos a tu medida."
      wwdSecTitle1="DISEÑO VIRTUAL"
      wwdSecTitle2="DISEÑO Y EJECUCIÓN EN OBRA"
      wwdSecTitle3="CONTENIDO / DIARIO DEL ESTUDIO"
      wwdDesc1="Diseñamos a distancia, del brief al styling final. Tú descansas."
      wwdDesc2="Nos encargamos en sitio, de principio a fin: diseño, compras y styling final. Tú solo llegas a habitarlo."
      wwdDesc3="Novedades, detrás de cámaras y actualizaciones del estudio."
      wwdCtaServicesLabel="nuestros servicios"
      wwdCtaProjectsLabel="proyectos"
      wwdCtaWatchLabel="Ver lo más reciente"
      wwdCtaServicesHref="/es/servicios/"
      wwdCtaProjectsHref="/es/portafolio/"
      projectsHeadline="Comenzamos por quién eres y diseñamos un espacio que te refleje."
      testiTitle="LO QUE DICEN NUESTROS CLIENTES"
      testiInitialIndex={2}
      aboutTitle="CONÓCENOS"
      aboutCaption={
        "Dirección de arte y styling\nDirección de diseño y 3D\nDirección de estilo y materiales"
      }
      aboutCtaLabel="conócenos"
      aboutCtaHref="/es/conocenos/"
      followLabel="Síguenos"
      mobileCtaLabel="Comenzamos por quién eres y diseñamos un espacio que te refleje."
      footerServicesLabel="Servicios"
      footerPortfolioLabel="Portafolio"
      footerAboutLabel="Conócenos"
      footerEmailLabel="Correo"
      footerWhatsappLabel="WhatsApp"
      footerServicesHref="/es/servicios/"
      footerPortfolioHref="/es/portafolio/"
      footerAboutHref="/es/conocenos/"
      footerEmailHref="mailto:hello@siamodesign.com"
      footerWhatsappHref="https://wa.me/529842111989"
    />
    </>
  );
}
