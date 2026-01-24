"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { playfairFont } from "../fonts";

const useIsomorphicLayoutEffect =
  typeof window === "undefined" ? useEffect : useLayoutEffect;

const mobileDrawerSocialStyles: {
  container: CSSProperties;
  link: CSSProperties;
  icon: CSSProperties;
} = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    gap: "14px",
    marginBottom: "var(--menu-social-y-m, 20px)",
  },
  link: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: 44,
    height: 44,
    border: "1px solid rgba(17,17,17,0.25)",
    borderRadius: "999px",
    color: "#111",
  },
  icon: {
    width: 20,
    height: 20,
    color: "currentColor",
    fill: "currentColor",
  },
};

// Helper: SSR-safe video that fades in after loaded
function LazyVideo({
  src,
  poster = "/assets/img/hero.webp",
  className = "",
  ariaLabel,
  playOnView = true,
}: {
  src: string;
  poster?: string;
  className?: string;
  ariaLabel?: string;
  playOnView?: boolean;
}) {
  const [ready, setReady] = useState(false);
  const [active, setActive] = useState(!playOnView);
  const vRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const v = vRef.current;
    if (!v) return;
    const handleReady = () => setReady(true);

    if (v.readyState >= 1) {
      handleReady();
      return;
    }

    v.addEventListener("loadedmetadata", handleReady, { once: true });
    return () => v.removeEventListener("loadedmetadata", handleReady);
  }, []);

  useEffect(() => {
    if (!playOnView) return;
    const node = containerRef.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setActive(true);
      return;
    }

    let didActivate = false;
    const observer = new IntersectionObserver(
      (entries, obs) => {
        const entry = entries[0];
        if (entry?.isIntersecting && !didActivate) {
          didActivate = true;
          setActive(true);
          obs.disconnect();
        }
      },
      { threshold: 0.25, rootMargin: "0px 0px -20% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [playOnView]);

  useEffect(() => {
    const v = vRef.current;
    if (!v || !active) return;
    const playPromise = v.play();
    if (playPromise?.catch) playPromise.catch(() => {});
  }, [active]);

  const showPoster = !ready || !active;

  return (
    <div
      ref={containerRef}
      className={`media ${ready && active ? "is-ready" : ""}`}
      style={{ position:'relative', width:'100%', paddingTop:'75%', background:'#e7e3da', overflow:'hidden', contain:'layout paint style' }}
    >
      {/* SSR-friendly poster to avoid black flash */}
      {showPoster && (
        <Image
          src={poster}
          alt=""
          fill
          sizes="(max-width:860px) 92vw, 360px"
          style={{ objectFit:'cover' }}
          priority={false}
        />
      )}
      <video
        ref={vRef}
        className={`media-video ${className}`}
        style={{ position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover', background:'#e7e3da' }}
        autoPlay={active}
        muted
        loop
        playsInline
        preload={playOnView ? "none" : "metadata"}
        poster={poster}
        aria-label={ariaLabel}
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}

function WwdTriptych() {
  return (
    <section className="triptych-wrapper" aria-label="What we do – tarjetas">
      {/* 01 · DISEÑO VIRTUAL */}
      <article className="triptych-card pos1">
        <Link href="/services#virtual" className="hit" aria-label="Abrir Diseño virtual">
          <div className="media virtual-media" style={{ position:'relative', width:'100%', paddingTop:'75%', background:'#e7e3da', overflow:'hidden', contain:'layout paint style' }}>
            <Image
              src="/assets/img/virtual.jpg"
              alt="Diseño virtual"
              fill
              sizes="(max-width:860px) 92vw, 360px"
              style={{ objectFit:'cover' }}
            />
          </div>
        </Link>
      </article>

      {/* 02 · DISEÑO &amp; EJECUCIÓN EN SITIO */}
      <article className="triptych-card pos2">
        <Link href="/services#on-site" className="hit" aria-label="Abrir Diseño y ejecución en sitio">
          <div className="media onsite-media" style={{ position:'relative', width:'100%', paddingTop:'75%', background:'#e7e3da', overflow:'hidden', contain:'layout paint style' }}>
            <Image
              src="/assets/img/onsite.webp"
              style={{ objectFit:'cover' }}
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
          <div className="media content-media" style={{ position:'relative', width:'100%', paddingTop:'75%', background:'#e7e3da', overflow:'hidden', contain:'layout paint style' }}>
            <Image
              src="/assets/img/content.png"
              alt="Studio Log y contenidos"
              fill
              sizes="(max-width:860px) 92vw, 360px"
              style={{ objectFit:'cover' }}
            />
          </div>
        </Link>
      </article>

      {/* Styles scoped to this component */}

    </section>
  );
}

function TestimonialReel({
  videos = [],
  quotes = [],
  varsStyle = {},
  posters = [],
}: {
  videos?: string[];
  quotes?: { quote: string; author?: string }[];
  varsStyle?: any;
  posters?: string[];
}) {
  const [idx, setIdx] = useState(0);
  const n = Math.max(1, videos.length || 0);
  const prevIdx = (idx - 1 + n) % n;
  const nextIdx = (idx + 1) % n;
  const q = quotes[idx] || quotes[0] || { quote: "From creating the perfect layout to finding pieces I absolutely loved, my designer really took my space to the next level. I never dreamed my home could look — and feel — this good!", author: "JAN" };
  const reelRef = useRef<HTMLDivElement | null>(null);
  const [reelActive, setReelActive] = useState(false);
  const [reelPlaying, setReelPlaying] = useState(false);
  const reelStartedRef = useRef(false);
  const [isMobileReel, setIsMobileReel] = useState(false);
  const defaultReelPoster = "/assets/videos/testimonials-thumb.webp";
  const getPosterForIndex = (i: number) => {
    const direct = posters[i];
    if (direct) return direct;
    const src = videos[i];
    if (!src) return defaultReelPoster;
    const lastDot = src.lastIndexOf(".");
    if (lastDot <= 0) return defaultReelPoster;
    return `${src.slice(0, lastDot)}-thumb.webp`;
  };
  const currentPoster = getPosterForIndex(idx);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(max-width: 860px)");
    const handleChange = (event?: MediaQueryListEvent) => {
      setIsMobileReel(event ? event.matches : mq.matches);
    };
    handleChange();
    if (typeof mq.addEventListener === "function") {
      mq.addEventListener("change", handleChange);
      return () => mq.removeEventListener("change", handleChange);
    }
    mq.addListener(handleChange);
    return () => mq.removeListener(handleChange);
  }, []);

  const goPrev = () => setIdx((i) => (i - 1 + n) % n);
  const goNext = () => setIdx((i) => (i + 1) % n);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const node = reelRef.current;
    if (!node) {
      setReelActive(true);
      reelStartedRef.current = true;
      return;
    }
    if (typeof IntersectionObserver === "undefined") {
      setReelActive(true);
      reelStartedRef.current = true;
      return;
    }
    if (reelStartedRef.current) {
      setReelActive(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries, obs) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          reelStartedRef.current = true;
          setReelActive(true);
          obs.disconnect();
        }
      },
      { threshold: 0.35, rootMargin: "0px 0px -20% 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const node = reelRef.current;
    if (!node) return;
    const vids = Array.from(node.querySelectorAll("video"));
    setReelPlaying(false);
    vids.forEach((video) => {
      video.pause();
      try {
        video.currentTime = 0;
      } catch {
        /* ignore */
      }
    });
  }, [idx, prevIdx, nextIdx]);

  const playCenterVideo = () => {
    const node = reelRef.current;
    const center = node?.querySelector<HTMLVideoElement>('.reel-item.is-center video');
    if (!center) return;
    const p = center.play();
    if (p && typeof p.then === "function") {
      p.then(() => setReelPlaying(true)).catch(() => {});
      return;
    }
    setReelPlaying(true);
  };

  const renderQuote = (
    <aside className="reel-aside" aria-live="polite">
      <div className={`qm ${playfairFont.className}`} aria-hidden="true">“</div>
      <p className={`q-text ${playfairFont.className}`}>{q.quote}</p>
      {q.author ? <p className="q-author">{q.author}</p> : null}
    </aside>
  );

  if (isMobileReel) {
    return (
      <section className="testi-reel" style={varsStyle} aria-label="Testimonials" ref={reelRef}>
        <div className="reel-mobile">
          <div className={`reel-mobile__media${!reelPlaying ? " has-poster" : ""}`}>
            {!reelPlaying && (
              <div className="reel-video__poster" aria-hidden="true">
                <img src={currentPoster} alt="" />
              </div>
            )}
            {videos[idx] ? (
              <video
                className="reel-video"
                src={videos[idx]}
                muted
                playsInline
                loop
                preload="none"
                poster={currentPoster}
                controls={reelPlaying}
              />
            ) : null}
            {!reelPlaying && (
              <button
                type="button"
                className="reel-play"
                aria-label="Reproducir testimonio"
                onClick={playCenterVideo}
              >
                <span className="reel-play__icon" aria-hidden="true">▶</span>
              </button>
            )}
          </div>
          <div className="reel-mobile__quote">{renderQuote}</div>
        </div>
        {n > 1 ? (
          <div className="reel-nav-mobile" aria-label="Cambiar testimonio">
          <div className="reel-nav-mobile__line" aria-hidden="true"></div>
            <button
              type="button"
              className="reel-nav-mobile__btn"
              onClick={goPrev}
              disabled={idx === 0 || n <= 1}
              aria-label="Anterior testimonio"
            >
              ‹
            </button>
            <span className="reel-nav-mobile__indicator">
              {String(idx + 1).padStart(2, '0')} | {String(n).padStart(2, '0')}
            </span>
            <button
              type="button"
              className="reel-nav-mobile__btn"
              onClick={goNext}
              disabled={idx >= n - 1}
              aria-label="Siguiente testimonio"
            >
              ›
            </button>
          </div>
        ) : null}
      </section>
    );
  }

  return (
    <section className="testi-reel" style={varsStyle} aria-label="Testimonials" ref={reelRef}>
      <div className="reel-wrap">
        <div className="reel-track">
          {/* LEFT (previous) */}
          <div
            className="reel-item is-left"
            role="button"
            tabIndex={0}
            aria-label="Ver testimonio anterior"
            onClick={goPrev}
            onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && goPrev()}
          >
            {videos[prevIdx] ? (
              <video
                className="reel-video"
                src={videos[prevIdx]}
                muted
                playsInline
                loop
                preload="none"
                poster={getPosterForIndex(prevIdx)}
                aria-hidden="true"
                data-reel-role="prev"
              />
            ) : null}
          </div>

          {/* CENTER (active) */}
          <div className="reel-item is-center" aria-live="polite">
            <div
              className={`reel-video__media${isMobileReel && !reelPlaying ? " has-poster" : ""}`}
            >
              {isMobileReel && !reelPlaying && (
                <div className="reel-video__poster" aria-hidden="true">
                  <img src={currentPoster} alt="" />
                </div>
              )}
              {videos[idx] ? (
                <video
                  className="reel-video"
                  src={videos[idx]}
                  muted
                  playsInline
                  loop
                  preload="none"
                  poster={currentPoster}
                  data-reel-role="center"
                  controls={reelPlaying}
                />
              ) : null}
            </div>
            {!reelPlaying && (
              <button
                type="button"
                className="reel-play"
                aria-label="Reproducir testimonio"
                onClick={playCenterVideo}
              >
                <span className="reel-play__icon" aria-hidden="true">▶</span>
              </button>
            )}
          </div>

          {/* RIGHT (next) */}
          <div
            className="reel-item is-right"
            role="button"
            tabIndex={0}
            aria-label="Ver siguiente testimonio"
            onClick={goNext}
            onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && goNext()}
          >
            {videos[nextIdx] ? (
              <video
                className="reel-video"
                src={videos[nextIdx]}
                muted
                playsInline
                loop
                preload="none"
                poster={getPosterForIndex(nextIdx)}
                aria-hidden="true"
                data-reel-role="next"
              />
            ) : null}
          </div>
        </div>

        {/* RIGHT ASIDE (quote) */}
        {renderQuote}
      </div>
      {n > 1 && !isMobileReel ? (
        <div className="reel-nav-mobile" aria-label="Cambiar testimonio">
        <div className="reel-nav-mobile__line" aria-hidden="true"></div>
          <button
            type="button"
            className="reel-nav-mobile__btn"
            onClick={goPrev}
            disabled={idx === 0 || n <= 1}
            aria-label="Anterior testimonio"
          >
            ‹
          </button>
          <span className="reel-nav-mobile__indicator">
            {String(idx + 1).padStart(2, '0')} | {String(n).padStart(2, '0')}
          </span>
          <button
            type="button"
            className="reel-nav-mobile__btn"
            onClick={goNext}
            disabled={idx >= n - 1}
            aria-label="Siguiente testimonio"
          >
            ›
          </button>
        </div>
      ) : null}
      <div className="reel-thumbs" role="list" aria-label="Choose a testimonial">
        <button
          type="button"
          className="thumb-nav thumb-nav--prev"
          onClick={goPrev}
          aria-label="Anterior testimonio"
          disabled={n <= 1}
        >
          ‹
        </button>
        {Array.from({ length: 3 }).map((_, i) => {
          const v = videos[i];
          const isActive = idx === i;
          const hasVideo = !!v;

          return (
            <button
              key={i}
              className={`thumb${isActive ? ' is-active' : ''}${hasVideo ? '' : ' is-fallback'}`}
              onClick={() => hasVideo && setIdx(i)}
              aria-pressed={isActive}
              aria-label={hasVideo ? `Open testimonial ${i + 1}` : `Placeholder testimonial ${i + 1}`}
              disabled={!hasVideo}
            >
              {hasVideo && (
                <video
                  src={v}
                  muted
                  playsInline
                  preload="none"
                  poster={getPosterForIndex(i)}
                  onError={(e) => {
                    const btn = e.currentTarget.parentElement as HTMLElement | null;
                    btn?.classList.add('is-fallback');
                  }}
                />
              )}
              <span className="ph" aria-hidden="true" />
            </button>
          );
        })}
        <button
          type="button"
          className="thumb-nav thumb-nav--next"
          onClick={goNext}
          aria-label="Siguiente testimonio"
          disabled={n <= 1}
        >
          ›
        </button>
      </div>

    </section>
  );
}

