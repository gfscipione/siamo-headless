"use client";

import { useEffect, useRef } from "react";

type AboutHeroVideoProps = {
  src: string;
  ariaLabel?: string;
  className?: string;
  preload?: "auto" | "metadata" | "none";
  poster?: string;
};

export default function AboutHeroVideo({ src, ariaLabel, className, preload = "metadata", poster }: AboutHeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const vid = videoRef.current;
    const node = vid?.parentElement;
    if (!vid || !node || typeof IntersectionObserver === "undefined") return;

    const handleVisibility = (entries: IntersectionObserverEntry[]) => {
      const entry = entries[0];
      if (!entry) return;
      const visible = entry.isIntersecting && entry.intersectionRatio >= 0.8;
      if (visible) {
        const p = vid.play();
        if (p && typeof p.catch === "function") p.catch(() => {});
      } else {
        vid.pause();
      }
    };

    const observer = new IntersectionObserver(handleVisibility, {
      threshold: [0, 0.5, 0.8, 1],
      rootMargin: "-5% 0px -5% 0px",
    });
    observer.observe(node);

    const handleVisibilityChange = () => {
      if (document.hidden) vid.pause();
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      vid.pause();
    };
  }, []);

  return (
    <video
      ref={videoRef}
      className={`about-hero__video${className ? ` ${className}` : ""}`}
      src={src}
      muted
      loop
      playsInline
      preload={preload}
      aria-label={ariaLabel}
      poster={poster}
    />
  );
}
