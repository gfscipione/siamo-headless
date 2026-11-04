import Image from "next/image";
import Link from "next/link";
import PortfolioNav from "@/app/components/PortfolioNav";
import { Footer } from "@/app/(lab)/es/lab/home/Sections";
import { homeFontClasses } from "@/app/(lab)/es/lab/home/typography";
import { planningGuides } from "@/app/lib/planningGuide";
import styles from "./guide.module.css";

const image = "/assets/mayan-sanctuary/main-lounge-3.webp";

export type GuideSection = {
  id: string;
  h2: string;
  paragraphs: readonly string[];
  checklist?: readonly { label: string; text: string }[];
  comparison?: { columns: readonly string[]; rows: readonly (readonly string[])[] };
  questions?: readonly string[];
  callout?: { title: string; text: string };
  links?: readonly { href: string; label: string }[];
  closing?: string;
  cta?: { href: string; label: string };
};

export type GuideCopy = {
  eyebrow: string;
  h1: string;
  intro: string;
  coverage_note: string;
  sections: readonly GuideSection[];
};

export type GuideUI = {
  skip: string;
  breadcrumb_label: string;
  home: string;
  breadcrumb_current: string;
  hero_link: string;
  hero_target: string;
  contents: string;
  contents_label: string;
  mobile_contents_label: string;
  hero_alt: string;
  hero_caption: string;
  case_alt: string;
  case_caption: string;
};

type Section = GuideSection;

function Contents({ copy }: { copy: GuideCopy }) {
  return <ol>{copy.sections.map(section => <li key={section.id}>
    <a href={`#${section.id}`}>{section.h2}</a>
  </li>)}</ol>;
}

function SectionContent({ section }: { section: Section }) {
  const comparison = section.comparison;
  return <>
    {section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
    {section.checklist && <ul className={styles.checklist}>
      {section.checklist.map(item => <li key={item.label}><label>
        <input type="checkbox" aria-label={item.label} />
        <span><strong>{item.label}</strong>{item.text}</span>
      </label></li>)}
    </ul>}
    {comparison && <table className={styles.comparison}>
      <thead><tr>{comparison.columns.map(column => <th scope="col" key={column}>{column}</th>)}</tr></thead>
      <tbody>{comparison.rows.map(row => <tr key={row[0]}>
        {row.map((text, index) => <td key={text} data-label={comparison.columns[index]}>{text}</td>)}
      </tr>)}</tbody>
    </table>}
    {section.questions && <ol className={styles.questions}>
      {section.questions.map(question => <li key={question}><span>{question}</span></li>)}
    </ol>}
    {section.callout && <aside className={styles.callout}>
      <h3>{section.callout.title}</h3><p>{section.callout.text}</p>
    </aside>}
    {section.links && <div className={styles.sectionLinks}>
      {section.links.map(link => <Link key={link.href} href={link.href} prefetch={false}>{link.label}</Link>)}
    </div>}
    {section.closing && <p className={styles.smallNote}>{section.closing}</p>}
  </>;
}

export default function PlanningGuideArticle({ copy, ui, locale }: {
  copy: GuideCopy;
  ui: GuideUI;
  locale: "en" | "es";
}) {
  const closing = copy.sections[copy.sections.length - 1];
  const mainId = locale === "es" ? "contenido" : "content";
  const closingTitleId = locale === "es" ? "title-siguiente" : `title-${closing.id}`;
  return <div className={`${styles.page} ${homeFontClasses}`}>
    <a className={styles.skip} href={`#${mainId}`}>{ui.skip}</a>
    <PortfolioNav lang={locale} langHref={planningGuides[locale === "es" ? "en" : "es"].path} styleVars={{}} />
    <main id={mainId} className={styles.main}>
      <div className={styles.shell}>
        <nav className={styles.crumbs} aria-label={ui.breadcrumb_label}>
          <Link href={locale === "es" ? "/es/" : "/"} prefetch={false}>{ui.home}</Link><span aria-hidden="true">/</span>
          <span aria-current="page">{ui.breadcrumb_current}</span>
        </nav>
        <section className={styles.hero} aria-labelledby="guide-title">
          <div><p className={styles.eyebrow}>{copy.eyebrow}</p>
            <h1 id="guide-title">{copy.h1}</h1><p className={styles.heroIntro}>{copy.intro}</p>
            <a className={styles.heroLink} href={ui.hero_target}>{ui.hero_link}<span aria-hidden="true">↓</span></a>
          </div>
          <figure className={styles.heroImage}>
            <Image src={image} width={5040} height={3360} priority sizes="(max-width: 760px) 100vw, 40vw"
              alt={ui.hero_alt} />
            <figcaption>{ui.hero_caption}</figcaption>
          </figure>
        </section>
        <div className={styles.editorial}><div className={styles.articleGrid}>
          <aside className={styles.toc}><nav className={styles.tocInner} aria-label={ui.contents_label}>
            <p>{ui.contents}</p><Contents copy={copy} />
          </nav></aside>
          <div className={styles.article}>
            <details className={styles.mobileToc}><summary>{ui.contents}</summary>
              <nav aria-label={ui.mobile_contents_label}><Contents copy={copy} /></nav>
            </details>
            <article><p className={styles.coverage}>{copy.coverage_note}</p>
              {copy.sections.slice(0, -1).map((section, index) => <section key={section.id}
                id={section.id} aria-labelledby={`title-${section.id}`}>
                <div className={styles.sectionLabel}>{String(index + 1).padStart(2, "0")}</div>
                <h2 id={`title-${section.id}`}>{section.h2}</h2>
                {section.id === "mayan" ? <div className={styles.case}>
                  <Image src="/assets/mayan-sanctuary/dining-room-3.webp" width={5040} height={3360}
                    sizes="(max-width: 760px) 100vw, 60vw" alt={ui.case_alt} />
                  <div className={styles.caseCopy}><p className={styles.sectionLabel}>{ui.case_caption}</p>
                    <SectionContent section={section} />
                  </div>
                </div> : <SectionContent section={section} />}
              </section>)}
            </article>
          </div>
        </div></div>
        <section className={styles.closing} id={closing.id} aria-labelledby={closingTitleId}>
          <div className={styles.sectionLabel}>07</div><h2 id={closingTitleId}>{closing.h2}</h2>
          {closing.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
          {closing.cta && <Link className={styles.button} href={closing.cta.href} prefetch={false}>{closing.cta.label}
            <span aria-hidden="true">→</span>
          </Link>}
        </section>
      </div>
    </main>
    <Footer locale={locale} routeMode="public" />
  </div>;
}
