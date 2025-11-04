"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

function WwdTriptych() {
  return (
    <section className="triptych-wrapper" aria-label="What we do – tarjetas">
      {/* 01 · DISEÑO VIRTUAL */}
      <article className="triptych-card pos1">
        <Link href="/services#virtual" className="hit" aria-label="Abrir Diseño virtual">
          <div className="media">
            <video
              className="media-video"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/images/wwd-virtual.jpg"
              aria-label="Diseño virtual (video)"
            >
              <source src="/assets/videos/virtual-design.mp4" type="video/mp4" />
            </video>
          </div>
        </Link>
      </article>

      {/* 02 · DISEÑO &amp; EJECUCIÓN EN SITIO */}
      <article className="triptych-card pos2">
        <Link href="/services#on-site" className="hit" aria-label="Abrir Diseño y ejecución en sitio">
          <div className="media">
            <Image
              src="/assets/videos/content.webp"
              alt="Diseño y ejecución en sitio"
              fill
              sizes="(max-width:860px) 92vw, 360px"
            />
          </div>
        </Link>
      </article>

      {/* 03 · CONTENIDO / STUDIO LOG */}
      <article className="triptych-card pos3">
        <Link href="/content" className="hit" aria-label="Abrir Studio Log y contenidos">
          <div className="media">
            <video
              className="media-video"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/images/wwd-content.jpg"
              aria-label="Studio Log y contenidos (video)"
            >
              <source src="/assets/videos/wwd-onsite.mp4" type="video/mp4" />
            </video>
          </div>
        </Link>
      </article>

      {/* Styles scoped to this component */}
      <style jsx>{`
        .triptych-wrapper{
          /* knobs para alinear con las líneas 01/02/03 de tu sección */
          --triptych-offset: 72px;  /* distancia desde los números a las tarjetas */
          --col-01: 25%;            /* x de la línea del 01 (ajusta si tus guías cambian) */
          --col-02: 50%;            /* x de la línea del 02 */
          --col-03: 75%;            /* x de la línea del 03 */

          position: relative;
          width: 100%;
          margin-top: var(--triptych-offset);
          min-height: clamp(420px, 36vw, 560px);
          z-index: 1;
        }
        .triptych-card{
          position: absolute;
          top: 0;
          /* move all three cards equally via knobs coming from parent container */
          transform: translate(var(--wwd-cards-x, 0px), var(--wwd-cards-y, 0px)) translateX(-50%);
          width: min(28vw, 360px);
          background: #fff;
          border: none;
          border-radius: 0;
          overflow: clip;
          box-shadow: none;
        }
        .pos1{ left: var(--col-01); }
        .pos2{ left: calc(var(--col-02) + var(--wwd-cards-gap, 0px)); }
        .pos3{ left: calc(var(--col-03) + calc(var(--wwd-cards-gap, 0px) * 2)); }

        .hit{ display:block; color:inherit; text-decoration:none; }
        .media{ position:relative; width:100%; aspect-ratio:4/3; }
        .media :global(img){ object-fit: cover; }
        .media :global(video){
          position:absolute;
          inset:0;
          width:100%;
          height:100%;
          object-fit: cover;
        }

        @media (max-width: 1024px){
          .triptych-card{ width: min(42vw, 360px); }
        }
        @media (max-width: 860px){
          .triptych-wrapper{ min-height: unset; display: grid; gap: var(--wwd-cards-gap-mobile, 18px); }
          .triptych-card{ position: relative; left: auto; transform: none; width: min(92vw, 520px); margin: 0 auto; }
        }
      `}</style>
    </section>
  );
}

