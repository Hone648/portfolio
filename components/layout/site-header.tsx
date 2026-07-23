import Link from "next/link";
import { PageContainer } from "./page-container";
import styles from "./site-header.module.css";

export function SiteHeader() {
  return (
    <header className={styles.header}>
      <PageContainer className={styles.inner}>
        <Link className={styles.brand} href="/">
          <span className={styles.brandName}>Hunter Kam</span>
          <span className={styles.brandLabel}>Portfolio</span>
        </Link>
        <nav aria-label="Primary navigation" className={styles.nav}>
          <Link href="/">Home</Link>
          <a href="https://github.com/Hone648">GitHub</a>
        </nav>
      </PageContainer>
    </header>
  );
}
