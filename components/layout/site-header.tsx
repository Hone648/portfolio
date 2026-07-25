import Link from "next/link";
import { siteContent } from "@/content/site-content";
import { PageContainer } from "./page-container";
import styles from "./site-header.module.css";

export function SiteHeader() {
  return (
    <header className={styles.header}>
      <PageContainer className={styles.inner}>
        <Link className={styles.brand} href="/">
          <span className={styles.brandName}>{siteContent.name}</span>
          <span className={styles.brandLabel}>Portfolio</span>
        </Link>
        <nav aria-label="Primary navigation" className={styles.nav}>
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/about">About</Link>
          <Link href="/resume">Resume</Link>
          <Link href="/contact">Contact</Link>
          <a href={siteContent.github.href}>GitHub</a>
        </nav>
      </PageContainer>
    </header>
  );
}
