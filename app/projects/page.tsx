import { PageContainer } from "@/components/layout/page-container";
import { ProjectGrid } from "@/components/projects/project-grid";
import { createPageMetadata } from "@/lib/metadata";
import { getProjects } from "@/lib/projects";
import styles from "./page.module.css";

export const metadata = createPageMetadata({
  title: "Projects",
  description:
    "Selected work by Hunter Kam across deployed web applications, active-development business platforms, and operational local systems.",
  path: "/projects",
});

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <PageContainer className={styles.page}>
      <header className={styles.introduction}>
        <p className={styles.eyebrow}>Selected work</p>
        <h1 className={styles.title}>Projects</h1>
        <p className={styles.lede}>
          Practical software and systems work spanning production applications,
          active-development business platforms, and operational infrastructure.
        </p>
      </header>

      <ProjectGrid projects={projects} />
    </PageContainer>
  );
}
