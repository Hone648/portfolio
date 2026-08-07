import type { Project } from "@/content/project-metadata";
import { ButtonLink } from "@/components/ui/button-link";
import { StatusBadge } from "@/components/ui/status-badge";
import styles from "./project-card.module.css";

type ProjectCardProps = {
  project: Project;
  headingLevel?: "h2" | "h3";
  variant?: "featured" | "index";
};

type FeaturedAction = {
  readonly key: string;
  readonly label: string;
  readonly href: string;
  readonly accessibleLabel: string;
  readonly external: boolean;
};

/*
 * Featured cards present one action system: the case study is the primary
 * destination, and the supporting row carries the public repository and, where
 * one legitimately exists, the live application. Repository access is derived
 * from `project.repository` so the registry stays the single source of truth.
 */
function getFeaturedActions(project: Project): {
  primary: FeaturedAction | null;
  supporting: readonly FeaturedAction[];
} {
  const caseStudyLink = project.links.find(
    (link) => link.kind === "case-study",
  );
  const liveLink = project.links.find((link) => link.kind === "live");
  const supporting: FeaturedAction[] = [];

  if (project.repository.visibility === "public") {
    supporting.push({
      key: "repository",
      label: "GitHub",
      href: project.repository.href,
      accessibleLabel: `GitHub source: ${project.name}`,
      external: true,
    });
  }

  if (liveLink) {
    supporting.push({
      key: "live",
      label: "Live app",
      href: liveLink.href,
      accessibleLabel: `Live app: ${project.name}`,
      external: true,
    });
  }

  return {
    primary: caseStudyLink
      ? {
          key: "case-study",
          label: caseStudyLink.label,
          href: caseStudyLink.href,
          accessibleLabel: `${caseStudyLink.label}: ${project.name}`,
          external: false,
        }
      : null,
    supporting,
  };
}

export function ProjectCard({
  project,
  headingLevel = "h2",
  variant = "index",
}: ProjectCardProps) {
  const Heading = headingLevel;
  const featuredActions =
    variant === "featured" ? getFeaturedActions(project) : null;
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

      {featuredActions ? (
        <ul
          className={styles.actionGroup}
          aria-label={`${project.name} links`}
        >
          {featuredActions.primary ? (
            <li className={styles.primaryAction}>
              <ButtonLink
                href={featuredActions.primary.href}
                aria-label={featuredActions.primary.accessibleLabel}
              >
                {featuredActions.primary.label}
              </ButtonLink>
            </li>
          ) : null}
          {featuredActions.supporting.map((action) => (
            <li key={action.key}>
              <ButtonLink
                href={action.href}
                variant="secondary"
                external={action.external}
                aria-label={action.accessibleLabel}
              >
                {action.label}
              </ButtonLink>
            </li>
          ))}
        </ul>
      ) : project.links.length > 0 ? (
        <ul className={styles.links} aria-label={`${project.name} links`}>
          {project.links.map((link) => {
            const accessibleLabel =
              link.kind === "case-study"
                ? `View case study: ${project.name}`
                : link.kind === "live"
                  ? `Open live application: ${project.name}`
                  : `${link.label}: ${project.name}`;

            return (
              <li key={`${link.kind}-${link.href}`}>
                <ButtonLink
                  href={link.href}
                  variant={
                    link.kind === "case-study" ? "primary" : "secondary"
                  }
                  external={link.kind !== "case-study"}
                  aria-label={accessibleLabel}
                >
                  {link.label}
                </ButtonLink>
              </li>
            );
          })}
        </ul>
      ) : null}
    </article>
  );
}
