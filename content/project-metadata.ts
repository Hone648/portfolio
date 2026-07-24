export type ProjectSlug = "newbudget" | "unicos" | "home-security-lab";

export type ProjectStatus =
  | "production"
  | "active-development"
  | "operational-lab";

export type ProjectWorkState =
  | "implemented"
  | "deployed"
  | "operational"
  | "prototyped"
  | "designed"
  | "planned";

export type ProjectEvidenceItem = {
  readonly state: ProjectWorkState;
  readonly statement: string;
};

export type RepositoryReference =
  | {
      readonly visibility: "public";
      readonly name: string;
      readonly href: string;
    }
  | {
      readonly visibility: "private";
      readonly name: string;
      readonly href?: never;
    }
  | {
      readonly visibility: "none";
      readonly name?: never;
      readonly href?: never;
    };

export type ProjectLink =
  | {
      readonly kind: "case-study";
      readonly label: string;
      readonly href: `/projects/${ProjectSlug}`;
    }
  | {
      readonly kind: "live" | "external";
      readonly label: string;
      readonly href: `https://${string}`;
    };

export type Project = {
  readonly slug: ProjectSlug;
  readonly name: string;
  readonly summary: string;
  readonly status: ProjectStatus;
  readonly featured: boolean;
  readonly technologies: readonly string[];
  readonly capabilities: readonly string[];
  readonly evidence: readonly ProjectEvidenceItem[];
  readonly limitations: readonly string[];
  readonly repository: RepositoryReference;
  readonly links: readonly ProjectLink[];
};

export const projectStatusLabels = {
  production: "Deployed production application",
  "active-development": "Business application in active development",
  "operational-lab": "Operational systems-integration project",
} satisfies Record<ProjectStatus, string>;

export const projects = [
  {
    slug: "newbudget",
    name: "newBudget",
    summary:
      "A deployed personal-finance application focused on month-first planning, debt tracking, and user-reviewed statement reconciliation.",
    status: "production",
    featured: true,
    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "MongoDB Atlas",
      "Auth.js",
      "Vercel",
    ],
    capabilities: [
      "Financial domain modeling",
      "User-scoped data ownership",
      "Statement-assisted reconciliation",
      "Automated testing and CI",
      "Production monitoring and recovery",
    ],
    evidence: [
      {
        state: "deployed",
        statement:
          "Runs as a production Next.js application on Vercel with a dedicated MongoDB Atlas production environment.",
      },
      {
        state: "implemented",
        statement:
          "Uses Auth.js and Google OAuth with internal application-user ownership boundaries.",
      },
      {
        state: "operational",
        statement:
          "Includes uptime monitoring, privacy-scrubbed error tracking, backup and restore validation, and incident-response procedures.",
      },
    ],
    limitations: [
      "Demonstrates production operation for one application, not broad enterprise-scale platform experience.",
      "Statement-assisted reconciliation retains explicit review and guarded mutation boundaries rather than applying all extracted data automatically.",
    ],
    repository: {
      visibility: "private",
      name: "newBudget",
    },
    links: [
      {
        kind: "case-study",
        label: "Read case study",
        href: "/projects/newbudget",
      },
      {
        kind: "live",
        label: "Open live application",
        href: "https://new-budget-three.vercel.app",
      },
    ],
  },
  {
    slug: "unicos",
    name: "Unicos",
    summary:
      "A Django business application for body-shop repair orders, customer and vehicle records, estimates, billing, payments, and operational reporting.",
    status: "active-development",
    featured: true,
    technologies: [
      "Django",
      "Python",
      "PostgreSQL",
      "HTMX",
      "Bootstrap",
      "Docker Compose",
    ],
    capabilities: [
      "Repair-order lifecycle modeling",
      "Role and object-level authorization",
      "Estimate and billing workflows",
      "Transactional service boundaries",
      "Automated testing and CI",
    ],
    evidence: [
      {
        state: "implemented",
        statement:
          "Models customers, vehicles, repair orders, estimates, invoices, payments, status history, and operational communication records.",
      },
      {
        state: "implemented",
        statement:
          "Uses centralized authorization policies and transactional billing services for guarded business operations.",
      },
      {
        state: "implemented",
        statement:
          "Includes automated validation for Django behavior, PostgreSQL-backed tests, migrations, Docker builds, and Compose smoke checks.",
      },
    ],
    limitations: [
      "The application is in active development and is not production-deployed.",
      "Production infrastructure, monitoring, backup and restore operations, and broader hardening remain incomplete.",
    ],
    repository: {
      visibility: "private",
      name: "Unicos",
    },
    links: [
      {
        kind: "case-study",
        label: "Read case study",
        href: "/projects/unicos",
      },
    ],
  },
  {
    slug: "home-security-lab",
    name: "Home Security and Automation Lab",
    summary:
      "A local-first Ubuntu Server hub integrating three RTSP cameras with Frigate person detection, Home Assistant automations, and mobile notifications.",
    status: "operational-lab",
    featured: true,
    technologies: [
      "Ubuntu Server",
      "Docker",
      "Frigate",
      "Home Assistant",
      "Mosquitto MQTT",
      "RTSP",
    ],
    capabilities: [
      "Containerized local infrastructure",
      "Three-camera RTSP integration",
      "Frigate person-object detection",
      "Zone and time-conditioned automations",
      "Mobile notification delivery",
      "Network and service troubleshooting",
    ],
    evidence: [
      {
        state: "operational",
        statement:
          "Runs Home Assistant, Frigate, and Mosquitto as containerized services on an Ubuntu Server host.",
      },
      {
        state: "operational",
        statement:
          "Integrates three RTSP camera streams into Frigate for local recording and person-object detection.",
      },
      {
        state: "operational",
        statement:
          "Uses configured detection areas and time windows to decide when person events should trigger mobile notifications.",
      },
      {
        state: "operational",
        statement:
          "Includes verified local MQTT messaging and hands-on camera, network, and container troubleshooting.",
      },
    ],
    limitations: [
      "This is a privately operated home deployment, not a commercial security product or professionally monitored alarm system.",
      "The older home-automation repository does not represent the current Frigate and Home Assistant deployment, so public evidence is limited to sanitized operational documentation.",
      "Public evidence must omit credentials, private addresses, exact camera placement, exact automation schedules, sensitive topology, and identifying footage.",
    ],
    repository: {
      visibility: "none",
    },
    links: [
      {
        kind: "case-study",
        label: "Read case study",
        href: "/projects/home-security-lab",
      },
    ],
  },
] as const satisfies readonly Project[];
