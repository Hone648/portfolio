import Image from "next/image";
import type { ProjectVisualGroup } from "@/content/project-visuals";
import styles from "./case-study-layout.module.css";

type ProjectEvidenceGalleryProps = {
  readonly projectName: string;
  readonly groups: readonly ProjectVisualGroup[];
};

const visualKindLabels = {
  screenshot: "Application screenshot",
  diagram: "Architecture diagram",
} as const;

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
      <ul className={styles.visualGroupList}>
        {groups.map((group) => (
          <li key={group.id}>
            <section
              className={styles.visualGroup}
              aria-labelledby={`visual-group-${group.id}`}
            >
              <h3 id={`visual-group-${group.id}`}>{group.title}</h3>
              <p>{group.description}</p>
              <ul className={styles.visualGrid}>
                {group.visuals.map((visual) => {
                  const kindLabel = visualKindLabels[visual.kind];
                  const bypassImageOptimization =
                    visual.kind === "diagram" ||
                    visual.id === "development-admin";

                  return (
                    <li
                      className={`${styles.visualCard} ${
                        visual.kind === "diagram" ? styles.diagramCard : ""
                      }`}
                      key={visual.id}
                    >
                      <figure>
                        <a
                          className={styles.imageFrame}
                          href={visual.src}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Open full-size ${visual.title} ${kindLabel.toLowerCase()} for ${projectName} in a new tab`}
                        >
                          <Image
                            src={visual.src}
                            width={visual.width}
                            height={visual.height}
                            alt={visual.alt}
                            sizes={
                              visual.kind === "diagram"
                                ? "(max-width: 1088px) 100vw, 1088px"
                                : "(max-width: 832px) 100vw, 528px"
                            }
                            unoptimized={bypassImageOptimization}
                          />
                        </a>
                        <figcaption>
                          <p className={styles.visualKind}>{kindLabel}</p>
                          <h4>{visual.title}</h4>
                          <p>{visual.caption}</p>
                          <p className={styles.evidenceNote}>
                            {visual.evidenceNote}
                          </p>
                          <a
                            className={styles.fullSizeLink}
                            href={visual.src}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Open full-size asset: ${visual.title} in a new tab`}
                          >
                            Open full-size asset
                          </a>
                        </figcaption>
                      </figure>
                    </li>
                  );
                })}
              </ul>
            </section>
          </li>
        ))}
      </ul>
    </section>
  );
}
