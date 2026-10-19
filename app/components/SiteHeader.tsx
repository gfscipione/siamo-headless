"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useRef, useState, type Ref } from "react";
import QuestionnaireCtaLink from "./QuestionnaireCtaLink";
import ActionIcon from "../(lab)/es/lab/home/ActionIcon";
import { navigationFontClasses } from "./siteTypography";
import type { getContent, Locale } from "../(lab)/es/lab/home/localized";
import buttonStyles from "../(lab)/es/lab/home/Hero.module.css";
import styles from "./SiteHeader.module.css";

type Copy = Pick<ReturnType<typeof getContent>,
  "home" | "navigation" | "languageHref" | "language" | "languageShort" |
  "navLabel" | "mobileNav" | "menu" | "close" | "consult" | "loading"> & {
  hero: { projectAction: { href: string; label: string } };
};

type Props = {
  copy: Copy;
  locale: Locale;
  contrast?: "light" | "dark";
  hideCta?: boolean;
  logoOnly?: boolean;
  navRef?: Ref<HTMLElement>;
  externalScrollControl?: boolean;
  nativeLinks?: boolean;
};

export default function SiteHeader({ copy, locale, contrast = "light", hideCta = false,
  logoOnly = false, navRef, externalScrollControl = false, nativeLinks = false }: Props) {
  const navigation = useRef<HTMLElement>(null);
  const InternalLink = nativeLinks ? "a" : Link;
  const linkProps = nativeLinks ? {} : { prefetch: false };
  const homeLabel = `Siamo Design — ${locale === "en" ? "home" : "inicio"}`;
  const actionClass = `${buttonStyles.actionButton} ${styles.navCta}`;

  useEffect(() => {
    // The fixed homepage hero owns its own threshold; internal pages share this controller.
    if (externalScrollControl || logoOnly) return;
    const node = navigation.current;
    if (!node) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const y = Math.max(window.scrollY, document.documentElement.scrollTop, document.body.scrollTop);
      node.dataset.solid = String(y > 10);
      node.dataset.scrolled = String(y > 12);
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    // Capture also covers the body scroll used by some service layouts.
    window.addEventListener("scroll", onScroll, { passive: true, capture: true });
    return () => {
      window.removeEventListener("scroll", onScroll, true);
      cancelAnimationFrame(frame);
    };
  }, [externalScrollControl, logoOnly]);

  return <nav ref={navRef ?? navigation} className={`${styles.navigation} ${navigationFontClasses}`}
    aria-label={copy.navLabel} data-site-header="shared" data-solid="false"
    data-contrast={contrast} data-logo-only={logoOnly} data-external-scroll={externalScrollControl}>
    <div className={styles.navInner}>
      {!logoOnly && <>
        <div className={styles.navLinks}>{copy.navigation.map(item =>
          <InternalLink {...linkProps} href={item.href} key={item.href}>{item.label}</InternalLink>)}</div>
        <MobileNavigation copy={copy} homeLabel={homeLabel} hideCta={hideCta} nativeLinks={nativeLinks} />
      </>}
      <InternalLink {...linkProps} href={copy.home} className={styles.brand} aria-label={homeLabel}>
        <Image src="/assets/img/logotipo.png" width={499} height={167} alt="Siamo Design" />
      </InternalLink>
      {!logoOnly && <>
        <div className={styles.navRight}>
          <Link href={copy.languageHref} prefetch={false} className={styles.language}>
            <span className={styles.desktopLanguage}>{copy.language}</span>
            <span className={styles.mobileLanguage}>{copy.languageShort}</span>
          </Link>
          {!hideCta && <div className={styles.desktopConsultation}>
            <a href={copy.hero.projectAction.href} className={actionClass}>{copy.hero.projectAction.label} <ActionIcon /></a>
          </div>}
        </div>
        {!hideCta && <a href={copy.hero.projectAction.href} className={`${actionClass} ${styles.mobileConsultation}`}>
          {copy.hero.projectAction.label} <ActionIcon />
        </a>}
      </>}
    </div>
  </nav>;
}

function MobileNavigation({ copy, homeLabel, hideCta, nativeLinks }: {
  copy: Copy; homeLabel: string; hideCta: boolean; nativeLinks: boolean;
}) {
  const InternalLink = nativeLinks ? "a" : Link;
  const linkProps = nativeLinks ? {} : { prefetch: false };
  const id = useId();
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1101px)");
    const closeOnDesktop = () => { if (mq.matches) dialog.current?.close(); };
    mq.addEventListener("change", closeOnDesktop);
    return () => mq.removeEventListener("change", closeOnDesktop);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previous; };
  }, [open]);

  return <>
    <button ref={trigger} className={styles.menuTrigger} type="button" aria-expanded={open} aria-controls={id}
      onClick={() => { dialog.current?.showModal(); setOpen(true); }}>{copy.menu}</button>
    <dialog ref={dialog} id={id} className={styles.menuDialog} aria-labelledby={`${id}-title`}
      onClose={() => {
        setOpen(false);
        if (!window.matchMedia("(min-width: 1101px)").matches) trigger.current?.focus();
      }}>
      <div className={styles.menuTop}>
        <InternalLink {...linkProps} href={copy.home} id={`${id}-title`} aria-label={homeLabel}>
          <Image src="/assets/img/logotipo.png" width={499} height={167} alt="Siamo Design" />
        </InternalLink>
        <button type="button" autoFocus aria-label={copy.close} onClick={() => dialog.current?.close()}>
          <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true"><path d="m5 5 14 14M19 5 5 19" fill="none" stroke="currentColor" strokeWidth="1" /></svg>
        </button>
      </div>
      <nav aria-label={copy.mobileNav}>{copy.navigation.map(item =>
        <InternalLink {...linkProps} key={item.href} href={item.href} onClick={() => dialog.current?.close()}>{item.label}</InternalLink>)}
      </nav>
      <div className={styles.menuActions}>
        {!hideCta && <QuestionnaireCtaLink className={styles.menuConsultation} href={copy.hero.projectAction.href} loadingText={copy.loading}>{copy.consult}</QuestionnaireCtaLink>}
        <Link href={copy.languageHref} prefetch={false} className={styles.menuLanguage}>{copy.language}</Link>
      </div>
    </dialog>
  </>;
}
