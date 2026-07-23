import type { Metadata } from "next";
import { PageContainer } from "@/components/layout/page-container";
import { ProjectGrid } from "@/components/projects/project-grid";
import { getProjects } from "@/lib/projects";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Projects | Hunter Kam",
  description:
    "Selected production, active-development, and operational systems work by Hunter Kam.",
};

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <PageContainer className={styles.page}>
      <header className={styles.introduction}>
        <p className={styles.eyebrow}>Selected work</p>
        <h1 className={styles.title}>Projects</h1>
        <p className={styles.lede}>
          Production software, an active business application, and operational
          local infrastructure presented with their current evidence and scope
          boundaries.
        </p>
      </header>

      <ProjectGrid projects={projects} />
    </PageContainer>
  );
}
