import styles from "./Hero.module.css";

export default function ActionIcon() {
  return <span className={styles.ctaIcon} aria-hidden="true">
          {[0, 1].map(icon => <span className={styles.ctaArrow} key={icon}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 17">
              <path fill="currentColor" fillRule="evenodd" d="M8.93 11.317a.333.333 0 0 1 0-.471l2.43-2.431-2.43-2.43a.333.333 0 0 1 .471-.472l2.667 2.666c.13.13.13.342 0 .472L9.4 11.317a.333.333 0 0 1-.471 0" clipRule="evenodd" />
              <path fill="currentColor" fillRule="evenodd" d="M4.832 8.416c0-.184.15-.334.333-.334h6.667a.333.333 0 1 1 0 .667H5.165a.333.333 0 0 1-.333-.333" clipRule="evenodd" />
            </svg>
          </span>)}
        </span>;
}

