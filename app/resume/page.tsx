import Link from "next/link";
import { PageContainer } from "@/components/layout/page-container";
import { CareerEntryList } from "@/components/profile/career-entry-list";
import { ProfilePageHeader } from "@/components/profile/profile-page-header";
import { SkillGroups } from "@/components/profile/skill-groups";
import { ButtonLink } from "@/components/ui/button-link";
import { StatusBadge } from "@/components/ui/status-badge";
import { careerEntries } from "@/content/career-history";
import { siteContent } from "@/content/site-content";
import { skillGroups } from "@/content/skills";
import { createPageMetadata } from "@/lib/metadata";
import { getProjects } from "@/lib/projects";
import styles from "@/components/profile/profile-page.module.css";

export const metadata = createPageMetadata({
  title: "Resume",
  description:
    "Web resume for Hunter Kam connecting current software projects with selected prior technical experience.",
  path: "/resume",
});

export default function ResumePage() {
  const projects = getProjects();

  return (
    <PageContainer className={styles.page}>
      <ProfilePageHeader
        eyebrow="Web resume"
        title="Resume"
        lede={siteContent.resume.lede}
      />

      <section className={styles.section} aria-labelledby="summary">
        <h2 id="summary">Summary</h2>
        <div className={styles.prose}>
          <p>{siteContent.resume.summary}</p>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="technical-skills">
        <h2 id="technical-skills">Technical skills</h2>
        <SkillGroups groups={skillGroups} variant="compact" />
      </section>

      <section className={styles.section} aria-labelledby="selected-projects">
        <h2 id="selected-projects">Selected projects</h2>
        <ul className={styles.projectList}>
          {projects.map((project) => (
            <li className={styles.projectItem} key={project.slug}>
              <h3>{project.name}</h3>
              <StatusBadge status={project.status} />
              <p>{project.summary}</p>
              <Link href={`/projects/${project.slug}`}>
                View {project.name} case study
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section
        className={styles.section}
        aria-labelledby="selected-technical-experience"
      >
        <h2 id="selected-technical-experience">
          Selected technical experience
        </h2>
        <CareerEntryList entries={careerEntries} />
      </section>

      <section
        className={styles.section}
        aria-labelledby="education-and-training"
      >
        <h2 id="education-and-training">Education and training</h2>
        <ul className={styles.educationList}>
          {siteContent.resume.educationAndTraining.map((entry) => (
            <li className={styles.educationItem} key={entry.institution}>
              <h3>{entry.institution}</h3>
              <p>{entry.detail}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.section} aria-labelledby="certification">
        <h2 id="certification">Certification</h2>
        <p className={styles.certification}>
          {siteContent.resume.certification}
        </p>
      </section>

      <section className={styles.section} aria-labelledby="resume-contact">
        <h2 id="resume-contact">Contact links</h2>
        <div className={styles.actions}>
          <ButtonLink href={siteContent.contact.emailHref} external>
            Email Hunter
          </ButtonLink>
          <ButtonLink
            href={siteContent.github.href}
            external
            variant="secondary"
          >
            View GitHub profile
          </ButtonLink>
          <ButtonLink href="/projects" variant="secondary">
            View projects
          </ButtonLink>
          <ButtonLink href="/about" variant="secondary">
            About Hunter
          </ButtonLink>
        </div>
      </section>
    </PageContainer>
  );
}
