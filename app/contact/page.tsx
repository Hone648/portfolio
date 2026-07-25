import type { Metadata } from "next";
import { PageContainer } from "@/components/layout/page-container";
import { ProfilePageHeader } from "@/components/profile/profile-page-header";
import { ButtonLink } from "@/components/ui/button-link";
import { siteContent } from "@/content/site-content";
import styles from "@/components/profile/profile-page.module.css";

export const metadata: Metadata = {
  title: "Contact | Hunter Kam",
  description:
    "Contact Hunter Kam about software development, automation, systems integration, or technical collaboration.",
};

export default function ContactPage() {
  return (
    <PageContainer className={styles.page}>
      <ProfilePageHeader
        eyebrow="Contact"
        title="Contact Hunter"
        lede={siteContent.contactPage.lede}
      />

      <section className={styles.section} aria-labelledby="contact-directly">
        <h2 id="contact-directly">Contact directly</h2>
        <div className={styles.contactCopy}>
          <p>{siteContent.contactPage.introduction}</p>
          <div className={styles.actions}>
            <ButtonLink href={siteContent.contact.emailHref} external>
              Email Hunter
            </ButtonLink>
            <ButtonLink
              href={siteContent.github.href}
              external
              variant="secondary"
            >
              View GitHub Profile
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="review-the-work">
        <h2 id="review-the-work">Review the work</h2>
        <div className={styles.actions}>
          <ButtonLink href="/projects">View Projects</ButtonLink>
          <ButtonLink href="/resume" variant="secondary">
            View Resume
          </ButtonLink>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="contact-privacy">
        <h2 id="contact-privacy">Contact privacy</h2>
        <p className={styles.privacyNote}>
          {siteContent.contactPage.privacyNote}
        </p>
      </section>
    </PageContainer>
  );
}
