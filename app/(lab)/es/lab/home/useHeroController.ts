"use client";

import { useEffect, useRef } from "react";
import { heroConfig as config } from "./hero.config";
import { motionConfig } from "./motion.config";
import { responsive } from "./responsive";

// Owns the existing typing, header state and hero motion lifecycle.
export function useHeroController(title: string = config.title.desktop) {
  const slot = useRef<HTMLDivElement>(null);
  const root = useRef<HTMLElement>(null);
  const nav = useRef<HTMLElement>(null);

  useEffect(() => {
    const hero = root.current;
    const navigationNode = nav.current;
    if (!hero || !navigationNode) return;
    const mobile = window.matchMedia(responsive.heroMobileQuery);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const lines = Array.from(hero.querySelectorAll<HTMLElement>("[data-typed-line]"));
    const text = title.split("\n");
    let typingTimer: number | undefined;
    let typingFinished = false;
    let motionFrame: number | undefined;
    let smoothY = window.scrollY;
    let heroTop = slot.current!.getBoundingClientRect().top + window.scrollY;
    let heroHeight = hero.offsetHeight;

    const finishTyping = () => {
      if (typingFinished) return;
      typingFinished = true;
      window.clearTimeout(typingTimer);
      typingTimer = undefined;
      lines.forEach((line, i) => { line.textContent = text[i]; line.closest("[data-title-line]")?.removeAttribute("data-caret"); });
      hero.dataset.typing = "complete";
    };

    // Full server-rendered copy remains the fallback and the accessible heading.
    // Animate only its visual duplicate; scrolling or focusing the hero ends typing.
    const startTyping = () => {
      finishTyping();
      if (!config.typing.enabled || mobile.matches || reduced.matches || window.scrollY > 12 || document.activeElement?.closest("header")) return;
      typingFinished = false;
      hero.dataset.typing = "active";
      lines.forEach(line => { line.textContent = ""; });
      let lineIndex = 0;
      let character = 0;
      const step = () => {
        const line = lines[lineIndex];
        if (!line) { finishTyping(); return; }
        line.closest("[data-title-line]")?.setAttribute("data-caret", "true");
        character += 1;
        line.textContent = text[lineIndex].slice(0, character);
        if (character >= text[lineIndex].length) {
          if (lineIndex === lines.length - 1) {
            // Original Siamo leaves the last caret blinking until interaction.
            typingTimer = undefined;
            hero.dataset.typing = "complete";
            return;
          }
          line.closest("[data-title-line]")?.removeAttribute("data-caret");
          lineIndex += 1;
          character = 0;
        }
        typingTimer = window.setTimeout(step, config.typing.characterMs);
      };
      lines[0]?.closest("[data-title-line]")?.setAttribute("data-caret", "true");
      // Match the original: start delay, then one full character interval.
      typingTimer = window.setTimeout(step, Math.max(0, config.typing.delayMs) + config.typing.characterMs);
    };

    const render = () => {
      const scrollY = window.scrollY;
      const covered = scrollY - heroTop >= heroHeight;
      const animate = !mobile.matches && !reduced.matches;
      // Read before writing; no geometry reads or hero repaint when covered.
      const localY = Math.max(0, Math.min(smoothY - heroTop, motionConfig.maxScroll));
      const documentHeight = covered ? 1 : document.documentElement.scrollHeight;
      if (!covered) {
        hero.style.setProperty("--hero-background-offset", `${animate ? localY / documentHeight * 100 * motionConfig.factor : 0}%`);
        hero.style.setProperty("--hero-title-lift", `${animate ? -localY * motionConfig.factor * motionConfig.titleFactor : 0}px`);
      }
      if (hero.inert !== covered) hero.inert = covered;
      const opacity = covered ? "0" : "";
      if (hero.style.opacity !== opacity) hero.style.opacity = opacity;
      const solid = scrollY > (mobile.matches ? heroTop + heroHeight : motionConfig.desktopNavThreshold);
      if (navigationNode.dataset.solid !== String(solid)) navigationNode.dataset.solid = String(solid);
      const scrolled = String(scrollY > 12);
      if (navigationNode.dataset.scrolled !== scrolled) navigationNode.dataset.scrolled = scrolled;
    };
    const frame = () => {
      const target = window.scrollY;
      smoothY = Math.abs(target - smoothY) > 0.1 ? smoothY + (target - smoothY) * motionConfig.ease : target;
      render();
      motionFrame = Math.abs(target - smoothY) > 0.1 && target - heroTop < heroHeight ? window.requestAnimationFrame(frame) : undefined;
    };
    const onScroll = () => {
      finishTyping();
      if (window.scrollY - heroTop >= heroHeight || mobile.matches || reduced.matches) smoothY = window.scrollY;
      // Coalesce scroll events into one frame; the hero loop stops when covered.
      if (motionFrame === undefined) motionFrame = window.requestAnimationFrame(frame);
    };
    const measure = () => {
      const slotNode = slot.current;
      if (!slotNode || !hero.isConnected) return;
      heroTop = slotNode.getBoundingClientRect().top + window.scrollY;
      heroHeight = hero.offsetHeight;
      smoothY = window.scrollY;
      render();
    };
    const changeMode = () => {
      if (motionFrame !== undefined) window.cancelAnimationFrame(motionFrame);
      motionFrame = undefined;
      finishTyping(); measure();
    };
    const onHeroFocus = (event: FocusEvent) => {
      finishTyping();
      const target = event.target as HTMLElement;
      const surface = document.querySelector("[data-home-lab-surface]");
      if (surface && target.getBoundingClientRect().bottom > surface.getBoundingClientRect().top) {
        window.scrollTo({ top: heroTop, behavior: "instant" });
      }
    };
    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(hero);
    startTyping();
    render();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("wheel", finishTyping, { passive: true });
    hero.addEventListener("focusin", onHeroFocus);
    navigationNode.addEventListener("focusin", finishTyping);
    mobile.addEventListener("change", changeMode);
    reduced.addEventListener("change", changeMode);
    return () => {
      window.clearTimeout(typingTimer);
      if (motionFrame !== undefined) window.cancelAnimationFrame(motionFrame);
      resizeObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("wheel", finishTyping);
      hero.removeEventListener("focusin", onHeroFocus);
      navigationNode.removeEventListener("focusin", finishTyping);
      mobile.removeEventListener("change", changeMode);
      reduced.removeEventListener("change", changeMode);
      finishTyping();
      hero.inert = false;
      hero.style.removeProperty("opacity");
      hero.style.removeProperty("visibility");
      hero.style.removeProperty("--hero-background-offset");
      hero.style.removeProperty("--hero-title-lift");
    };
  }, [title]);

  return { slot, root, nav };
}
