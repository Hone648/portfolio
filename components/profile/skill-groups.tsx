import Link from "next/link";
import type { SkillGroup } from "@/content/skills";
import { getProjectBySlug } from "@/lib/projects";
import styles from "./profile-page.module.css";

type SkillGroupsProps = {
  readonly groups: readonly SkillGroup[];
  readonly variant?: "detailed" | "compact";
};

export function SkillGroups({
  groups,
  variant = "detailed",
}: SkillGroupsProps) {
  return (
    <div className={`${styles.skillGrid} ${styles[variant]}`}>
      {groups.map((group, index) => {
        const headingId = `skill-group-${index + 1}`;
        const evidenceProjects = group.relatedProjectSlugs.map((slug) => {
          const project = getProjectBySlug(slug);

          if (!project) {
            throw new Error(`Unknown evidence project slug: ${slug}`);
          }

          return project;
        });

        return (
          <section
            className={styles.skillGroup}
            aria-labelledby={headingId}
            key={group.title}
          >
            <h3 id={headingId}>{group.title}</h3>
            <p>{group.description}</p>
            <ul className={styles.skillItems}>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className={styles.evidenceLinks}>
              <p>Related projects</p>
              <ul>
                {evidenceProjects.map((project) => (
                  <li key={project.slug}>
                    <Link href={`/projects/${project.slug}`}>
                      {project.name} case study
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        );
      })}
    </div>
  );
}