export default function ParallaxDemo({
  bgUrl = "/assets/img/hero.webp",
  title = "Designing your dream space \njust became a reality",
  titlePx = 55,
  typewriter = true,
  typingSpeedMs = 85,
  startDelayMs = 300,
  caretDash = "—",
  caretX = -14,
  caretY = 12,
  caretScaleX = 0.65,
  heroSublineGap = 15,
  heroSublineW = 350,
  aboutHeightPx = 6000,
  scrollEase = 0.07,
  wwdTitleX = 470,
  wwdTitleY = -500,
  wwdTextX = 470,
  wwdTextY = -450,
  wwdTitleFs = 15,
  wwdTitleW = 500,
  wwdGuideLblGap = 26,
  wwdTextMaxW = 2400,
  projectsTextMaxW = 1200,
  projectsTextX = 18,
  projectsTextY = 100,
  projectsGridGap = 0,
  projectsGridX = 20,
  projectsGridY = 260,
  projectsCol1X = -25,
  projectsCol2X = -5,
  projectsCol3X = 10,
  projectsCol4X = 27,
  projectsMetaX = -37,
  projectsMetaY = 80,
  projectsCardGrow = 15,
  wwdContainerMaxW = 1160,
  wwdPadTop = 420,
  wwdPadBottom = 120,
  wwdGutterL = 0,
  wwdGutterR = 70,
  wwdGuideW = 2,
  wwdGuideLblTop = 84,
  wwdGuideLblFs = 16,
  wwdGuideLblW = 500,
  wwdGuideLblColor = '#5f6b5e',
  wwdCardsX = 225,
  wwdCardsY = 270,
  wwdCardsGap = 15,
  wwdCardsGapMobile = 18,
  wwdSecTitle1 = "VIRTUAL DESIGN",
  wwdSecTitle2 = "ON-SITE DESIGN & EXECUTION",
  wwdSecTitle3 = "CONTENT / STUDIO LOG",
  wwdSecTitleTop = 116,
  wwdSecTitleGap = 26,
  wwdSecTitleFs = 16,
  wwdSecTitleW,
  wwdSecTitleColor,
  wwdSecTitleGapV = 52,
  wwdSecTitleX = 0,
  wwdSecTitleY = 50,
  wwdDesc1 = "Proyectos llave en mano para transformar tu espacio.",
  wwdDesc2 = "Convierte tu espacio con nuestras guías personalizadas.",
  wwdDesc3 = "Potencia tu entorno para alcanzar tus metas.",
  wwdDescFs = 20,
  wwdDescW,
  wwdDescColor,
  wwdDescMaxW,
  wwdDescGapTop,
  wwdDescX = 20,
  wwdDescY = 35,
  wwdDescSepX = 0,
  wwdDesc1X = 0,
  wwdDesc1Y = 0,
  wwdDesc2X = 20,
  wwdDesc2Y = 0,
  wwdDesc3X = 30,
  wwdDesc3Y = 0,
  wwdCtaX = 42,
  wwdCtaY = 90,
  wwdCtaTxtX = -25,
  wwdCtaTxtY = -5,
  wwdCta1X = 0,
  wwdCta1Y = 0,
  wwdCta3X = 34,
  wwdCta3Y = 0,
  wwdEyebrow1X = 18,
  wwdEyebrow1Y = 350,
  /* === ABOUT TITLE KNOBS ===
     aboutTitleX / aboutTitleY: offsets in px applied via CSS transform to <h3.about-title>
     aboutTitleGap: bottom margin (px) between the title and the video
  */
  aboutTitle = "ABOUT US",
  aboutTitleX = 20,
  aboutTitleY = 570,
  aboutTitleGap = 16,
  aboutCaption = "Art Direction & Styling, Head of Design & 3D\nHead of Style & Materials.",
  aboutCaptionX = 20,
  aboutCaptionY = 680,
  aboutCaptionShiftY = -50,
  aboutCaptionGap = 202,
  /* === ABOUT CTA (line-from-guide button above video) === */
  aboutCtaLabel = "get to know us",
  aboutCtaX = 16,
  aboutCtaY = 1030,
  aboutCtaUnderlineW = 220,
  aboutCtaLineGap = 10,
  aboutCtaTxtX = -25,
  aboutCtaTxtY = -5,
  /* === Full-bleed video knobs === */
  aboutVideoSrc = "/assets/videos/about.mp4",
  aboutVideoPoster = "",
  aboutVideoH = 640,          // px height for the video area (desktop) — a bit taller so top/bottom aren’t cropped
  aboutVideoGapTop = 80,      // px gap above the video (distance from Projects grid)
  aboutVideoY = 400,           // px translateY to fine-tune vertical placement of the video
  aboutVideoFit = "cover",
  aboutVideoPosY = 50,
  aboutVideoAspect = "16/9",
  aboutVideoOverlayPct = 44,
  wwdBlockY = 500,
  navColGap = 0,
  navInnerMaxW = 1600,
  navItemGap = 44,
  navTitleFs = 14,
}: {
  bgUrl?: string;
  title?: string;
  titlePx?: number;         // knob (px) already supported; we drive the CSS var here
  typewriter?: boolean;     // enable/disable typing
  typingSpeedMs?: number;   // speed per character
  startDelayMs?: number;    // delay before typing starts
  caretDash?: string;       // character used as the blinking caret (dash)
  caretX?: number;        // knob: px horizontal offset for the typewriter caret/dash
  caretY?: number;        // knob: px vertical offset for the typewriter caret/dash (positivo = baja)
  caretScaleX?: number;   // knob: scale factor (0..1+) to compress/expand the caret width (1 = normal, 0.6 = más corto)
  heroSublineGap?: number; // knob: px gap between the H1 title and the subline in the hero
  heroSublineW?: number;   // knob: numeric font-weight for the hero subline
  aboutHeightPx?: number;
  scrollEase?: number;  // knob: 0..1 easing factor for smooth scrolling
  wwdTitleX?: number; // knob: px offset X for WHAT WE DO title
  wwdTitleY?: number; // knob: px offset Y for WHAT WE DO title
  wwdTextX?: number;  // knob: px offset X for lead paragraph
  wwdTextY?: number;  // knob: px offset Y for lead paragraph
  wwdTitleFs?: number; // knob: px font-size for WHAT WE DO title (eyebrow)
  wwdTitleW?: number; // knob: numeric font-weight for WHAT WE DO title (eyebrow)
  wwdGuideLblGap?: number; // knob: px horizontal gap to place labels to the RIGHT of the guide line
  wwdTextMaxW?: number; // knob: px max-width for WHAT WE DO paragraph
  projectsTextMaxW?: number; // knob: px max-width for PROJECTS headline
  projectsTextX?: number;   // knob: px horizontal offset for PROJECTS paragraph
  projectsTextY?: number;   // knob: px vertical offset for PROJECTS paragraph
  projectsGridGap?: number;   // knob: px gap entre recuadros del grid de Projects (anula responsive por defecto)
  projectsGridX?: number;     // knob: px offset X para mover TODO el grid de Projects
  projectsGridY?: number;     // knob: px offset Y para mover TODO el grid de Projects
  projectsCol1X?: number;   // knob: px microajuste horizontal col1
  projectsCol2X?: number;   // knob: px microajuste horizontal col2
  projectsCol3X?: number;   // knob: px microajuste horizontal col3
  projectsCol4X?: number;   // knob: px microajuste horizontal col4
  projectsMetaX?: number;   // knob: px horizontal offset for ALL meta texts (year + title)
  projectsMetaY?: number;   // knob: px vertical offset for ALL meta texts (year + title)
  projectsCardGrow?: number; // knob: px que AGRANDA cada recuadro por igual (crece desde el borde: +1px en cada lado)
  wwdContainerMaxW?: number; // knob: px max-width for WHAT WE DO container
  wwdPadTop?: number;
  wwdPadBottom?: number;
  wwdGutterL?: number; // knob: left gutter (px) for WHAT WE DO full-bleed container
  wwdGutterR?: number; // knob: right gutter (px) for WHAT WE DO full-bleed container
  wwdGuideW?: number; // knob: px thickness for WHAT WE DO vertical guides
  wwdGuideLblTop?: number; // knob: px from top for numeric labels over vertical guides
  wwdGuideLblFs?: number;  // knob: px font-size for guide labels (01/02/03)
  wwdGuideLblW?: number;   // knob: numeric font-weight for guide labels
  wwdGuideLblColor?: string; // knob: color for guide labels
  wwdCardsX?: number;
  wwdCardsY?: number;
  wwdCardsGap?: number; // knob: px horizontal gap between the three cards (desktop)
  wwdCardsGapMobile?: number; // knob: px gap between cards on mobile
  wwdSecTitle1?: string; // title text for column 01
  wwdSecTitle2?: string; // title text for column 02
  wwdSecTitle3?: string; // title text for column 03
  wwdSecTitleTop?: number;   // knob: px from top (between numeric labels and cards)
  wwdSecTitleGap?: number;   // knob: px horizontal gap to the right of the guide line
  wwdSecTitleFs?: number;    // knob: px font-size for the section titles
  wwdSecTitleW?: number;     // knob: numeric font-weight for the section titles
  wwdSecTitleColor?: string; // knob: color for the section titles
  wwdSecTitleGapV?: number;  // knob: additional vertical spacing below titles before cards
  wwdSecTitleX?: number;     // knob: px horizontal offset applied to all subsection titles
  wwdSecTitleY?: number;     // knob: px vertical offset applied to all subsection titles
  wwdDesc1?: string;
  wwdDesc2?: string;
  wwdDesc3?: string;
  wwdDescFs?: number;
  wwdDescW?: number;
  wwdDescColor?: string;
  wwdDescMaxW?: number;
  wwdDescGapTop?: number;
  wwdDescX?: number;
  wwdDescY?: number;
  wwdDescSepX?: number;
  wwdDesc1X?: number;
  wwdDesc1Y?: number;
  wwdDesc2X?: number;
  wwdDesc2Y?: number;
  wwdDesc3X?: number;
  wwdDesc3Y?: number;
  wwdCtaX?: number;
  wwdCtaY?: number;
  wwdCtaTxtX?: number;
  wwdCtaTxtY?: number;
  wwdCta1X?: number;
  wwdCta1Y?: number;
  wwdCta3X?: number;
  wwdCta3Y?: number;
  wwdEyebrow1X?: number;
  wwdEyebrow1Y?: number;
  aboutTitle?: string;
  aboutTitleX?: number;
  aboutTitleY?: number;
  aboutTitleGap?: number;
  aboutCaption?: string;
  aboutCaptionX?: number;
  aboutCaptionY?: number;
  aboutCaptionShiftY?: number;
  aboutCaptionGap?: number;
  /* About CTA knobs */
  aboutCtaLabel?: string;
  aboutCtaX?: number;
  aboutCtaY?: number;
  aboutCtaUnderlineW?: number;
  aboutCtaLineGap?: number;
  aboutCtaTxtX?: number;
  aboutCtaTxtY?: number;
  wwdBlockY?: number; // knob: px translateY for the entire WHAT WE DO content block
  /* Full-bleed video knobs */
  aboutVideoSrc?: string;
  aboutVideoPoster?: string;
  aboutVideoH?: number;
  aboutVideoGapTop?: number;
  aboutVideoY?: number;
  aboutVideoFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
  aboutVideoPosY?: number; // 0–100 (%), 50 = centered
  aboutVideoAspect?: string; // CSS aspect-ratio like "16/9" or "9/16"; set aboutVideoH to 0 or leave unset to rely on aspect
  aboutVideoOverlayPct?: number; // knob: 0–100 (%) opacity for dark overlay above the video
  navColGap?: number;    // knob: px de separación ENTRE columnas (izq|logo|der)
  navInnerMaxW?: number; // knob: px de ancho máximo del contenedor interno del header
  navItemGap?: number;   // knob: px de separación ENTRE items de nav-left y nav-right (mismo valor para ambos)
  navTitleFs?: number;   // knob: px font-size para TODOS los items del header (nav-left/right y CTA)
}) {
  const rootRef   = useRef<HTMLDivElement | null>(null);
  const mainRef   = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLElement | null>(null);
  const contentRef= useRef<HTMLElement | null>(null);
  const footerRef = useRef<HTMLElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const scrollRafRef = useRef<number | null>(null);
  const targetYRef = useRef<number>(0);
  const smoothYRef = useRef<number>(0);

  const [navSolid, setNavSolid] = useState(false);

  // === Typewriter state (line-by-line) ===
  const [typedLines, setTypedLines] = useState<string[]>([]);  // accumulates per line
  const [lineIdx, setLineIdx] = useState<number>(0);          // which line is being typed
  const [charIdx, setCharIdx] = useState<number>(0);          // index within current line

  useEffect(() => {
    // keep CSS knob in sync with prop (pixels)
    document.documentElement.style.setProperty("--hero-title-fs", `${titlePx}px`);
  }, [titlePx]);

  useEffect(() => {
    // sync WWD title typography globally so header/nav can match EXACTLY
    document.documentElement.style.setProperty("--wwd-title-fs", `${wwdTitleFs}px`);
    document.documentElement.style.setProperty("--wwd-title-w", `${wwdTitleW}`);
  }, [wwdTitleFs, wwdTitleW]);

  // Normalize the title to ensure it always reads "...dream home"
  // - Handle CRLF / LF
  // - Fix "dream hom" (any spacing/casing)
  // - Fix any standalone "hom" before space/punctuation/newline/end
  const normalizedTitle = (title || "")
    .replace(/\r\n/g, "\n")
    .replace(/\bdream\s+hom(e)?(?=\s|[.,;:!?\-–—]|\n|$)/gi, "dream home")
    .replace(/\bhom(?=\s|[.,;:!?\-–—]|\n|$)/gi, "home");

  // Split title on explicit newlines and harden each line so none end with 'hom'
  const lines = normalizedTitle.split("\n").map(l => l.replace(/hom$/i, "home"));
  const isFinished =
    !typewriter ||
    (lineIdx === lines.length - 1 &&
      charIdx >= (lines[lines.length - 1]?.length ?? 0));

  useEffect(() => {
    // Cancel any previous RAF/timer when knobs change
    if (!typewriter) {
      // show full title, split into lines
      setTypedLines([...lines]);
      setLineIdx(lines.length - 1);
      setCharIdx(lines[lines.length - 1]?.length ?? 0);
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      return;
    }

    // reset typing state
    setTypedLines(Array(lines.length).fill(""));
    setLineIdx(0);
    setCharIdx(0);

    let mounted = true;
    let localLine = 0;
    let localChar = 0;

    const startTimer = window.setTimeout(() => {
      let lastTime = performance.now();
      const step = (now: number) => {
        if (!mounted) return;
        if (now - lastTime >= typingSpeedMs) {
          lastTime = now;

          const currentLineText = lines[localLine] ?? "";
          // advance one char on current line
          localChar = Math.min(localChar + 1, currentLineText.length);

          setCharIdx(localChar);
          setLineIdx(localLine);
          setTypedLines(prev => {
            const next = [...prev];
            next[localLine] = currentLineText.slice(0, localChar);
            return next;
          });

          // if finished this line, move to next line on next tick
          if (localChar >= currentLineText.length) {
            if (localLine < lines.length - 1) {
              localLine += 1;
              localChar = 0;
            } else {
              // finished all lines
              if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
              rafRef.current = null;
              return;
            }
          }
        }
        rafRef.current = requestAnimationFrame(step);
      };
      rafRef.current = requestAnimationFrame(step);
    }, Math.max(0, startDelayMs));

    return () => {
      mounted = false;
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      clearTimeout(startTimer);
    };
  }, [normalizedTitle, typewriter, typingSpeedMs, startDelayMs]);

  const pf = 0.22; // parallax factor fijo (sutil)

  useEffect(() => {
    const root    = rootRef.current!;
    const main    = mainRef.current!;
    const header  = headerRef.current!;
    const content = contentRef.current!;
    const footer  = footerRef.current!;

    // initialize targets based on current scroll
    targetYRef.current = window.scrollY || window.pageYOffset || 0;
    smoothYRef.current = targetYRef.current;

    let windowHeight = 0;
    let footerHeight = 0;
    let heightDocument = 0;

    const setCssVar = (k: string, v: string) =>
      document.documentElement.style.setProperty(k, v);

    // Keep both layers in sync
    const footerDamp  = 0.08;
    const contentDamp = 0.08;

    // Clamp easing knob between 0..1 (higher = quicker response)
    const ease = Math.max(0, Math.min(scrollEase, 1));

    function scrollFooter(y: number, hFooter: number) {
      const ratio = Math.max(0, Math.min(y / hFooter, 1));
      const bottom = -hFooter + (hFooter * ratio * (1 - footerDamp));
      footer.style.bottom = `${bottom}px`;
    }

    function render() {
      const y = smoothYRef.current;

      // move the fixed main with a smoothed offset
      main.style.top = `-${y}px`;

      // subtle counter-translation on about layer
      const offset = Math.max(0, -y * contentDamp);
      content.style.transform = `translateY(${offset}px)`;

      // background & hero dynamics
      const bgOffset = 50 - (y * 100 / (heightDocument || 1)) * pf;
      header.style.backgroundPosition = `50% ${bgOffset}%`;

      const titleLift = y * pf * 0.12;
      const midMove   = y * pf * 0.25;
      setCssVar("--title-lift", `${titleLift.toFixed(1)}px`);
      setCssVar("--mid-offset", `${midMove.toFixed(1)}px`);

      const t = Math.min(y / (windowHeight * 0.4 || 1), 1);
      const base = 0.28;
      const dyn  = pf * 0.12 * t;
      setCssVar("--hero-overlay", (base + dyn).toFixed(3));

      // footer motion
      scrollFooter(y, footerHeight);

      // solid nav threshold using smoothed position
      setNavSolid(y > 12);
    }

    function compute() {
      windowHeight = window.innerHeight;
      footerHeight = footer.getBoundingClientRect().height;
      const contentHeight = content.getBoundingClientRect().height;

      heightDocument = windowHeight + contentHeight + footerHeight - 20;

      root.style.height = `${heightDocument}px`;
      main.style.height = `${heightDocument}px`;

      header.style.height = `${windowHeight}px`;

      const wrap = root.querySelector<HTMLDivElement>(".wrapper-parallax");
      if (wrap) wrap.style.marginTop = `${windowHeight}px`;

      render();
    }

    function loop() {
      const target = targetYRef.current;
      const current = smoothYRef.current;
      const delta = target - current;

      if (Math.abs(delta) > 0.1) {
        smoothYRef.current = current + delta * ease;
      } else {
        smoothYRef.current = target;
      }

      render();
      scrollRafRef.current = requestAnimationFrame(loop);
    }

    const onScroll = () => {
      targetYRef.current = window.scrollY || window.pageYOffset || 0;
    };

    const onResize = () => {
      compute();
    };

    compute();

    // listeners
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });

    // start loop
    if (scrollRafRef.current != null) cancelAnimationFrame(scrollRafRef.current);
    scrollRafRef.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (scrollRafRef.current != null) cancelAnimationFrame(scrollRafRef.current);
      scrollRafRef.current = null;
    };
  }, [scrollEase]);

  // Convert overlay percentage (0–100) to alpha (0..1) for CSS
  const overlayAlpha = Math.max(0, Math.min(aboutVideoOverlayPct ?? 0, 100)) / 100;

  return (
    <>
      <nav
        className={`site-nav ${navSolid ? "is-solid" : ""}`}
        aria-label="Barra de navegación"
        style={{
          ['--nav-col-gap' as any]: `${navColGap}px`,
          ['--nav-inner-maxw' as any]: `${navInnerMaxW}px`,
          ['--nav-item-gap' as any]: `${navItemGap}px`,
          ['--nav-title-fs' as any]: `${navTitleFs}px`,
          ['--nav-title-w' as any]: `${wwdTitleW}`,
        }}
      >
        <div className="site-nav__inner">
          <ul className="nav-left" role="list">
            <li><a className="nav-link" href="#about">GET TO KNOW US</a></li>
            <li><a className="nav-link" href="#whatwedo">SERVICES</a></li>
            <li><a className="nav-link" href="#portfolio">PORTFOLIO</a></li>
          </ul>

          <a href="#home" className="brand-mark" aria-label="Siamo Design">Siamo<span>Design</span></a>

          <div className="nav-right">
            <a className="nav-link" href="#lang">ESPAÑOL</a>
            <a className="cta" href="#book">AGENDAR CONSULTA <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </nav>


      <div id="scroll-animate" ref={rootRef}>
        <div id="scroll-animate-main" ref={mainRef}>
          <div className="wrapper-parallax">
            {/* ⬇ Fondo dinámico recibido por props */}
            <header
              ref={headerRef}
            style={{
                backgroundImage: `url("${bgUrl}")`,
                backgroundPosition: "50% 50%",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                ['--hero-subline-gap' as any]: `${heroSublineGap}px`,
                ['--hero-subline-w' as any]: `${heroSublineW}`,
                ['--caret-x' as any]: `${caretX}px`,
                ['--caret-y' as any]: `${caretY}px`,
                ['--caret-scale-x' as any]: `${caretScaleX}`,
              }}
            >
              <div className="hero-title">
                <h1 className="typewriter">
                  {(typewriter ? typedLines : lines).map((ln, i) => {
                    const showCaret = typewriter && i === lineIdx;
                    return (
                      <span key={i} className="tw-line">
                        {ln}
                        <span
                          className={`caret${showCaret ? "" : " is-hidden"}`}
                          aria-hidden="true"
                        >
                          {showCaret ? caretDash : ""}
                        </span>
                      </span>
                    );
                  })}
                </h1>

                <p className={`subline ${isFinished ? "is-visible" : "is-hidden"}`}>
                  THE #1 INTERIOR DESIGN SERVICE
                </p>
              </div>
            </header>

            <section
              className="content wwd-section"
              id="whatwedo"
              ref={contentRef}
              style={{
                ['--about-caption-x' as any]: `${aboutCaptionX}px`,
                ['--about-caption-y' as any]: `${aboutCaptionY}px`,
                ['--about-caption-gap' as any]: `${aboutCaptionGap}px`,
                ['--wwdH' as any]: `${aboutHeightPx}px`,
                ['--wwd-guide-w' as any]: `${wwdGuideW}px`,
                ['--wwd-pad-t' as any]: `${wwdPadTop}px`,
                ['--wwd-pad-b' as any]: `${wwdPadBottom}px`,
              }}
            >
              <div
                className="container"
              style={{
                ['--wwd-title-x' as any]: `${wwdTitleX}px`,
                ['--wwd-title-y' as any]: `${wwdTitleY}px`,
                ['--wwd-text-x' as any]: `${wwdTextX}px`,
                ['--wwd-text-y' as any]: `${wwdTextY}px`,
                ['--wwd-title-fs' as any]: `${wwdTitleFs}px`,
                ['--wwd-title-w' as any]: `${wwdTitleW}`,
                ['--wwd-guide-label-gap' as any]: `${wwdGuideLblGap}px`,
                ['--wwd-text-maxw' as any]: `${wwdTextMaxW}px`,
                ['--projects-text-maxw' as any]: `${projectsTextMaxW}px`,
                ['--projects-text-x' as any]: `${projectsTextX}px`,
                ['--projects-text-y' as any]: `${projectsTextY}px`,
                ...(projectsGridGap != null ? ({ ['--projects-grid-gap-override' as any]: `${projectsGridGap}px` }) : {}),
                ['--projects-grid-x' as any]: `${projectsGridX}px`,
                ['--projects-grid-y' as any]: `${projectsGridY}px`,
                ['--projects-col1-x' as any]: `${projectsCol1X}px`,
                ['--projects-col2-x' as any]: `${projectsCol2X}px`,
                ['--projects-col3-x' as any]: `${projectsCol3X}px`,
                ['--projects-col4-x' as any]: `${projectsCol4X}px`,
                ['--projects-card-grow' as any]: `${projectsCardGrow}px`,
                ['--projects-meta-x' as any]: `${projectsMetaX}px`,
                ['--projects-meta-y' as any]: `${projectsMetaY}px`,
                ['--wwd-container-maxw' as any]: `${wwdContainerMaxW}px`,
                ['--wwd-gutter-l' as any]: `${wwdGutterL}px`,
                ['--wwd-gutter-r' as any]: `${wwdGutterR}px`,
                ['--wwd-guide-label-top' as any]: `${wwdGuideLblTop}px`,
                ['--wwd-guide-label-fs' as any]: 'var(--wwd-title-fs)',
                ['--wwd-guide-label-w' as any]: `${wwdGuideLblW}`,
                ['--wwd-guide-label-color' as any]: `${wwdGuideLblColor}`,
                ['--wwd-cards-x' as any]: `${wwdCardsX}px`,
                ['--wwd-cards-y' as any]: `${wwdCardsY}px`,
                ['--wwd-cards-gap' as any]: `${wwdCardsGap}px`,
                ['--wwd-cards-gap-mobile' as any]: `${wwdCardsGapMobile}px`,
                ['--wwd-sec-title-top' as any]: `${wwdSecTitleTop}px`,
                ['--wwd-sec-title-gap' as any]: `${wwdSecTitleGap}px`,
                ['--wwd-sec-title-fs' as any]: `${wwdSecTitleFs}px`,
                ...(wwdSecTitleW != null ? ({['--wwd-sec-title-w' as any]: `${wwdSecTitleW}`}) : {}),
                ...(wwdSecTitleColor ? ({['--wwd-sec-title-color' as any]: `${wwdSecTitleColor}`}) : {}),
                ['--wwd-sec-title-gap-v' as any]: `${wwdSecTitleGapV}px`,
                ['--wwd-sec-title-x' as any]: `${wwdSecTitleX}px`,
                ['--wwd-sec-title-y' as any]: `${wwdSecTitleY}px`,
                ['--wwd-desc-fs' as any]: wwdDescFs != null ? `${wwdDescFs}px` : undefined,
                ['--wwd-desc-w' as any]: wwdDescW != null ? `${wwdDescW}` : undefined,
                ['--wwd-desc-color' as any]: wwdDescColor ? `${wwdDescColor}` : undefined,
                ['--wwd-desc-maxw' as any]: wwdDescMaxW != null ? `${wwdDescMaxW}px` : undefined,
                ['--wwd-desc-gap-top' as any]: wwdDescGapTop != null ? `${wwdDescGapTop}px` : undefined,
                ['--wwd-desc-x' as any]: `${wwdDescX}px`,
                ['--wwd-desc-y' as any]: `${wwdDescY}px`,
                ['--wwd-desc-sep-x' as any]: `${wwdDescSepX}px`,
                ['--wwd-desc1-x' as any]: `${wwdDesc1X}px`,
                ['--wwd-desc1-y' as any]: `${wwdDesc1Y}px`,
                ['--wwd-desc2-x' as any]: `${wwdDesc2X}px`,
                ['--wwd-desc2-y' as any]: `${wwdDesc2Y}px`,
                ['--wwd-desc3-x' as any]: `${wwdDesc3X}px`,
                ['--wwd-desc3-y' as any]: `${wwdDesc3Y}px`,
                ['--wwd-cta-x' as any]: `${wwdCtaX}px`,
                ['--wwd-cta-y' as any]: `${wwdCtaY}px`,
                ['--wwd-cta-txt-x' as any]: `${wwdCtaTxtX}px`,
                ['--wwd-cta-txt-y' as any]: `${wwdCtaTxtY}px`,
                ['--wwd-cta1-x' as any]: `${wwdCta1X}px`,
                ['--wwd-cta1-y' as any]: `${wwdCta1Y}px`,
                ['--wwd-cta3-x' as any]: `${wwdCta3X}px`,
                ['--wwd-cta3-y' as any]: `${wwdCta3Y}px`,
                ['--wwd-eyebrow1-x' as any]: `${wwdEyebrow1X}px`,
                ['--wwd-eyebrow1-y' as any]: `${wwdEyebrow1Y}px`,
                ['--wwd-block-y' as any]: `${wwdBlockY}px`,
                ['--about-video-h' as any]: `${aboutVideoH}px`,
                ['--about-video-gap-top' as any]: `${aboutVideoGapTop}px`,
                ['--about-video-y' as any]: `${aboutVideoY}px`,
                ['--about-video-fit' as any]: aboutVideoFit,
                ['--about-video-pos-y' as any]: `${aboutVideoPosY}%`,
                ['--about-video-aspect' as any]: `${aboutVideoAspect}`,
                ['--about-video-overlay' as any]: `${overlayAlpha}`,
              }}
              >
                {/* Guide labels 01 / 02 / 03 aligned with the three vertical guides */}
                <div className="wwd-guides-labels" aria-hidden="true">
                  <span className="g-label" style={{ ['--x' as any]: '25%' }}>01</span>
                  <span className="g-label" style={{ ['--x' as any]: '50%' }}>02</span>
                  <span className="g-label" style={{ ['--x' as any]: '75%' }}>03</span>
                </div>
                {/* Column titles between numerals and images */}
                <div className="wwd-guides-titles">
                  <h3 className="g-title" style={{ ['--x' as any]: '25%' }}>{wwdSecTitle1}</h3>
                  <h3 className="g-title" style={{ ['--x' as any]: '50%' }}>{wwdSecTitle2}</h3>
                  <h3 className="g-title" style={{ ['--x' as any]: '75%' }}>{wwdSecTitle3}</h3>
                </div>
                <p className="eyebrow">WHAT WE DO</p>

                <p className="lead">
                  En Siamo fusionamos el interiorismo con la inteligencia emocional para crear
                  espacios únicos que inspiran bienestar y equilibrio.
                </p>

                <WwdTriptych />
                <div className="wwd-guides-descriptions" aria-hidden="false">
                  <p className="g-desc col1">{wwdDesc1}</p>
                  <a className="g-cta col1" href="/services">
                    <span className="cta-label">our services</span>
                  </a>
                  <p className="g-eyebrow col1">projects</p>

                  <p className="g-desc col2">{wwdDesc2}</p>

                  <p className="g-desc col3">{wwdDesc3}</p>
                  <a className="g-cta col3" href="/content">
                    <span className="cta-label">studio log</span>
                  </a>
                </div>
                {/* === PROJECTS header block (aligned to guide 01 with same gap as "PROJECTS" label) === */}
                <section className="projects-block" id="projects" aria-label="Projects section">
                  <h2 className="projects-headline lead">
                    Nuestros espacios hablan de armonía y transformación.
                  </h2>
                </section>

                {/* === PROJECTS grid (4 cuadrantes alineados a las guías) === */}
                <section className="projects-grid" aria-label="Projects grid">
                  <article className="proj-card col1">
                    <a className="proj-hit" href="/work/sample-1" aria-label="Abrir proyecto 1">
                      <div className="proj-media ph" />
                    </a>
                    <div className="proj-meta">
                      <span className="proj-year">2024</span>
                      <h3 className="proj-title">ESTILISMO PARA EDITORIAL EN VIVIENDA</h3>
                    </div>
                  </article>

                  <article className="proj-card col2">
                    <a className="proj-hit" href="/work/sample-2" aria-label="Abrir proyecto 2">
                      <div className="proj-media ph" />
                    </a>
                    <div className="proj-meta">
                      <span className="proj-year">2016</span>
                      <h3 className="proj-title">DORMITORIO EN SUITE, REFUGIO ÍNTIMO CON ESENCIA NATURAL</h3>
                    </div>
                  </article>

                  <article className="proj-card col3">
                    <a className="proj-hit" href="/work/sample-3" aria-label="Abrir proyecto 3">
                      <div className="proj-media ph" />
                    </a>
                    <div className="proj-meta">
                      <span className="proj-year">2018</span>
                      <h3 className="proj-title">UN SALÓN PARA HABITAR LA CALMA</h3>
                    </div>
                  </article>

                  <article className="proj-card col4">
                    <a className="proj-hit" href="/work/sample-4" aria-label="Abrir proyecto 4">
                      <div className="proj-media ph" />
                    </a>
                    <div className="proj-meta">
                      <span className="proj-year">2018</span>
                      <h3 className="proj-title">COCINA CON ISLA CENTRAL: FUNCIONALIDAD QUE INSPIRA</h3>
                    </div>
                  </article>
                </section>
                <h3
                  className="about-title"
                  style={{
                    ['--about-title-x' as any]: `${aboutTitleX}px`,
                    ['--about-title-y' as any]: `${aboutTitleY}px`,
                    ['--about-title-gap' as any]: `${aboutTitleGap}px`,
                  }}
                >
                  {aboutTitle}
                </h3>
                <p
                  className="about-caption"
                  style={{
                    ['--about-caption-x' as any]: `${aboutCaptionX}px`,
                    ['--about-caption-y' as any]: `${aboutCaptionY}px`,
                    ['--about-caption-shift-y' as any]: `${aboutCaptionShiftY}px`,
                    ['--about-caption-gap' as any]: `${aboutCaptionGap}px`,
                  }}
                >
                  {aboutCaption}
                </p>
                <a
                  className="about-cta"
                  href="#about"
                  aria-label="Get to know us"
                  style={{
                    ['--about-cta-x' as any]: `${aboutCtaX}px`,
                    ['--about-cta-y' as any]: `${aboutCtaY}px`,
                    ['--about-cta-underline-w' as any]: `${aboutCtaUnderlineW}px`,
                    ['--about-cta-line-gap' as any]: `${aboutCtaLineGap}px`,
                    ['--about-cta-txt-x' as any]: `${aboutCtaTxtX}px`,
                    ['--about-cta-txt-y' as any]: `${aboutCtaTxtY}px`,
                  }}
                >
                  <span className="cta-label">{aboutCtaLabel}</span>
                </a>
                {/* === FULL‑BLEED ABOUT VIDEO (with guide overlays) === */}
                <div className="wwd-fullvideo" aria-label="About video">
                  <video
                    className="about-video"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    poster={aboutVideoPoster || undefined}
                  >
                    <source src={aboutVideoSrc} type="video/mp4" />
                  </video>
                </div>
              </div>
            </section>

            <footer ref={footerRef}>
              <h1>Footer</h1>
            </footer>
          </div>
        </div>
      </div>

      {/* ==== CSS idéntico al tuyo, salvo el header (quitamos el background fijo en CSS) ==== */}
      <style jsx>{`
        :global(html), :global(body) { height: 100%; }
        :global(html){ scroll-behavior: smooth; }
        :global(body) { margin:0; font-family: system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif; color:#111; background:#f7f7f5; }

        #scroll-animate { overflow:hidden; }
        #scroll-animate-main { width:100%; left:0; top:0; position:fixed; }

        header{
          width:100%; height:100%;
          top:0; position:fixed; z-index:-1;
          display:grid; place-items:center; padding:clamp(24px,6vw,96px) 16px;
        }
        header::before{
          content:""; position:absolute; inset:-2% -2%; pointer-events:none; z-index:0;
          background: radial-gradient(120% 60% at 50% 40%, rgba(255,255,255,.10), rgba(255,255,255,0) 60%);
          transform: translateY(var(--mid-offset, 0px)); will-change: transform;
        }
        header::after{ content:""; position:absolute; inset:0; background:rgba(0,0,0,var(--hero-overlay)); z-index:1; }
        header .hero-title{
          position:relative; z-index:2;
          transform: translateY(calc(var(--title-lift,0px) * -1)); will-change: transform;
          display:flex; flex-direction:column; align-items:center;
          gap: var(--hero-subline-gap, 6px);
        }
        header .hero-title h1{ margin:0; }
        .subline{
          font-family: 'Poppins', system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
          font-weight: var(--hero-subline-w, 600);
          text-transform: uppercase;
          letter-spacing: .08em;
          font-size: clamp(12px, 1.3vw, 20px);
          color:#fff;
          opacity: 0;
          transform: translateY(6px);
          transition: opacity .45s ease .05s, transform .45s ease .05s;
        }
        .subline.is-visible{ opacity:1; transform:none; }
        .subline.is-hidden{ opacity:0; }

        footer{
          width:100%;
          height:300px;
          background:#999;
          bottom:-300px;
          position:relative;
          z-index:2;
          will-change: bottom;
          transform: translateZ(0);
          transition: transform 0.6s ease-out;
        }

        .wwd-section {
          --wwdH: 1000px; /* knob: altura de la sección What We Do */
          min-height: var(--wwdH);
          height: auto;
          position: relative;
          overflow: visible;
          z-index: 2;
        }
        .content{
          min-height:70vh;
          padding:clamp(48px,10vw,120px) 16px;
          background:#fff;
          position:relative;
          z-index:1;
          display:flex;
          align-items:center;
          will-change: transform;
          transform: translateZ(0);
          transition: transform 0.6s ease-out;
        }
        .content.wwd-section{
          min-height: var(--wwdH);
          height: auto;
          background:#F4F2EA;
          /* remove side padding so text can expand fully to the right */
          padding: var(--wwd-pad-t, clamp(48px,10vw,120px)) 0 var(--wwd-pad-b, clamp(48px,10vw,120px));
          --guides-color: rgba(255,255,255,0.9);
          align-items: flex-start; /* anchor content block to the top instead of centering */
        }

        /* ===== PROJECTS (headline under "PROJECTS") ===== */
        .content.wwd-section .projects-block{
          /* use the same inset as subsection titles/labels so both share the exact gap from guide 01 */
          --projects-gap: var(--wwd-sec-title-gap, 12px);
          /* controls extra space below the eyebrow before the big headline */
          --projects-gap-top: 24px;
          display:block;
          position:relative;
          /* push headline down by the same offset used to position the eyebrow (g-eyebrow col1) */
          margin-top: calc(var(--wwd-eyebrow1-y, 0px) + var(--projects-gap-top));
        }
        .content.wwd-section .projects-headline{
          /* adopts .lead typography; this block only handles positioning/alignment */
          margin: 0;
          margin-left: 0;  /* override .wwd-section .lead margins */
          margin-top: 0;   /* override .wwd-section .lead margins */

          /* === Width controlled in PX via knob (fallback to WWD) === */
          max-width: min(
            var(--projects-text-maxw, var(--wwd-text-maxw, 780px)),
            calc(100vw - var(--wwd-gutter-r, 0px) - var(--wwd-text-x, 0px))
          );

          /* === Base alignment to guide 01 + pixel offsets === */
          position: relative;
          left: calc(var(--guide-l1, 25%) + var(--projects-gap));
          transform: translate(var(--projects-text-x, 0px), var(--projects-text-y, 0px));
        }

        /* ===== PROJECTS Grid (4 columnas bajo las guías 25/50/75) ===== */
        .content.wwd-section .projects-grid{
          /* knobs */
          --projects-grid-gap-top: 56px;     /* espacio entre el texto grande y el grid */
          --projects-grid-gap: 0px;          /* gap horizontal entre columnas (alineado a guías => 0) */
          --projects-card-aspect: 75%;       /* 4:3 => 75%; 1:1 => 100%; 3:2 => 66.66% */

          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: var(--projects-grid-gap-override, var(--projects-grid-gap));
          margin-top: var(--projects-grid-gap-top);
          position: relative;
          z-index: 1;
          transform: translate(var(--projects-grid-x, 0px), var(--projects-grid-y, 0px));
          will-change: transform;
        }
        .content.wwd-section .projects-grid .proj-card{
          position: relative;
          /* cada columna ya cae debajo de su cuadrante 25/50/75; empuja el contenido un poco a la derecha para respetar el inset de títulos */
          padding-left: var(--wwd-sec-title-gap, 12px);
        }
        /* Microajustes por columna (solo horizontal) */
        .content.wwd-section .projects-grid .proj-card.col1{ transform: translateX(var(--projects-col1-x, 0px)); }
        .content.wwd-section .projects-grid .proj-card.col2{ transform: translateX(var(--projects-col2-x, 0px)); }
        .content.wwd-section .projects-grid .proj-card.col3{ transform: translateX(var(--projects-col3-x, 0px)); }
        .content.wwd-section .projects-grid .proj-card.col4{ transform: translateX(var(--projects-col4-x, 0px)); }
        .content.wwd-section .projects-grid .proj-hit{ display:block; color:inherit; text-decoration:none; }
        .content.wwd-section .projects-grid .proj-media{
          position: relative;
          /* crecer uniformemente en todos los lados: +grow px por lado */
          width: calc(100% + (var(--projects-card-grow, 0px) * 2));
          transform: translate(
            calc(-1 * var(--projects-card-grow, 0px)),
            calc(-1 * var(--projects-card-grow, 0px))
          );
          background: #dcd8ce; /* placeholder */
          overflow: hidden;
          will-change: width, transform;
        }
        .content.wwd-section .projects-grid .proj-media::before{
          content:"";
          display:block;
          padding-top: var(--projects-card-aspect); /* fallback de altura para que no colapse */
        }
        .content.wwd-section .projects-grid .proj-media.ph{ background:#e7e3da; border:none; }

        /* Meta row under each project: YEAR (left) + TITLE (right) */
        .content.wwd-section .projects-grid .proj-meta{
          display: grid;
          grid-template-columns: min-content 1fr;
          align-items: baseline;
          gap: 18px;
          margin: 14px 0 0 0;            /* spacing under image */
          padding-left: var(--wwd-sec-title-gap, 12px); /* align to the guide inset */
          transform: translate(var(--projects-meta-x, 0px), var(--projects-meta-y, 0px)); /* global X/Y offset knob */
          will-change: transform;
        }

        .content.wwd-section .projects-grid .proj-year{
          font-family:'Poppins', system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
          font-size: clamp(11px, 1vw, 12px);
          font-weight: 500;
          letter-spacing: .08em;
          color: rgba(0,0,0,.45);
          text-transform: none;
        }

        .content.wwd-section .projects-grid .proj-title{
          margin: 0; /* baseline with the year */
          font-family:'Poppins', system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
          font-size: clamp(11px, 1.05vw, 13px);
          font-weight: 500;                  /* slightly lighter, like the reference */
          letter-spacing:.06em;
          text-transform: uppercase;         /* matches the example */
          color:#6b6b6b;
        }

        @media (max-width: 1024px){
          .content.wwd-section .projects-grid{
            --projects-grid-gap: 12px;
          }
        }
        @media (max-width: 860px){
          .content.wwd-section .projects-grid{
            grid-template-columns: 1fr;
            --projects-grid-gap: 18px;
          }
          .content.wwd-section .projects-grid .proj-card{
            padding-left: var(--wwd-sec-title-gap, 12px);
            max-width: min(92vw, 520px);
            margin: 0 auto;
          }
          .content.wwd-section .projects-grid .proj-card.col1,
          .content.wwd-section .projects-grid .proj-card.col2,
          .content.wwd-section .projects-grid .proj-card.col3,
          .content.wwd-section .projects-grid .proj-card.col4{
            transform: none !important;
          }
        }

        /* Position driven by --about-title-x / --about-title-y (set from props) */
        /* ===== ABOUT title (above video, aligned to guide 01) ===== */
        .content.wwd-section .about-title{
          position: relative;
          z-index: 3; /* ensure it sits above guide overlays and the video wrapper */
          display: block;
          left: calc(var(--guide-l1, 25%) + var(--wwd-sec-title-gap, 12px));
          transform: translate(var(--about-title-x, 0px), var(--about-title-y, 0px));
          /* place it just above the video with a controllable bottom gap */
          margin: calc(var(--about-video-gap-top, 80px) - var(--about-title-gap, 16px)) 0 var(--about-title-gap, 16px);
          font-family: 'Poppins', system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
          font-size: var(--wwd-title-fs, 16px) !important;
          font-weight: var(--wwd-sec-title-w, var(--wwd-title-w, 500)) !important;
          letter-spacing: .10em;
          text-transform: uppercase;
          color: var(--wwd-sec-title-color, #555);
          white-space: nowrap;
          pointer-events: auto;
          mix-blend-mode: normal;
        }
        .content.wwd-section .about-caption{
          position: relative;
          z-index: 3; /* above video and overlays */
          display: block;
          left: calc(var(--guide-l1, 25%) + var(--wwd-sec-title-gap, 12px)); /* align to guide 01 like the title */
          transform: translate(
            var(--about-caption-x, 0px),
            calc(var(--about-caption-y, 0px) + var(--about-caption-shift-y, 0px))
          );
          margin: 0 0 var(--about-caption-gap, 12px);

          /* TYPOGRAPHY matches about-title */
          font-family: 'Poppins', system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
          font-size: var(--wwd-title-fs, 16px) !important;    /* same size */
          font-weight: var(--wwd-sec-title-w, var(--wwd-title-w, 500)) !important; /* same weight */
          letter-spacing: .10em;                               /* same tracking */
          text-transform: uppercase;                           /* same transform */
          font-style: italic;                                  /* italic as requested */
          color: var(--wwd-sec-title-color, #555);

          /* LAYOUT: lock caption inside the same left column and force wrap into two lines max */
          max-width: min(32ch, 40vw);
          text-align: left;
          white-space: pre-line; /* honor the \n in aboutCaption so it breaks into 2 lines */
        }
        /* ===== ABOUT CTA (line-from-guide button above the video) ===== */
        .content.wwd-section .about-cta{
          position: relative;
          z-index: 3;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin: 0;                           /* spacing via transform + line gap */
          padding: 8px 12px;
          border-radius: 6px;
          border: 1px solid transparent;       /* keep layout stable on hover */
          background: transparent;
          text-decoration: none;
          /* Align to guide 01 and then offset with knobs */
          left: calc(var(--guide-l1, 25%) + var(--wwd-sec-title-gap, 12px));
          transform: translate(var(--about-cta-x, 0px), var(--about-cta-y, 0px));
          isolation: isolate;
          color: #111;
        }
        /* Thin line ABOVE the CTA text, starting on the vertical guide */
        .content.wwd-section .about-cta::before{
          content:"";
          position:absolute;
          left: calc(-1 * var(--wwd-sec-title-gap, 12px));  /* start exactly at the guide */
          top: calc(-1 * var(--about-cta-line-gap, 10px));  /* line sits above the text */
          width: var(--about-cta-underline-w, 220px);
          height: var(--wwd-guide-w, 1px);
          background: #fff;
          transition: opacity .28s cubic-bezier(.22,.61,.36,1), transform .28s cubic-bezier(.22,.61,.36,1);
        }
        /* Fill that grows from the guide to form a rectangular button on hover */
        .content.wwd-section .about-cta::after{
          content: "";
          position: absolute;
          left: calc(-1 * var(--wwd-sec-title-gap, 12px));  /* start from the guide */
          top: calc(-1 * var(--about-cta-line-gap, 10px));  /* from the top line */
          height: calc(100% + var(--about-cta-line-gap, 10px)); /* cover down to CTA bottom edge */
          width: 0;                                        /* collapsed by default */
          background: var(--guides-color, rgba(0,0,0,.15));
          border-left: var(--wwd-guide-w, 1px) solid var(--guides-color, rgba(0,0,0,.15));
          border-top: var(--wwd-guide-w, 1px) solid var(--guides-color, rgba(0,0,0,.15));
          z-index: -1;
          will-change: width;
          transition: width .36s cubic-bezier(.22,.61,.36,1);
        }
        .content.wwd-section .about-cta:hover::after,
        .content.wwd-section .about-cta:focus-visible::after{
          width: var(--about-cta-underline-w, 220px);       /* fill reaches the same width as the line */
        }
        /* CTA label typography unified with section labels */
        .content.wwd-section .about-cta .cta-label{
          display: inline-block;
          font-family: 'Poppins', system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
          font-size: var(--wwd-title-fs, 16px);
          font-weight: var(--wwd-sec-title-w, var(--wwd-title-w, 500));
          letter-spacing: .10em;
          text-transform: uppercase;
          color: #fff;
          transition: color .28s cubic-bezier(.22,.61,.36,1);
          transform: translate(var(--about-cta-txt-x, 0px), var(--about-cta-txt-y, 0px));
          will-change: transform;
        }

        .content.wwd-section .about-cta:hover .cta-label,
        .content.wwd-section .about-cta:focus-visible .cta-label{
          color: #111;
        }

        /* ===== FULL‑BLEED VIDEO under Projects (lines overlay above) ===== */
        .content.wwd-section .wwd-fullvideo{
          position: relative;
          width: 100vw;
          margin: var(--about-video-gap-top, 80px) 0 0 0;
          /* cancel container gutters so it truly spans edge-to-edge */
          margin-left: calc(-1 * var(--wwd-gutter-l, 0px));
          margin-right: calc(-1 * var(--wwd-gutter-r, 0px));
          isolation: isolate; /* ensure overlay sits above video only */
          transform: translateY(var(--about-video-y, 0px));
          will-change: transform;
        }
        .content.wwd-section .wwd-fullvideo::before{
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 1; /* above video, below guide lines */
          background: rgba(0,0,0, var(--about-video-overlay, 0));
        }
        .content.wwd-section .wwd-fullvideo .about-video{
          display: block;
          width: 100%;
          height: auto;                                   /* auto height to avoid top/bottom crop */
          aspect-ratio: var(--about-video-aspect, 16/9);  /* keep full frame; adjust with knob */
          object-fit: var(--about-video-fit, cover);      /* use "contain" to guarantee no crop */
          object-position: 50% var(--about-video-pos-y, 50%);
          max-height: var(--about-video-h, none);         /* optional ceiling if you still want one */
        }
        /* Overlay the same three vertical guide lines ON TOP of the video */
        .content.wwd-section .wwd-fullvideo::after{
          content:"";
          position:absolute;
          inset:0;
          pointer-events:none;
          z-index: 2;
          background-image:
            linear-gradient(to bottom, var(--guides-color, rgba(0,0,0,.08)), var(--guides-color, rgba(0,0,0,.08))),
            linear-gradient(to bottom, var(--guides-color, rgba(0,0,0,.08)), var(--guides-color, rgba(0,0,0,.08))),
            linear-gradient(to bottom, var(--guides-color, rgba(0,0,0,.08)), var(--guides-color, rgba(0,0,0,.08)));
          background-size: var(--wwd-guide-w, 1px) 100%, var(--wwd-guide-w, 1px) 100%, var(--wwd-guide-w, 1px) 100%;
          background-repeat: no-repeat;
          background-position: 25% 0, 50% 0, 75% 0;
        }

        @media (max-width: 860px){
          .content.wwd-section .wwd-fullvideo .about-video{
            height: auto;
            aspect-ratio: var(--about-video-aspect, 16/9);
            max-height: min(54vh, 420px);
          }
        }
        .content.wwd-section .container{
          /* Full-bleed container so text can reach the far right edge */
          width: 100vw;
          max-width: none;
          margin: 0; /* no auto-centering gutters */
          position: relative;
          overflow: visible;
          padding-left: var(--wwd-gutter-l, 0px);
          padding-right: var(--wwd-gutter-r, 0px);
          box-sizing: border-box;
          transform: translateY(var(--wwd-block-y, 0px));
          will-change: transform;
        }
        .content.wwd-section::before{
          content:"";
          position:absolute;
          inset:0;                 /* start at the very top of the section */
          pointer-events:none;
          z-index:0;               /* behind content */
          --guides-color: rgba(255,255,255,0.9);
          background-image:
            linear-gradient(to bottom, var(--guides-color), var(--guides-color)),
            linear-gradient(to bottom, var(--guides-color), var(--guides-color)),
            linear-gradient(to bottom, var(--guides-color), var(--guides-color));
          background-size: var(--wwd-guide-w, 1px) 100%, var(--wwd-guide-w, 1px) 100%, var(--wwd-guide-w, 1px) 100%;
          background-repeat: no-repeat;
          /* Equally distributed across the entire section width */
          background-position: 25% 0, 50% 0, 75% 0;
        }
        /* Numeric labels that sit on top of the three vertical guide lines */
        .content.wwd-section .wwd-guides-labels{
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 1; /* above the ::before guides, below main content */
        }
        .content.wwd-section .wwd-guides-labels .g-label{
          position: absolute;
          top: var(--wwd-guide-label-top, 28px);
          left: calc(var(--x) + var(--wwd-guide-label-gap, 12px));
          transform: translateX(0);
          font-family: 'Poppins', system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
          font-size: var(--wwd-guide-label-fs, var(--wwd-title-fs, 16px));
          font-weight: var(--wwd-guide-label-w, 500);
          letter-spacing: .06em;
          color: var(--wwd-guide-label-color, #5f6b5e);
        }

        /* Section titles that sit below the numeric labels, aligned to each guide */
        .content.wwd-section .wwd-guides-titles{
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 1; /* above guides, below main content */
        }
        .content.wwd-section .wwd-guides-titles .g-title{
          position: absolute;
          top: var(--wwd-sec-title-top, calc(var(--wwd-guide-label-top, 28px) + 40px));
          left: calc(var(--x) + var(--wwd-sec-title-gap, 12px));
          transform: translate(var(--wwd-sec-title-x, 0px), var(--wwd-sec-title-y, 0px));
          margin: 0;
          font-family: 'Poppins', system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
          font-size: var(--wwd-title-fs, 16px) !important;
          font-weight: var(--wwd-sec-title-w, var(--wwd-title-w, 500)) !important;
          letter-spacing: .10em;
          color: var(--wwd-sec-title-color, #555);
          text-transform: uppercase;
          white-space: nowrap;
        }
        .eyebrow{
          margin: 0 0 12px 0;
          font-family:'Poppins', system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
          font-weight: var(--wwd-title-w, 500);
          text-transform:uppercase;
          letter-spacing:.10em;
          font-size: var(--wwd-title-fs, 12px);
          color:#555;
        }
        .wwd-grid{
          display:grid;
          grid-template-columns: repeat(4, 1fr);
          gap:0;
          margin-top:clamp(16px, 3vw, 36px);
          min-height:min(40vh, 520px);
        }
        .service{
          display:flex;
          align-items:flex-start;
          padding: clamp(8px, 1.5vw, 14px) 0;
        }
        .service-name{
          font-family:'Poppins', system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
          font-size: clamp(14px, 1.2vw, 18px);
          font-weight: 600;
          letter-spacing:.02em;
          margin:0;
          text-transform:none;
          color:#1a1a1a;
        }
.lead{ font-family:'Playfair Display', 'Times New Roman', serif; font-weight:400; font-size: var(--hero-title-fs) !important; line-height:1.08; margin:0; color:#111; }

        /* Offsets (knobs) for WHAT WE DO title and text */
        .wwd-section .eyebrow{
          transform: translate(var(--wwd-title-x, 0px), var(--wwd-title-y, 0px));
          will-change: transform;
        }
        .wwd-section .lead{
          /* Allow growth until the actual right edge minus the configured gutter and the X offset */
          max-width: min(
            var(--wwd-text-maxw, 780px),
            calc(100vw - var(--wwd-gutter-r, 0px) - var(--wwd-text-x, 0px))
          );
          margin-left: var(--wwd-text-x, 0px);
          margin-top: var(--wwd-text-y, 0px);
          box-sizing: border-box;
        }
        /* — Uppercase only for WHAT WE DO paragraph — */
        .content.wwd-section .lead{
          text-transform: uppercase;
          letter-spacing: var(--hero-letter-spacing, 0em);
        }

        /* Align Triptych under the 01/02/03 numerals of the guides */
        .content.wwd-section :global(.triptych-wrapper){
          /* Place cards below the new section titles */
          margin-top: calc(
            var(--wwd-sec-title-top, calc(var(--wwd-guide-label-top, 28px) + 40px))
            + var(--wwd-sec-title-gap-v, 40px)
          );
        }
        /* Descriptions under each column, aligned to the same vertical guides (to the RIGHT of the line using the same gap) */
        .content.wwd-section .wwd-guides-descriptions{
          /* lock auto-placement to rows so texts stay on row 1 */
          grid-auto-flow: row;
          grid-auto-rows: auto;
          margin-top: var(--wwd-desc-gap-top, 16px); /* distance below the images wrapper */
          display: grid;
          grid-template-columns: repeat(4, 1fr); /* 4 equal columns -> guides at 25/50/75% */
          gap: 0;
          position: relative;
          z-index: 1;
        }
        .content.wwd-section .wwd-guides-descriptions .g-desc{
          grid-row: 1;
          margin: 0;
          font-family: 'Playfair Display', 'Times New Roman', serif;
          font-size: var(--wwd-desc-fs, 14px);
          font-weight: var(--wwd-desc-w, 400);
          color: var(--wwd-desc-color, #595f59);
          line-height: 1.55;
          padding-left: var(--wwd-sec-title-gap, 12px); /* usa el mismo gap que los títulos */
          max-width: var(--wwd-desc-maxw, 32ch);
          display: -webkit-box;
          -webkit-line-clamp: 2;       /* fuerza 2 líneas */
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
          will-change: transform;
        }
        /* Map each description to the column to the RIGHT of its guide:
           01 -> col 2, 02 -> col 3, 03 -> col 4  */
        .content.wwd-section .wwd-guides-descriptions .g-desc.col1{ grid-column: 2 / 3; }
        .content.wwd-section .wwd-guides-descriptions .g-desc.col2{ grid-column: 3 / 4; }
        .content.wwd-section .wwd-guides-descriptions .g-desc.col3{ grid-column: 4 / 5; }

        .content.wwd-section .wwd-guides-descriptions .g-desc.col1{
          transform: translate(
            calc(var(--wwd-desc-x, 0px) + var(--wwd-desc1-x, 0px)),
            calc(var(--wwd-desc-y, 0px) + var(--wwd-desc1-y, 0px))
          );
        }
        .content.wwd-section .wwd-guides-descriptions .g-desc.col2{
          transform: translate(
            calc(var(--wwd-desc-x, 0px) + var(--wwd-desc2-x, 0px)),
            calc(var(--wwd-desc-y, 0px) + var(--wwd-desc2-y, 0px))
          );
        }
        .content.wwd-section .wwd-guides-descriptions .g-desc.col3{
          transform: translate(
            calc(var(--wwd-desc-x, 0px) + var(--wwd-desc3-x, 0px)),
            calc(var(--wwd-desc-y, 0px) + var(--wwd-desc3-y, 0px))
          );
        }

        /* === CTA (col1) debajo del párrafo: línea por defecto que se convierte en botón al hover === */
        .content.wwd-section .wwd-guides-descriptions .g-cta{
          align-self: start;
          justify-self: start;
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin: var(--wwd-cta-gap-top, 28px) 0 0 0; /* push CTA further down; knob-friendly */
          padding: 8px 12px;
          border-radius: 6px;
          border: 1px solid transparent; /* evita salto de layout al hacer hover */
          background: transparent;
          text-decoration: none;
          font-family: 'Poppins', system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
          font-weight: 600;
          letter-spacing: .08em;
          font-size: clamp(12px, 1.1vw, 14px);
          color: #111;
          /* mismo inset que títulos/desc para partir desde la guía */
          padding-left: var(--wwd-sec-title-gap, 12px);
          grid-row: 2;
          transform: translate(var(--wwd-cta-x, 0px), var(--wwd-cta-y, 0px));
          isolation: isolate;
          z-index: 1;
        }
        /* Subrayado fino que nace desde la línea vertical */
        .content.wwd-section .wwd-guides-descriptions .g-cta::before{
          content:"";
          position:absolute;
          left: calc(-1 * var(--wwd-sec-title-gap, 12px)); /* arranca en la guía */
          top: calc(-1 * var(--wwd-cta-line-gap, 10px));   /* línea por ENCIMA del CTA */
          width: var(--wwd-cta-underline-w, 220px);
          height: var(--wwd-guide-w, 1px);
          background: var(--guides-color, rgba(0,0,0,.15));
          transition: opacity .28s cubic-bezier(.22,.61,.36,1), transform .28s cubic-bezier(.22,.61,.36,1);
        }
        /* Relleno que se forma desde la guía (izquierda) y crece hacia la derecha */
        .content.wwd-section .wwd-guides-descriptions .g-cta::after{
          content: "";
          position: absolute;
          left: calc(-1 * var(--wwd-sec-title-gap, 12px)); /* arranca exactamente en la guía */
          top: calc(-1 * var(--wwd-cta-line-gap, 10px));   /* desde la línea superior */
          height: calc(100% + var(--wwd-cta-line-gap, 10px)); /* cubre desde la línea hasta el borde inferior del CTA */
          width: 0;                                        /* sin ancho por defecto */
          background: var(--guides-color, rgba(0,0,0,.15));
          border-left: var(--wwd-guide-w, 1px) solid var(--guides-color, rgba(0,0,0,.15));
          border-top: var(--wwd-guide-w, 1px) solid var(--guides-color, rgba(0,0,0,.15)); /* une con la línea superior */
          z-index: -1;                                    /* detrás del texto */
          will-change: width; transition: width .36s cubic-bezier(.22,.61,.36,1);
        }
        .content.wwd-section .wwd-guides-descriptions .g-cta:hover::after,
        .content.wwd-section .wwd-guides-descriptions .g-cta:focus-visible::after{
          width: var(--wwd-cta-underline-w, 220px);       /* se llena hasta el ancho de la línea */
        }
        /* Hover/Focus: se convierte en botón */
        .content.wwd-section .wwd-guides-descriptions .g-cta:hover,
        .content.wwd-section .wwd-guides-descriptions .g-cta:focus-visible{
          background: transparent;
          border-color: transparent;
        }
        .content.wwd-section .wwd-guides-descriptions .g-cta:hover::before,
        .content.wwd-section .wwd-guides-descriptions .g-cta:focus-visible::before{
          opacity: 1;      /* mantener visible */
          transform: none; /* sin desplazamiento */
        }
        .content.wwd-section .wwd-guides-descriptions .g-cta .cta-label{
          display: inline-block;
          font-family: 'Poppins', system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
          font-size: var(--wwd-title-fs, 16px);
          font-weight: var(--wwd-sec-title-w, var(--wwd-title-w, 500));
          letter-spacing: .10em;
          text-transform: uppercase;
          color: var(--wwd-sec-title-color, #555);
          transform: translate(var(--wwd-cta-txt-x, 0px), var(--wwd-cta-txt-y, 0px));
          will-change: transform;
        }
        /* Mapeo por columna (misma lógica que g-desc) */
        .content.wwd-section .wwd-guides-descriptions .g-cta.col1{ grid-column: 2 / 3; }
        .content.wwd-section .wwd-guides-descriptions .g-cta.col2{ grid-column: 3 / 4; }
        .content.wwd-section .wwd-guides-descriptions .g-cta.col3{ grid-column: 4 / 5; }

        /* Eyebrow replicado debajo del CTA, alineado a la guía y con el mismo estilo que .g-title */
        .content.wwd-section .wwd-guides-descriptions .g-eyebrow{
          grid-row: 3; /* queda debajo del CTA */
          margin: var(--wwd-eyebrow-gap-top, 20px) 0 0 0; /* distancia desde el CTA */
          padding-left: var(--wwd-sec-title-gap, 12px);  /* mismo inset respecto a la guía */
          font-family:'Poppins', system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
          font-size: var(--wwd-title-fs, 16px) !important;
          font-weight: var(--wwd-sec-title-w, var(--wwd-title-w, 500)) !important;
          letter-spacing:.10em;
          text-transform:uppercase;
          color: var(--wwd-sec-title-color, #555);
          white-space: nowrap;
        }
        .content.wwd-section .wwd-guides-descriptions .g-eyebrow.col1{
          grid-column: 2 / 3;
          transform: translate(var(--wwd-eyebrow1-x, 0px), var(--wwd-eyebrow1-y, 0px));
        }
        .content.wwd-section .wwd-guides-descriptions .g-eyebrow.col2{ grid-column: 3 / 4; }
        .content.wwd-section .wwd-guides-descriptions .g-eyebrow.col3{ grid-column: 4 / 5; }
        .content.wwd-section .wwd-guides-descriptions .g-cta.col1{
          transform: translate(
            calc(var(--wwd-cta-x, 0px) + var(--wwd-cta1-x, 0px)),
            calc(var(--wwd-cta-y, 0px) + var(--wwd-cta1-y, 0px))
          );
        }
        .content.wwd-section .wwd-guides-descriptions .g-cta.col3{
          transform: translate(
            calc(var(--wwd-cta-x, 0px) + var(--wwd-cta3-x, 0px)),
            calc(var(--wwd-cta-y, 0px) + var(--wwd-cta3-y, 0px))
          );
        }

        .wrapper-parallax { margin-top:100%; margin-bottom:300px; box-shadow:0 0 20px rgba(0,0,0,.5); }

        h1{
          width:100%; height:auto; padding:0 3vw; margin:0 auto; text-transform:uppercase; text-align:center;
          font-family: Helvetica, Arial, sans-serif; font-size:clamp(48px,12vw,150px); line-height:1.1; color:#fff; max-width:1200px; text-wrap:balance;
        }
        h1 .caret { letter-spacing: 0; }
        .content h1{ line-height:1.1; color:#111; }
        footer h1 { line-height:300px; }

        header, footer{
          transition: all .4s cubic-bezier(0,0,0,1);
        }


        /* === New top menu (matches screenshot) === */
        .site-nav{ position:fixed; top:0; left:0; right:0; z-index:1000; background:transparent; transition: background-color .25s ease, border-color .25s ease; }
        .site-nav__inner{ max-width: var(--nav-inner-maxw, 1200px); margin:0 auto; padding:10px 16px; display:grid; grid-template-columns:minmax(0,1fr) auto minmax(0,1fr); align-items:center; gap: var(--nav-col-gap, 12px); }
        .site-nav.is-solid{ background:#DCD8CE; border-bottom:1px solid rgba(0,0,0,.06); }
        .site-nav.is-solid .nav-link, .site-nav.is-solid .brand-mark{ color:#111; text-shadow:none; }
        .nav-left{ display:flex; gap: var(--nav-item-gap, 24px); align-items:center; list-style:none; padding:0; margin:0; }
        .nav-right{ display:flex; gap: var(--nav-item-gap, 24px); align-items:center; justify-self:end; margin:0; }
        .nav-link{
          font-family:'Poppins', system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
          font-weight: var(--wwd-title-w, 500);
          text-transform: uppercase;
          letter-spacing: .10em;
          font-size: var(--nav-title-fs, var(--wwd-title-fs, 16px));
          text-decoration: none;
          color:#fff;
          mix-blend-mode: normal;
        }
        .brand-mark{
          justify-self:center;
          text-decoration:none;
          font-family:'Playfair Display','Times New Roman',serif;
          font-size:22px;
          font-weight:400;
          letter-spacing:normal;
          text-transform:none;
          color:#fff;
        }
        .brand-mark span{ letter-spacing:.01em; }
        .cta{ display:inline-flex; align-items:center; gap:8px; padding:10px 14px; border-radius:0; background:rgba(255,255,255,.8); border:1px solid rgba(0,0,0,.08); color:#111; font-family:'Poppins', system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif; font-weight: var(--wwd-title-w, 500); text-transform:uppercase; letter-spacing:.10em; font-size: var(--nav-title-fs, var(--wwd-title-fs, 16px)); text-decoration:none; box-shadow:0 2px 12px rgba(0,0,0,.08); }
        .cta:hover{ transform:translateY(-1px); box-shadow:0 6px 18px rgba(0,0,0,.12); }

        /* Contrast when hero is dark; we keep white links over hero then dark after scroll */
        .is-hero .nav-link, .is-hero .brand-mark{ color:#fff; text-shadow:0 1px 2px rgba(0,0,0,.35); }

        @media (max-width: 900px){
          .site-nav__inner{ grid-template-columns:1fr auto; }
          .nav-left{ display:none; }
        }


        /* === Typewriter styles === */
        .typewriter {
          position: relative;
        }
        .typewriter .tw-line {
          display: block;               /* force each line onto its own row */
          white-space: pre;             /* respect spaces; no wrapping within line */
        }
        .typewriter .caret{
          display: inline-block;
          margin-left: .1em;
          vertical-align: baseline;
          animation: caretBlink 1s steps(2, start) infinite;
          will-change: transform, opacity;
          transform: translate(var(--caret-x, 0px), var(--caret-y, 0px)) scaleX(var(--caret-scale-x, 1));
          transform-origin: center;
        }
        .typewriter .caret.is-hidden { visibility: hidden; }
        @keyframes caretBlink {
          0%, 50% { opacity: 1; }
          50.01%, 100% { opacity: 0; }
        }
      `}</style>

      <style jsx global>{`
        :root{
          --hero-title-fs: 50px;
          --hero-title-w: 200;
          --hero-overlay: 0.25;
          --hero-letter-spacing: 0em;
          --guides-color: rgba(0,0,0,.08);
          --guide-l1: 25%;
          --guide-l2: 50%;
          --guide-l3: 75%;
          --title-lift: 0px;
          --mid-offset: 0px;
        }
        header h1{
          font-family: 'Playfair Display', 'Times New Roman', serif !important;
          font-size: var(--hero-title-fs) !important;
          font-weight: var(--hero-title-w) !important;
          text-transform: uppercase !important;
          letter-spacing: var(--hero-letter-spacing, 0em);
        }
      `}</style>
      <style jsx global>{`
        /* helper: treat first viewport as hero context for white links */
        body:is(.on-hero, :root) .site-nav .nav-link,
        body:is(.on-hero, :root) .site-nav .brand-mark{ color:#fff; }
      `}</style>
    </>
  );
}