import Link from "next/link";
import {
  opensInSupportingTab,
  supportingTabAccessibleSuffix,
  supportingTabLinkProps,
} from "@/lib/external-link";
import styles from "./button-link.module.css";

/*
 * `target` and `rel` are deliberately absent from this API: the outbound-link
 * policy owns them, so no call site can turn a supporting-tab destination into
 * a same-tab one or drop the `noopener noreferrer` tokens.
 */
type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  external?: boolean;
  "aria-label"?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  external = false,
  "aria-label": ariaLabel,
}: ButtonLinkProps) {
  const classes = [styles.buttonLink, styles[variant], className]
    .filter(Boolean)
    .join(" ");

  if (external) {
    const supportingTab = opensInSupportingTab(href);

    return (
      <a
        className={classes}
        href={href}
        aria-label={
          supportingTab && ariaLabel
            ? `${ariaLabel}${supportingTabAccessibleSuffix}`
            : ariaLabel
        }
        {...(supportingTab ? supportingTabLinkProps : null)}
      >
        {children}
        {supportingTab ? (
          <>
            <svg
              className={styles.supportingTabMark}
              viewBox="0 0 12 12"
              aria-hidden="true"
              focusable="false"
            >
              <path
                d="M4 2h6v6M10 2 2.6 9.4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              />
            </svg>
            {ariaLabel ? null : (
              <span className="visually-hidden">
                {supportingTabAccessibleSuffix}
              </span>
            )}
          </>
        ) : null}
      </a>
    );
  }

  return (
    <Link className={classes} href={href} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}
