import { PageContainer } from "./page-container";
import styles from "./site-footer.module.css";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <PageContainer className={styles.inner}>
        <p>&copy; {year} Hunter Kam</p>
        <a href="https://github.com/Hone648">GitHub profile</a>
      </PageContainer>
    </footer>
  );
}
