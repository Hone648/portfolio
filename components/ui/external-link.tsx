import {
  opensInSupportingTab,
  supportingTabAccessibleSuffix,
  supportingTabLinkProps,
} from "@/lib/external-link";

type ExternalLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

/**
 * Plain outbound anchor for prose and navigation, where a button treatment
 * would be too heavy. Shares the outbound-link policy with `ButtonLink`.
 */
export function ExternalLink({ href, children, className }: ExternalLinkProps) {
  const supportingTab = opensInSupportingTab(href);

  return (
    <a
      className={className}
      href={href}
      {...(supportingTab ? supportingTabLinkProps : null)}
    >
      {children}
      {supportingTab ? (
        <span className="visually-hidden">{supportingTabAccessibleSuffix}</span>
      ) : null}
    </a>
  );
}
