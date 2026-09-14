import Link from "next/link";
import { PageContainer } from "@/components/layout/page-container";
import { ButtonLink } from "@/components/ui/button-link";
import {
  getCareerEntryById,
  type CareerEntryId,
} from "@/content/career-history";
import { siteContent } from "@/content/site-content";
import { getProjectBySlug } from "@/lib/projects";
import type { ProjectSlug } from "@/content/project-metadata";
import styles from "./page.module.css";

type EvidenceBlock = {
  readonly category: string;
  readonly sourceName: string;
  readonly sourceLabel: string;
  readonly summary: string;
  readonly proof: readonly string[];
  readonly ctaLabel: string;
  readonly ctaHref: string;
};

function requireProject(slug: ProjectSlug) {
  const project = getProjectBySlug(slug);

  if (!project) {
    throw new Error(`Missing homepage evidence project: ${slug}`);
  }

  return project;
}

function requireCareerEntry(id: CareerEntryId) {
  const entry = getCareerEntryById(id);

  if (!entry) {
    throw new Error(`Missing homepage career evidence: ${id}`);
  }

  return entry;
}

function requireHighlight(
  highlights: readonly string[],
  index: number,
  sourceName: string,
) {
  const highlight = highlights[index];

  if (!highlight) {
    throw new Error(`Missing homepage evidence highlight: ${sourceName}[${index}]`);
  }

  return highlight;
}

function buildEngineeringEvidence(): readonly EvidenceBlock[] {
  const newBudget = requireProject("newbudget");
  const homeSecurity = requireProject("home-security-lab");
  const spea = requireCareerEntry("spea");
  const advantageAircraft = requireCareerEntry("advantage-aircraft");
  const navy = requireCareerEntry("navy");

  return [
    {
      category: "Software Engineering",
      sourceName: newBudget.name,
      sourceLabel: "CURRENT PROJECT EVIDENCE",
      summary: newBudget.summary,
      proof: [
        requireHighlight(newBudget.card.highlights, 0, "newBudget"),
        requireHighlight(newBudget.card.highlights, 1, "newBudget"),
        requireHighlight(newBudget.card.highlights, 2, "newBudget"),
        newBudget.evidence[0].statement,
      ],
      ctaLabel: "View newBudget case study",
      ctaHref: "/projects/newbudget",
    },
    {
      category: "Systems Integration & Automation",
      sourceName: homeSecurity.name,
      sourceLabel: "CURRENT PROJECT EVIDENCE",
      summary: homeSecurity.summary,
      proof: [
        requireHighlight(homeSecurity.card.highlights, 0, "homeSecurity"),
        requireHighlight(homeSecurity.card.highlights, 1, "homeSecurity"),
        requireHighlight(homeSecurity.card.highlights, 2, "homeSecurity"),
        homeSecurity.evidence[3].statement,
      ],
      ctaLabel: "View systems case study",
      ctaHref: "/projects/home-security-lab",
    },
    {
      category: "Automated Test & Integration",
      sourceName: `${spea.organization} — ${spea.role}`,
      sourceLabel: "CAREER EVIDENCE",
      summary: spea.summary,
      proof: spea.highlights,
      ctaLabel: "View technical experience",
      ctaHref: "/resume#selected-technical-experience",
    },
    {
      category: "Avionics & Electronic Systems",
      sourceName: "Avionics systems experience",
      sourceLabel: "CAREER EVIDENCE",
      summary: `${advantageAircraft.summary} ${navy.summary}`,
      proof: [
        requireHighlight(
          advantageAircraft.highlights,
          0,
          "advantage-aircraft",
        ),
        requireHighlight(
          advantageAircraft.highlights,
          2,
          "advantage-aircraft",
        ),
        requireHighlight(navy.highlights, 0, "navy"),
        requireHighlight(navy.highlights, 1, "navy"),
        requireHighlight(navy.highlights, 2, "navy"),
      ],
      ctaLabel: "View technical experience",
      ctaHref: "/resume#selected-technical-experience",
    },
  ];
}

