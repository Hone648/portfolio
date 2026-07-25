import Link from "next/link";
import { siteContent } from "@/content/site-content";
import { PageContainer } from "./page-container";
import styles from "./site-footer.module.css";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <PageContainer className={styles.inner}>
        <p>&copy; {year} {siteContent.name}</p>
        <nav aria-label="Footer navigation" className={styles.links}>
          <Link href="/contact">Contact</Link>
          <a href={siteContent.github.href}>{siteContent.github.label}</a>
        </nav>
      </PageContainer>
    </footer>
  );
}
