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
      "A local-first Ubuntu Server platform integrating containerized NVR, home automation, MQTT messaging, and networked cameras.",
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
      "Camera and RTSP integration",
      "MQTT messaging",
      "Network and service troubleshooting",
      "Sensor-system design",
      "C++ automation tooling",
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
          "Integrates RTSP camera streams and verified MQTT publish-and-subscribe messaging.",
      },
      {
        state: "prototyped",
        statement:
          "Includes C++ and CMake experimentation for automation and log-processing tools.",
      },
      {
        state: "designed",
        statement:
          "Includes a wired ESP32 door-and-window sensor architecture that has not yet been fully deployed.",
      },
    ],
    limitations: [
      "The full current NVR architecture is not adequately represented by the older home-automation repository.",
      "The planned multi-camera expansion and complete wired sensor network are not finished.",
      "Public evidence must omit credentials, private addresses, exact camera placement, sensitive topology, and identifying footage.",
    ],
    repository: {
      visibility: "none",
    },
    links: [],
  },
] as const satisfies readonly Project[];
