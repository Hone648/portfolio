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
      "Full-stack development informed by a technical career spanning more than two decades in troubleshooting, systems integration, field support, and technical operations.",
    background: [
      "I am a Computer Science student and full-stack developer. Before focusing on software, I worked in avionics, industrial electronics, automated test equipment, semiconductor equipment, data acquisition, remote telemetry, and control systems.",
      "That work required systematic fault isolation across software, electronics, instrumentation, mechanical systems, networks, and operator interfaces, along with customer training, documentation, and coordination with engineers and other technical teams.",
      "I now apply that systems perspective to a deployed web application, a business application in active development, and operational local automation infrastructure. The portfolio shows how those disciplines reinforce each other while keeping prior technical experience distinct from current software work.",
    ],
    howIWork: [
      "Define requirements, constraints, and success criteria before implementation.",
      "Deliver changes in focused, reviewable slices.",
      "Distinguish deployed work, work in active development, and operational systems.",
      "Validate with linting, type checking, builds, tests, CI, and browser review when applicable.",
      "Troubleshoot across application, service, container, host, and network boundaries.",
      "Document meaningful constraints and protect private operational information.",
      "Use AI assistance for research, planning, implementation support, review, and validation while retaining final engineering decisions.",
    ],
    currentDirection: [
      "I am completing Computer Science coursework through Central Texas College. My planned academic path is transfer to Texas A&M University-Central Texas for a B.S. in Computer Science.",
      "I completed a programming bootcamp and continued building projects afterward. My current technical focus includes full-stack development, backend systems, databases, Linux, automation, and systems integration.",
      "I am interested in remote software development roles and carefully scoped freelance projects where independent troubleshooting, clear communication, and disciplined delivery are valuable.",
    ],
  },
  resume: {
    lede:
      "A professional web resume connecting current software projects with selected prior technical experience.",
    summary:
      "Computer Science student and full-stack developer with a technical career spanning more than two decades across avionics, automated test equipment, semiconductor equipment, industrial data acquisition, and control systems. Current software work includes a deployed Next.js application, a Django business system in active development, and operational Linux-based automation infrastructure.",
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
        institution: "Coding Dojo",
        detail:
          "Completed on-site software development training covering Python/Django, C#/.NET, JavaScript/React, SQL, and NoSQL, followed by continued independent project development.",
      },
    ],
    certification: "FCC license with radar endorsement.",
  },
  contactPage: {
    lede:
      "For remote software development roles, carefully scoped freelance projects, automation, systems integration, or technical collaboration, contact Hunter by email.",
    introduction:
      "Email is the direct public contact channel for role or project discussions. GitHub provides another view of the repositories and technical work that can be shared publicly.",
    privacyNote:
      "This portfolio does not use a public contact form or collect contact details through a site backend.",
  },
} as const satisfies SiteContent;
