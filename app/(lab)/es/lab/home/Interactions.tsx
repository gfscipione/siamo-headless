"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { testimonials } from "./content";
import { getContent, type Locale, type RouteMode } from "./localized";
import QuestionnaireCtaLink from "@/app/components/QuestionnaireCtaLink";
import styles from "./home.module.css";
import { responsive } from "./responsive";

export function MobileNavigation({ locale = "es", routeMode = "lab" }: { locale?: Locale; routeMode?: RouteMode }) {
  const InternalLink = routeMode === "public" ? Link : "a";
  const linkProps = routeMode === "public" ? { prefetch: false } : {};
  const copy = getContent(locale, routeMode);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(responsive.headerDesktopQuery);
    const closeOnDesktop = () => { if (mq.matches) dialog.current?.close(); };
    mq.addEventListener("change", closeOnDesktop);
    return () => mq.removeEventListener("change", closeOnDesktop);
  }, []);

  return <>
    <button ref={trigger} className={styles.menuTrigger} type="button" aria-expanded={open} aria-controls="home-lab-menu"
      onClick={() => { dialog.current?.showModal(); setOpen(true); }}>{copy.menu}</button>
    <dialog ref={dialog} id="home-lab-menu" className={styles.menuDialog} aria-labelledby="home-lab-menu-title"
      onClose={() => { setOpen(false); trigger.current?.focus(); }}>
      <div className={styles.menuTop}>
        <InternalLink {...linkProps} href={copy.home} id="home-lab-menu-title" aria-label={`Siamo Design — ${locale === "en" ? "home" : "inicio"}`}>
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
        <QuestionnaireCtaLink className={styles.menuConsultation} href={copy.hero.projectAction.href} loadingText={copy.loading}>{copy.consult}</QuestionnaireCtaLink>
        <Link href={copy.languageHref} prefetch={false} className={styles.menuLanguage}>{copy.language}</Link>
      </div>
    </dialog>
  </>;
}

export function Testimonials({ locale = "es" }: { locale?: Locale }) {
  const copy = getContent(locale);
  const [index, setIndex] = useState(2);
  const [started, setStarted] = useState(false);
  const video = useRef<HTMLVideoElement>(null);
  const current = testimonials[index];
  const select = (direction: number) => {
    video.current?.pause();
    setStarted(false);
    setIndex(previous => (previous + direction + testimonials.length) % testimonials.length);
  };
  return <section id="testimonials" className={styles.testimonials} aria-labelledby="home-lab-testimonials">
    <h2 id="home-lab-testimonials">{copy.testimonials}</h2>
    <p className={styles.testimonialIntro}>{copy.testimonialsIntro}</p>
    <div className={styles.testimonialRow}>
      <div className={styles.testimonialVideo}>
        <video ref={video} key={current.src} controls={started} playsInline preload="none" poster={current.poster}
          aria-label={`${copy.testimonial} ${current.author}`} src={current.src} onEnded={() => setStarted(false)} />
        {!started && <button type="button" className={styles.testimonialPlay} aria-label={`${copy.playTestimonial} ${current.author}`}
          onClick={() => { setStarted(true); void video.current?.play().catch(() => { /* Native controls remain available if playback fails. */ }); }}>
          <span aria-hidden="true">▶</span>
        </button>}
      </div>
      <figure className={styles.quote} aria-live="polite"><blockquote lang="en"><span aria-hidden="true">“</span>{current.quote}</blockquote><figcaption>{current.author}</figcaption></figure>
    </div>
    <nav className={styles.testimonialNavigation} aria-label={copy.chooseTestimonial}>
      <button type="button" aria-label={copy.previousTestimonial} onClick={() => select(-1)}>←</button>
      <span aria-live="polite" aria-atomic="true">{String(index + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}</span>
      <button type="button" aria-label={copy.nextTestimonial} onClick={() => select(1)}>→</button>
    </nav>
  </section>;
}
