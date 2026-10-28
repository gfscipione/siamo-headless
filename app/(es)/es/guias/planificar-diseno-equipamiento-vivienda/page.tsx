import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PortfolioNav from "@/app/components/PortfolioNav";
import { Footer } from "@/app/(lab)/es/lab/home/Sections";
import { homeFontClasses } from "@/app/(lab)/es/lab/home/typography";
import { planningGuidePath } from "@/app/lib/planningGuide";
import { guideCopy as copy } from "./copy";
import styles from "./guide.module.css";

const title = "Cómo planificar el diseño y equipamiento de tu vivienda | Siamo Design";
const description = "Prepara tu proyecto de vivienda: qué información reunir, qué decisiones tomar y cuándo explorar diseño llave en mano o virtual con Siamo.";
const image = "/assets/mayan-sanctuary/main-lounge-3.webp";

export const metadata: Metadata = {
  title: { absolute: title }, description,
  alternates: { canonical: planningGuidePath },
  openGraph: { type: "article", locale: "es_ES", siteName: "Siamo Design",
    title, description, url: planningGuidePath, images: [{ url: image }] },
  twitter: { card: "summary_large_image", title, description, images: [image] },
};

type Section = (typeof copy.sections)[number];

function Contents() {
  return <ol>{copy.sections.map(section => <li key={section.id}>
    <a href={`#${section.id}`}>{section.h2}</a>
  </li>)}</ol>;
}

function SectionContent({ section }: { section: Section }) {
  return <>
    {section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
    {"checklist" in section && <ul className={styles.checklist}>
      {section.checklist.map(item => <li key={item.label}><label>
        <input type="checkbox" aria-label={item.label} />
        <span><strong>{item.label}</strong>{item.text}</span>
      </label></li>)}
    </ul>}
    {"comparison" in section && <table className={styles.comparison}>
      <thead><tr>{section.comparison.columns.map(column => <th scope="col" key={column}>{column}</th>)}</tr></thead>
      <tbody>{section.comparison.rows.map(row => <tr key={row[0]}>
        {row.map((text, index) => <td key={text} data-label={section.comparison.columns[index]}>{text}</td>)}
      </tr>)}</tbody>
    </table>}
    {"questions" in section && <ol className={styles.questions}>
      {section.questions.map(question => <li key={question}><span>{question}</span></li>)}
    </ol>}
    {"callout" in section && <aside className={styles.callout}>
      <h3>{section.callout.title}</h3><p>{section.callout.text}</p>
    </aside>}
    {"links" in section && <div className={styles.sectionLinks}>
      {section.links.map(link => <Link key={link.href} href={link.href} prefetch={false}>{link.label}</Link>)}
    </div>}
    {"closing" in section && <p className={styles.smallNote}>{section.closing}</p>}
  </>;
}

export default function PlanningGuidePage() {
  const closing = copy.sections[6];
  return <div className={`${styles.page} ${homeFontClasses}`}>
    <a className={styles.skip} href="#contenido">Saltar al contenido</a>
    <PortfolioNav lang="es" langHref="/" styleVars={{}} />
    <main id="contenido" className={styles.main}>
      <div className={styles.shell}>
        <nav className={styles.crumbs} aria-label="Ruta de navegación">
          <Link href="/es/" prefetch={false}>Inicio</Link><span aria-hidden="true">/</span>
          <span aria-current="page">Guía de planificación</span>
        </nav>
        <section className={styles.hero} aria-labelledby="guide-title">
          <div><p className={styles.eyebrow}>{copy.eyebrow}</p>
            <h1 id="guide-title">{copy.h1}</h1><p className={styles.heroIntro}>{copy.intro}</p>
            <a className={styles.heroLink} href="#preparar">Preparar mi proyecto<span aria-hidden="true">↓</span></a>
          </div>
          <figure className={styles.heroImage}>
            <Image src={image} width={5040} height={3360} priority sizes="(max-width: 760px) 100vw, 40vw"
              alt="Sala y cocina de Mayan Sanctuary, con piedra caliza y madera" />
            <figcaption>Mayan Sanctuary · Playa del Carmen</figcaption>
          </figure>
        </section>
        <div className={styles.editorial}><div className={styles.articleGrid}>
          <aside className={styles.toc}><nav className={styles.tocInner} aria-label="Contenido de la guía">
            <p>En esta guía</p><Contents />
          </nav></aside>
          <div className={styles.article}>
            <details className={styles.mobileToc}><summary>En esta guía</summary>
              <nav aria-label="Contenido móvil de la guía"><Contents /></nav>
            </details>
            <article><p className={styles.coverage}>{copy.coverage_note}</p>
              {copy.sections.slice(0, 6).map((section, index) => <section key={section.id}
                id={section.id} aria-labelledby={`title-${section.id}`}>
                <div className={styles.sectionLabel}>{String(index + 1).padStart(2, "0")}</div>
                <h2 id={`title-${section.id}`}>{section.h2}</h2>
                {section.id === "mayan" ? <div className={styles.case}>
                  <Image src="/assets/mayan-sanctuary/dining-room-3.webp" width={5040} height={3360}
                    sizes="(max-width: 760px) 100vw, 60vw" alt="Comedor y materiales de Mayan Sanctuary, en Playa del Carmen" />
                  <div className={styles.caseCopy}><p className={styles.sectionLabel}>Mayan Sanctuary · Senderos Mayakoba, Playa del Carmen</p>
                    <SectionContent section={section} />
                  </div>
                </div> : <SectionContent section={section} />}
              </section>)}
            </article>
          </div>
        </div></div>
        <section className={styles.closing} id={closing.id} aria-labelledby="title-siguiente">
          <div className={styles.sectionLabel}>07</div><h2 id="title-siguiente">{closing.h2}</h2>
          {closing.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
          <Link className={styles.button} href={closing.cta.href} prefetch={false}>{closing.cta.label}
            <span aria-hidden="true">→</span>
          </Link>
        </section>
      </div>
    </main>
    <Footer locale="es" routeMode="public" />
  </div>;
}
