import { PageContainer } from "@/components/layout/page-container";
import { ProjectGrid } from "@/components/projects/project-grid";
import { ButtonLink } from "@/components/ui/button-link";
import { getFeaturedProjects } from "@/lib/projects";
import styles from "./page.module.css";

export default function Home() {
  const featuredProjects = getFeaturedProjects();

  return (
    <PageContainer className={styles.home}>
      <section className={styles.introduction} aria-labelledby="home-title">
        <p className={styles.eyebrow}>Portfolio</p>
        <h1 className={styles.title} id="home-title">
          Hunter Kam
        </h1>
        <p className={styles.positioning}>
          Computer Science student and full-stack developer building production
          web applications, operational business systems, and local automation
          infrastructure.
        </p>
        <p className={styles.supportingCopy}>
          This portfolio focuses on working systems, the decisions behind them,
          and the boundaries of what each project demonstrates.
        </p>
        <div className={styles.actions}>
          <ButtonLink href="/projects">Explore Projects</ButtonLink>
          <ButtonLink
            href="https://github.com/Hone648"
            external
            variant="secondary"
          >
            View GitHub Profile
          </ButtonLink>
        </div>
      </section>

      <section className={styles.selectedWork} aria-labelledby="selected-work">
        <div className={styles.sectionHeading}>
          <div>
            <p className={styles.eyebrow}>Evidence-aware portfolio</p>
            <h2 id="selected-work">Selected work</h2>
          </div>
          <p>
            Classifications reflect current evidence. Full scope boundaries and
            limitations are documented on the Projects page.
          </p>
        </div>
        <ProjectGrid projects={featuredProjects} variant="featured" />
        <ButtonLink href="/projects" variant="secondary">
          Review All Project Details
        </ButtonLink>
      </section>

      <section className={styles.approach} aria-labelledby="delivery-approach">
        <h2 id="delivery-approach">Delivery approach</h2>
        <ul>
          <li>Ground claims in implementation and operational evidence.</li>
          <li>Deliver guarded, reviewable changes in focused increments.</li>
          <li>
            Keep production, active-development, and operational-lab work
            clearly distinguished.
          </li>
        </ul>
      </section>
    </PageContainer>
  );
}
