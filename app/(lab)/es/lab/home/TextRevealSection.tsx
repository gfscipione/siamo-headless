"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";

// Anuc's MotionReveal: 20px rise, 1.5s easeOut, once, 100px viewport inset.
const revealOptions: KeyframeAnimationOptions = {
  duration: 1500,
  easing: "cubic-bezier(.22,.61,.36,1)",
  fill: "both",
};

export default function TextRevealSection({ children, className, labelledBy, sectionId }: {
  children: ReactNode;
  className: string;
  labelledBy: string;
  sectionId?: string;
}) {
  const section = useRef<HTMLElement>(null);
  useEffect(() => {
    const elements = Array.from(section.current?.querySelectorAll<HTMLElement>("[data-text-reveal]") ?? []);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const animations = new Set<Animation>();
    let observer: IntersectionObserver | undefined;
    const restore = (element: HTMLElement) => {
      element.style.removeProperty("opacity");
      element.style.removeProperty("transform");
    };
    const settle = () => {
      observer?.disconnect();
      animations.forEach(animation => animation.cancel());
      animations.clear();
      elements.forEach(restore);
    };
    if (!reduced.matches && "IntersectionObserver" in window) {
      elements.forEach(element => {
        element.style.opacity = "0";
        element.style.transform = "translateY(20px)";
      });
      observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          const element = entry.target as HTMLElement;
          observer?.unobserve(element);
          const animation = element.animate([
            { opacity: 0, transform: "translateY(20px)" },
            { opacity: 1, transform: "translateY(0)" },
          ], revealOptions);
          animations.add(animation);
          animation.onfinish = () => {
            restore(element);
            animation.cancel();
            animations.delete(animation);
          };
        });
      }, { rootMargin: "0px 0px -100px 0px" });
      elements.forEach(element => observer?.observe(element));
    }
    // Changing the preference settles everything; content also stays visible without JS.
    reduced.addEventListener("change", settle);
    return () => {
      reduced.removeEventListener("change", settle);
      settle();
    };
  }, []);
  return <section id={sectionId} ref={section} className={className} aria-labelledby={labelledBy}>{children}</section>;
}
