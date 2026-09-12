type EducationEntry = {
  readonly institution: string;
  readonly detail: string;
};

type SiteContent = {
  readonly name: string;
  readonly positioning: string;
  readonly portfolioIdentity: string;
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
  readonly home: {
    readonly supportingPosition: string;
    readonly supportingCopy: string;
    readonly engineeringRange: readonly {
      readonly title: string;
      readonly description: string;
    }[];
    readonly technicalFoundation: string;
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
    "Computer Science student combining modern software development with more than two decades of technical experience across avionics, automated test systems, semiconductor equipment, industrial telemetry, controls, and systems troubleshooting.",
  portfolioIdentity: "Software & Systems Engineering",
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
      "Software and systems engineering informed by more than two decades of hands-on technical experience across avionics, automated test, semiconductor equipment, telemetry, controls, troubleshooting, and systems integration.",
    background: [
      "I am a Computer Science student whose current software development builds on a broader technical systems career across avionics, industrial electronics, automated test equipment, semiconductor equipment, data acquisition, remote telemetry, controls, troubleshooting, systems integration, and technical operations.",
      "That work developed systematic fault isolation and systems thinking across software, electronics, instrumentation, mechanical systems, networks, operator interfaces, and related system boundaries, along with customer training, documentation, and coordination with engineers and technical teams.",
      "I now apply that systems perspective to project-backed software applications and operational automation infrastructure. Current software work and prior technical experience reinforce each other while remaining distinct: project-backed software skills are separate from historical and transferable technical strengths.",
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
      "I am interested in engineering roles where software, systems integration, automation, infrastructure, verification, and complex technical problem-solving intersect.",
    ],
  },
  home: {
    supportingPosition:
      "Computer Science student combining modern software development with more than two decades of technical experience across avionics, automated test systems, semiconductor equipment, industrial telemetry, controls, and systems troubleshooting.",
    supportingCopy:
      "Current software work builds on prior technical systems experience, connecting application development, systems integration, automation, and hands-on troubleshooting.",
    engineeringRange: [
      {
        title: "Software Engineering",
        description:
          "Application development, backend systems, databases, authentication and authorization, testing, CI, deployment, monitoring, production operations, and application architecture.",
      },
      {
        title: "Systems Integration & Automation",
        description:
          "Linux, containers, networking, MQTT, RTSP, automation, infrastructure, telemetry, hardware/software interfaces, and troubleshooting across service and system boundaries.",
      },
      {
        title: "Technical Systems Experience",
        description:
          "Avionics, automated electronic test systems, semiconductor equipment, instrumentation, communications, installations, upgrades, troubleshooting, equipment support, and technical coordination.",
      },
    ],
    technicalFoundation:
      "More than two decades of technical work across avionics, automated test, semiconductor equipment, industrial telemetry, controls, and systems troubleshooting inform the way I approach current software and systems work.",
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
      "For software and systems engineering opportunities, systems integration, automation, infrastructure, or technical collaboration, contact Hunter by email.",
    introduction:
      "Email is the direct public contact channel for role, project, or technical collaboration discussions. GitHub provides another view of the repositories and technical work that can be shared publicly.",
    privacyNote:
      "This portfolio does not use a public contact form or collect contact details through a site backend.",
  },
} as const satisfies SiteContent;
