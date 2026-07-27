import type { Project } from "@/content/project-metadata";
import { ButtonLink } from "@/components/ui/button-link";
import { StatusBadge } from "@/components/ui/status-badge";
import styles from "./project-card.module.css";

type ProjectCardProps = {
  project: Project;
  headingLevel?: "h2" | "h3";
  variant?: "featured" | "index";
};

export function ProjectCard({
  project,
  headingLevel = "h2",
  variant = "index",
}: ProjectCardProps) {
  const Heading = headingLevel;
  const technologies =
    variant === "featured"
      ? project.technologies.slice(0, 4)
      : project.technologies;
  const additionalTechnologyCount =
    variant === "featured"
      ? project.technologies.length - technologies.length
      : 0;

  return (
    <article
      className={`${styles.card} ${styles[variant]}`}
      data-project={project.slug}
    >
      <header className={styles.header}>
        <div className={styles.context}>
          <p className={styles.category}>{project.card.category}</p>
          <StatusBadge status={project.status} variant="compact" />
        </div>
        <Heading className={styles.title}>{project.name}</Heading>
      </header>

      <p className={styles.description}>{project.card.description}</p>

      <div className={`${styles.detailGroup} ${styles.highlightsGroup}`}>
        <p className={styles.label}>What I built</p>
        <ul className={styles.highlights}>
          {project.card.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </div>

      <div className={`${styles.detailGroup} ${styles.technologyGroup}`}>
        <p className={styles.label}>Built with</p>
        <ul className={styles.technologies}>
          {technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
          {additionalTechnologyCount > 0 ? (
            <li aria-label={`${additionalTechnologyCount} additional technologies`}>
              +{additionalTechnologyCount} more
            </li>
          ) : null}
        </ul>
      </div>

      <div className={styles.statusGroup}>
        <p className={styles.label}>Current status</p>
        <p className={styles.currentStatus}>{project.card.currentStatus}</p>
      </div>

      {variant === "index" ? (
        <details className={styles.scopeDetails}>
          <summary>Current scope details</summary>
          <div className={styles.scopeContent}>
            <ul className={styles.limitations}>
              {project.limitations.map((limitation) => (
                <li key={limitation}>{limitation}</li>
              ))}
            </ul>
          </div>
        </details>
      ) : null}

      {project.links.length > 0 ? (
        <ul className={styles.links} aria-label={`${project.name} links`}>
          {project.links.map((link) => (
            <li key={`${link.kind}-${link.href}`}>
              <ButtonLink
                href={link.href}
                variant={link.kind === "case-study" ? "primary" : "secondary"}
                external={link.kind !== "case-study"}
              >
                {link.label}
              </ButtonLink>
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}
