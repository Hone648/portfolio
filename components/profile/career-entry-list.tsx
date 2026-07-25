import type { CareerEntry } from "@/content/career-history";
import styles from "./profile-page.module.css";

type CareerEntryListProps = {
  readonly entries: readonly CareerEntry[];
};

export function CareerEntryList({ entries }: CareerEntryListProps) {
  return (
    <ul className={`${styles.entryList} ${styles.careerList}`}>
      {entries.map((entry) => (
        <li
          className={`${styles.entry} ${styles.careerEntry}`}
          id={`experience-${entry.id}`}
          key={entry.id}
        >
          <h3>{entry.role}</h3>
          <p className={styles.organization}>{entry.organization}</p>
          <p className={styles.careerSummary}>{entry.summary}</p>
          <ul>
            {entry.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}
