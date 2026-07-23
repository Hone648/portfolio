import Link from "next/link";
import type { Project } from "@/content/project-metadata";
import { StatusBadge } from "@/components/ui/status-badge";
import styles from "./project-card.module.css";

type ProjectCardProps = {
  project: Project;
  headingLevel?: "h2" | "h3";
  variant?: "featured" | "index";
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
    return <>Private source repository</>;
  }

  return <>{"Current system evidence is documented through sanitized project artifacts."}</>;
}

export function ProjectCard({
  project,
  headingLevel = "h2",
  variant = "index",
}: ProjectCardProps) {
  const Heading = headingLevel;
  const capabilities =
    variant === "featured" ? project.capabilities.slice(0, 3) : project.capabilities;

  return (
    <article className={`${styles.card} ${styles[variant]}`}>
      <header className={styles.header}>
        <Heading className={styles.title}>{project.name}</Heading>
        <StatusBadge status={project.status} />
      </header>

      <p className={styles.summary}>{project.summary}</p>

      <div className={styles.detailGroup}>
        <p className={styles.label}>Technologies</p>
        <ul className={styles.technologies}>
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
      </div>

      <div className={styles.detailGroup}>
        <p className={styles.label}>Capabilities</p>
        <ul className={styles.capabilities}>
          {capabilities.map((capability) => (
            <li key={capability}>{capability}</li>
          ))}
        </ul>
      </div>

      {variant === "index" ? (
        <div className={styles.detailGroup}>
          <p className={styles.label}>Scope and limitations</p>
          <ul className={styles.limitations}>
            {project.limitations.map((limitation) => (
              <li key={limitation}>{limitation}</li>
            ))}
          </ul>
        </div>
      ) : null}

      <p className={styles.repositoryNote}>
        <span className={styles.label}>Evidence access</span>
        <RepositoryNote project={project} />
      </p>

      {project.links.length > 0 ? (
        <ul className={styles.links} aria-label={`${project.name} links`}>
          {project.links.map((link) => (
            <li key={`${link.kind}-${link.href}`}>
              {link.kind === "case-study" ? (
                <Link href={link.href}>{link.label}</Link>
              ) : (
                <a href={link.href}>{link.label}</a>
              )}
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}
