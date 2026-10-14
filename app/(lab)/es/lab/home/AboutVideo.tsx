"use client";

import { useEffect, useRef, useState } from "react";
import { responsive } from "./responsive";
import { getContent, type Locale } from "./localized";
import styles from "./home.module.css";

const poster = "/assets/videos/about-thumb.webp";
export default function AboutVideo({ locale = "es" }: { locale?: Locale }) {
  const copy = getContent(locale);
  const frame = useRef<HTMLDivElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const position = useRef(0);
  const [visible, setVisible] = useState(false);
  const [manual, setManual] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const node = frame.current;
    if (!node) return;
    const mobile = window.matchMedia(responsive.heroMobileQuery);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let inView = false;
    const update = () => {
      setManual(mobile.matches || reduced.matches);
      const nextVisible = inView && !document.hidden;
      if (!nextVisible) { setReady(false); setPlaying(false); }
      setVisible(nextVisible);
    };
    const observer = new IntersectionObserver(entries => {
      inView = entries[0].isIntersecting && entries[0].intersectionRatio >= .15;
      update();
    }, { threshold: .15 });
    observer.observe(node);
    mobile.addEventListener("change", update);
    reduced.addEventListener("change", update);
    document.addEventListener("visibilitychange", update);
    update();
    return () => {
      observer.disconnect();
      mobile.removeEventListener("change", update);
      reduced.removeEventListener("change", update);
      document.removeEventListener("visibilitychange", update);
    };
  }, []);

  useEffect(() => {
    const node = video.current;
    if (!visible || !node) return;
    let active = true;
    if (!manual) void node.play().then(() => {
      if (!active) node.pause();
    }).catch(() => { if (active) setManual(true); });
    return () => {
      active = false;
      position.current = node.currentTime;
      node.pause();
    };
  }, [visible, manual]);

  return <div ref={frame} className={styles.aboutVideoFrame}>
    {/* A real poster remains behind the media during loading or outside view. */}
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img src={poster} alt="" aria-hidden="true" className={styles.aboutVideoPoster} />
    {visible && <video ref={video} controls={manual} muted loop playsInline preload="auto"
      style={{ opacity: ready ? 1 : 0 }} poster={poster} src="/assets/videos/about.mp4"
      onLoadedMetadata={event => { if (position.current > 0) event.currentTarget.currentTime = position.current; }}
      onLoadedData={() => setReady(true)} onEmptied={() => setReady(false)}
      onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)}
      aria-label={copy.aboutVideo} />}
    {visible && !manual && <button type="button" className={styles.aboutPlayback}
      aria-label={playing ? copy.pauseVideo : copy.playVideo}
      onClick={() => { const node = video.current; if (node) { if (node.paused) void node.play().catch(() => setManual(true)); else node.pause(); } }}>
      <span aria-hidden="true">{playing ? "Ⅱ" : "▶"}</span>
    </button>}
  </div>;
}
