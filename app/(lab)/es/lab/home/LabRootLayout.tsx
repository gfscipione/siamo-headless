import { homeFontClasses } from "./typography";
import styles from "./home.module.css";

// A separate root layout deliberately excludes the existing global CSS and trackers.
export function LabRootLayout({ children, locale = "es" }: { children: React.ReactNode; locale?: "es" | "en" }) {
  return <html lang={locale}><body className={`${styles.body} ${homeFontClasses}`}>{children}</body></html>;
}