export default function ParallaxDemo({
  bgUrl = "/assets/mid-century-waves/terrace-12.jpg",
  bgUrlMobile = "/assets/mid-century-waves/terrace-12.jpg",
  useDesktopHeroOnMobile = false,
  initialIsMobile = null,
  heroOverlay = 30,
  heroOverlayMobile = 30,
  title = "Designing your dream space \njust became a reality",
  titleMobile = "YOUR DREAM SPACE, ANYWHERE.",
  titlePx = 64,
  titleMobilePx = 20,
  typewriter = true,
  typingSpeedMs = 85,
  startDelayMs = 300,
  caretDash = "—",
  caretX = -14,
  caretY = 12,
  caretScaleX = 0.65,
  heroSublineGap = 15,
  heroSublineGapMobile = heroSublineGap,
  heroSublineXMobile = 0,
  heroSublineYMobile = -25,
  heroSublineW = 350,
  heroLetterSpacing = -0.04,
  heroLineHeight = 1.2,
  heroWordSpacing = 0.1,
  aboutHeightPx = 6100,
  aboutHeightPxMobile = 2900,
  scrollEase = 0.07,
  wwdTitleX = 470,
  wwdTitleY = -700,
  wwdTitleXMobile = 8,
  wwdTitleYMobile = -900,
  wwdTextX = 470,
  wwdTextY = -450,
  wwdTextXMobile = 8,
  wwdTextYMobile = -400,
  wwdLeadFs = 18,
  wwdLeadFsMobile = 24,
  wwdLeadMaxWMobile = 280,
  wwdTitleFs = 15,
  wwdTitleW = 400,
  navLinkWeight = 400,
  wwdTitleFsMobile = 12,
  wwdGuideLblGap = 26,
  wwdTextMaxW = 2400,
  projectsTextMaxW = 1200,
  projectsTextX = 18,
  projectsTextY = 100,
  projectsTextYMobile = 159,
  projectsGridGap = 1,
  projectsGridGapMobile = 1,
  projectsGridX = 20,
  projectsGridY = 260,
  projectsCol1X = -25,
  projectsCol2X = -5,
  projectsCol3X = 10,
  projectsCol4X = 27,
  projectsMetaX = -37,
  projectsMetaY = 80,
  projectsMetaXM = 0,
  projectsMetaYM = 30,
  projectsTitleXM = -46,
  projectsTitleYM = 45,
  projectsTitleMaxWM = 720,
  projectsCardGrow = 15,
  projectsCardSizeMobile = 205,
  projectsCardOverlapMobile = 35,
  projectsCarouselViewport = 120,
  projectsCarouselOffsetXMobile = 21,
  projectsCarouselOffsetYMobile = 0,
  projectsCarouselItemsMobile = 2,
  projectsCarouselShiftPage1 = 0,
  projectsCarouselShiftPage2 = 5,
  projectsCarouselBlockOffsetYMobile = -115,
  projectsCarouselNavOffsetYMobile = -20,
  projectsCarouselWindowPadMobile = 110,
  projectsNavHeightMobile = 30,
  projectsNavInnerOffsetY = 0,
  projectsNavArrowOffsetY = -2,
  wwdContainerMaxW = 1160,
  wwdPadTop = 420,
  wwdPadBottom = 120,
  wwdPadTopMobile = 120,
  wwdGutterL = 0,
  wwdGutterR = 70,
  wwdPadBottomMobile = -250,
  wwdGuideW = 2,
  wwdGuideLblTop = 10,
  wwdGuideLblFs = 16,
  wwdGuideLblW = 500,
  wwdGuideLblColor = '#5f6b5e',
  wwdCardsX = 225,
  wwdCardsY = 270,
  wwdCardsGap = 15,
  wwdCardsGapMobile = 18,
  wwdCardWM = 180,
  wwdCardAspectMobile = 320,
  wwdVirtualCardXM = 131,
  wwdVirtualCardYM = -445,
  wwdSecTitle1 = "VIRTUAL DESIGN",
  wwdSecTitle2 = "ON-SITE DESIGN & EXECUTION",
  wwdSecTitle3 = "CONTENT / STUDIO LOG",
  wwdSecTitleTop = 116,
  wwdSecTitleGap = 26,
  wwdSecTitleFs = 16,
  wwdSecTitleW,
  wwdSecTitleColor,
  wwdSecTitleGapV = 115,
  wwdSecTitleX = 0,
  wwdSecTitleY = -20,
  wwdDesc1 = "We design remotely, from brief to final styling. You relax.",
  wwdDesc2 = "We build on-site, from demo to final styling. You move in.",
  wwdDesc3 = "New drops, behind-the-scenes looks, and studio updates.",
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
  wwdDesc1XM = -47,
  wwdDesc1YM = -375,
  wwdDesc1MaxWM = 200,
  wwdDesc2X = 13,
  wwdDesc2Y = 1,
  wwdDesc2MaxWM = 220,
  wwdDesc2XM = -47,
  wwdDesc2YM = -5,
  wwdOnsiteCardMX = 131,
  wwdOnsiteCardMY = -224,
  wwdContentCardMX = 132,
  wwdContentCardMY = -10,
  wwdDesc3X = 30,
  wwdDesc3Y = 0,
  wwdDesc3XM = 90,
  wwdDesc3YM = 360,
  wwdSvc02TitleMaxWM = 120,
  wwdCtaX = 42,
  wwdCtaY = 89,
  wwdCtaTxtX = -25,
  wwdCtaTxtY = -5,
  wwdCtaTxtXM = 5,
  wwdCta1X = 0,
  wwdCta1Y = 0,
  wwdCtaMobileX = 0,
  wwdCtaMobileY = -35,
  wwdCtaMobileRightOffset = 25,
  wwdCta3X = 34,
  wwdCta3Y = 0,
  wwdCta3MobileX = -80,
  wwdCta3MobileY = 242,
  wwdCta3MobileRightOffset = 30,
  wwdEyebrow1X = 18,
  wwdEyebrow1Y = 350,
  wwdEyebrow1XM = 7,
  wwdEyebrow1YM = 190,
  wwdLbl01XM = -20,
  wwdLbl01YM = -780,
  wwdTitle01XM = -20,
  wwdTitle01YM = -725,
  wwdLbl02 = "02",
  wwdLbl02MobileX = -20,
  wwdLbl02MobileY = -315,
  wwdTitle02MobileX = 0,
  wwdTitle02MobileY = 20,
  wwdLbl03 = "03",
  wwdLbl03MobileX = -20,
  wwdLbl03MobileY = 55,
  wwdTitle03MobileX = 0,
  wwdTitle03MobileY = 30,
  wwdDesc3MaxWM = 220,
  /* === ABOUT TITLE KNOBS ===
     aboutTitleX / aboutTitleY: offsets in px applied via CSS transform to <h3.about-title>
     aboutTitleGap: bottom margin (px) between the title and the video
  */
  aboutTitle = "ABOUT US",
  aboutTitleX = 20,
  aboutTitleY = 570,
  aboutTitleXMobile = 7,
  aboutTitleYMobile = -60,
  aboutTitleGap = 16,
  aboutCaption = "Art Direction & Styling, Head of Design & 3D\nHead of Style & Materials.",
  aboutCaptionX = 20,
  aboutCaptionY = 680,
  aboutCaptionXMobile = 5,
  aboutCaptionYMobile = 15,
  aboutCaptionShiftY = -50,
  aboutCaptionGap = 202,
  /* === ABOUT CTA (line-from-guide button above video) === */
  aboutCtaLabel = "get to know us",
  aboutCtaX = 16,
  aboutCtaY = 1030,
  aboutCtaUnderlineW = 175,
  aboutCtaLineGap = 10,
  aboutCtaTxtX = -25,
  aboutCtaTxtY = -5,
  aboutCtaTxtYMobile = 5,
  aboutCtaTxtXMobile = 20,
  aboutCtaMobileX = 0,
  aboutCtaMobileY = 1800,
  aboutCtaMobileWidth = 335,
  aboutCtaMobileHeight = 40,
  aboutCtaMobileRightOffset = 25,
  /* === Full-bleed video knobs === */
  aboutVideoSrc = "/assets/videos/about.mp4",
  aboutVideoPoster = "",
  aboutVideoH = 640,          // px height for the video area (desktop) — a bit taller so top/bottom aren’t cropped
  aboutVideoGapTop = 80,      // px gap above the video (distance from Projects grid)
  aboutVideoY = 400,           // px translateY to fine-tune vertical placement of the video
  aboutVideoYMobile = -200,
  aboutVideoFit = "cover",
  aboutVideoPosY = 50,
  aboutVideoAspect = "16/9",
  aboutVideoOverlayPct = 50,
  aboutHlineGap = 180,          // px: distance BELOW the video to draw the horizontal guide
  wwdBlockY = 500,
  wwdBlockYMobile = 420,
  navColGap = 0,
  navInnerMaxW = 1700,
  navItemGap = 44,
  navTitleFs = 14,
  navTitleFsMobile = 12,
  navBarHeight = 50,
  heroCtaFontSizeMobile = 11,
  brandFontSize = 22,
  brandFontSizeMobile = 14,
  brandLogoHeightMobile = 32,
  navCtaPadX = 42,
  navCtaPadY = 14,
  heroCtaPadXMobile = 22,
  heroCtaPadYMobile = 8,
  heroCtaYOffsetMobile = -35,
  navBarHeightMobile = 40,
  navCtaBg = '#F4F2EA',
  navCtaInk = '#111111',
  navCtaBgHover = '#F4F2EA',
  centerlineTopOffset = 120,
  centerlineBottomOffset = 1295,
  centerlineBottomOffsetMobile = 3341,
  centerlineOffsetMobile = -800,
  centerlineMobileDelta = 0,
  menuDrawerHeaderYMobile = 0,
  menuDrawerHeaderRowYOffsetMobile = 10,
  menuDrawerLinksTopLineYMobile = 10,
  menuDrawerLinksXMobile = 0,
  menuDrawerLinksYMobile = 30,
  menuDrawerFollowYMobile = 250,
  menuDrawerFollowDividerYOffsetMobile = 80,
  menuDrawerCtaYOffsetMobile = 40,
  menuDrawerSocialBlockYOffsetMobile = 0,
  menuDrawerSocialLineYMobile = 0,
  menuDrawerCtaYMobile = 25,
  menuDrawerBrandFontSizeMobile = 18,
  menuDrawerBrandLetterSpacingMobile = 0.08,
  menuDrawerCloseFontSizeMobile = 12,
  menuDrawerCloseLetterSpacingMobile = 0.08,
  reelW = 980,
  reelWMobile = 400,
  reelH = 552,
  reelHMobile = 100,
  reelGap = 36,
  reelSideScale = 0.68,
  reelSideOpacity = 0.55,
  reelArrowSize = 34,
  reelArrowOffset = 24,
  reelBoxGrow = -100,
  reelBoxGrowMobile = 0,
  reelScaleMobile = 1,
  reelRightExtraMobile = 0,
  reelRadius = 12,
  reelNavWidthMobile = 100,
  reelNavXMobile = -7,
  reelNavYMobile = 60,
  reelQuoteX = 150,
  reelQuoteY = 0,
  reelQuoteXMobile = 10,
  reelQuoteYMobile = -245,
  wwdNarrativeDesktopX = 40,
  wwdNarrativeDesktopY = 2795,
  wwdNarrativeMaxWM = 300,
  testiAsideW = 620,
  testiTitleX = 60,
  testiTitleY = 450,
  testiTitleXMobile = 0,
  testiTitleYMobile = 0,
  testiTitleOffsetX = 0,
  testiTitleOffsetY = 0,
  testiTitleOffsetXMobile = 0,
  testiTitleOffsetYMobile = 0,
  testiSubtitleOffsetY = -9,
  testiSectionOffsetX = 0,
  testiSectionOffsetY = 0,
  testiSectionOffsetXMobile = 35,
  testiSectionOffsetYMobile = -180,
  testiBlockOffsetX = -50,
  testiBlockOffsetY = 90,
  testiBlockOffsetXMobile = 0,
  testiBlockOffsetYMobile = -10,
  testiReelGap = 40,
  testiReelGapMobile = 30,
  reelThumbsX = 70,
  reelThumbsY = 100,
  testiHlineGap = 300,
  testiHlineGapMobile = 900,
  testiHlineX = 0,
  testiHlineY = 0,
  testiHlineXMobile = 0,
  testiHlineYMobile = -790,
  followHandle = "@siamo_design",
  followX = 0,
  followY = 140,
  followGap = 0,
  followGapMobile = 360,
  followCardsGapMobile = 12,
  followMaxW = 1100,
  followMaxWMobile = 1000,
  followTitleX = -615,
  followTitleY = -100,
  followTitleXMobile = -5,
  followTitleYMobile = -1230,
  followGridX = 30,
  followGridXMobile = 10,
  followGridYMobile = -1180,
  followCardSizeMobile = 160,
  followCols = 6,
  followCardGrow = 20,
  followCardGap = 100,
  followItems = [
    "/assets/img/post1.jpeg",
    "/assets/img/post2.jpeg",
    "/assets/img/post3.jpeg",
    "/assets/img/post4.jpeg",
    "/assets/img/post5.jpeg",
    "/assets/img/post6.jpeg",
  ],
  footerLift = 30,          // px: manual lift (positive lifts UP) to close any tiny seam above the footer
  footerOverlap = 50,        // desktop/global overlap (px) to hide seams between sections
  footerPadTopMobile = 85,
  footerPadBottomMobile = 0,
  footerOverlapMobile = 0,
  wwdFooterSpacerMobile = 150,
  footerH = 250,           // px: footer height override (keeps bottom offset in sync)
  footerBottomMaxW = 1100, // px: max width for bottom footer content (Explore + Legal)
}: {
  bgUrl?: string;
  bgUrlMobile?: string;
  useDesktopHeroOnMobile?: boolean;
  initialIsMobile?: boolean | null;
  heroOverlay?: number;
  heroOverlayMobile?: number;
  title?: string;
  titleMobile?: string;
  titlePx?: number;         // knob (px) already supported; we drive the CSS var here
  titleMobilePx?: number;   // knob (px) for MOBILE hero title size; if unset, defaults to clamp
  typewriter?: boolean;     // enable/disable typing
  typingSpeedMs?: number;   // speed per character
  startDelayMs?: number;    // delay before typing starts
  caretDash?: string;       // character used as the blinking caret (dash)
  caretX?: number;        // knob: px horizontal offset for the typewriter caret/dash
  caretY?: number;        // knob: px vertical offset for the typewriter caret/dash (positivo = baja)
  caretScaleX?: number;   // knob: scale factor (0..1+) to compress/expand the caret width (1 = normal, 0.6 = más corto)
  heroSublineGap?: number; // knob: px gap between the H1 title and the subline in the hero
  heroSublineGapMobile?: number;
  heroSublineXMobile?: number;
  heroSublineYMobile?: number;
  heroSublineW?: number;   // knob: numeric font-weight for the hero subline
  heroLetterSpacing?: number; // knob: em tracking for hero title (can be negative)
  heroLineHeight?: number; // knob: unitless line-height for hero title
  heroWordSpacing?: number; // knob: em gap between words in hero title
  aboutHeightPx?: number;
  aboutHeightPxMobile?: number;
  scrollEase?: number;  // knob: 0..1 easing factor for smooth scrolling
  wwdTitleX?: number; // knob: px offset X for WHAT WE DO title
  wwdTitleY?: number; // knob: px offset Y for WHAT WE DO title
  wwdTitleXMobile?: number; // MOBILE override for X (falls back to wwdTitleX)
  wwdTitleYMobile?: number; // MOBILE override for Y (falls back to wwdTitleY)
  wwdTextX?: number;  // knob: px offset X for lead paragraph
  wwdTextY?: number;  // knob: px offset Y for lead paragraph
  wwdTextXMobile?: number; // MOBILE override for X (falls back to 0px if unset)
  wwdTextYMobile?: number; // MOBILE override for Y (falls back to 0px if unset)
  wwdLeadFs?: number;        // knob: px font-size for WWD lead paragraph (desktop)
  wwdLeadFsMobile?: number;  // knob: px font-size for WWD lead paragraph (mobile override)
  wwdLeadMaxWMobile?: number;  // knob: px max-width for WWD lead paragraph on mobile
  wwdTitleFs?: number; // knob: px font-size for WHAT WE DO title (eyebrow)
  wwdTitleW?: number; // knob: numeric font-weight for WHAT WE DO title (eyebrow)
  navLinkWeight?: number; // knob: numeric font-weight for nav links/CTA
  wwdTitleFsMobile?: number; // MOBILE-only font-size for WHAT WE DO (falls back to wwdTitleFs)
  wwdGuideLblGap?: number; // knob: px horizontal gap to place labels to the RIGHT of the guide line
  wwdTextMaxW?: number; // knob: px max-width for WHAT WE DO paragraph
  projectsTextMaxW?: number; // knob: px max-width for PROJECTS headline
  projectsTextX?: number;   // knob: px horizontal offset for PROJECTS paragraph
  projectsTextY?: number;   // knob: px vertical offset for PROJECTS paragraph
  projectsTextYMobile?: number; // knob: px vertical offset for PROJECTS paragraph (mobile-only)
  projectsBandBg?: string;
  projectsBandPadY?: number;
  projectsBandPadYMobile?: number;
  projectsGridGap?: number;   // knob: px gap entre recuadros del grid de Projects (anula responsive por defecto)
  projectsGridGapMobile?: number; // knob: px gap entre recuadros en mobile
  projectsGridX?: number;     // knob: px offset X para mover TODO el grid de Projects
  projectsGridY?: number;     // knob: px offset Y para mover TODO el grid de Projects
  projectsCol1X?: number;   // knob: px microajuste horizontal col1
  projectsCol2X?: number;   // knob: px microajuste horizontal col2
  menuDrawerHeaderYMobile?: number; // knob: px offset Y para CLOSE + Siamo Design dentro de la gaveta móvil
  menuDrawerHeaderRowYOffsetMobile?: number; // knob: px offset Y adicional para la fila CLOSE + Siamo Design (translate)
  menuDrawerLinksTopLineYMobile?: number; // knob: px offset Y para la línea superior del bloque de links del menú móvil
  menuDrawerLinksXMobile?: number;   // knob: px offset X para links del menú móvil (en conjunto)
  menuDrawerLinksYMobile?: number;   // knob: px offset Y para links del menú móvil (en conjunto)
  menuDrawerFollowYMobile?: number;  // knob: px offset Y para el label FOLLOW en la gaveta móvil
  menuDrawerFollowDividerYOffsetMobile?: number; // knob: px offset Y para la línea divisoria antes de FOLLOW
  menuDrawerCtaYOffsetMobile?: number;  // knob: px offset Y para el CTA GET STARTED dentro de la gaveta móvil
  menuDrawerSocialBlockYOffsetMobile?: number; // knob: px offset Y para la fila de iconos sociales dentro de la gaveta móvil
  menuDrawerSocialLineYMobile?: number; // knob: px offset Y para la línea inferior de los social links (gaveta móvil)
  menuDrawerCtaYMobile?: number;   // knob: px offset Y para el CTA inferior en la gaveta móvil
  menuDrawerBrandFontSizeMobile?: number; // knob: px font-size para el pseudologo (texto) dentro de la gaveta móvil
  menuDrawerBrandLetterSpacingMobile?: number; // knob: em tracking para el pseudologo dentro de la gaveta móvil
  menuDrawerCloseFontSizeMobile?: number; // knob: px font-size para el botón CLOSE dentro de la gaveta móvil
  menuDrawerCloseLetterSpacingMobile?: number; // knob: em tracking para el botón CLOSE dentro de la gaveta móvil
  projectsCol3X?: number;   // knob: px microajuste horizontal col3
  projectsCol4X?: number;   // knob: px microajuste horizontal col4
  projectsMetaX?: number;   // knob: px horizontal offset for ALL meta textos (year + title)
  projectsMetaY?: number;   // knob: px vertical offset for ALL meta textos (year + title)
  projectsMetaXM?: number;  // knob: MOBILE-only X offset for meta textos
  projectsMetaYM?: number;  // knob: MOBILE-only Y offset
  projectsTitleXM?: number; // knob: MOBILE-only X offset SOLO para el título (sin afectar el año)
  projectsTitleYM?: number; // knob: MOBILE-only Y offset SOLO para el título (sin afectar el año)
  projectsTitleMaxWM?: number; // knob: MOBILE-only max-width para el bloque de texto del título/meta
  projectsCardGrow?: number; // knob: px que AGRANDA cada recuadro por igual (crece desde el borde: +1px en cada lado)
  projectsCardSizeMobile?: number; // knob: px alto/ancho uniforme para placeholders en mobile
  projectsCardOverlapMobile?: number; // knob: px para solapar tarjetas en mobile (reduce gap)
  projectsCarouselViewport?: number; // knob: vw % que define cuánta ventana ocupa el carrusel mobile
  projectsCarouselItemsMobile?: number; // knob: cuántos proyectos visibles por “página” en mobile
  projectsCarouselOffsetXMobile?: number; // knob: px offset X para alinear las tarjetas en mobile
  projectsCarouselOffsetYMobile?: number; // knob: px offset Y para alinear las tarjetas en mobile
  projectsCarouselShiftPage1?: number;
  projectsCarouselShiftPage2?: number;
  projectsCarouselBlockOffsetYMobile?: number;
  projectsCarouselNavOffsetYMobile?: number;
  projectsCarouselWindowPadMobile?: number; // knob: px de padding inferior dentro de la ventana móvil para que quepa el texto
  projectsNavHeightMobile?: number; // knob: px de alto para la barra del carrusel (nav) en mobile
  projectsNavInnerOffsetY?: number; // knob: px offset vertical del contenido dentro de la barra
  projectsNavArrowOffsetY?: number; // knob: px offset Y SOLO para las flechas del nav
  wwdContainerMaxW?: number; // knob: px max-width for WHAT WE DO container
  wwdPadTop?: number;
  wwdPadTopMobile?: number;
  wwdPadBottom?: number;
  wwdPadBottomMobile?: number;
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
  wwdCardWM?: number; // knob: px size (width & height) for WWD cards on mobile
  wwdCardAspectMobile?: number; // knob: px height for mobile cards (uniform across the three)
  wwdVirtualCardXM?: number; // knob: px horizontal shift for VIRTUAL DESIGN video on mobile
  wwdVirtualCardYM?: number; // knob: px vertical shift for VIRTUAL DESIGN video on mobile
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
  wwdDesc1XM?: number;
  wwdDesc1YM?: number;
  wwdDesc1MaxWM?: number;
  wwdDesc2X?: number;
  wwdDesc2Y?: number;
  wwdDesc2MaxWM?: number;
  wwdDesc2XM?: number;
  wwdDesc2YM?: number;
  wwdOnsiteCardMX?: number;
  wwdOnsiteCardMY?: number;
  wwdContentCardMX?: number;
  wwdContentCardMY?: number;
  wwdDesc3X?: number;
  wwdDesc3Y?: number;
  wwdDesc3XM?: number;
  wwdDesc3YM?: number;
  wwdSvc02TitleMaxWM?: number;
  wwdCtaX?: number;
  wwdCtaY?: number;
  wwdCtaTxtX?: number;
  wwdCtaTxtY?: number;
  wwdCtaTxtXM?: number; // MOBILE-only X offset for CTA text label
  wwdCta1X?: number;
  wwdCta1Y?: number;
  wwdCtaMobileX?: number;
  wwdCtaMobileY?: number;
  wwdCtaMobileRightOffset?: number;
  wwdCta3X?: number;
  wwdCta3Y?: number;
  wwdCta3MobileX?: number;
  wwdCta3MobileY?: number;
  wwdCta3MobileRightOffset?: number;
  wwdEyebrow1X?: number;
  wwdEyebrow1Y?: number;
  wwdEyebrow1XM?: number;
  wwdEyebrow1YM?: number;
  wwdLbl01XM?: number;
  wwdLbl01YM?: number;
  wwdTitle01XM?: number;
  wwdTitle01YM?: number;
  wwdLbl02?: string;
  wwdLbl02MobileX?: number;
  wwdLbl02MobileY?: number;
  wwdTitle02MobileX?: number;
  wwdTitle02MobileY?: number;
  wwdLbl03?: string;
  wwdLbl03MobileX?: number;
  wwdLbl03MobileY?: number;
  wwdTitle03MobileX?: number;
  wwdTitle03MobileY?: number;
  wwdDesc3MaxWM?: number;
  aboutTitle?: string;
  aboutTitleX?: number;
  aboutTitleY?: number;
  aboutTitleXMobile?: number;
  aboutTitleYMobile?: number;
  aboutTitleGap?: number;
  aboutCaption?: string;
  aboutCaptionX?: number;
  aboutCaptionY?: number;
  aboutCaptionXMobile?: number;
  aboutCaptionYMobile?: number;
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
  aboutCtaTxtYMobile?: number;
  aboutCtaTxtXMobile?: number;
  aboutCtaMobileX?: number;
  aboutCtaMobileY?: number;
  aboutCtaMobileWidth?: number;
  aboutCtaMobileHeight?: number;
  aboutCtaMobileRightOffset?: number;
  wwdBlockY?: number; // knob: px translateY for the entire WHAT WE DO content block
  wwdBlockYMobile?: number; // knob: px translateY (extra) for mobile
  /* Full-bleed video knobs */
  aboutVideoSrc?: string;
  aboutVideoPoster?: string;
  aboutVideoH?: number;
  aboutVideoGapTop?: number;
  aboutVideoY?: number;
  aboutVideoYMobile?: number;
  aboutVideoFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
  aboutVideoPosY?: number; // 0–100 (%), 50 = centered
  aboutVideoAspect?: string; // CSS aspect-ratio like "16/9" or "9/16"; set aboutVideoH to 0 or leave unset to rely on aspect
  aboutVideoOverlayPct?: number; // knob: 0–100 (%) opacity for dark overlay above the video
  navColGap?: number;    // knob: px de separación ENTRE columnas (izq|logo|der)
  navInnerMaxW?: number; // knob: px de ancho máximo del contenedor interno del header
  navItemGap?: number;   // knob: px de separación ENTRE items de nav-left y nav-right (mismo valor para ambos)
  navTitleFs?: number;   // knob: px font-size para TODOS los items del header (nav-left/right y CTA)
  navTitleFsMobile?: number;
  heroCtaFontSizeMobile?: number;
  brandFontSize?: number;
  brandFontSizeMobile?: number;
  brandLogoHeightMobile?: number;
  navCtaPadX?: number;
  navCtaPadY?: number;
  heroCtaPadXMobile?: number;
  heroCtaPadYMobile?: number;
  heroCtaYOffsetMobile?: number;
  navBarHeight?: number;
  navBarHeightMobile?: number;
  navCtaBg?: string;
  navCtaInk?: string;
  navCtaBgHover?: string;
  centerlineTopOffset?: number;
  centerlineBottomOffset?: number;
  centerlineBottomOffsetMobile?: number;
  centerlineOffsetMobile?: number;
  centerlineMobileDelta?: number;
  /* Full-bleed video knobs */
  aboutHlineGap?: number;
  reelW?: number;
  reelWMobile?: number;
  reelH?: number;
  reelHMobile?: number;
  reelGap?: number;
  reelSideScale?: number;
  reelSideOpacity?: number;
  reelArrowSize?: number;
  reelArrowOffset?: number;
  reelBoxGrow?: number;
  reelBoxGrowMobile?: number;
  reelScaleMobile?: number;
  reelRightExtraMobile?: number;
  reelRadius?: number;
  reelNavWidthMobile?: number;
  reelNavXMobile?: number;
  reelNavYMobile?: number;
  reelQuoteX?: number;
  reelQuoteY?: number;
  reelQuoteXMobile?: number;
  reelQuoteYMobile?: number;
  wwdNarrativeDesktopX?: number;
  wwdNarrativeDesktopY?: number;
  wwdNarrativeMaxWM?: number;
  testiAsideW?: number;
  testiTitleX?: number;
  testiTitleY?: number;
  testiTitleXMobile?: number;
  testiTitleYMobile?: number;
  testiTitleOffsetX?: number;
  testiTitleOffsetY?: number;
  testiTitleOffsetXMobile?: number;
  testiTitleOffsetYMobile?: number;
  testiSubtitleOffsetY?: number;
  testiSectionOffsetX?: number;
  testiSectionOffsetY?: number;
  testiSectionOffsetXMobile?: number;
  testiSectionOffsetYMobile?: number;
  testiBlockOffsetX?: number;
  testiBlockOffsetY?: number;
  testiBlockOffsetXMobile?: number;
  testiBlockOffsetYMobile?: number;
  testiReelGap?: number;
  testiReelGapMobile?: number;
  reelThumbsX?: number;
  reelThumbsY?: number;
  testiHlineGap?: number;
  testiHlineGapMobile?: number;
  testiHlineX?: number;
  testiHlineY?: number;
  testiHlineXMobile?: number;
  testiHlineYMobile?: number;
  followHandle?: string;
  followX?: number;
  followY?: number;
  followGap?: number;
  followGapMobile?: number;
  followCardsGapMobile?: number;
  followMaxW?: number;
  followMaxWMobile?: number;
  followTitleX?: number;
  followTitleY?: number;
  followTitleXMobile?: number;
  followTitleYMobile?: number;
  followGridX?: number;
  followGridXMobile?: number;
  followGridYMobile?: number;
  followCardSizeMobile?: number;
  followCols?: number;
  followCardGrow?: number;
  followCardGap?: number;
  followItems?: string[];
  footerLift?: number;
  footerOverlap?: number;
  footerPadTopMobile?: number;
  footerPadBottomMobile?: number;
  footerOverlapMobile?: number;
  wwdFooterSpacerMobile?: number;
  footerH?: number;
  footerBottomMaxW?: number;
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
  const projectsTrackRef = useRef<HTMLDivElement | null>(null);
  const projectsWindowRef = useRef<HTMLDivElement | null>(null);
  const wwdIntroRef = useRef<HTMLParagraphElement | null>(null);
  const aboutVideoRef = useRef<HTMLVideoElement | null>(null);
  const aboutVideoWrapRef = useRef<HTMLDivElement | null>(null);
  const aboutVideoStartedRef = useRef(false);
  const [aboutVideoPlaying, setAboutVideoPlaying] = useState(false);

  const [navSolid, setNavSolid] = useState(false);
  const [parallaxReady, setParallaxReady] = useState(false);
  const [renderFallback, setRenderFallback] = useState(true);
  const readyRef = useRef(false);
  const [isMobileViewport, setIsMobileViewport] = useState<boolean>(
    initialIsMobile ?? false
  ); // hydrate with server hint to keep SSR/CSR in sync
  const [hasMounted, setHasMounted] = useState(false);

  // === Mobile menu state ===
  const [menuOpen, setMenuOpen] = useState(false);
  const [projectsPage, setProjectsPage] = useState(0);
  const [wwdIntroVisible, setWwdIntroVisible] = useState(false);

  const projectCards = [
    { year: '2024', title: 'timeless Nature', href: '/work/sample-1', image: '/assets/img/nature.jpg' },
    { year: '2016', title: 'Roots Tulum', href: '/work/sample-2', image: '/assets/img/roots.jpg' },
    { year: '2018', title: 'Timeless Nature', href: '/portfolio/timeless-nature', image: '/assets/timeless-nature/details-2.jpg' },
    { year: '2018', title: 'Mid-century Waves', href: '/work/sample-4', image: '/assets/img/waves.jpg' },
  ];
  const projectsCardsPerPage = Math.max(1, projectsCarouselItemsMobile || 1);
  const projectsTotalPages = Math.max(1, Math.ceil(projectCards.length / projectsCardsPerPage));
  const [projectsStepPx, setProjectsStepPx] = useState(0);

  useEffect(() => {
    setProjectsPage((prev) => Math.min(prev, projectsTotalPages - 1));
  }, [projectsTotalPages]);

  const handleProjectsNav = (direction: number) => {
    setProjectsPage((prev) =>
      Math.min(Math.max(prev + direction, 0), projectsTotalPages - 1)
    );
  };

  useLayoutEffect(() => {
    const computeStep = () => {
      const track = projectsTrackRef.current;
      if (!track || typeof window === 'undefined') return;
      const windowEl = projectsWindowRef.current;
      if (windowEl && windowEl.offsetWidth > 0) {
        setProjectsStepPx(windowEl.offsetWidth);
        return;
      }
      const firstCard = track.querySelector<HTMLElement>('.proj-card');
      if (!firstCard) return;
      const cardWidth = firstCard.offsetWidth;
      const style = window.getComputedStyle(track);
      const gapRaw = style.columnGap || style.gap || "16";
      const gap = parseFloat(gapRaw) || 16;
      const step = (cardWidth + gap) * Math.max(1, projectsCardsPerPage);
      setProjectsStepPx(step);
    };
    computeStep();
    window.addEventListener('resize', computeStep);
    return () => window.removeEventListener('resize', computeStep);
  }, [projectsCardsPerPage, projectCards.length]);

  const projectsShiftPx =
    -(projectsPage * projectsStepPx) +
    (projectsPage === 0
      ? projectsCarouselShiftPage1 || 0
      : projectsCarouselShiftPage2 || 0);

  // Close on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setMenuOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // Prevent background scroll when menu is open
  useEffect(() => {
    const { body } = document;
    if (!menuOpen) return;
    const prevOverflow = body.style.overflow;
    body.style.overflow = "hidden";
    return () => {
      body.style.overflow = prevOverflow;
    };
  }, [menuOpen]);

  // Normalize the title to ensure it always reads "...dream home"
  // - Handle CRLF / LF
  // - Fix "dream hom" (any spacing/casing)
  // - Fix any standalone "hom" before space/punctuation/newline/end
  // Use server hint for the first render, then follow the actual viewport.
  const resolvedIsMobile = hasMounted ? isMobileViewport : (initialIsMobile ?? isMobileViewport);
  const testiSectionOffsetXCurrent = resolvedIsMobile ? testiSectionOffsetXMobile : testiSectionOffsetX;
  const testiSectionOffsetYCurrent = resolvedIsMobile ? testiSectionOffsetYMobile : testiSectionOffsetY;
  const testiBlockOffsetXCurrent = resolvedIsMobile ? testiBlockOffsetXMobile : testiBlockOffsetX;
  const testiBlockOffsetYCurrent = resolvedIsMobile ? testiBlockOffsetYMobile : testiBlockOffsetY;
  const testiTitleOffsetXCurrent = resolvedIsMobile ? testiTitleOffsetXMobile : testiTitleOffsetX;
  const testiTitleOffsetYCurrent = resolvedIsMobile ? testiTitleOffsetYMobile : testiTitleOffsetY;
  const heroTitleText = resolvedIsMobile && titleMobile ? titleMobile : title;
  const normalizedTitle = (heroTitleText || "")
    .replace(/\r\n/g, "\n")
    .replace(/\bdream\s+hom(e)?(?=\s|[.,;:!?\-–—]|\n|$)/gi, "dream home")
    .replace(/\bhom(?=\s|[.,;:!?\-–—]|\n|$)/gi, "home");

  // Split title on explicit newlines and harden each line so none end with 'hom'
const lines = normalizedTitle.split("\n").map(l => l.replace(/hom$/i, "home"));
  const [typewriterEnabled, setTypewriterEnabled] = useState(() => typewriter && !resolvedIsMobile);

  // === Typewriter state (line-by-line) ===
  const [typedLines, setTypedLines] = useState<string[]>(() =>
    typewriterEnabled ? lines.map(() => "") : [...lines]
  ); // SSR-safe: render full title when typewriter is disabled
  const [lineIdx, setLineIdx] = useState<number>(0);          // which line is being typed
  const [charIdx, setCharIdx] = useState<number>(0);          // index within current line


  const isFinished =
    !typewriterEnabled ||
    (lineIdx === lines.length - 1 &&
      charIdx >= (lines[lines.length - 1]?.length ?? 0));
  const heroBgMobile = useDesktopHeroOnMobile ? bgUrl : bgUrlMobile;
  const heroBgPosXMobile = 50;
  const heroBgCurrent = resolvedIsMobile ? heroBgMobile : bgUrl;
  const heroBgPosXCurrent = heroBgPosXMobile;
  const PARALLAX_MAX_Y = 720; // clamp para limitar el efecto y evitar jank al dejar el hero

  useEffect(() => {
    // Cancel any previous RAF/timer when knobs change
    if (!typewriterEnabled) {
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
  }, [normalizedTitle, typewriterEnabled, typingSpeedMs, startDelayMs]);

  useEffect(() => {
    const cancelTyping = () => setTypewriterEnabled(false);
    window.addEventListener("scroll", cancelTyping, { passive: true });
    window.addEventListener("wheel", cancelTyping, { passive: true });
    return () => {
      window.removeEventListener("scroll", cancelTyping);
      window.removeEventListener("wheel", cancelTyping);
    };
  }, []);

  const pf = 0.22; // parallax factor fijo (sutil)

  useIsomorphicLayoutEffect(() => {
    const root    = rootRef.current!;
    const main    = mainRef.current!;
    const header  = headerRef.current!;
    const content = contentRef.current!;
    const footer  = footerRef.current!;
    const docEl   = document.documentElement;
    const cssVarKeys = [
      "--title-lift",
      "--mid-offset",
      "--hero-overlay",
      "--hero-scrim-top",
      "--hero-scrim-bottom",
    ];
    const heroOverlayAlpha =
      Math.max(
        0,
        Math.min(isMobileViewport ? heroOverlayMobile ?? heroOverlay : heroOverlay, 100)
      ) / 100;
    const heroScrimTop = Math.max(0, Math.min(heroOverlayAlpha * 0.7, 1));
    const heroScrimBottom = Math.max(heroScrimTop, Math.min(heroOverlayAlpha * 1.6, 1));

    const updateGuideStops = () => {
      const sectionTop = content.getBoundingClientRect().top + window.scrollY;
      const frameX = content.querySelector(
        ".wwd-fullvideo .frame-x"
      ) as HTMLElement | null;
      const centerlineNode = content.querySelector(
        ".wwd-centerline-mobile"
      ) as HTMLElement | null;
      const testiSection = content.querySelector(
        ".testimonials"
      ) as HTMLElement | null;

      let desktopStop: number | null = null;
      if (frameX) {
        const lineTop = frameX.getBoundingClientRect().top + window.scrollY;
        desktopStop = Math.max(0, Math.round(lineTop - sectionTop));
        (content as HTMLElement).style.setProperty(
          "--guides-stop",
          `${desktopStop}px`
        );
      }

      const mobileRef = frameX ?? testiSection;
      if (mobileRef) {
        const mobileTop = mobileRef.getBoundingClientRect().top + window.scrollY;
        const mobileStop = Math.max(0, Math.round(mobileTop - sectionTop));
        const adjustedStop = Math.max(0, mobileStop + centerlineMobileDelta);
        (content as HTMLElement).style.setProperty(
          "--guides-stop-mobile",
          `${adjustedStop}px`
        );
        if (centerlineNode) {
          const centerTop =
            centerlineNode.getBoundingClientRect().top + window.scrollY;
          const mobileHeight = Math.max(0, Math.round(mobileTop - centerTop));
          const adjustedHeight = Math.max(
            0,
            mobileHeight + centerlineMobileDelta
          );
          centerlineNode.style.height = `${adjustedHeight}px`;
          centerlineNode.style.setProperty(
            "--centerline-mobile-height",
            `${adjustedHeight}px`
          );
        }
      } else if (desktopStop != null) {
        (content as HTMLElement).style.setProperty(
          "--guides-stop-mobile",
          `${desktopStop}px`
        );
        const centerlineNode = content.querySelector(
          ".wwd-centerline-mobile"
        ) as HTMLElement | null;
        if (centerlineNode) {
          centerlineNode.style.removeProperty("height");
          centerlineNode.style.removeProperty("--centerline-mobile-height");
        }
      } else {
        const centerlineNode = content.querySelector(
          ".wwd-centerline-mobile"
        ) as HTMLElement | null;
        if (centerlineNode) {
          centerlineNode.style.removeProperty("height");
          centerlineNode.style.removeProperty("--centerline-mobile-height");
        }
      }
    };

    // En mobile desactivamos el parallax y no montamos listeners/RAF
    if (isMobileViewport) {
      const y = window.scrollY || window.pageYOffset || 0;
      // Reset transforms/vars to avoid jank
      root.style.height = "";
      main.style.height = "";
      main.style.position = "relative";
      main.style.top = "0px";
      content.style.transform = "translateY(0px)";
      header.style.backgroundPosition = `${heroBgPosXCurrent}% 50%`;
      docEl.style.setProperty("--title-lift", "0px");
      docEl.style.setProperty("--mid-offset", "0px");
      docEl.style.setProperty("--hero-overlay", String(heroOverlayAlpha));
      docEl.style.setProperty("--hero-scrim-top", String(heroScrimTop));
      docEl.style.setProperty("--hero-scrim-bottom", String(heroScrimBottom));
      const heroH = header?.offsetHeight || 120;
      updateGuideStops();
      const solidNow = y > heroH;
      setNavSolid(solidNow);
      // keep navSolid in sync on scroll for mobile
      const onScrollMobile = () => {
        const cy = window.scrollY || window.pageYOffset || 0;
        const shouldBeSolid = cy > heroH;
        setNavSolid((prev) => (prev === shouldBeSolid ? prev : shouldBeSolid));
      };
      const onResizeMobile = () => updateGuideStops();
      window.addEventListener("resize", onResizeMobile, { passive: true });
      const aboutVidMobile = content.querySelector<HTMLVideoElement>(".about-video");
      const onAboutLoaded = () => updateGuideStops();
      aboutVidMobile?.addEventListener("loadedmetadata", onAboutLoaded);
      window.addEventListener("scroll", onScrollMobile, { passive: true });
      // ensure fallback hides once DOM mounts
      if (!readyRef.current) {
        readyRef.current = true;
        setParallaxReady(true);
      }
      return () => {
        window.removeEventListener("scroll", onScrollMobile);
        window.removeEventListener("resize", onResizeMobile);
        aboutVidMobile?.removeEventListener("loadedmetadata", onAboutLoaded);
        cssVarKeys.forEach((key) => docEl.style.removeProperty(key));
        readyRef.current = false;
      };
    }

    // initialize targets based on current scroll
    targetYRef.current = window.scrollY || window.pageYOffset || 0;
    smoothYRef.current = targetYRef.current;

    let windowHeight = 0;
    let footerHeight = 0;
    let heightDocument = 0;

    const setCssVar = (k: string, v: string) => docEl.style.setProperty(k, v);

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
      const py = Math.min(y, PARALLAX_MAX_Y); // clamp parallax-only math; no impacto en scroll real

      // Mobile: disable parallax offsets but keep layout synced
      if (isMobileViewport) {
        // Keep natural scroll progression (no eased parallax offsets)
        root.style.height = "";
        main.style.height = "";
        main.style.position = "relative";
        main.style.top = "0px";
        content.style.transform = "translateY(0px)";
        header.style.backgroundPosition = `${heroBgPosXCurrent}% 50%`;
        setCssVar("--title-lift", "0px");
        setCssVar("--mid-offset", "0px");
        setCssVar("--hero-overlay", String(heroOverlayAlpha));
        setCssVar("--hero-scrim-top", String(heroScrimTop));
        setCssVar("--hero-scrim-bottom", String(heroScrimBottom));
        scrollFooter(y, footerHeight);
        setNavSolid(y > 12);
        return;
      }

      // move the fixed main with a smoothed offset
      main.style.top = `-${y}px`;

      // subtle counter-translation on about layer
      const offset = Math.max(0, -y * contentDamp);
      content.style.transform = `translateY(${offset}px)`;

      // background & hero dynamics
      const bgOffset = 50 - (py * 100 / (heightDocument || 1)) * pf;
      header.style.backgroundPosition = `${heroBgPosXCurrent}% ${bgOffset}%`;

      const titleLift = py * pf * 0.12;
      const midMove   = py * pf * 0.25;
      setCssVar("--title-lift", `${titleLift.toFixed(1)}px`);
      setCssVar("--mid-offset", `${midMove.toFixed(1)}px`);

      const t = Math.min(py / (windowHeight * 0.4 || 1), 1);
      setCssVar("--hero-overlay", String(heroOverlayAlpha));
      setCssVar("--hero-scrim-top", String(heroScrimTop));
      setCssVar("--hero-scrim-bottom", String(heroScrimBottom));

      // footer motion
      scrollFooter(y, footerHeight);

      // solid nav threshold using smoothed position
      setNavSolid(y > 12);
    }

    function compute() {
      windowHeight = window.innerHeight;
      footerHeight = footer.getBoundingClientRect().height;
      const contentHeight = content.getBoundingClientRect().height;

      updateGuideStops();

      // On mobile, let the document flow naturally (no fixed canvas sizing)
      if (isMobileViewport) {
        heightDocument = windowHeight + contentHeight + footerHeight;
        root.style.height = "";
        main.style.height = "";
        main.style.position = "relative";
        header.style.height = `${windowHeight}px`;
        const wrap = root.querySelector<HTMLDivElement>(".wrapper-parallax");
        if (wrap) wrap.style.marginTop = "0px";
        render();
        return;
      }

      heightDocument = windowHeight + contentHeight + footerHeight;

      root.style.height = `${heightDocument}px`;
      main.style.height = `${heightDocument}px`;

      header.style.height = `${windowHeight}px`;

      const wrap = root.querySelector<HTMLDivElement>(".wrapper-parallax");
      if (wrap) wrap.style.marginTop = `${windowHeight}px`;

      // === Limit vertical guides to stop at the horizontal line under the video ===
      updateGuideStops();

      render();
      // reveal once sizes are applied to avoid first‑paint flash
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

      if (Math.abs(targetYRef.current - smoothYRef.current) > 0.1) {
        scrollRafRef.current = requestAnimationFrame(loop);
      } else {
        scrollRafRef.current = null;
      }
    }

    const ensureLoop = () => {
      if (scrollRafRef.current == null) {
        scrollRafRef.current = requestAnimationFrame(loop);
      }
    };

    const onScroll = () => {
      targetYRef.current = window.scrollY || window.pageYOffset || 0;
      ensureLoop();
    };

    const onResize = () => {
      compute();
      ensureLoop();
    };

    compute();
    ensureLoop();
    if (!readyRef.current) {
      readyRef.current = true;
      setParallaxReady(true);
    }
    // ensure first paint shows the fixed canvas only after we measured

    // recalc guides stop after video metadata loads (for correct video height)
    const aboutVid = content.querySelector<HTMLVideoElement>('.about-video');
    aboutVid?.addEventListener('loadedmetadata', compute);

    // listeners
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      aboutVid?.removeEventListener('loadedmetadata', compute);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (scrollRafRef.current != null) cancelAnimationFrame(scrollRafRef.current);
      scrollRafRef.current = null;
      cssVarKeys.forEach((key) => docEl.style.removeProperty(key));
      readyRef.current = false;
    };
  }, [scrollEase, heroOverlay, heroOverlayMobile, isMobileViewport, heroBgPosXCurrent, centerlineMobileDelta]);

  useEffect(() => {
    if (!parallaxReady) {
      setRenderFallback(true);
      return;
    }
    const timer = window.setTimeout(() => setRenderFallback(false), 300);
    return () => window.clearTimeout(timer);
  }, [parallaxReady]);

  // Convert overlay percentage (0–100) to alpha (0..1) for CSS
  const overlayAlpha = Math.max(0, Math.min(aboutVideoOverlayPct ?? 0, 100)) / 100;
  const desc2BaseX = (wwdDescX ?? 0) + (wwdDesc2X ?? 0);
  const desc2BaseY = (wwdDescY ?? 0) + (wwdDesc2Y ?? 0);
  const desc2MobileX = wwdDesc2XM ?? 0;
  const desc2MobileY = wwdDesc2YM ?? 0;
  const followColsSafe = followCols ?? 0;
  const followGapDesktop = followCardGap != null ? followCardGap : followGap ?? 0;
  const followGapTotal = followCardGap != null
    ? Math.max(0, followColsSafe - 1) * followGapDesktop
    : 0;
  const followFallbackSlots = Math.max(6, followCols || 0);
  const hasFollowItems = Array.isArray(followItems) && followItems.length > 0;
  // Fill to grid length even when only a few items are provided (rest become placeholders)
  const followGridItems = hasFollowItems
    ? (() => {
        const target = Math.max(followFallbackSlots, followItems.length, followCols || 0);
        const fillers = Array<string>(Math.max(0, target - followItems.length)).fill("");
        return followItems.concat(fillers);
      })()
    : Array<string>(followFallbackSlots).fill("");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(max-width: 860px)");
    const handleChange = (event?: MediaQueryListEvent) => {
      setIsMobileViewport(event ? event.matches : mq.matches);
    };
    handleChange();
    if (typeof mq.addEventListener === "function") {
      mq.addEventListener("change", handleChange);
      return () => mq.removeEventListener("change", handleChange);
    }
    mq.addListener(handleChange);
    return () => mq.removeListener(handleChange);
  }, [initialIsMobile]);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (wwdIntroVisible || typeof window === "undefined") return;
    const node = wwdIntroRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setWwdIntroVisible(true);
          obs.disconnect();
        }
      },
      // Trigger earlier so the reveal doesn't require hitting a "perfect frame".
      { threshold: 0.05, rootMargin: "0px 0px 0px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [wwdIntroVisible]);

  useEffect(() => {
    const video = aboutVideoRef.current;
    if (!video || typeof window === "undefined") return;

    const play = () => {
      const promise = video.play();
      if (promise?.then) {
        promise.then(() => setAboutVideoPlaying(true)).catch(() => {});
      } else {
        setAboutVideoPlaying(true);
      }
    };

    // En mobile lo dejamos pausado hasta que el usuario pulse play
    if (isMobileViewport) {
      video.pause();
      setAboutVideoPlaying(false);
      return;
    }

    if (aboutVideoStartedRef.current) {
      play();
      return;
    }

    if (typeof IntersectionObserver === "undefined") {
      aboutVideoStartedRef.current = true;
      play();
      return;
    }

    const trigger = aboutVideoWrapRef.current ?? video;
    if (!trigger) {
      aboutVideoStartedRef.current = true;
      play();
      return;
    }

    const isInView = () => {
      const rect = trigger.getBoundingClientRect();
      const viewportH = window.innerHeight || document.documentElement.clientHeight || 0;
      return rect.top < viewportH * 0.95 && rect.bottom > viewportH * 0.05;
    };

    if (isInView()) {
      aboutVideoStartedRef.current = true;
      play();
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          aboutVideoStartedRef.current = true;
          play();
          obs.disconnect();
        }
      },
      { threshold: 0.35, rootMargin: "0px 0px -20% 0px" }
    );

    observer.observe(trigger);
    return () => observer.disconnect();
  }, [isMobileViewport]);

  const playAboutVideo = () => {
    const video = aboutVideoRef.current;
    if (!video) return;
    const p = video.play();
    aboutVideoStartedRef.current = true;
    if (p?.then) {
      p.then(() => setAboutVideoPlaying(true)).catch(() => {});
    } else {
      setAboutVideoPlaying(true);
    }
  };

  const renderFooterExplore = () => (
    <div className="footer-explore" aria-label="Explore and social">
      <nav className="explore" aria-label="Explore">
        <Link href="/services">Services</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/get-to-know-us">About</Link>
        <a href="mailto:hello@siamodesign.com" aria-label="Email us">Email</a>
        <a href="https://wa.me/529842111989" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
          WhatsApp
        </a>
      </nav>
      <div className="social" aria-label="Social profiles">
        <a className="social__link" href="https://www.linkedin.com/company/siamo-design/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6.5 9h2.9v9H6.5V9Zm1.4-4.5a1.7 1.7 0 1 1 0 3.4 1.7 1.7 0 0 1 0-3.4ZM10.8 9h2.8v1.2h.1c.4-.8 1.4-1.6 2.9-1.6 3.1 0 3.7 2 3.7 4.6V18h-2.9v-4.2c0-1-.1-2.3-1.5-2.3-1.5 0-1.8 1.1-1.8 2.2V18h-2.9V9Z" />
          </svg>
        </a>
        <a className="social__link" href="https://www.youtube.com/@siamodesign" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M21.7 8.2s-.2-1.5-.8-2.2c-.7-.8-1.5-.8-1.8-.9C16.2 5 12 5 12 5h0s-4.2 0-7.1.1c-.3 0-1.1 0-1.8.9-.6.7-.8 2.2-.8 2.2S2 9.9 2 11.6v.8c0 1.7.2 3.4.2 3.4s.2 1.5.8 2.2c.7.8 1.7.8 2.2.9 1.6.2 6.8.2 6.8.2s4.2 0 7.1-.1c.3 0 1.1 0 1.8-.9.6-.7.8-2.2.8-2.2s.2-1.7.2-3.4v-.8c0-1.7-.2-3.4-.2-3.4Z" />
            <path d="m10 9.8 4.7 2.2L10 14.2V9.8Z" fill="#fff" />
          </svg>
        </a>
        <a className="social__link" href="https://www.tiktok.com/@siamodesign" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M15.5 4.2c.6.8 1.5 1.3 2.5 1.3h.4v2.5c-.9 0-1.8-.2-2.6-.6v5.5a5.08 5.08 0 1 1-5.1-5.1c.3 0 .6 0 .9.1v2.7a2.4 2.4 0 0 0-.9-.2 2.38 2.38 0 1 0 2.38 2.4V3h2.5v1.2Z" />
          </svg>
        </a>
        <a className="social__link" href={`https://www.instagram.com/${(followHandle || "").replace(/^@/, "") || "siamo_design"}`} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M7.2 4.5h9.6A2.7 2.7 0 0 1 19.5 7v9.6a2.7 2.7 0 0 1-2.7 2.7H7.2A2.7 2.7 0 0 1 4.5 16.6V7a2.7 2.7 0 0 1 2.7-2.7Zm0-1.5A4.2 4.2 0 0 0 3 7v9.6A4.2 4.2 0 0 0 7.2 20.8h9.6A4.2 4.2 0 0 0 21 16.6V7a4.2 4.2 0 0 0-4.2-4.2H7.2Z" />
            <path d="M12 8.4A3.6 3.6 0 1 1 8.4 12 3.6 3.6 0 0 1 12 8.4Zm0-1.5A5.1 5.1 0 1 0 17.1 12 5.1 5.1 0 0 0 12 6.9Z" />
            <circle cx="17.4" cy="6.6" r="1" />
          </svg>
        </a>
      </div>
    </div>
  );

  const renderFooterLegal = () => (
    <div className="footer-legal" aria-label="Legal information">
      <p className="legal-line">
        <span className="legal-full">Siamo Design | Interior Design Studio</span>
      </p>
      <p className="legal-line">
        <span className="legal-full">© 2025 Siamo Design. All rights reserved.</span>
      </p>
      <p className="legal-sig"><a href="https://donebyelevator.com" target="_blank" rel="noopener noreferrer">Designed & Built by Elevator</a></p>
    </div>
  );

  return (
    <>
      <nav
        className={`site-nav parallax-nav ${navSolid ? "is-solid" : ""} ${menuOpen ? "is-menu-open" : ""}`}
        aria-label="Barra de navegación"
        style={{
          ['--nav-col-gap' as any]: `${navColGap}px`,
          ['--nav-inner-maxw' as any]: `${navInnerMaxW}px`,
          ['--nav-item-gap' as any]: `${navItemGap}px`,
          ['--nav-title-fs' as any]: `${navTitleFs}px`,
          ['--nav-title-fs-m' as any]: `${navTitleFsMobile}px`,
          ['--nav-bar-h-desktop' as any]: `${navBarHeight}px`,
          ['--nav-bar-h-mobile' as any]: `${navBarHeightMobile}px`,
          ['--brand-fs' as any]: `${brandFontSize}px`,
          ['--brand-fs-m' as any]: `${brandFontSizeMobile}px`,
          ['--nav-link-weight' as any]: `${navLinkWeight}`,
          ['--nav-title-w' as any]: `${wwdTitleW}`,
          ['--nav-cta-padx' as any]: `${navCtaPadX}px`,
          ['--nav-cta-pady' as any]: `${navCtaPadY}px`,
          ['--hero-cta-padx-m' as any]: `${heroCtaPadXMobile}px`,
          ['--hero-cta-pady-m' as any]: `${heroCtaPadYMobile}px`,
          ['--nav-cta-bg' as any]: navCtaBg,
          ['--nav-cta-ink' as any]: navCtaInk,
          ['--nav-cta-bg-hover' as any]: (navCtaBgHover || navCtaBg),
        }}
      >
        <div className="site-nav__inner">
          <button
            className="menu-toggle"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen(v => !v)}
          >
            <span className="label">{menuOpen ? 'CLOSE' : 'MENU'}</span>
          </button>
          <ul className="nav-left" role="list">
            <li><a className="nav-link" href="/get-to-know-us">GET TO KNOW US</a></li>
            <li><Link className="nav-link" href="/services">SERVICES</Link></li>
            <li><a className="nav-link" href="/portfolio">PORTFOLIO</a></li>
          </ul>

          <a href="/" className="brand-mark" aria-label="Siamo Design">
            <Image
              src="/assets/img/logotipo.png"
              alt="Siamo Design"
              width={180}
              height={40}
              priority
              style={{ width: "auto", height: "38px", objectFit: "contain" }}
            />
          </a>

          <div className="nav-right">
            <a className="nav-link nav-lang" href="#lang">
              <span className="lang-dsk">ESPAÑOL</span>
              <span className="lang-mbl">ES</span>
            </a>
            <a
              className={`cta nav-cta${navSolid ? " is-visible" : ""}`}
              href="#book"
              aria-hidden={!navSolid}
              tabIndex={navSolid ? 0 : -1}
              style={{
                ['--nav-cta-bg' as any]: navSolid ? "#ffffff" : navCtaBg,
                ['--nav-cta-ink' as any]: navSolid ? "#111111" : navCtaInk,
              }}
            >
              GET STARTED <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div
          id="mobile-menu"
          className={`mobile-menu${menuOpen ? ' is-open' : ''}`}
          role="dialog"
          aria-modal="true"
          aria-hidden={!menuOpen}
          style={{
            ['--menu-header-y-m' as any]: `${menuDrawerHeaderYMobile}px`,
            ['--menu-links-topline-y-m' as any]: `${menuDrawerLinksTopLineYMobile}px`,
            ['--menu-links-x-m' as any]: `${menuDrawerLinksXMobile}px`,
            ['--menu-links-y-m' as any]: `${menuDrawerLinksYMobile}px`,
            ['--menu-header-row-y-m' as any]: `${menuDrawerHeaderRowYOffsetMobile}px`,
            ['--menu-follow-y-m' as any]: `${menuDrawerFollowYMobile}px`,
            ['--menu-follow-divider-y-m' as any]: `${menuDrawerFollowDividerYOffsetMobile}px`,
            ['--menu-social-block-y-m' as any]: `${menuDrawerSocialBlockYOffsetMobile}px`,
            ['--menu-social-line-y-m' as any]: `${menuDrawerSocialLineYMobile ?? 0}px`,
            ['--menu-cta-y-m' as any]: `${menuDrawerCtaYOffsetMobile ?? menuDrawerCtaYMobile ?? 0}px`,
            ['--menu-brand-fs-m' as any]: `${menuDrawerBrandFontSizeMobile}px`,
            ['--menu-brand-tracking-m' as any]: `${menuDrawerBrandLetterSpacingMobile}em`,
            ['--menu-close-fs-m' as any]: `${menuDrawerCloseFontSizeMobile}px`,
            ['--menu-close-tracking-m' as any]: `${menuDrawerCloseLetterSpacingMobile}em`,
          }}
        >
          <div className="m-drawer">
            <div className="m-header">
              <button
                type="button"
                className="m-close"
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
              >
                CLOSE
              </button>
              <a className="m-brand" href="/">
                <Image
                  src="/assets/img/logotipo.png"
                  alt="Siamo Design"
                  width={140}
                  height={brandLogoHeightMobile}
                  priority={false}
                  style={{ width: "auto", height: `${brandLogoHeightMobile}px` }}
                />
              </a>
            </div>
            <nav className="m-nav" aria-label="Mobile menu">
              <a className="m-link" href="/get-to-know-us" onClick={() => setMenuOpen(false)}>GET TO KNOW US</a>
              <Link className="m-link" href="/services" onClick={() => setMenuOpen(false)}>SERVICES</Link>
              <a className="m-link" href="/portfolio" onClick={() => setMenuOpen(false)}>PORTFOLIO</a>
            </nav>
            <div className="m-follow-label">Follow</div>
            <div
              className="m-social"
              aria-label="Redes sociales"
              style={mobileDrawerSocialStyles.container}
            >
              <a
                className="m-social__link"
                href="https://www.linkedin.com"
                  aria-label="LinkedIn"
                  style={mobileDrawerSocialStyles.link}
                >
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    style={mobileDrawerSocialStyles.icon}
                  >
                    <path d="M6.5 9h2.9v9H6.5V9Zm1.4-4.5a1.7 1.7 0 1 1 0 3.4 1.7 1.7 0 0 1 0-3.4ZM10.8 9h2.8v1.2h.1c.4-.8 1.4-1.6 2.9-1.6 3.1 0 3.7 2 3.7 4.6V18h-2.9v-4.2c0-1-.1-2.3-1.5-2.3-1.5 0-1.8 1.1-1.8 2.2V18h-2.9V9Z" />
                  </svg>
                </a>
              <a
                className="m-social__link"
                href="https://www.facebook.com"
                aria-label="Facebook"
                style={mobileDrawerSocialStyles.link}
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  style={mobileDrawerSocialStyles.icon}
                >
                  <path d="M13 10.5V8.4c0-.8.1-1.2 1.3-1.2H16V5h-2.5C10.9 5 10 6.5 10 8.2v2.3H8v2.2h2V19h3V12.7h2.2l.3-2.2H13Z" />
                </svg>
              </a>
                <a
                  className="m-social__link"
                  href="https://www.youtube.com"
                  aria-label="YouTube"
                  style={mobileDrawerSocialStyles.link}
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  style={mobileDrawerSocialStyles.icon}
                >
                  <path d="M21.7 8.2s-.2-1.5-.8-2.2c-.7-.8-1.5-.8-1.8-.9C16.2 5 12 5 12 5h0s-4.2 0-7.1.1c-.3 0-1.1 0-1.8.9-.6.7-.8 2.2-.8 2.2S2 9.9 2 11.6v.8c0 1.7.2 3.4.2 3.4s.2 1.5.8 2.2c.7.8 1.7.8 2.2.9 1.6.2 6.8.2 6.8.2s4.2 0 7.1-.1c.3 0 1.1 0 1.8-.9.6-.7.8-2.2.8-2.2s.2-1.7.2-3.4v-.8c0-1.7-.2-3.4-.2-3.4Z" />
                  <path d="m10 9.8 4.7 2.2L10 14.2V9.8Z" fill="#fff"/>
                </svg>
              </a>
              <a
                className="m-social__link"
                href="https://www.tiktok.com"
                aria-label="TikTok"
                style={mobileDrawerSocialStyles.link}
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  style={mobileDrawerSocialStyles.icon}
                >
                  <path d="M15.5 4.2c.6.8 1.5 1.3 2.5 1.3h.4v2.5c-.9 0-1.8-.2-2.6-.6v5.5a5.08 5.08 0 1 1-5.1-5.1c.3 0 .6 0 .9.1v2.7a2.4 2.4 0 0 0-.9-.2 2.38 2.38 0 1 0 2.38 2.4V3h2.5v1.2Z" />
                </svg>
              </a>
              <a
                className="m-social__link"
                href="https://www.instagram.com/siamo_design/"
                aria-label="Instagram"
                style={mobileDrawerSocialStyles.link}
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  style={mobileDrawerSocialStyles.icon}
                >
                  <path d="M7.2 4.5h9.6A2.7 2.7 0 0 1 19.5 7v9.6a2.7 2.7 0 0 1-2.7 2.7H7.2A2.7 2.7 0 0 1 4.5 16.6V7a2.7 2.7 0 0 1 2.7-2.7Zm0-1.5A4.2 4.2 0 0 0 3 7v9.6A4.2 4.2 0 0 0 7.2 20.8h9.6A4.2 4.2 0 0 0 21 16.6V7a4.2 4.2 0 0 0-4.2-4.2H7.2Z" />
                  <path d="M12 8.4A3.6 3.6 0 1 1 8.4 12 3.6 3.6 0 0 1 12 8.4Zm0-1.5A5.1 5.1 0 1 0 17.1 12 5.1 5.1 0 0 0 12 6.9Z" />
                  <circle cx="17.4" cy="6.6" r="1"/>
                </svg>
              </a>
            </div>
            <p className={`m-cta-label ${playfairFont.className}`}>Have a project in mind?</p>
            <a className="m-cta" href="#book">
              GET STARTED <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </nav>


        {renderFallback && (
          <div
            className={`hero-fallback${parallaxReady ? " is-hiding" : ""}`}
            aria-hidden="true"
            style={{
              backgroundImage: `url("${heroBgCurrent}")`,
              backgroundPosition: `${heroBgPosXCurrent}% 50%`,
            }}
          >
            <div className="hero-fallback__scrim" />
          </div>
      )}

      <div
        id="scroll-animate"
        ref={rootRef}
        style={{
          ['--hero-title-fs' as any]: `${titlePx}px`,
          ...(titleMobilePx != null ? ({ ['--hero-title-fs-m' as any]: `${titleMobilePx}px` }) : {}),
          ['--hero-letter-spacing' as any]: `${heroLetterSpacing}em`,
          ['--hero-line-height' as any]: `${heroLineHeight}`,
          ['--hero-word-spacing' as any]: `${heroWordSpacing}em`,
          ['--wwd-title-fs' as any]: `${wwdTitleFs}px`,
          ['--wwd-title-w'  as any]: `${wwdTitleW}`,
          ['--nav-title-fs' as any]: `${navTitleFs}px`,
          ['--nav-title-fs-m' as any]: `${navTitleFsMobile}px`,
          ['--brand-fs' as any]: `${brandFontSize}px`,
          ['--brand-fs-m' as any]: `${brandFontSizeMobile}px`,
          ['--nav-cta-padx' as any]: `${navCtaPadX}px`,
          ['--nav-cta-pady' as any]: `${navCtaPadY}px`,
          ['--nav-cta-bg'   as any]: `${navCtaBg}`,
          ['--nav-cta-ink'  as any]: `${navCtaInk}`,
          ['--nav-cta-bg-hover' as any]: `${(navCtaBgHover || navCtaBg)}`,
          ['--hero-cta-fs-m' as any]: `${heroCtaFontSizeMobile}px`,
          ['--hero-cta-padx-m' as any]: `${heroCtaPadXMobile}px`,
          ['--hero-cta-pady-m' as any]: `${heroCtaPadYMobile}px`,
          ['--hero-cta-offset-y-m' as any]: `${isMobileViewport ? heroCtaYOffsetMobile : 0}px`,
        }}
      >
        <div
          id="scroll-animate-main"
          ref={mainRef}
          className={!isMobileViewport ? "has-parallax" : ""}
        >
          <div className="wrapper-parallax">
            {/* ⬇ Fondo dinámico recibido por props */}
            <header
              ref={headerRef}
              style={{
              backgroundImage: `url("${heroBgCurrent}")`,
              backgroundPosition: `${heroBgPosXCurrent}% 50%`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundColor: "#F4F2EA",
          ['--hero-subline-gap' as any]: `${heroSublineGap}px`,
          ['--hero-subline-gap-m' as any]: `${heroSublineGapMobile}px`,
          ['--hero-subline-x-m' as any]: `${heroSublineXMobile}px`,
          ['--hero-subline-y-m' as any]: `${heroSublineYMobile}px`,
                ['--hero-subline-w' as any]: `${heroSublineW}`,
                ['--caret-x' as any]: `${caretX}px`,
                ['--caret-y' as any]: `${caretY}px`,
                ['--caret-scale-x' as any]: `${caretScaleX}`,
              }}
            >
              <div className="hero-title">
                <h1 className={`typewriter ${playfairFont.className}`}>
                  {(typewriterEnabled ? typedLines : lines).map((ln, i) => {
                    const showCaret = typewriterEnabled && i === lineIdx;
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
                  Warm, timeless spaces designed for modern living and vacation rentals.
                </p>
                <a
                  className={`hero-cta ${isFinished ? "is-visible" : "is-hidden"}`}
                  href="#book"
                  aria-label="Get started"
                  aria-hidden={!isFinished}
                  tabIndex={isFinished ? 0 : -1}
                  style={
                    isMobileViewport
                      ? {
                          fontSize: `${heroCtaFontSizeMobile}px`,
                          padding: `${heroCtaPadYMobile}px ${heroCtaPadXMobile}px`,
                        }
                      : undefined
                  }
                >
                  GET STARTED <span aria-hidden="true">→</span>
                </a>
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
              ['--wwdH-mobile' as any]: `${aboutHeightPxMobile}px`,
              ['--wwd-block-y-mobile' as any]: `${wwdBlockYMobile}px`,
                ['--wwd-guide-w' as any]: `${wwdGuideW}px`,
                ['--wwd-pad-t' as any]: `${wwdPadTop}px`,
                ['--wwd-pad-t-mobile' as any]: `${wwdPadTopMobile}px`,
                ['--wwd-pad-b' as any]: `${wwdPadBottom}px`,
                ['--wwd-pad-b-mobile' as any]: `${wwdPadBottomMobile}px`,
                ['--centerline-top-offset' as any]: `${centerlineTopOffset}px`,
                ['--centerline-bottom-offset' as any]: `${centerlineBottomOffset}px`,
                ['--centerline-bottom-offset-m' as any]: `${centerlineBottomOffsetMobile}px`,
                ['--wwd-centerline-offset-m' as any]: `${centerlineOffsetMobile}px`,
                ['--virtual-card-mobile-x' as any]: `${wwdVirtualCardXM}px`,
                ['--virtual-card-mobile-y' as any]: `${wwdVirtualCardYM}px`,
              }}
            >
              <div className="wwd-centerline-mobile" aria-hidden="true" />
              <div
                className="container"
              style={{
                ['--wwd-title-x' as any]: `${wwdTitleX}px`,
                ['--wwd-title-y' as any]: `${wwdTitleY}px`,
                ['--wwd-title-x-m' as any]: `${(wwdTitleXMobile != null ? wwdTitleXMobile : wwdTitleX)}px`,
                ['--wwd-title-y-m' as any]: `${(wwdTitleYMobile != null ? wwdTitleYMobile : wwdTitleY)}px`,
                ['--wwd-text-x' as any]: `${wwdTextX}px`,
                ['--wwd-text-y' as any]: `${wwdTextY}px`,
                ['--wwd-text-x-m' as any]: (wwdTextXMobile != null ? `${wwdTextXMobile}px` : undefined),
                ['--wwd-text-y-m' as any]: (wwdTextYMobile != null ? `${wwdTextYMobile}px` : undefined),
                ['--wwd-lead-fs' as any]: `${wwdLeadFs}px`,
                ['--wwd-lead-fs-m' as any]: (wwdLeadFsMobile != null ? `${wwdLeadFsMobile}px` : undefined),
                ['--wwd-lead-maxw-m' as any]: (wwdLeadMaxWMobile != null ? `${wwdLeadMaxWMobile}px` : undefined),
                ['--wwd-title-fs' as any]: `${wwdTitleFs}px`,
                ['--wwd-title-fs-m' as any]: (wwdTitleFsMobile != null ? `${wwdTitleFsMobile}px` : undefined),
                ['--wwd-title-w' as any]: `${wwdTitleW}`,
                ['--wwd-guide-label-gap' as any]: `${wwdGuideLblGap}px`,
                ['--wwd-lbl01-x-m' as any]: `${wwdLbl01XM}px`,
                ['--wwd-lbl01-y-m' as any]: `${wwdLbl01YM}px`,
                ['--wwd-title01-x-m' as any]: `${wwdTitle01XM}px`,
                ['--wwd-title01-y-m' as any]: `${wwdTitle01YM}px`,
                ['--wwd-text-maxw' as any]: `${wwdTextMaxW}px`,
                ['--projects-text-maxw' as any]: `${projectsTextMaxW}px`,
                ['--projects-text-x' as any]: `${projectsTextX}px`,
                ['--projects-text-y' as any]: `${projectsTextY}px`,
                ['--projects-text-y-m' as any]: `${projectsTextYMobile}px`,
                ...(projectsGridGap != null ? ({ ['--projects-grid-gap-override' as any]: `${projectsGridGap}px` }) : {}),
                ...(projectsGridGapMobile != null ? ({ ['--projects-grid-gap-mobile' as any]: `${projectsGridGapMobile}px` }) : {}),
                ['--projects-grid-x' as any]: `${projectsGridX}px`,
                ['--projects-grid-y' as any]: `${projectsGridY}px`,
                ['--projects-col1-x' as any]: `${projectsCol1X}px`,
                ['--projects-col2-x' as any]: `${projectsCol2X}px`,
                ['--projects-col3-x' as any]: `${projectsCol3X}px`,
                ['--projects-col4-x' as any]: `${projectsCol4X}px`,
                ['--projects-card-grow' as any]: `${projectsCardGrow}px`,
                ['--projects-card-size-mobile' as any]: projectsCardSizeMobile != null ? `${projectsCardSizeMobile}px` : undefined,
                ['--projects-carousel-width' as any]: projectsCarouselViewport != null ? `${projectsCarouselViewport}vw` : undefined,
                ['--projects-card-overlap-mobile' as any]: projectsCardOverlapMobile != null ? `${projectsCardOverlapMobile}px` : undefined,
                ['--projects-carousel-x-m' as any]: `${projectsCarouselOffsetXMobile}px`,
                ['--projects-carousel-y-m' as any]: `${projectsCarouselOffsetYMobile}px`,
                ['--projects-block-offset-y' as any]: `${projectsCarouselBlockOffsetYMobile}px`,
                ['--projects-nav-offset-y' as any]: `${projectsCarouselNavOffsetYMobile}px`,
                ['--projects-window-pad' as any]: (projectsCarouselWindowPadMobile != null ? `${projectsCarouselWindowPadMobile}px` : undefined),
                ['--projects-nav-h' as any]: (projectsNavHeightMobile != null ? `${projectsNavHeightMobile}px` : undefined),
                ['--projects-nav-inner-y' as any]: (projectsNavInnerOffsetY != null ? `${projectsNavInnerOffsetY}px` : undefined),
                ['--projects-nav-arrow-y' as any]: (projectsNavArrowOffsetY != null ? `${projectsNavArrowOffsetY}px` : undefined),
                ['--projects-meta-x' as any]: `${projectsMetaX}px`,
                ['--projects-meta-y' as any]: `${projectsMetaY}px`,
                ['--projects-meta-x-m' as any]: (projectsMetaXM != null ? `${projectsMetaXM}px` : undefined),
                ['--projects-meta-y-m' as any]: (projectsMetaYM != null ? `${projectsMetaYM}px` : undefined),
                ['--projects-title-x-m' as any]: (projectsTitleXM != null ? `${projectsTitleXM}px` : undefined),
                ['--projects-title-y-m' as any]: (projectsTitleYM != null ? `${projectsTitleYM}px` : undefined),
                ['--projects-title-maxw-m' as any]: (projectsTitleMaxWM != null ? `${projectsTitleMaxWM}px` : undefined),
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
                ['--wwd-card-w-m' as any]: `${wwdCardWM}px`,
                ['--wwd-card-h-m' as any]: `${wwdCardAspectMobile}px`,
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
                ['--wwd-desc1-x-m' as any]: `${wwdDesc1XM}px`,
                ['--wwd-desc1-y-m' as any]: `${wwdDesc1YM}px`,
                ['--wwd-desc1-maxw-m' as any]: `${wwdDesc1MaxWM}px`,
                ['--wwd-desc2-base-x' as any]: `${desc2BaseX}px`,
                ['--wwd-desc2-base-y' as any]: `${desc2BaseY}px`,
                ['--wwd-desc2-maxw-m' as any]: `${wwdDesc2MaxWM}px`,
                ['--wwd-desc2-mobile-x' as any]: `${desc2MobileX}px`,
                ['--wwd-desc2-mobile-y' as any]: `${desc2MobileY}px`,
                ['--wwd-svc02-x' as any]: `${wwdLbl02MobileX}px`,
                ['--wwd-svc02-y' as any]: `${wwdLbl02MobileY}px`,
                ['--wwd-svc02-title-x' as any]: `${wwdTitle02MobileX}px`,
                ['--wwd-svc02-title-y' as any]: `${wwdTitle02MobileY}px`,
                ['--wwd-svc02-title-maxw' as any]: `${wwdSvc02TitleMaxWM}px`,
                ['--wwd-svc02-maxw' as any]: `${wwdDesc2MaxWM}px`,
                ['--wwd-svc03-x' as any]: `${wwdLbl03MobileX}px`,
                ['--wwd-svc03-y' as any]: `${wwdLbl03MobileY}px`,
                ['--wwd-svc03-title-x' as any]: `${wwdTitle03MobileX}px`,
                ['--wwd-svc03-title-y' as any]: `${wwdTitle03MobileY}px`,
                ['--wwd-svc03-maxw' as any]: `${wwdDesc3MaxWM}px`,
                ['--wwd-onsite-card-x-m' as any]: `${wwdOnsiteCardMX}px`,
                ['--wwd-onsite-card-y-m' as any]: `${wwdOnsiteCardMY}px`,
                ['--wwd-content-card-x-m' as any]: `${wwdContentCardMX}px`,
                ['--wwd-content-card-y-m' as any]: `${wwdContentCardMY}px`,
                ['--wwd-desc3-x' as any]: `${wwdDesc3X}px`,
                ['--wwd-desc3-y' as any]: `${wwdDesc3Y}px`,
                ['--wwd-desc3-mobile-x' as any]: `${wwdDesc3XM}px`,
                ['--wwd-desc3-mobile-y' as any]: `${wwdDesc3YM}px`,
                ['--wwd-desc3-maxw-m' as any]: `${wwdDesc3MaxWM}px`,
                ['--wwd-cta-x' as any]: `${wwdCtaX}px`,
                ['--wwd-cta-y' as any]: `${wwdCtaY}px`,
                ['--wwd-cta-txt-x' as any]: `${wwdCtaTxtX}px`,
                ['--wwd-cta-txt-x-m' as any]: `${wwdCtaTxtXM}px`,
                ['--wwd-cta-txt-y' as any]: `${wwdCtaTxtY}px`,
                ['--wwd-cta1-x' as any]: `${wwdCta1X}px`,
                ['--wwd-cta1-y' as any]: `${wwdCta1Y}px`,
                ['--wwd-cta-mobile-x' as any]: `${wwdCtaMobileX}px`,
                ['--wwd-cta-mobile-y' as any]: `${wwdCtaMobileY}px`,
                ['--wwd-cta-mobile-right-offset' as any]: `${wwdCtaMobileRightOffset}px`,
                ['--wwd-cta3-x' as any]: `${wwdCta3X}px`,
                ['--wwd-cta3-y' as any]: `${wwdCta3Y}px`,
                ['--wwd-cta3-mobile-x' as any]: `${wwdCta3MobileX}px`,
                ['--wwd-cta3-mobile-y' as any]: `${wwdCta3MobileY}px`,
                ['--wwd-cta3-mobile-right-offset' as any]: `${wwdCta3MobileRightOffset}px`,
                ['--wwd-eyebrow1-x' as any]: `${wwdEyebrow1X}px`,
                ['--wwd-eyebrow1-y' as any]: `${wwdEyebrow1Y}px`,
                ['--wwd-eyebrow1-x-m' as any]: `${wwdEyebrow1XM}px`,
                ['--wwd-eyebrow1-y-m' as any]: `${wwdEyebrow1YM}px`,
                ['--wwd-block-y' as any]: `${wwdBlockY}px`,
                ['--about-video-h' as any]: `${aboutVideoH}px`,
                ['--about-video-gap-top' as any]: `${aboutVideoGapTop}px`,
                ['--about-video-y' as any]: `${aboutVideoY}px`,
                ['--about-video-y-m' as any]: `${aboutVideoYMobile}px`,
                ['--about-video-fit' as any]: aboutVideoFit,
                ['--about-video-pos-y' as any]: `${aboutVideoPosY}%`,
                ['--about-video-aspect' as any]: `${aboutVideoAspect}`,
                ['--about-video-overlay' as any]: `${overlayAlpha}`,
                ['--about-hline-gap' as any]: `${aboutHlineGap}px`,
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
                {/* Mobile-only numeric label anchored to the center guide */}
                <span className="mbl-lbl01" aria-hidden="true">01</span>
                {/* Mobile-only subsection title, same font/size as label */}
                <h3 className="mbl-title01 eyebrow" aria-hidden="false">{wwdSecTitle1}</h3>
                <p className={`eyebrow wwd-intro-eyebrow${wwdIntroVisible ? " is-visible" : ""}`}>
                  WHAT WE DO
                </p>

                <p
                  ref={wwdIntroRef}
                  className={`lead wwd-lead wwd-intro-text${wwdIntroVisible ? " is-visible" : ""}`}
                >
                  At Siamo Design, we craft sanctuaries: modern, restorative, unmistakably yours.
                </p>

                <WwdTriptych />
                <div className="wwd-guides-descriptions" aria-hidden="false">
                  <p className="g-desc col1">{wwdDesc1}</p>
                  <Link className="g-cta col1" href="/services">
                    <span className="cta-label">our services</span>
                  </Link>
                  <p className="g-eyebrow col1">projects</p>
                  <div
                    className="wwd-service02-inline"
                    aria-hidden="false"
                    style={{
                      ['--wwd-svc02-x' as any]: `${wwdLbl02MobileX}px`,
                      ['--wwd-svc02-y' as any]: `${wwdLbl02MobileY}px`,
                      ['--wwd-svc02-title-x' as any]: `${wwdTitle02MobileX}px`,
                      ['--wwd-svc02-title-y' as any]: `${wwdTitle02MobileY}px`,
                      ['--wwd-svc02-maxw' as any]: `${wwdDesc2MaxWM}px`,
                    }}
                  >
                    <span className="svc-label">{wwdLbl02}</span>
                    <h3 className="svc-title">{wwdSecTitle2}</h3>
                  </div>

                  <p className="g-desc col2">{wwdDesc2}</p>

                  <p className="g-desc col3">{wwdDesc3}</p>
                  <div
                    className="wwd-service03-inline"
                    aria-hidden="false"
                    style={{
                      ['--wwd-svc03-x' as any]: `${wwdLbl03MobileX}px`,
                      ['--wwd-svc03-y' as any]: `${wwdLbl03MobileY}px`,
                      ['--wwd-svc03-title-x' as any]: `${wwdTitle03MobileX}px`,
                      ['--wwd-svc03-title-y' as any]: `${wwdTitle03MobileY}px`,
                      ['--wwd-svc03-maxw' as any]: `${wwdDesc3MaxWM}px`,
                    }}
                  >
                    <span className="svc-label">{wwdLbl03}</span>
                    <h3 className="svc-title">{wwdSecTitle3}</h3>
                  </div>
                  <a className="g-cta col3" href="/content">
                    <span className="cta-label">watch the latest</span>
                  </a>
                  <a
                    className="g-cta col2 about-cta-mobile"
                    href="/get-to-know-us"
                    aria-label="Get to know us"
                    style={{
                      ['--about-cta-x' as any]: `${aboutCtaX}px`,
                      ['--about-cta-y' as any]: `${aboutCtaY}px`,
                      ['--about-cta-underline-w' as any]: `${aboutCtaUnderlineW}px`,
                      ['--about-cta-line-gap' as any]: `${aboutCtaLineGap}px`,
                      ['--about-cta-txt-x' as any]: `${aboutCtaTxtX}px`,
                      ['--about-cta-txt-y' as any]: `${aboutCtaTxtY}px`,
                      ['--about-cta-txt-y-m' as any]: `${aboutCtaTxtYMobile}px`,
                      ['--about-cta-txt-x-m' as any]: `${aboutCtaTxtXMobile}px`,
                      ['--about-cta-mobile-x' as any]: `${aboutCtaMobileX}px`,
                      ['--about-cta-mobile-y' as any]: `${aboutCtaMobileY}px`,
                      ['--about-cta-mobile-w' as any]: `${aboutCtaMobileWidth}px`,
                      ['--about-cta-mobile-h' as any]: `${aboutCtaMobileHeight}px`,
                      ['--about-cta-mobile-right-offset' as any]: `${aboutCtaMobileRightOffset}px`,
                    }}
                  >
                    <span className="cta-label">{aboutCtaLabel}</span>
                  </a>
                </div>
                <div className="wwd-desc3-mobile" aria-hidden="false">
                  <p>{wwdDesc3}</p>
                </div>
                <p
                  className="wwd-desc3-desktop narrative"
                  aria-hidden="false"
                  style={{
                    ['--wwd-desc3-narrative-desktop-x' as any]: `${wwdNarrativeDesktopX}px`,
                    ['--wwd-desc3-narrative-desktop-y' as any]: `${wwdNarrativeDesktopY}px`,
                    ['--wwd-desc3-narrative-maxw' as any]: `${wwdNarrativeMaxWM}px`,
                  }}
                >
                  WHAT IT'S LIKE TO DESIGN, BUILD, AND SETTLE IN WITH US.
                </p>
                <section
                 
                >
                  {/* === PROJECTS header block === */}
                  <section
                    className="projects-block"
                    id="projects"
                    aria-label="Projects section"
                  >
                    <h2 className="projects-headline lead">
                      We start with who you are and design a space that feels like you.
                    </h2>
                  </section>

                  <div
                    className="projects-mobile-wrapper"
                    style={{ ['--projects-block-offset-y' as any]: `${projectsCarouselBlockOffsetYMobile}px` }}
                  >
                    {/* === PROJECTS grid (4 cuadrantes alineados a las guías) === */}
                    <div className="projects-carousel-window" ref={projectsWindowRef}>
                      <section
                        className="projects-grid"
                        aria-label="Projects grid"
                        ref={projectsTrackRef}
                        style={{ ['--projects-carousel-shift-px' as any]: `${projectsShiftPx}px` }}
                      >
                        {projectCards.map((card, idx) => (
                          <article key={card.href} className={`proj-card col${idx + 1}`}>
                            <a className="proj-hit" href={card.href} aria-label={`Abrir proyecto ${idx + 1}`}>
                              <div className="proj-media">
                                {card.image ? (
                                  <Image
                                    src={card.image}
                                    alt={card.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    style={{ objectFit: "cover" }}
                                  />
                                ) : (
                                  <div className="ph" />
                                )}
                              </div>
                            </a>
                            <div className="proj-meta">
                              <span className="proj-year">{card.year}</span>
                              <h3 className="proj-title">{card.title}</h3>
                            </div>
                          </article>
                        ))}
                      </section>
                    </div>
                    <div className="projects-nav" aria-hidden="false">
                      <button
                        type="button"
                        className="projects-nav__btn"
                        onClick={() => handleProjectsNav(-1)}
                        disabled={projectsPage === 0}
                        aria-label="Ver proyectos anteriores"
                      >
                        ‹
                      </button>
                      <span className="projects-nav__indicator">
                        {String(projectsPage + 1).padStart(2, '0')} | {String(projectsTotalPages).padStart(2, '0')}
                      </span>
                      <button
                        type="button"
                        className="projects-nav__btn"
                        onClick={() => handleProjectsNav(1)}
                        disabled={projectsPage >= projectsTotalPages - 1}
                        aria-label="Ver proyectos siguientes"
                      >
                        ›
                      </button>
                    </div>
                  </div>
                </section>
                <h3
                  className="about-title"
                  style={{
                    ['--about-title-x' as any]: `${aboutTitleX}px`,
                    ['--about-title-y' as any]: `${aboutTitleY}px`,
                    ['--about-title-x-m' as any]: `${aboutTitleXMobile}px`,
                    ['--about-title-y-m' as any]: `${aboutTitleYMobile}px`,
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
                    ['--about-caption-x-m' as any]: `${aboutCaptionXMobile}px`,
                    ['--about-caption-y-m' as any]: `${aboutCaptionYMobile}px`,
                    ['--about-caption-shift-y' as any]: `${aboutCaptionShiftY}px`,
                    ['--about-caption-gap' as any]: `${aboutCaptionGap}px`,
                  }}
                >
                  {aboutCaption}
                </p>
                <a
                  className="about-cta desktop-only"
                  href="/get-to-know-us"
                  aria-label="Get to know us"
                  style={{
                    ['--about-cta-x' as any]: `${aboutCtaX}px`,
                    ['--about-cta-y' as any]: `${aboutCtaY}px`,
                    ['--about-cta-underline-w' as any]: `${aboutCtaUnderlineW}px`,
                    ['--about-cta-line-gap' as any]: `${aboutCtaLineGap}px`,
                    ['--about-cta-txt-x' as any]: `${aboutCtaTxtX}px`,
                    ['--about-cta-txt-y' as any]: `${aboutCtaTxtY}px`,
                    ['--about-cta-txt-y-m' as any]: `${aboutCtaTxtYMobile}px`,
                    ['--about-cta-txt-x-m' as any]: `${aboutCtaTxtXMobile}px`,
                    ['--about-cta-mobile-x' as any]: `${aboutCtaMobileX}px`,
                    ['--about-cta-mobile-y' as any]: `${aboutCtaMobileY}px`,
                    ['--about-cta-mobile-w' as any]: `${aboutCtaMobileWidth}px`,
                    ['--about-cta-mobile-h' as any]: `${aboutCtaMobileHeight}px`,
                    ['--about-cta-mobile-right-offset' as any]: `${aboutCtaMobileRightOffset}px`,
                  }}
                >
                  <span className="cta-label">{aboutCtaLabel}</span>
                </a>
                {/* === FULL‑BLEED ABOUT VIDEO (with guide overlays) === */}
                <div className="wwd-fullvideo" aria-label="About video" ref={aboutVideoWrapRef}>
                  <div className={`about-video__media${isMobileViewport && !aboutVideoPlaying ? " has-poster" : ""}`}>
                    {isMobileViewport && !aboutVideoPlaying && (
                      <div className="about-video__poster" aria-hidden="true">
                        <Image
                          src={aboutVideoPoster || "/assets/videos/about-thumb.webp"}
                          alt=""
                          fill
                          sizes="100vw"
                          loading="lazy"
                        />
                      </div>
                    )}
                    <video
                      className="about-video"
                      ref={aboutVideoRef}
                      muted
                      loop
                      playsInline
                      preload="none"
                      controls={isMobileViewport ? aboutVideoPlaying : false}
                      poster={aboutVideoPoster || "/assets/videos/about-thumb.webp"}
                    >
                      <source src={aboutVideoSrc} type="video/mp4" />
                    </video>
                    {isMobileViewport && !aboutVideoPlaying && (
                      <button
                        type="button"
                        className="about-play"
                        aria-label="Reproducir video About"
                        onClick={playAboutVideo}
                      >
                        <span className="about-play__icon" aria-hidden="true">▶</span>
                      </button>
                    )}
                  </div>
                  <div className="frame-x" aria-hidden="true"></div>
                </div>
                {/* === TESTIMONIALS REEL (below the horizontal line; guides already stopped) === */}
                <section
                  className="testimonials"
                  id="testimonials"
                aria-label="Client testimonials"
                style={{
                  marginLeft: `${testiSectionOffsetXCurrent}px`,
                  marginTop: `${testiSectionOffsetYCurrent}px`,
                  ['--testi-block-offset-x' as any]: `${testiBlockOffsetXCurrent}px`,
                  ['--testi-block-offset-y' as any]: `${testiBlockOffsetYCurrent}px`,
                  ['--testi-title-desktop-x' as any]: `${testiTitleX}px`,
                  ['--testi-title-desktop-y' as any]: `${testiTitleY}px`,
                  ['--testi-title-mobile-x' as any]: `${testiTitleXMobile - testiTitleX}px`,
                  ['--testi-title-mobile-y' as any]: `${testiTitleYMobile - testiTitleY}px`,
                  ['--testi-title-offset-x' as any]: `${testiTitleOffsetXCurrent}px`,
                  ['--testi-title-offset-y' as any]: `${testiTitleOffsetYCurrent}px`,
                  ['--testi-hline-gap' as any]: `${testiHlineGap}px`,
                  ['--testi-hline-gap-m' as any]: `${testiHlineGapMobile}px`,
                  ['--testi-hline-x' as any]: `${testiHlineX}px`,
                  ['--testi-hline-y' as any]: `${testiHlineY}px`,
                  ['--testi-hline-x-m' as any]: `${testiHlineXMobile}px`,
                  ['--testi-hline-y-m' as any]: `${testiHlineYMobile}px`,
                  ['--testi-subtitle-offset-y' as any]: `${testiSubtitleOffsetY}px`,
                  ['--testi-reel-gap' as any]: `${testiReelGap}px`,
                  ['--testi-reel-gap-m' as any]: `${testiReelGapMobile}px`,
                }}
                >
                  <div className="testi-block">
                    <h2 className="lead testi-title" aria-label="Hear from our customers">
                      HEAR FROM OUR CUSTOMERS
                    </h2>
                    <p className="testi-subtitle" aria-label="Client testimonials intro">
                      IN THEIR WORDS
                    </p>
                    <TestimonialReel
                    videos={[
                      "/assets/videos/testimonials.mp4",
                      "/assets/videos/capitulo1.mp4",
                      "/assets/videos/capitulo2.mp4",
                    ]}
                    posters={[
                      "/assets/videos/testimonials-thumb.webp",
                      "/assets/videos/capitulo1-thumb.jpg",
                      "/assets/videos/capitulo2-thumb.jpg",
                    ]}
                    quotes={[
                      {
                        quote:
                          "Seamless process, stunning results. I felt heard at every step and the outcome exceeded expectations.",
                        author: "LAURA",
                      },
                      {
                        quote:
                          "From creating the perfect layout to finding pieces I absolutely loved, my designer really took my space to the next level. I never dreamed my home could look — and feel — this good!",
                        author: "JAN",
                      },
                      {
                        quote:
                          "They captured exactly what I wanted and made the process effortless. The space finally feels like home.",
                        author: "MATT",
                      },
                    ]}
                    varsStyle={{
                      ['--reel-w' as any]: `${reelW}px`,
                      ['--reel-w-m' as any]: `${reelWMobile || reelW}px`,
                      ['--reel-h' as any]: `${reelH}px`,
                      ['--reel-h-m' as any]: `${reelHMobile || reelH}px`,
                      ['--reel-gap' as any]: `${reelGap}px`,
                      ['--reel-side-scale' as any]: `${reelSideScale}`,
                      ['--reel-side-opacity' as any]: `${reelSideOpacity}`,
                      ['--reel-arrow-size' as any]: `${reelArrowSize}px`,
                      ['--reel-arrow-offset' as any]: `${reelArrowOffset}px`,
                      ['--reel-box-grow' as any]: `${reelBoxGrow}px`,
                      ['--reel-box-grow-m' as any]: `${reelBoxGrowMobile ?? reelBoxGrow}px`,
                      ['--reel-scale-m' as any]: `${reelScaleMobile}`,
                      ['--reel-right-extra-m' as any]: `${reelRightExtraMobile || 0}px`,
                      ['--reel-radius' as any]: `${reelRadius}px`,
                      ['--reel-nav-width-m' as any]: `${reelNavWidthMobile}vw`,
                      ['--reel-nav-x-m' as any]: `${reelNavXMobile}px`,
                      ['--reel-nav-y-m' as any]: `${reelNavYMobile}px`,
                      ['--reel-quote-x' as any]: `${reelQuoteX}px`,
                      ['--reel-quote-y' as any]: `${reelQuoteY}px`,
                      ['--reel-quote-x-m' as any]: `${reelQuoteXMobile}px`,
                      ['--reel-quote-y-m' as any]: `${reelQuoteYMobile}px`,
                      ['--reel-aside-w' as any]: `${testiAsideW}px`,
                      ['--reel-thumbs-x' as any]: `${reelThumbsX}px`,
                      ['--reel-thumbs-y' as any]: `${reelThumbsY}px`,
                    }}
                  />
                  </div>
                  <div className="testi-hline" role="separator" aria-hidden="true"></div>
                </section>

                {/* === FOLLOW (below testimonials line) === */}
                <section
                  className="follow"
                  id="follow"
                  aria-label="Follow us on Instagram"
                  style={{
                    ['--follow-x' as any]: `${followX}px`,
                    ['--follow-y' as any]: `${followY}px`,
                    ['--follow-gap' as any]: `${followGap}px`,
                    ['--follow-gap-m' as any]: `${followGapMobile}px`,
                    ['--follow-cards-gap-m' as any]: `${followCardsGapMobile}px`,
                    ['--follow-maxw' as any]: `${followMaxW}px`,
                    ['--follow-maxw-m' as any]: `${followMaxWMobile}px`,
                    ['--follow-card-w-m' as any]: `${followCardSizeMobile}px`,
                    ['--follow-cols' as any]: `${followCols}`,
                    ['--follow-card-grow' as any]: `${followCardGrow}px`,
                    ...(followCardGap != null
                      ? ({ ['--follow-card-gap' as any]: `${followCardGap}px` })
                      : {}),
                    ...(followGapTotal
                      ? ({ ['--follow-gap-total' as any]: `${followGapTotal}px` })
                      : {}),
                  }}
                >
                  <h2
                    className="follow-title lead"
                    style={{
                    ['--follow-title-x' as any]: `${followTitleX}px`,
                    ['--follow-title-y' as any]: `${followTitleY}px`,
                    ['--follow-title-x-m' as any]: `${followTitleXMobile}px`,
                    ['--follow-title-y-m' as any]: `${followTitleYMobile}px`,
                  }}
                  >
                    <span className="follow-label">Follow</span>
                    <a
                      className="follow-handle"
                      href={`https://www.instagram.com/${(followHandle || '').replace(/^@/, '') || 'siamo_design'}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open Instagram ${(followHandle || '').replace(/^@/, '') || 'siamo_design'}`}
                    >
                      {followHandle}
                    </a>
                  </h2>

                  <div
                    className="follow-grid"
                    role="list"
                    aria-label="Latest posts"
                    style={{
                      ['--follow-grid-x-m' as any]: `${followGridXMobile}px`,
                      ['--follow-grid-y-m' as any]: `${followGridYMobile}px`,
                      ['--follow-grid-x' as any]: `${followGridX}px`,
                    }}
                  >
                    {followGridItems.map((src, i) => {
                        const hasMedia = typeof src === "string" && src.length > 0;
                        if (hasMedia) {
                          return (
                            <a
                              key={i}
                              className="f-item"
                              role="listitem"
                              href={src}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`Open post ${i + 1}`}
                            >
                              <img src={src} alt="" loading="lazy" />
                            </a>
                          );
                        }

                        return (
                          <span
                            key={i}
                            className="f-item is-fallback"
                            role="listitem"
                            aria-label={`Placeholder post ${i + 1}`}
                            aria-disabled="true"
                          >
                            <span className="ph" aria-hidden="true" />
                          </span>
                        );
                      })}
                  </div>
                </section>

                <div
                  className="wwd-footer-spacer"
                  aria-hidden="true"
                  style={{ ['--wwd-footer-spacer-m' as any]: `${wwdFooterSpacerMobile}px` }}
                />
              </div>
            </section>

            <footer
              ref={footerRef}
              style={{
                ['--footer-lift' as any]: `${footerLift}px`,
                ['--footer-overlap' as any]: `${footerOverlap}px`,
                ['--footer-pad-top-mobile' as any]: `${footerPadTopMobile}px`,
                ['--footer-pad-bottom-mobile' as any]: `${footerPadBottomMobile}px`,
                ['--footer-overlap-mobile' as any]: `${footerOverlapMobile}px`,
                ['--footer-h' as any]: `${footerH}px`,
                ['--footer-bottom-maxw' as any]: `${footerBottomMaxW}px`,
              }}
            >
              <div className="footer-inner">
                <section className="footer-seo" aria-label="Service areas and keyword index">
                  {resolvedIsMobile ? (
                    <>
                      {renderFooterExplore()}
                      {renderFooterLegal()}
                    </>
                  ) : (
                    <>
                      <ul className="seo-col">
                        <li><span className="check" aria-hidden="true">✓</span> Interior design playa del carmen</li>
                        <li><span className="check" aria-hidden="true">✓</span> Interior design services playa del carmen</li>
                        <li><span className="check" aria-hidden="true">✓</span> Home staging playa del carmen</li>
                        <li><span className="check" aria-hidden="true">✓</span> Commercial interior design playa del carmen</li>
                      </ul>
                      <ul className="seo-col">
                        <li><span className="check" aria-hidden="true">✓</span> Interior design riviera maya</li>
                        <li><span className="check" aria-hidden="true">✓</span> Interior designers and decorators riviera maya</li>
                        <li><span className="check" aria-hidden="true">✓</span> Home staging riviera maya</li>
                        <li><span className="check" aria-hidden="true">✓</span> Commercial interior design riviera maya</li>
                      </ul>
                      <ul className="seo-col">
                        <li><span className="check" aria-hidden="true">✓</span> Interior design Cancun</li>
                        <li><span className="check" aria-hidden="true">✓</span> Interior designers and decorators Cancun</li>
                        <li><span className="check" aria-hidden="true">✓</span> Home staging Cancun</li>
                        <li><span className="check" aria-hidden="true">✓</span> Commercial interior design Cancun</li>
                      </ul>
                      <ul className="seo-col">
                        <li><span className="check" aria-hidden="true">✓</span> Interior design tulum</li>
                        <li><span className="check" aria-hidden="true">✓</span> Interior design services tulum</li>
                        <li><span className="check" aria-hidden="true">✓</span> Interior designers and decorators tulum</li>
                        <li><span className="check" aria-hidden="true">✓</span> Home staging tulum</li>
                        <li><span className="check" aria-hidden="true">✓</span> Commercial interior design tulum</li>
                      </ul>
                    </>
                  )}
                </section>

                {!resolvedIsMobile && (
                  <>
                    {renderFooterExplore()}
                    {renderFooterLegal()}
                  </>
                )}
              </div>
            </footer>
         </div>
       </div>
      </div>

      {/* ==== CSS idéntico al tuyo, salvo el header (quitamos el background fijo en CSS) ==== */}



    </>
  );
}
