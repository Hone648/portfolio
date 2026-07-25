import styles from "./profile-page.module.css";

type ProfilePageHeaderProps = {
  readonly eyebrow?: string;
  readonly title: string;
  readonly lede: string;
};

export function ProfilePageHeader({
  eyebrow,
  title,
  lede,
}: ProfilePageHeaderProps) {
  return (
    <header className={styles.pageHeader}>
      {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
      <h1 className={styles.pageTitle}>{title}</h1>
      <p className={styles.lede}>{lede}</p>
    </header>
  );
}
