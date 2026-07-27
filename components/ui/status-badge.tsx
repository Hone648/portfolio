import {
  projectStatusLabels,
  projectStatusShortLabels,
  type ProjectStatus,
} from "@/content/project-metadata";
import styles from "./status-badge.module.css";

type StatusBadgeProps = {
  status: ProjectStatus;
  variant?: "full" | "compact";
};

export function StatusBadge({ status, variant = "full" }: StatusBadgeProps) {
  const labels =
    variant === "compact" ? projectStatusShortLabels : projectStatusLabels;

  return (
    <span className={`${styles.badge} ${styles[status]} ${styles[variant]}`}>
      {labels[status]}
    </span>
  );
}
