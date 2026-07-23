import {
  projectStatusLabels,
  type ProjectStatus,
} from "@/content/project-metadata";
import styles from "./status-badge.module.css";

type StatusBadgeProps = {
  status: ProjectStatus;
};

export function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span className={`${styles.badge} ${styles[status]}`}>
      {projectStatusLabels[status]}
    </span>
  );
}
