"use client";

import { useEffect, useRef, useState } from "react";

export default function ParallaxDemo({
  bgUrl = "/assets/img/hero.webp",
  title = "Designing your dream home\njust became a reality.",
  titlePx = 55,
  typewriter = true,
  typingSpeedMs = 85,
  startDelayMs = 300,
  caretDash = "—",
  aboutHeightPx = 2000,
  scrollEase = 0.07,
}: {
  bgUrl?: string;
  title?: string;
  titlePx?: number;         // knob (px) already supported; we drive the CSS var here
  typewriter?: boolean;     // enable/disable typing
  typingSpeedMs?: number;   // speed per character
  startDelayMs?: number;    // delay before typing starts
  caretDash?: string;       // character used as the blinking caret (dash)
  aboutHeightPx?: number;
  scrollEase?: number;  // knob: 0..1 easing factor for smooth scrolling
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

  // Split title on explicit newlines to control where line breaks occur
  const lines = title.split("\n");
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
  }, [title, typewriter, typingSpeedMs, startDelayMs]);

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
      const offset = -y * contentDamp;
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

  return (
    <>
      <nav className={`site-nav ${navSolid ? "is-solid" : ""}`} aria-label="Barra de navegación">
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

      <a href="#contact" className="corner-cta left" aria-label="Contactar">
        <span className="label">Contact</span><span className="arrow-badge" aria-hidden="true">→</span>
      </a>
      <a href="#portfolio" className="corner-cta right" aria-label="Ver portafolio">
        <span className="label">Portfolio</span><span className="arrow-badge" aria-hidden="true">→</span>
      </a>

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
              }}
            >
              <div className="hero-title">
                <h1 className="typewriter">
                  {(typewriter ? typedLines : lines).map((ln, i) => (
                    <span key={i} className="tw-line">
                      {ln}
                      {/* caret only on the active line; hidden while that line is still typing */}
                      <span
                        className={`caret${
                          i === lineIdx && typewriter && charIdx < (lines[i]?.length ?? 0) ? " is-hidden" : ""
                        }`}
                        aria-hidden="true"
                      >
                        {i === lineIdx ? caretDash : ""}
                      </span>
                    </span>
                  ))}
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
              style={{ ['--wwdH' as any]: `${aboutHeightPx}px` }}
            >
              <div className="container">
                <p className="eyebrow">WHAT WE DO</p>

                <p className="lead">
                  En Siamo fusionamos el interiorismo con la inteligencia emocional para crear
                  espacios únicos que inspiran bienestar y equilibrio.
                </p>

                <ul className="wwd-grid" role="list" aria-label="Servicios">
                  <li className="service"><h3 className="service-name">Online Interior Design</h3></li>
                  <li className="service"><h3 className="service-name">Full Service Design</h3></li>
                  <li className="service"><h3 className="service-name">Kitchen &amp; Bath</h3></li>
                  <li className="service"><h3 className="service-name">Styling &amp; Install</h3></li>
                </ul>
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
          gap: 6px;
        }
        header .hero-title h1{ margin:0; }
        .subline{
          font-family: 'Poppins', system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
          font-weight: 600;
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
          height: var(--wwdH);
          position: relative;
          overflow: hidden;
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
          height: var(--wwdH);
          background:#F4F2EA;
        }
        .content .container{ max-width:1060px; margin:0 auto; position:relative; }
        .content.wwd-section::before{
          content:"";
          position:absolute;
          inset:0;                 /* start at the very top of the section */
          pointer-events:none;
          z-index:0;               /* behind content */
          --guides-color: rgba(0,0,0,.14);
          background-image:
            linear-gradient(to bottom, var(--guides-color), var(--guides-color)),
            linear-gradient(to bottom, var(--guides-color), var(--guides-color)),
            linear-gradient(to bottom, var(--guides-color), var(--guides-color));
          background-size: 1px 100%, 1px 100%, 1px 100%;
          background-repeat: no-repeat;
          /* Equally distributed across the entire section width */
          background-position: 25% 0, 50% 0, 75% 0;
        }
        .eyebrow{
          margin: 0 0 12px 0;
          font-family:'Poppins', system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
          font-weight:600;
          text-transform:uppercase;
          letter-spacing:.10em;
          font-size:12px;
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
        .lead{ font-family:'Playfair Display', 'Times New Roman', serif; font-weight:400; font-size:clamp(28px,5vw,64px); line-height:1.08; margin:0; color:#111; }

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
        .site-nav__inner{ max-width:1200px; margin:0 auto; padding:10px 16px; display:grid; grid-template-columns:1fr auto 1fr; align-items:center; gap:12px; }
        .site-nav.is-solid{ background:#DCD8CE; border-bottom:1px solid rgba(0,0,0,.06); }
        .site-nav.is-solid .nav-link, .site-nav.is-solid .brand-mark{ color:#111; text-shadow:none; }
        .nav-left{ display:flex; gap:28px; align-items:center; list-style:none; padding:0; margin:0; }
        .nav-right{ display:flex; gap:18px; align-items:center; justify-self:end; }
        .nav-link{ font-family:'Poppins', system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif; font-weight:600; text-transform:uppercase; letter-spacing:.08em; font-size:12px; text-decoration:none; color:#fff; mix-blend-mode:normal; }
        .brand-mark{ justify-self:center; text-decoration:none; font-family:'Playfair Display','Times New Roman',serif; font-size:22px; color:#fff; }
        .brand-mark span{ letter-spacing:.01em; }
        .cta{ display:inline-flex; align-items:center; gap:8px; padding:10px 14px; border-radius:8px; background:rgba(255,255,255,.8); border:1px solid rgba(0,0,0,.08); color:#111; font-family:'Poppins', system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif; font-weight:600; text-transform:uppercase; letter-spacing:.08em; font-size:12px; text-decoration:none; box-shadow:0 2px 12px rgba(0,0,0,.08); }
        .cta:hover{ transform:translateY(-1px); box-shadow:0 6px 18px rgba(0,0,0,.12); }

        /* Contrast when hero is dark; we keep white links over hero then dark after scroll */
        .is-hero .nav-link, .is-hero .brand-mark{ color:#fff; text-shadow:0 1px 2px rgba(0,0,0,.35); }

        @media (max-width: 900px){
          .site-nav__inner{ grid-template-columns:1fr auto; }
          .nav-left{ display:none; }
        }

        .corner-cta{ position:fixed; bottom:24px; display:inline-flex; align-items:center; gap:10px; padding:12px 16px; border-radius:999px;
          background:#3f5146; color:#e9efe9; text-decoration:none; border:1px solid rgba(255,255,255,.14); box-shadow:0 10px 30px rgba(0,0,0,.18);
          backdrop-filter:saturate(140%) blur(6px); font-weight:600; letter-spacing:.02em; transition:transform .15s ease, opacity .15s ease; z-index:50; }
        .corner-cta.left{ left:24px; }
        .corner-cta.right{ right:24px; }
        .corner-cta .arrow-badge{ display:inline-grid; place-items:center; width:22px; height:22px; border-radius:999px; border:1px solid rgba(255,255,255,.25); background:rgba(0,0,0,.08); font-size:14px; line-height:1; transition:transform .15s ease, background-color .15s ease, border-color .15s ease; }
        .corner-cta:hover{ opacity:1; transform:translateY(-1px); }
        .corner-cta:hover .arrow-badge{ transform:translateX(3px); }

        /* === Typewriter styles === */
        .typewriter {
          position: relative;
        }
        .typewriter .tw-line {
          display: block;               /* force each line onto its own row */
          white-space: pre;             /* respect spaces; no wrapping within line */
        }
        .typewriter .caret {
          display: inline-block;
          margin-left: .1em;
          animation: caretBlink 1s steps(2, start) infinite;
          will-change: opacity;
          transform: translateY(-0.05em);
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
          letter-spacing: .00em;
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