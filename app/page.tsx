import { PageContainer } from "@/components/layout/page-container";
import { ButtonLink } from "@/components/ui/button-link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <PageContainer className={styles.home}>
      <p className={styles.eyebrow}>Portfolio shell preview</p>
      <h1 className={styles.title}>Hunter Kam</h1>
      <p className={styles.positioning}>
        Computer Science student and full-stack developer building production
        web applications, operational business systems, and local automation
        infrastructure.
      </p>
      <p className={styles.status}>
        Detailed project case studies will be added incrementally in later
        slices.
      </p>
      <div className={styles.actions}>
        <ButtonLink href="https://github.com/Hone648" external>
          View GitHub Profile
        </ButtonLink>
      </div>
    </PageContainer>
  );
}
