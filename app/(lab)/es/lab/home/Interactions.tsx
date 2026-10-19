"use client";

import { useRef, useState } from "react";
import { testimonials } from "./content";
import { getContent, type Locale } from "./localized";
import styles from "./home.module.css";

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
