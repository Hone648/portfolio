import { ProjectVisualGroupList } from "@/components/projects/project-visual-group-list";
import type { ProjectVisualGroup } from "@/content/project-visuals";
import styles from "./case-study-layout.module.css";

type ProjectEvidenceGalleryProps = {
  readonly projectName: string;
  readonly groups: readonly ProjectVisualGroup[];
};

export function ProjectEvidenceGallery({
  projectName,
  groups,
}: ProjectEvidenceGalleryProps) {
  if (groups.length === 0) {
    return null;
  }

  return (
    <section
      className={styles.visualEvidence}
      aria-labelledby="visual-evidence"
    >
      <h2 id="visual-evidence">Project visuals</h2>
      <ProjectVisualGroupList projectName={projectName} groups={groups} />
    </section>
  );
}
