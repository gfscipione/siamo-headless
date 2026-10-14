import type { ReactNode } from "react";
import styles from "./home.module.css";

// Native scrolling moves the content over the fixed hero without translating
// the entire page (including video and text) on every animation frame.
export default function MotionSurface({ children }: { children: ReactNode }) {
  return <div className={styles.surfaceTrack}><div className={styles.surface} data-home-lab-surface>{children}</div></div>;
}
