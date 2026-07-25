type ProfileEntry = {
  readonly title: string;
  readonly details: readonly string[];
};

type EducationEntry = {
  readonly institution: string;
  readonly detail: string;
};

type SiteContent = {
  readonly name: string;
  readonly positioning: string;
  readonly github: {
    readonly href: `https://${string}`;
    readonly label: string;
  };
  readonly contact: {
    readonly email: string;
    readonly emailHref: `mailto:${string}`;
  };
  readonly about: {
    readonly lede: string;
    readonly background: readonly string[];
    readonly howIWork: readonly string[];
    readonly currentDirection: readonly string[];
  };
  readonly resume: {
    readonly lede: string;
    readonly summary: string;
    readonly professionalBackground: readonly ProfileEntry[];
    readonly educationAndTraining: readonly EducationEntry[];
    readonly certification: string;
  };
  readonly contactPage: {
    readonly lede: string;
    readonly introduction: string;
    readonly privacyNote: string;
  };
};

export const siteContent = {
  name: "Hunter Kam",
  positioning:
    "Computer Science student and full-stack developer building production web applications, operational business systems, and local automation infrastructure.",
  github: {
    href: "https://github.com/Hone648",
    label: "GitHub profile",
  },
  contact: {
    email: "hone648@gmail.com",
    emailHref: "mailto:hone648@gmail.com",
  },
  about: {
    lede:
      "Software development grounded in a long technical background, careful troubleshooting, and evidence-backed delivery.",
    background: [
      "I am a Computer Science student and full-stack developer. My technical background predates my current software work and includes veteran technical service, avionics, electronics, automated test equipment, equipment support, and control systems.",
      "My current work includes a production web application, an active-development business application, and operational local automation infrastructure. Across those projects, I combine software development, systems integration, layered troubleshooting, and documentation without presenting every earlier technical role as software development.",
    ],
    howIWork: [
      "Define requirements and evidence boundaries before implementation.",
      "Deliver changes in focused, reviewable slices.",
      "Distinguish deployed, active-development, and operational work.",
      "Validate with linting, type checking, builds, tests, CI, and browser review when applicable.",
      "Troubleshoot across application, service, container, host, and network boundaries.",
      "Document limitations and protect private operational information.",
      "Use AI assistance for research, planning, implementation support, review, and validation while retaining final engineering decisions.",
    ],
    currentDirection: [
      "I am completing Computer Science coursework through Central Texas College. My planned academic path is transfer to Texas A&M University-Central Texas for a B.S. in Computer Science.",
      "I completed a programming bootcamp and continued building projects afterward. My current technical focus includes full-stack development, backend systems, databases, Linux, automation, and systems integration.",
    ],
  },
  resume: {
    lede:
      "An evidence-backed web resume covering software projects, technical experience, education, and current engineering practice.",
    summary:
      "Computer Science student and full-stack developer with more than 20 years of technical experience across avionics, electronics, automated test equipment, equipment support, and control systems. Builds production web applications, active-development business systems, and operational local automation infrastructure.",
    professionalBackground: [
      {
        title: "Independent software development and systems integration",
        details: [
          "Builds and reviews the portfolio's three documented projects.",
          "Owns requirements, implementation decisions, validation, evidence boundaries, and merge decisions.",
          "Uses AI assistance as a supporting engineering tool rather than autonomous project ownership.",
        ],
      },
      {
        title: "Equipment Technician - Qorvo",
        details: [
          "Supported and troubleshot production equipment in a technical manufacturing environment.",
          "Applied electronics, equipment diagnostics, and systematic fault isolation.",
        ],
      },
      {
        title: "Field Engineer - SPEA",
        details: [
          "Diagnosed issues involving electronic test equipment.",
          "Supported restoration of equipment operation through field troubleshooting.",
        ],
      },
      {
        title: "Veteran technical background",
        details: [
          "Developed foundational experience with avionics, electronics, and control systems.",
          "Carried technical troubleshooting and systems thinking into later field and software work.",
        ],
      },
    ],
    educationAndTraining: [
      {
        institution: "Central Texas College",
        detail: "Computer Science coursework in progress.",
      },
      {
        institution: "Texas A&M University-Central Texas",
        detail:
          "Planned transfer destination for completion of a B.S. in Computer Science.",
      },
      {
        institution: "Programming bootcamp",
        detail:
          "Completed programming bootcamp followed by continued independent project development.",
      },
    ],
    certification: "FCC license with radar endorsement.",
  },
  contactPage: {
    lede:
      "For software development, automation, systems integration, or technical collaboration, contact Hunter by email or review the project evidence on GitHub and this portfolio.",
    introduction:
      "Email is the direct public contact channel. GitHub provides another view of the repositories and technical work that can be shared publicly.",
    privacyNote:
      "This portfolio does not use a public contact form or collect contact details through a site backend.",
  },
} as const satisfies SiteContent;
