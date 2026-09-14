import type { ProjectSlug } from "./project-metadata";

export type SkillGroup = {
  readonly title: string;
  readonly description: string;
  readonly items: readonly string[];
  readonly relatedProjectSlugs: readonly ProjectSlug[];
};

export const skillGroups = [
  {
    title: "Application development",
    description:
      "Builds and operates a deployed Next.js budgeting application while developing Django applications for structured business workflows, tenant-aware content management, and release-backed publication.",
    items: [
      "TypeScript",
      "React",
      "Next.js",
      "Python",
      "Django",
      "Wagtail",
      "Application architecture",
      "Domain modeling",
      "Authentication and authorization",
      "Server-rendered web interfaces",
      "Multi-tenant application boundaries",
      "Release-backed publication workflows",
    ],
    relatedProjectSlugs: ["newbudget", "forkfolio", "unicos"],
  },
  {
    title: "Backend and data systems",
    description:
      "Applies project-specific data models and guarded backend boundaries across deployed financial software, business applications in active development, and tenant-aware publication workflows.",
    items: [
      "MongoDB Atlas",
      "PostgreSQL",
      "Transactional service boundaries",
      "Financial data modeling",
      "Operational workflow modeling",
      "User ownership boundaries",
      "Tenant ownership boundaries",
      "Role and object-level authorization",
      "Release-backed state modeling",
    ],
    relatedProjectSlugs: ["newbudget", "forkfolio", "unicos"],
  },
  {
    title: "Software delivery and operations",
    description:
      "Uses focused branches, reviewable changes, automated validation, and documented deployment, verification, rollback, and operating constraints across production software, work in active development, and self-hosted infrastructure documentation.",
    items: [
      "Git",
      "GitHub",
      "Pull-request workflow",
      "Automated testing",
      "CI validation",
      "Vercel deployment",
      "Monitoring",
      "Backup and restore validation",
      "Deployment and rollback runbooks",
      "Incident diagnosis",
      "Technical documentation",
    ],
    relatedProjectSlugs: ["newbudget", "unicos", "home-security-lab"],
  },
  {
    title: "Systems integration and automation",
    description:
      "Operates a local Docker Compose NVR stack where Frigate uses VAAPI-accelerated RTSP processing and publishes events through Mosquitto for Home Assistant automation, with reviewed configuration, implemented validation tooling, and documented deployment and rollback procedures.",
    items: [
      "Ubuntu Server",
      "Docker",
      "Docker Compose",
      "Frigate",
      "VAAPI video acceleration",
      "Home Assistant",
      "Mosquitto MQTT",
      "RTSP",
      "Local networking",
      "Container and service troubleshooting",
      "Event-driven automation",
      "Configuration validation",
      "Deployment and rollback runbooks",
    ],
    relatedProjectSlugs: ["home-security-lab"],
  },
  {
    title: "Engineering workflow and validation",
    description:
      "Combines clear requirements, focused implementation, layered validation, troubleshooting, and privacy-aware documentation.",
    items: [
      "Requirements definition",
      "Implementation planning",
      "Constraints and success criteria",
      "Layered troubleshooting",
      "Code and diff review",
      "Validation",
      "Privacy-aware documentation",
    ],
    relatedProjectSlugs: ["newbudget", "unicos", "home-security-lab"],
  },
] as const satisfies readonly SkillGroup[];
