import type { ProjectSlug } from "./project-metadata";

export type SkillGroup = {
  readonly title: string;
  readonly description: string;
  readonly items: readonly string[];
  readonly relatedProjectSlugs: readonly ProjectSlug[];
};

export const skillGroups = [
  {
    title: "Full-stack applications",
    description:
      "Builds and operates a deployed Next.js budgeting application and is building a Django repair-order business application.",
    items: [
      "TypeScript",
      "React",
      "Next.js",
      "Python",
      "Django",
      "Application architecture",
      "Domain modeling",
      "Authentication and authorization",
      "Server-rendered web interfaces",
    ],
    relatedProjectSlugs: ["newbudget", "unicos"],
  },
  {
    title: "Data and backend systems",
    description:
      "Applies project-specific data models and guarded backend boundaries across deployed financial software and an active-development business system.",
    items: [
      "MongoDB Atlas",
      "PostgreSQL",
      "Transactional service boundaries",
      "Financial data modeling",
      "Operational workflow modeling",
      "User ownership boundaries",
      "Role and object-level authorization",
    ],
    relatedProjectSlugs: ["newbudget", "unicos"],
  },
  {
    title: "Delivery and operations",
    description:
      "Uses focused branches, reviewable changes, automated validation, and documented operating constraints across production and active-development work.",
    items: [
      "Git",
      "GitHub",
      "Pull-request workflow",
      "Automated testing",
      "CI validation",
      "Vercel deployment",
      "Monitoring",
      "Backup and restore validation",
      "Incident diagnosis",
      "Technical documentation",
    ],
    relatedProjectSlugs: ["newbudget", "unicos"],
  },
  {
    title: "Linux, automation, and systems integration",
    description:
      "Operates a local three-camera automation hub where Frigate detects multiple configured object classes with Coral acceleration for supported inference; selected person events enter area- and time-conditioned Home Assistant automations, while other classes do not automatically generate notifications.",
    items: [
      "Ubuntu Server",
      "Docker",
      "Frigate",
      "Google Coral Edge TPU",
      "Home Assistant",
      "Mosquitto MQTT",
      "RTSP",
      "Local networking",
      "Container and service troubleshooting",
      "Event-driven automation",
    ],
    relatedProjectSlugs: ["home-security-lab"],
  },
  {
    title: "Engineering practice",
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
      "AI-assisted software delivery",
    ],
    relatedProjectSlugs: ["newbudget", "unicos", "home-security-lab"],
  },
] as const satisfies readonly SkillGroup[];