export default function Home() {
  const engineeringEvidence = buildEngineeringEvidence();

  return (
    <PageContainer className={styles.home}>
      <section className={styles.introduction} aria-labelledby="home-title">
        <p className={styles.eyebrow}>Portfolio</p>
        <h1 className={styles.title} id="home-title">
          Hunter Kam
        </h1>
        <p className={styles.identity}>{siteContent.portfolioIdentity}</p>
        <p className={styles.positioning}>{siteContent.home.supportingPosition}</p>
        <p className={styles.supportingCopy}>
          {siteContent.home.supportingCopy}
        </p>
        <div className={styles.actions}>
          <ButtonLink href="/projects">View engineering work</ButtonLink>
          <ButtonLink href="/resume" variant="secondary">
            View resume
          </ButtonLink>
          <ButtonLink
            href="https://github.com/Hone648"
            external
            variant="secondary"
          >
            View GitHub profile
          </ButtonLink>
        </div>
      </section>

      <section
        className={styles.engineeringRange}
        aria-labelledby="engineering-range"
      >
        <div className={styles.sectionHeading}>
          <div>
            <p className={styles.eyebrow}>Evidence pillars</p>
            <h2 id="engineering-range">Engineering range</h2>
          </div>
          <p>
            Software, systems integration, automation, and prior technical
            systems work are presented as complementary strengths with distinct
            evidence boundaries.
          </p>
        </div>
        <ul className={styles.rangeGrid}>
          {siteContent.home.engineeringRange.map((pillar) => (
            <li className={styles.rangeItem} key={pillar.title}>
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section
        className={styles.selectedEvidence}
        aria-labelledby="selected-engineering-evidence"
      >
        <div className={styles.sectionHeading}>
          <div>
            <p className={styles.eyebrow}>Selected evidence</p>
            <h2 id="selected-engineering-evidence">
              Selected engineering evidence
            </h2>
          </div>
          <p>
            Four examples balance active project work with verified career
            history. <Link href="/projects">View projects</Link>
          </p>
        </div>
        <div className={styles.evidenceGrid}>
          {engineeringEvidence.map((evidence) => (
            <article className={styles.evidenceBlock} key={evidence.category}>
              <p className={styles.evidenceType}>{evidence.sourceLabel}</p>
              <h3>{evidence.category}</h3>
              <p className={styles.evidenceSource}>{evidence.sourceName}</p>
              <p className={styles.evidenceSummary}>{evidence.summary}</p>
              <ul>
                {evidence.proof.map((proof) => (
                  <li key={proof}>{proof}</li>
                ))}
              </ul>
              <ButtonLink href={evidence.ctaHref} variant="secondary">
                {evidence.ctaLabel}
              </ButtonLink>
            </article>
          ))}
        </div>
        <p>
          <strong>Additional current software evidence:</strong>{" "}
          <Link href="/projects/forkfolio">Forkfolio</Link> — tenant-aware
          application boundaries and immutable release-backed publication.
        </p>
        <ButtonLink href="/projects" variant="secondary">
          View all projects
        </ButtonLink>
      </section>

      <section
        className={styles.technicalFoundation}
        aria-labelledby="technical-foundation"
      >
        <div>
          <p className={styles.eyebrow}>Experience signal</p>
          <h2 id="technical-foundation">Technical foundation</h2>
        </div>
        <div className={styles.foundationCopy}>
          <p>{siteContent.home.technicalFoundation}</p>
          <ButtonLink
            href="/resume#selected-technical-experience"
            variant="secondary"
          >
            View technical experience
          </ButtonLink>
        </div>
      </section>

      <section className={styles.approach} aria-labelledby="delivery-approach">
        <h2 id="delivery-approach">Delivery approach</h2>
        <ul>
          <li>Build around real workflows and practical problems.</li>
          <li>Deliver changes in focused, reviewable increments.</li>
          <li>Validate behavior through tests, builds, and hands-on review.</li>
          <li>
            Troubleshoot across application, service, container, host, and
            network boundaries.
          </li>
        </ul>
      </section>
    </PageContainer>
  );
}
