import type { Metadata } from "next";
import { PageContainer } from "@/components/layout/page-container";
import { ProfilePageHeader } from "@/components/profile/profile-page-header";
import { SkillGroups } from "@/components/profile/skill-groups";
import { TransferableStrengths } from "@/components/profile/transferable-strengths";
import { ButtonLink } from "@/components/ui/button-link";
import { transferableStrengths } from "@/content/career-history";
import { siteContent } from "@/content/site-content";
import { skillGroups } from "@/content/skills";
import styles from "@/components/profile/profile-page.module.css";

export const metadata: Metadata = {
  title: "About | Hunter Kam",
  description:
    "Current software work, prior technical experience, and evidence-backed engineering strengths for Hunter Kam.",
};

export default function AboutPage() {
  return (
    <PageContainer className={styles.page}>
      <ProfilePageHeader
        eyebrow="About"
        title={siteContent.name}
        lede={siteContent.about.lede}
      />

      <p className={styles.positioning}>{siteContent.positioning}</p>

      <section className={styles.section} aria-labelledby="background">
        <h2 id="background">Background</h2>
        <div className={styles.prose}>
          {siteContent.about.background.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className={styles.section} aria-labelledby="how-i-work">
        <h2 id="how-i-work">How I work</h2>
        <ol className={styles.principles}>
          {siteContent.about.howIWork.map((principle) => (
            <li key={principle}>{principle}</li>
          ))}
        </ol>
      </section>

      <section
        className={styles.section}
        aria-labelledby="transferable-technical-strengths"
      >
        <h2 id="transferable-technical-strengths">
          Transferable technical strengths
        </h2>
        <TransferableStrengths strengths={transferableStrengths} />
      </section>

      <section className={styles.section} aria-labelledby="skills">
        <h2 id="skills">Skills</h2>
        <SkillGroups groups={skillGroups} />
      </section>

      <section className={styles.section} aria-labelledby="current-direction">
        <h2 id="current-direction">Current direction</h2>
        <div className={styles.prose}>
          {siteContent.about.currentDirection.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className={styles.actions}>
          <ButtonLink href="/projects">View Projects</ButtonLink>
          <ButtonLink href="/resume" variant="secondary">
            View Resume
          </ButtonLink>
        </div>
      </section>
    </PageContainer>
  );
}
