import PlanningGuideLink from "@/app/components/PlanningGuideLink";
import Link from "next/link";
import Image from "next/image";
import { socialProfiles } from "./content";
import { getContent, type Locale, type RouteMode } from "./localized";
import styles from "./home.module.css";
import ActionIcon from "./ActionIcon";
import TextRevealSection from "./TextRevealSection";
import AboutVideo from "./AboutVideo";
import ProjectsCarousel from "./ProjectsCarousel";

export function SpaceDoctors({ locale = "es", routeMode = "lab" }: { locale?: Locale; routeMode?: RouteMode }) {
  const InternalLink = routeMode === "public" ? Link : "a";
  const linkProps = routeMode === "public" ? { prefetch: false } : {};
  const copy = getContent(locale, routeMode);
  return <TextRevealSection className={`${styles.guided} ${styles.doctors}`} labelledBy="home-lab-doctors" sectionId="whatwedo">
    <div className={styles.offset}><p data-text-reveal className={styles.eyebrow}>{copy.doctors}</p><h2 data-text-reveal id="home-lab-doctors">{copy.doctorsTitle}</h2><p data-text-reveal className={styles.sectionIntro}>{copy.doctorsIntro}</p></div>
    <div className={styles.serviceGrid}>{copy.services.map((item, i) => {
      const ServiceLink = item.href.startsWith("https") ? "a" : InternalLink;
      const serviceLinkProps = item.href.startsWith("https") ? { target: "_blank", rel: "noopener noreferrer" } : linkProps;
      return <article className={styles.serviceCard} key={item.title}>
      <span className={styles.number}>0{i + 1}</span><h3 data-text-reveal>{item.title}</h3>
      <ServiceLink href={item.href} {...serviceLinkProps} aria-label={`${copy.explore} ${item.title}`} className={styles.serviceImage}>
        <Image src={item.image} fill sizes="(max-width: 860px) 50vw, 20vw" alt={item.title} />
      </ServiceLink><p data-text-reveal>{item.description}</p>
    </article>; })}</div>
    <InternalLink {...linkProps} href={copy.servicesHref} className={`${styles.textLink} ${styles.inlineAction} ${styles.serviceLink}`}>{copy.servicesLabel} <ActionIcon /></InternalLink>
  </TextRevealSection>;
}

export function Projects({ locale = "es", routeMode = "lab" }: { locale?: Locale; routeMode?: RouteMode }) {
  const InternalLink = routeMode === "public" ? Link : "a";
  const linkProps = routeMode === "public" ? { prefetch: false } : {};
  const copy = getContent(locale, routeMode);
  return <TextRevealSection className={`${styles.guided} ${styles.projects}`} labelledBy="home-lab-projects" sectionId="projects">
    <div className={styles.offset}><p data-text-reveal className={styles.eyebrow}>{copy.projectsLabel}</p><h2 data-text-reveal id="home-lab-projects">{copy.projectsTitle}</h2><p data-text-reveal className={styles.sectionIntro}>{copy.projectsIntro}</p></div>
    <ProjectsCarousel locale={locale} count={copy.projects.length}>{copy.projects.map(item => <InternalLink {...linkProps} href={item.href} className={styles.projectCard} key={item.href}>
      <div key="image" className={styles.projectImage}><Image src={item.image} fill sizes="(max-width: 860px) 50vw, 25vw" alt={`${copy.project} ${item.title}`} /></div><div key="metadata" data-text-reveal className={styles.projectMeta}><span className={styles.projectYear}>{item.year}</span><h3>{item.title}</h3></div>
    </InternalLink>)}</ProjectsCarousel>
  </TextRevealSection>;
}

export function About({ locale = "es", routeMode = "lab" }: { locale?: Locale; routeMode?: RouteMode }) {
  const InternalLink = routeMode === "public" ? Link : "a";
  const linkProps = routeMode === "public" ? { prefetch: false } : {};
  const copy = getContent(locale, routeMode);
  return <section className={`${styles.guided} ${styles.about}`} aria-labelledby="home-lab-about">
    <div className={styles.aboutIntro}>
      <h2 id="home-lab-about">{copy.about}</h2>
      <p className={styles.sectionIntro}>{copy.aboutLines.map((line, i) => <span key={line}>{i > 0 && <br />}{line}</span>)}</p>
    </div>
    <div className={styles.aboutMedia}>
      <AboutVideo locale={locale} />
      <div className={styles.aboutGuides} aria-hidden="true" />
      <InternalLink {...linkProps} href={copy.aboutHref} className={`${styles.textLink} ${styles.inlineAction} ${styles.aboutCta}`}>{copy.aboutAction} <ActionIcon /></InternalLink>
    </div>
  </section>;
}

export function Follow({ locale = "es" }: { locale?: Locale }) {
  const copy = getContent(locale);
  return <section id="follow" className={styles.follow} aria-labelledby="home-lab-follow"><div className={styles.offset}><h2 id="home-lab-follow">{copy.follow}</h2><a href="https://www.instagram.com/siamo_design" target="_blank" rel="noopener noreferrer">@siamo_design</a></div>
    <div className={styles.socialGrid}>{Array.from({length: 6}, (_, i) => <a href="https://www.instagram.com/siamo_design" target="_blank" rel="noopener noreferrer" key={i} aria-label={`${copy.post} ${i + 1} ${copy.instagram}`}><Image src={`/assets/img/post${i + 1}.jpeg`} width={400} height={400} sizes="(max-width: 860px) 44vw, 32vw" alt={`${copy.interior} ${i + 1}`} /></a>)}</div>
  </section>;
}

export function Footer({ locale = "es", routeMode = "lab" }: { locale?: Locale; routeMode?: RouteMode }) {
  const InternalLink = routeMode === "public" ? Link : "a";
  const linkProps = routeMode === "public" ? { prefetch: false } : {};
  const copy = getContent(locale, routeMode);
  return <footer className={styles.footer}><div className={styles.footerInner}>
    <div className={styles.footerExplore}><nav aria-label={copy.explore}>{copy.navigation.map(item => <InternalLink {...linkProps} key={item.href} href={item.href}>{item.label}</InternalLink>)}{locale === "es" && routeMode === "public" && <PlanningGuideLink />}<a href="mailto:hello@siamodesign.com">{copy.email}</a><a href="https://wa.me/529842111989" target="_blank" rel="noopener noreferrer">WhatsApp</a></nav>
      <nav aria-label={copy.social}>{socialProfiles.map((item, i) => <a key={item.href} href={item.href} target="_blank" rel="noopener noreferrer" aria-label={item.label}><Image src={`/assets/home-lab/social-${i}.svg`} width={20} height={20} alt="" /></a>)}</nav></div>
    <div className={styles.legal} lang="en"><p>Siamo Design | Interior Design Studio</p><p>© 2025 Siamo Design. All rights reserved.</p><a href="https://donebyelevator.com/website-redesign-service" target="_blank" rel="noopener noreferrer sponsored">Designed &amp; Built by Elevator</a></div>
  </div></footer>;
}
