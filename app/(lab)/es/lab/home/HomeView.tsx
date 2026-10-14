import Link from "next/link";
import { getContent, type Locale, type RouteMode } from "./localized";
import Hero from "./Hero";
import MotionSurface from "./MotionSurface";
import { SpaceDoctors, Projects, About, Follow, Footer } from "./Sections";
import { Testimonials } from "./Interactions";
import { homeFontClasses } from "./typography";
import styles from "./home.module.css";

export default function HomeView({ locale = "es", routeMode = "public" }: { locale?: Locale; routeMode?: RouteMode }) {
  const SkipLink = routeMode === "public" ? Link : "a";
  const skipProps = routeMode === "public" ? { prefetch: false } : {};
  const copy = getContent(locale, routeMode);
  return <div className={`${styles.page} ${homeFontClasses}`}><SkipLink {...skipProps} className={styles.skipLink} href="#home-lab-main">{copy.skip}</SkipLink><Hero locale={locale} routeMode={routeMode} />
    <MotionSurface><main id="home-lab-main" tabIndex={-1}><SpaceDoctors locale={locale} routeMode={routeMode} /><Projects locale={locale} routeMode={routeMode} /><About locale={locale} routeMode={routeMode} /><Testimonials locale={locale} /><Follow locale={locale} /></main><Footer locale={locale} routeMode={routeMode} /></MotionSurface></div>;
}
