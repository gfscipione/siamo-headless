import Image from "next/image";
import Link from "next/link";
import type { Ref } from "react";
import { getContent, type Locale, type RouteMode } from "./localized";
import { MobileNavigation } from "./Interactions";
import { heroVariables } from "./hero.styles";
import ActionIcon from "./ActionIcon";
import styles from "./Hero.module.css";

export default function LabHeader({ navRef, locale = "es", routeMode = "lab" }: { navRef: Ref<HTMLElement>; locale?: Locale; routeMode?: RouteMode }) {
  const InternalLink = routeMode === "public" ? Link : "a";
  const linkProps = routeMode === "public" ? { prefetch: false } : {};
  const copy = getContent(locale, routeMode);
  const navigation = copy.navigation;
  return (
    <nav ref={navRef} className={styles.navigation} style={heroVariables} aria-label={copy.navLabel} data-solid="false">
      <div className={styles.navInner}>
        <div className={styles.navLinks}>{navigation.map(item => <InternalLink {...linkProps} href={item.href} key={item.href}>{item.label}</InternalLink>)}</div>
        <MobileNavigation locale={locale} routeMode={routeMode} />
        <InternalLink {...linkProps} href={copy.home} className={styles.brand} aria-label={`Siamo Design — ${locale === "en" ? "home" : "inicio"}`}><Image src="/assets/img/logotipo.png" width={499} height={167} alt="Siamo Design" /></InternalLink>
        <div className={styles.navRight}><Link href={copy.languageHref} prefetch={false} className={styles.language}><span className={styles.desktopLanguage}>{copy.language}</span><span className={styles.mobileLanguage}>{copy.languageShort}</span></Link>
          <div className={styles.desktopConsultation}><a href={copy.hero.projectAction.href} className={`${styles.actionButton} ${styles.navCta}`}>{copy.hero.projectAction.label} <ActionIcon /></a></div>
        </div>
        <a href={copy.hero.projectAction.href} className={`${styles.actionButton} ${styles.navCta} ${styles.mobileConsultation}`}>{copy.hero.projectAction.label} <ActionIcon /></a>
      </div>
    </nav>
  );
}
