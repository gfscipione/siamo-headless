"use client";

import Link from "next/link";
import { getImageProps } from "next/image";
import { getContent, type Locale, type RouteMode } from "./localized";
import { heroConfig as config } from "./hero.config";
import { heroVariables } from "./hero.styles";
import { useHeroController } from "./useHeroController";
import LabHeader from "./LabHeader";
import ActionIcon from "./ActionIcon";
import styles from "./Hero.module.css";

const desktopImage = getImageProps({ src: config.image.desktop, alt: "Terraza de un proyecto de Siamo Design", width: 1920, height: 1080, sizes: "100vw" }).props;
const mobileImage = getImageProps({ src: config.image.mobile, alt: "Interior de un proyecto de Siamo Design", width: 900, height: 1200, sizes: "100vw" }).props;

export default function Hero({ locale = "es", routeMode = "lab" }: { locale?: Locale; routeMode?: RouteMode }) {
  const InternalLink = routeMode === "public" ? Link : "a";
  const linkProps = routeMode === "public" ? { prefetch: false } : {};
  const copy = getContent(locale, routeMode).hero;
  const { slot, root, nav } = useHeroController(copy.title.desktop);
  return <>
    <link rel="preload" as="image" href={desktopImage.src} imageSrcSet={desktopImage.srcSet} imageSizes={desktopImage.sizes} media="(min-width: 861px)" fetchPriority="high" />
    <link rel="preload" as="image" href={mobileImage.src} imageSrcSet={mobileImage.srcSet} imageSizes={mobileImage.sizes} media="(max-width: 860px)" fetchPriority="high" />
    <LabHeader navRef={nav} locale={locale} routeMode={routeMode} />
    <div ref={slot} className={styles.slot} data-hero-slot><header ref={root} className={styles.hero} style={heroVariables} data-hero="siamo" data-typing="pending">
    <div className={styles.background} aria-hidden="true"><picture>
      <source media="(max-width: 860px)" srcSet={mobileImage.srcSet} sizes={mobileImage.sizes} />
      {/* getImageProps supplies Next's responsive optimisation for this art-directed picture. */}
      <img {...desktopImage} alt="" className={styles.image} fetchPriority="high" loading="eager" />
    </picture></div>
    <div className={styles.copy}>
      <h1 className={styles.title}>
        <span className={styles.screenReader}><span className={styles.desktopLanguage}>{copy.title.desktop.replaceAll("\n", " ")}</span><span className={styles.mobileLanguage}>{copy.title.mobile}</span></span>
        <span className={styles.desktopTitle} aria-hidden="true">{copy.title.desktop.split("\n").map(line => <span className={styles.line} data-title-line key={line}>
          <span className={styles.reserve}>{line}</span><span className={styles.typed}><span data-typed-line>{line}</span><span className={styles.caret}>{config.typing.caret}</span></span>
        </span>)}</span>
        <span className={styles.mobileTitle} aria-hidden="true">{copy.title.mobile}</span>
      </h1>
      <p className={styles.subline}>{copy.subline}</p>
      <InternalLink {...linkProps} href={copy.serviceAction.href} className={`${styles.actionButton} ${styles.cta}`}>
        {copy.serviceAction.label}
        <ActionIcon />
      </InternalLink>
    </div>
  </header></div></>;
}
