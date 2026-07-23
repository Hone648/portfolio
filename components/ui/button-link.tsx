import Link from "next/link";
import styles from "./button-link.module.css";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  external?: boolean;
  "aria-label"?: string;
  rel?: string;
  target?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  external = false,
  ...linkProps
}: ButtonLinkProps) {
  const classes = [styles.buttonLink, styles[variant], className]
    .filter(Boolean)
    .join(" ");

  if (external) {
    return (
      <a className={classes} href={href} {...linkProps}>
        {children}
      </a>
    );
  }

  return (
    <Link className={classes} href={href} {...linkProps}>
      {children}
    </Link>
  );
}
