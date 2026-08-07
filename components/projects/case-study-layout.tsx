import Link from "next/link";
import { PageContainer } from "@/components/layout/page-container";
import { CaseStudyBackToTop } from "@/components/projects/case-study-back-to-top";
import { ProjectEvidenceGallery } from "@/components/projects/project-evidence-gallery";
import { ButtonLink } from "@/components/ui/button-link";
import { StatusBadge } from "@/components/ui/status-badge";
import type { Project } from "@/content/project-metadata";
import { getProjectVisualGroups } from "@/content/project-visuals";
import styles from "./case-study-layout.module.css";

const caseStudyTopId = "case-study-top";

type CaseStudyLayoutProps = {
  project: Project;
  children: React.ReactNode;
};

function RepositoryNote({ project }: { project: Project }) {
  if (project.repository.visibility === "public") {
    return (
      <a href={project.repository.href}>
        View the {project.repository.name} repository on GitHub
      </a>
    );
  }

  if (project.repository.visibility === "private") {
    return (
      <>
        The source repository is private. This case study covers the
        architecture, implementation, and project details that can be shared
        publicly.
      </>
    );
  }

  return (
    <>
      Private operational system presented through a sanitized architecture and
      project overview.
    </>
  );
}

export function CaseStudyLayout({
  project,
  children,
}: CaseStudyLayoutProps) {
  const liveLink = project.links.find((link) => link.kind === "live");
  const publicRepository =
    project.repository.visibility === "public" ? project.repository : null;
  const visualGroups = getProjectVisualGroups(project.slug);

  return (
    <PageContainer className={styles.page}>
      <article className={styles.article} data-project={project.slug}>
        <Link className={styles.backLink} href="/projects">
          Back to projects
        </Link>

        <header className={styles.header} id={caseStudyTopId} tabIndex={-1}>
          <p className={styles.eyebrow}>Case study</p>
          <div className={styles.titleRow}>
            <h1>{project.name}</h1>
            <StatusBadge status={project.status} />
          </div>
          <p className={styles.summary}>{project.summary}</p>
          {liveLink || publicRepository ? (
            <div className={styles.actions}>
              {liveLink ? (
                <ButtonLink href={liveLink.href} external>
                  {liveLink.label}
                </ButtonLink>
              ) : null}
              {publicRepository ? (
                <ButtonLink
                  href={publicRepository.href}
                  variant="secondary"
                  external
                >
                  Open {publicRepository.name} on GitHub
                </ButtonLink>
              ) : null}
            </div>
          ) : null}
        </header>

        <section className={styles.overview} aria-labelledby="project-overview">
          <h2 id="project-overview">Project overview</h2>
          <div className={styles.overviewGrid}>
            <div>
              <h3>Project access</h3>
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
          <h2 id="project-evidence">Engineering highlights</h2>
          <ul>
            {project.evidence.map((item) => (
              <li key={`${item.state}-${item.statement}`}>
                <span>{item.state}</span>
                <p>{item.statement}</p>
              </li>
            ))}
          </ul>
        </section>

        <ProjectEvidenceGallery
          projectName={project.name}
          groups={visualGroups}
        />

        <div className={styles.prose}>{children}</div>

        <section className={styles.limitations} aria-labelledby="limitations">
          <h2 id="limitations">Current status</h2>
          <ul>
            {project.limitations.map((limitation) => (
              <li key={limitation}>{limitation}</li>
            ))}
          </ul>
        </section>

        <CaseStudyBackToTop targetId={caseStudyTopId} />
      </article>
    </PageContainer>
  );
}
