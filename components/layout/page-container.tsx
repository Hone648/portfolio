import styles from "./page-container.module.css";

type PageContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export function PageContainer({ children, className }: PageContainerProps) {
  const classes = [styles.container, className].filter(Boolean).join(" ");

  return <div className={classes}>{children}</div>;
}
