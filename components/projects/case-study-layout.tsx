import Link from "next/link";
import { PageContainer } from "@/components/layout/page-container";
import { ButtonLink } from "@/components/ui/button-link";
import { StatusBadge } from "@/components/ui/status-badge";
import type { Project } from "@/content/project-metadata";
import styles from "./case-study-layout.module.css";

type CaseStudyLayoutProps = {
  project: Project;
  children: React.ReactNode;
};

function RepositoryNote({ project }: { project: Project }) {
  if (project.repository.visibility === "public") {
    return (
      <a href={project.repository.href}>
        {project.repository.name} public source repository
      </a>
    );
  }

  if (project.repository.visibility === "private") {
    return (
      <>
        Private source repository; public evidence is presented through
        sanitized project documentation.
      </>
    );
  }

  return (
    <>Current system evidence is documented through sanitized project artifacts.</>
  );
}

export function CaseStudyLayout({
  project,
  children,
}: CaseStudyLayoutProps) {
  const liveLink = project.links.find((link) => link.kind === "live");

  return (
    <PageContainer className={styles.page}>
      <article className={styles.article}>
        <Link className={styles.backLink} href="/projects">
          Back to Projects
        </Link>

        <header className={styles.header}>
          <p className={styles.eyebrow}>Case study</p>
          <div className={styles.titleRow}>
            <h1>{project.name}</h1>
            <StatusBadge status={project.status} />
          </div>
          <p className={styles.summary}>{project.summary}</p>
          {liveLink ? (
            <ButtonLink href={liveLink.href} external>
              {liveLink.label}
            </ButtonLink>
          ) : null}
        </header>

        <section className={styles.overview} aria-labelledby="project-overview">
          <h2 id="project-overview">Project overview</h2>
          <div className={styles.overviewGrid}>
            <div>
              <h3>Evidence access</h3>
              <p>
                <RepositoryNote project={project} />
              </p>
            </div>
            <div>
              <h3>Technologies</h3>
              <ul className={styles.technologyList}>
                {project.technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3>Capabilities</h3>
              <ul>
                {project.capabilities.map((capability) => (
                  <li key={capability}>{capability}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.evidence} aria-labelledby="project-evidence">
          <h2 id="project-evidence">Project evidence</h2>
          <ul>
            {project.evidence.map((item) => (
              <li key={`${item.state}-${item.statement}`}>
                <span>{item.state}</span>
                <p>{item.statement}</p>
              </li>
            ))}
          </ul>
        </section>

        <div className={styles.prose}>{children}</div>

        <section className={styles.limitations} aria-labelledby="limitations">
          <h2 id="limitations">Scope and limitations</h2>
          <ul>
            {project.limitations.map((limitation) => (
              <li key={limitation}>{limitation}</li>
            ))}
          </ul>
        </section>
      </article>
    </PageContainer>
  );
}
