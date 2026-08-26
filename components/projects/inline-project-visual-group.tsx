import { ProjectVisualGroupList } from "@/components/projects/project-visual-group-list";
import type { ProjectSlug } from "@/content/project-metadata";
import {
  getProjectVisualGroupById,
  type ProjectVisualGroup,
} from "@/content/project-visuals";
import { getProjectBySlug } from "@/lib/projects";
import styles from "./case-study-layout.module.css";

type InlineProjectVisualGroupProps = {
  readonly projectSlug: ProjectSlug;
  readonly groupId: ProjectVisualGroup["id"];
};

export function InlineProjectVisualGroup({
  projectSlug,
  groupId,
}: InlineProjectVisualGroupProps) {
  const project = getProjectBySlug(projectSlug);
  const group = getProjectVisualGroupById(projectSlug, groupId);

  if (!project || !group) {
    return null;
  }

  return (
    <section
      className={styles.inlineVisualEvidence}
      aria-label={`${group.title} visual evidence`}
    >
      <ProjectVisualGroupList
        projectName={project.name}
        groups={[group]}
        idPrefix={`inline-visual-group-${projectSlug}`}
      />
    </section>
  );
}
