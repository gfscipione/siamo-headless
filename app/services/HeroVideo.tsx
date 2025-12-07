"use client";

import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";

type HeroVideoProps = {
  src: string;
  playbackRate?: number;
  className?: string;
  style?: CSSProperties;
};

export default function HeroVideo({
  src,
  playbackRate = 0.25,
  className,
  style,
}: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const applyRate = () => {
      try {
        v.playbackRate = playbackRate;
      } catch {
        /* ignore */
      }
    };
    applyRate();
    v.addEventListener("loadedmetadata", applyRate);
    return () => v.removeEventListener("loadedmetadata", applyRate);
  }, [playbackRate]);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (typeof IntersectionObserver === "undefined") {
      v.play().catch(() => {});
      return;
    }
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        if (entry.isIntersecting) {
          v.play().catch(() => {});
        } else {
          v.pause();
        }
      },
      { threshold: 0.7 }
    );
    observerRef.current.observe(v);
    return () => {
      observerRef.current?.disconnect();
      observerRef.current = null;
    };
  }, []);

  return (
    <video
      ref={videoRef}
      className={className}
      src={src}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      style={style}
      aria-hidden="true"
    />
  );
}
