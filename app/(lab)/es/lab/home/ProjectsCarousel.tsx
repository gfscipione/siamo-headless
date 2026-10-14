"use client";

import { useRef, useState } from "react";
import type { ReactNode } from "react";
import { getContent, type Locale } from "./localized";
import styles from "./home.module.css";

export default function ProjectsCarousel({ children, count, locale = "es" }: { children: ReactNode; count: number; locale?: Locale }) {
  const copy = getContent(locale);
  const grid = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(0);
  const pages = Math.ceil(count / 2);
  const move = (next: number) => {
    const node = grid.current;
    if (!node) return;
    node.scrollTo({ left: next * (node.clientWidth + 8), behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  };
  return <>
    <div ref={grid} className={styles.projectGrid} onScroll={() => {
      const node = grid.current;
      if (node) setPage(Math.max(0, Math.min(pages - 1, Math.round(node.scrollLeft / (node.clientWidth + 8)))));
    }}>{children}</div>
    <nav className={styles.projectNavigation} aria-label={copy.projectsNav}>
      <button type="button" aria-label={copy.previousProjects} disabled={page === 0} onClick={() => move(page - 1)}>‹</button>
      <span aria-live="polite">{String(page + 1).padStart(2, "0")} | {String(pages).padStart(2, "0")}</span>
      <button type="button" aria-label={copy.nextProjects} disabled={page === pages - 1} onClick={() => move(page + 1)}>›</button>
    </nav>
  </>;
}
