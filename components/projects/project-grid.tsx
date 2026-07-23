import type { Project } from "@/content/project-metadata";
import { ProjectCard } from "./project-card";
import styles from "./project-grid.module.css";

type ProjectGridProps = {
  projects: readonly Project[];
  variant?: "featured" | "index";
};

export function ProjectGrid({
  projects,
  variant = "index",
}: ProjectGridProps) {
  const headingLevel = variant === "featured" ? "h3" : "h2";

  return (
    <ul className={`${styles.grid} ${styles[variant]}`}>
      {projects.map((project) => (
        <li key={project.slug}>
          <ProjectCard
            headingLevel={headingLevel}
            project={project}
            variant={variant}
          />
        </li>
      ))}
    </ul>
  );
}
