import Link from "next/link";
import {
  getCareerEntryById,
  type TransferableStrength,
} from "@/content/career-history";
import styles from "./profile-page.module.css";

type TransferableStrengthsProps = {
  readonly strengths: readonly TransferableStrength[];
};

export function TransferableStrengths({
  strengths,
}: TransferableStrengthsProps) {
  return (
    <ul className={styles.transferableGrid}>
      {strengths.map((strength, index) => {
        const headingId = `transferable-strength-${index + 1}`;
        const relatedEntries = strength.relatedCareerEntryIds.map((id) => {
          const entry = getCareerEntryById(id);

          if (!entry) {
            throw new Error(`Unknown related career entry ID: ${id}`);
          }

          return entry;
        });

        return (
          <li
            className={styles.transferableStrength}
            aria-labelledby={headingId}
            key={strength.title}
          >
            <h3 id={headingId}>{strength.title}</h3>
            <p>{strength.description}</p>
            <div className={styles.relatedExperience}>
              <p>Related experience</p>
              <ul>
                {relatedEntries.map((entry) => (
                  <li key={entry.id}>
                    <Link href={`/resume#experience-${entry.id}`}>
                      {entry.role}, {entry.organization}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
