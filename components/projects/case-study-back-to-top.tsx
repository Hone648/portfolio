"use client";

import { useEffect, useState } from "react";
import styles from "./case-study-back-to-top.module.css";

type CaseStudyBackToTopProps = {
  readonly targetId: string;
};

export function CaseStudyBackToTop({ targetId }: CaseStudyBackToTopProps) {
  const [isPastHeader, setIsPastHeader] = useState(false);

  useEffect(() => {
    const target = document.getElementById(targetId);

    if (!target) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsPastHeader(
          !entry.isIntersecting && entry.boundingClientRect.top < 0,
        );
      },
      { threshold: 0 },
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [targetId]);

  const returnToTop = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const target = document.getElementById(targetId);

    if (!target) {
      return;
    }

    // Native anchor navigation stays the fallback; this only replaces the jump
    // with a scroll the reader has not asked to have animated away.
    event.preventDefault();
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
    target.focus({ preventScroll: true });
  };

  return (
    <div className={styles.rail}>
      <a
        className={styles.control}
        href={`#${targetId}`}
        data-visible={isPastHeader ? "true" : "false"}
        onClick={returnToTop}
      >
        <svg
          className={styles.icon}
          viewBox="0 0 12 12"
          aria-hidden="true"
          focusable="false"
        >
          <path
            d="M6 10.5V2.2M6 2.2 2.2 6M6 2.2 9.8 6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          />
        </svg>
        Back to top
      </a>
    </div>
  );
}
