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

export type ProjectCardContent = {
  readonly category: string;
  readonly description: string;
  readonly highlights: readonly [string, string, string];
  readonly currentStatus: string;
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
  readonly card: ProjectCardContent;
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

export const projectStatusShortLabels = {
  production: "Live",
  "active-development": "In development",
  "operational-lab": "Home lab",
} satisfies Record<ProjectStatus, string>;

export const projects = [
  {
    slug: "newbudget",
    name: "newBudget",
    summary:
      "A deployed personal-finance application focused on month-first planning, expense tracking, and debt and installment management.",
    card: {
      category: "Personal finance",
      description:
        "A live budgeting application for planning each month, tracking expenses, and managing debt and installment payments in one place.",
      highlights: [
        "Designed financial domain rules for budgets, debts, payments, and balance history.",
        "Enforced user-scoped ownership through server-side application boundaries.",
        "Operates with automated validation, monitoring, backups, and documented recovery procedures.",
      ],
      currentStatus:
        "Live on Vercel as a privately operated production application.",
    },
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
      "Month-first budgeting and debt tracking",
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
      "Debt and installment calculations support planning and history but do not claim lender-exact accounting.",
    ],
    repository: {
      visibility: "private",
      name: "newBudget",
    },
    links: [
      {
        kind: "case-study",
        label: "View case study",
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
    card: {
      category: "Repair-shop operations",
      description:
        "A business application that connects customer, vehicle, repair-order, estimate, invoice, payment, and reporting workflows.",
      highlights: [
        "Uses the repair order as the shared workflow spine for shop activity.",
        "Centralizes permissions and guarded lifecycle transitions.",
        "Protects billing changes with transactional services and PostgreSQL-backed validation.",
      ],
      currentStatus:
        "Implemented and actively developed locally; production infrastructure and hardening are not complete.",
    },
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
        label: "View case study",
        href: "/projects/unicos",
      },
    ],
  },
  {
    slug: "home-security-lab",
    name: "Home Security and Automation Lab",
    summary:
      "A local, self-hosted NVR and automation stack with reviewed configuration, event-driven integration, and documented change procedures.",
    card: {
      category: "Home infrastructure",
      description:
        "A self-hosted security and automation system built around inspectable services, local event processing, and privacy-aware operations.",
      highlights: [
        "Runs Frigate, Home Assistant, and Mosquitto as a Docker Compose stack on Ubuntu.",
        "Uses VAAPI-accelerated RTSP processing and MQTT-driven Home Assistant automation.",
        "Validates reviewed configuration and documents repository-to-live deployment, verification, and rollback steps.",
      ],
      currentStatus:
        "Operational in a private residential environment; a sanitized public repository represents selected reviewed configuration and procedures.",
    },
    status: "operational-lab",
    featured: true,
    technologies: [
      "Ubuntu Server",
      "Docker",
      "Docker Compose",
      "Frigate",
      "VAAPI",
      "Home Assistant",
      "Mosquitto MQTT",
      "RTSP",
    ],
    capabilities: [
      "Containerized local infrastructure",
      "RTSP detect and record processing",
      "VAAPI video acceleration",
      "MQTT event integration",
      "Configuration validation and deployment runbooks",
      "Documented service verification and rollback",
    ],
    evidence: [
      {
        state: "operational",
        statement:
          "Runs Home Assistant, Frigate, and Mosquitto as a Docker Compose stack on an Ubuntu 24.04.3 LTS host.",
      },
      {
        state: "operational",
        statement:
          "Uses separate sanitized RTSP detect and record inputs, VAAPI FFmpeg acceleration through /dev/dri, and event-oriented recording and snapshot retention.",
      },
      {
        state: "operational",
        statement:
          "Publishes representative Frigate events through Mosquitto so a person event can create a Home Assistant persistent notification.",
      },
      {
        state: "operational",
        statement:
          "Provides repository tooling that validates YAML, Python, Bash, Docker Compose, and Mosquitto configuration.",
      },
      {
        state: "designed",
        statement:
          "Documents pre-deployment validation, timestamped live-file backups, targeted service recreation, post-deployment verification, and configuration rollback without claiming those steps have been exercised live.",
      },
    ],
    limitations: [
      "This is a privately operated home deployment, not a commercial security product or professionally monitored alarm system.",
      "The public repository is a sanitized representative configuration, not a complete inventory or verbatim copy of the private deployment.",
      "Full backup and recovery, monitoring, storage safeguards, network migration, and security hardening remain planned; no disk-threshold cleanup is deployed and image tags still float.",
    ],
    repository: {
      visibility: "public",
      name: "nvr-infrastructure",
      href: "https://github.com/Hone648/nvr-infrastructure",
    },
    links: [
      {
        kind: "case-study",
        label: "View case study",
        href: "/projects/home-security-lab",
      },
      {
        kind: "external",
        label: "Open NVR infrastructure source",
        href: "https://github.com/Hone648/nvr-infrastructure",
      },
    ],
  },
] as const satisfies readonly Project[];
