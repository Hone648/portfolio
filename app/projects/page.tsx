import { PageContainer } from "@/components/layout/page-container";
import { ProjectGrid } from "@/components/projects/project-grid";
import { createPageMetadata } from "@/lib/metadata";
import { getProjects } from "@/lib/projects";
import styles from "./page.module.css";

export const metadata = createPageMetadata({
  title: "Projects",
  description:
    "Selected work by Hunter Kam: a deployed production application, a business application in active development, and an operational local system.",
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
          Practical software and systems work spanning a live budgeting
          application, a business workflow system in development, and an
          operational home automation and security environment.
        </p>
      </header>

      <ProjectGrid projects={projects} />
    </PageContainer>
  );
}
