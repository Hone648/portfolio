import Link from "next/link";
import { PageContainer } from "@/components/layout/page-container";
import { ProjectGrid } from "@/components/projects/project-grid";
import { ButtonLink } from "@/components/ui/button-link";
import { siteContent } from "@/content/site-content";
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
        <p className={styles.identity}>{siteContent.portfolioIdentity}</p>
        <p className={styles.positioning}>{siteContent.home.supportingPosition}</p>
        <p className={styles.supportingCopy}>
          {siteContent.home.supportingCopy}
        </p>
        <div className={styles.actions}>
          <ButtonLink href="/projects">View engineering work</ButtonLink>
          <ButtonLink href="/resume" variant="secondary">
            View resume
          </ButtonLink>
          <ButtonLink
            href="https://github.com/Hone648"
            external
            variant="secondary"
          >
            View GitHub profile
          </ButtonLink>
        </div>
      </section>

      <section
        className={styles.engineeringRange}
        aria-labelledby="engineering-range"
      >
        <div className={styles.sectionHeading}>
          <div>
            <p className={styles.eyebrow}>Evidence pillars</p>
            <h2 id="engineering-range">Engineering range</h2>
          </div>
          <p>
            Software, systems integration, automation, and prior technical
            systems work are presented as complementary strengths with distinct
            evidence boundaries.
          </p>
        </div>
        <ul className={styles.rangeGrid}>
          {siteContent.home.engineeringRange.map((pillar) => (
            <li className={styles.rangeItem} key={pillar.title}>
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.selectedWork} aria-labelledby="selected-work">
        <div className={styles.sectionHeading}>
          <div>
            <p className={styles.eyebrow}>Featured projects</p>
            <h2 id="selected-work">Selected work</h2>
          </div>
          <p>
            A live budgeting application, a business workflow system in
            development, and an operational home automation and security
            environment. <Link href="/projects">View projects</Link>
          </p>
        </div>
        <ProjectGrid projects={featuredProjects} variant="featured" />
        <ButtonLink href="/projects" variant="secondary">
          View all projects
        </ButtonLink>
      </section>

      <section
        className={styles.technicalFoundation}
        aria-labelledby="technical-foundation"
      >
        <div>
          <p className={styles.eyebrow}>Experience signal</p>
          <h2 id="technical-foundation">Technical foundation</h2>
        </div>
        <div className={styles.foundationCopy}>
          <p>{siteContent.home.technicalFoundation}</p>
          <ButtonLink
            href="/resume#selected-technical-experience"
            variant="secondary"
          >
            View technical experience
          </ButtonLink>
        </div>
      </section>

      <section className={styles.approach} aria-labelledby="delivery-approach">
        <h2 id="delivery-approach">Delivery approach</h2>
        <ul>
          <li>Build around real workflows and practical problems.</li>
          <li>Deliver changes in focused, reviewable increments.</li>
          <li>Validate behavior through tests, builds, and hands-on review.</li>
          <li>
            Troubleshoot across application, service, container, host, and
            network boundaries.
          </li>
        </ul>
      </section>
    </PageContainer>
  );
}
