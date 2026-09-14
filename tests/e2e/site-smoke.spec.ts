import { expect, test, type Page } from "@playwright/test";
import { collectApplicationErrors } from "./application-errors";

const testOrigin = "http://127.0.0.1:3001";
const approvedSupportingPosition =
  "Computer Science student combining modern software development with more than two decades of technical experience across avionics, automated test systems, semiconductor equipment, industrial telemetry, controls, and systems troubleshooting.";
const approvedResumeLede =
  "An experience-forward resume connecting current software and systems work with more than two decades of technical experience.";
const approvedResumeSummary =
  "Computer Science student combining modern software development with more than two decades of technical experience across avionics, automated test systems, semiconductor equipment, industrial telemetry, controls, and systems troubleshooting. Current software and systems work spans production application development, backend systems, Linux infrastructure, automation, and systems integration.";
const sharedSkillGroupHeadings = [
  "Application development",
  "Backend and data systems",
  "Software delivery and operations",
  "Systems integration and automation",
  "Engineering workflow and validation",
] as const;
const approvedProjectOrder = [
  "newBudget",
  "Forkfolio",
  "Home Security and Automation Lab",
  "Unicos",
] as const;

async function expectApprovedForkfolioSkillRelationships(page: Page) {
  for (const groupName of [
    "Application development",
    "Backend and data systems",
  ] as const) {
    const group = page.getByRole("region", { name: groupName, exact: true });
    await expect(group.getByRole("link", {
      name: "Forkfolio case study",
      exact: true,
    })).toHaveAttribute("href", "/projects/forkfolio");
  }

  for (const groupName of [
    "Software delivery and operations",
    "Systems integration and automation",
    "Engineering workflow and validation",
  ] as const) {
    const group = page.getByRole("region", { name: groupName, exact: true });
    await expect(group.getByRole("link", {
      name: "Forkfolio case study",
      exact: true,
    })).toHaveCount(0);
  }
}

const publicRoutes = [
  {
    path: "/",
    heading: "Hunter Kam",
    title: "Hunter Kam | Software & Systems Engineering",
  },
  {
    path: "/projects",
    heading: "Projects",
    title: "Projects | Hunter Kam",
  },
  {
    path: "/projects/newbudget",
    heading: "newBudget",
    title: "newBudget case study | Hunter Kam",
  },
  {
    path: "/projects/unicos",
    heading: "Unicos",
    title: "Unicos case study | Hunter Kam",
  },
  {
    path: "/projects/home-security-lab",
    heading: "Home Security and Automation Lab",
    title: "Home Security and Automation Lab case study | Hunter Kam",
  },
  {
    path: "/projects/forkfolio",
    heading: "Forkfolio",
    title: "Forkfolio case study | Hunter Kam",
  },
  {
    path: "/about",
    heading: "Hunter Kam",
    title: "About | Hunter Kam",
  },
  {
    path: "/resume",
    heading: "Resume",
    title: "Resume | Hunter Kam",
  },
  {
    path: "/contact",
    heading: "Contact Hunter",
    title: "Contact | Hunter Kam",
  },
] as const;

const responsiveRoutes = publicRoutes.filter(({ path }) =>
  [
    "/",
    "/projects",
    "/projects/newbudget",
    "/projects/forkfolio",
    "/about",
    "/resume",
    "/contact",
  ].includes(path),
);

test.describe("canonical public routes", () => {
  for (const route of publicRoutes) {
    test(`${route.path} exposes its public document contract`, async ({ page }) => {
      const expectNoApplicationErrors = collectApplicationErrors(page);
      const response = await page.goto(route.path);

      expect(response?.status()).toBe(200);

      const main = page.getByRole("main");
      await expect(main).toHaveCount(1);
      await expect(main).toBeVisible();

      const heading = page.getByRole("heading", {
        level: 1,
        name: route.heading,
        exact: true,
      });
      await expect(heading).toHaveCount(1);
      await expect(heading).toBeVisible();
      await expect(page).toHaveTitle(route.title);

      const description = page.locator('meta[name="description"]');
      await expect(description).toHaveCount(1);
      await expect(description).toHaveAttribute("content", /\S/);

      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
        "href",
        route.path === "/" ? testOrigin : new URL(route.path, testOrigin).href,
      );
      expectNoApplicationErrors();
    });
  }
});

test("Home Security exposes the public NVR infrastructure source", async ({
  page,
}) => {
  const expectNoApplicationErrors = collectApplicationErrors(page);
  const repositoryUrl = "https://github.com/Hone648/nvr-infrastructure";

  await page.goto("/projects/home-security-lab");
  const caseStudyRepositoryLink = page.getByRole("link", {
    name: "View the nvr-infrastructure repository on GitHub in a new tab",
    exact: true,
  });
  await expect(caseStudyRepositoryLink).toBeVisible();
  await expect(caseStudyRepositoryLink).toHaveAttribute("href", repositoryUrl);

  await page.goto("/projects");
  const projectSourceLink = page.getByRole("link", {
    name: "Open NVR infrastructure source: Home Security and Automation Lab in a new tab",
    exact: true,
  });
  await expect(projectSourceLink).toBeVisible();
  await expect(projectSourceLink).toHaveAttribute("href", repositoryUrl);
  expectNoApplicationErrors();
});

test("the project index follows the approved project hierarchy", async ({
  page,
}) => {
  const expectNoApplicationErrors = collectApplicationErrors(page);

  await page.goto("/projects");

  const projectHeadings = await page.getByRole("article").evaluateAll((cards) =>
    cards.map((card) => card.querySelector("h2")?.textContent?.trim() ?? ""),
  );
  expect(projectHeadings).toEqual([...approvedProjectOrder]);
  expectNoApplicationErrors();
});

test("the homepage exposes the Google site-verification tag", async ({
  page,
}) => {
  const expectNoApplicationErrors = collectApplicationErrors(page);
  const response = await page.goto("/");

  expect(response?.status()).toBe(200);

  const verification = page.locator('meta[name="google-site-verification"]');
  await expect(verification).toHaveCount(1);
  await expect(verification).toHaveAttribute(
    "content",
    "ccLfmUEUzj3OXo02VsjQnWWJkTWzzdwg4mnGXIk5_V4",
  );
  expectNoApplicationErrors();
});

test("the homepage leads with the Software and Systems Engineering identity", async ({
  page,
}) => {
  const expectNoApplicationErrors = collectApplicationErrors(page);
  const response = await page.goto("/");

  expect(response?.status()).toBe(200);
  await expect(
    page.getByRole("heading", {
      level: 1,
      name: "Hunter Kam",
      exact: true,
    }),
  ).toBeVisible();
  await expect(page.getByText("Software & Systems Engineering")).toBeVisible();
  await expect(page.getByText(approvedSupportingPosition)).toBeVisible();

  const engineeringRange = page
    .getByRole("heading", {
      level: 2,
      name: "Engineering range",
      exact: true,
    })
    .locator("xpath=ancestor::section");
  await expect(engineeringRange).toBeVisible();
  await expect(
    engineeringRange.getByRole("heading", {
      level: 3,
      name: "Software Engineering",
      exact: true,
    }),
  ).toBeVisible();
  await expect(
    engineeringRange.getByRole("heading", {
      level: 3,
      name: "Systems Integration & Automation",
      exact: true,
    }),
  ).toBeVisible();
  await expect(
    engineeringRange.getByRole("heading", {
      level: 3,
      name: "Technical Systems Experience",
      exact: true,
    }),
  ).toBeVisible();

  await expect(
    page.getByRole("link", { name: "View engineering work", exact: true }),
  ).toHaveAttribute("href", "/projects");
  await expect(
    page.getByRole("link", { name: "View resume", exact: true }),
  ).toHaveAttribute("href", "/resume");
  const technicalFoundation = page.getByRole("region", {
    name: "Technical foundation",
  });
  await expect(
    technicalFoundation.getByRole("link", {
      name: "View technical experience",
      exact: true,
    }),
  ).toHaveAttribute("href", "/resume#selected-technical-experience");
  await expect(page.locator('meta[property="og:title"]')).toHaveAttribute(
    "content",
    "Hunter Kam | Software & Systems Engineering",
  );
  await expect(page.locator('meta[name="twitter:title"]')).toHaveAttribute(
    "content",
    "Hunter Kam | Software & Systems Engineering",
  );

  expectNoApplicationErrors();
});

test("the homepage balances current project and career engineering evidence", async ({
  page,
}) => {
  const expectNoApplicationErrors = collectApplicationErrors(page);
  const response = await page.goto("/");

  expect(response?.status()).toBe(200);

  const selectedEvidence = page.getByRole("region", {
    name: "Selected work and experience",
  });
  await expect(selectedEvidence).toHaveCount(1);
  await expect(selectedEvidence).toBeVisible();
  await expect(
    page.getByRole("region", { name: "Selected work", exact: true }),
  ).toHaveCount(0);

  const evidenceBlocks = selectedEvidence.getByRole("article");
  await expect(evidenceBlocks).toHaveCount(4);
  await expect(
    selectedEvidence.getByRole("heading", {
      level: 3,
      name: "Software Engineering",
      exact: true,
    }),
  ).toBeVisible();
  await expect(
    selectedEvidence.getByRole("heading", {
      level: 3,
      name: "Systems Integration & Automation",
      exact: true,
    }),
  ).toBeVisible();
  await expect(
    selectedEvidence.getByRole("heading", {
      level: 3,
      name: "Automated Test & Integration",
      exact: true,
    }),
  ).toBeVisible();
  await expect(
    selectedEvidence.getByRole("heading", {
      level: 3,
      name: "Avionics & Electronic Systems",
      exact: true,
    }),
  ).toBeVisible();

  await expect(
    selectedEvidence.getByText("PROJECT", { exact: true }),
  ).toHaveCount(2);
  await expect(selectedEvidence.getByText("TECHNICAL EXPERIENCE", { exact: true })).toHaveCount(2);
  await expect(
    selectedEvidence.getByText("newBudget", { exact: true }),
  ).toBeVisible();
  await expect(
    selectedEvidence.getByText("Home Security and Automation Lab", {
      exact: true,
    }),
  ).toBeVisible();
  await expect(
    selectedEvidence.getByText("SPEA — Field Engineer", { exact: true }),
  ).toBeVisible();
  await expect(
    selectedEvidence.getByText("Avionics systems experience", { exact: true }),
  ).toBeVisible();

  await expect(
    selectedEvidence.getByRole("link", {
      name: "View newBudget case study",
      exact: true,
    }),
  ).toHaveAttribute("href", "/projects/newbudget");
  await expect(
    selectedEvidence.getByRole("link", {
      name: "View systems case study",
      exact: true,
    }),
  ).toHaveAttribute("href", "/projects/home-security-lab");
  const careerEvidenceLinks = selectedEvidence.getByRole("link", {
    name: "View technical experience",
    exact: true,
  });
  await expect(careerEvidenceLinks).toHaveCount(2);
  await expect(careerEvidenceLinks.nth(0)).toHaveAttribute(
    "href",
    "/resume#selected-technical-experience",
  );
  await expect(careerEvidenceLinks.nth(1)).toHaveAttribute(
    "href",
    "/resume#selected-technical-experience",
  );
  await expect(
    selectedEvidence.getByRole("link", {
      name: "View all projects",
      exact: true,
    }),
  ).toHaveAttribute("href", "/projects");
  await expect(
    selectedEvidence.getByText("Additional software project:", {
      exact: true,
    }),
  ).toBeVisible();
  const forkfolioSupplement = selectedEvidence.getByRole("link", {
    name: "Forkfolio",
    exact: true,
  });
  await expect(forkfolioSupplement).toHaveAttribute("href", "/projects/forkfolio");
  await expect(
    selectedEvidence.getByText(
      /tenant-aware application boundaries and immutable release-backed publication/i,
    ),
  ).toBeVisible();
  await expect(evidenceBlocks.filter({ hasText: "Forkfolio" })).toHaveCount(0);
  await expect(selectedEvidence.getByText("Unicos")).toHaveCount(0);
  await expect(page.getByText("Unicos", { exact: true })).toHaveCount(0);

  expectNoApplicationErrors();
});

test("the about page presents a cumulative software and systems narrative", async ({
  page,
}) => {
  const expectNoApplicationErrors = collectApplicationErrors(page);
  const response = await page.goto("/about");

  expect(response?.status()).toBe(200);
  await expect(
    page.getByRole("heading", {
      level: 1,
      name: "Hunter Kam",
      exact: true,
    }),
  ).toBeVisible();
  await expect(page.getByText(approvedSupportingPosition)).toBeVisible();
  await expect(
    page.getByRole("heading", { level: 2, name: "Background", exact: true }),
  ).toBeVisible();

  const transferableStrengths = page.getByRole("heading", {
    level: 2,
    name: "Technical strengths",
    exact: true,
  });
  const howIWork = page.getByRole("heading", {
    level: 2,
    name: "How I work",
    exact: true,
  });
  await expect(transferableStrengths).toBeVisible();
  await expect(howIWork).toBeVisible();
  await expect(
    page.getByRole("heading", {
      level: 2,
      name: "Current technical skills",
      exact: true,
    }),
  ).toBeVisible();
  for (const skillGroup of sharedSkillGroupHeadings) {
    await expect(
      page.getByRole("heading", {
        level: 3,
        name: skillGroup,
        exact: true,
      }),
    ).toBeVisible();
  }
  await expect(
    page.getByText(
      "I completed a programming bootcamp and continued building projects afterward. My current technical focus includes application development, backend systems, databases, Linux, automation, and systems integration.",
      { exact: true },
    ),
  ).toBeVisible();
  await expect(
    page.getByText(
      "I am interested in engineering roles where software, systems integration, automation, infrastructure, verification, and complex technical problem-solving intersect.",
    ),
  ).toBeVisible();
  await expect(
    page.getByText(
      "My current technical focus includes full-stack development, backend systems, databases, Linux, automation, and systems integration.",
    ),
  ).toHaveCount(0);
  await expect(page.getByText("Before focusing on software")).toHaveCount(0);
  await expect(page.getByText("remote software development roles")).toHaveCount(
    0,
  );
  await expect(page.locator('meta[name="description"]')).toHaveAttribute(
    "content",
    "Software and systems engineering, technical experience, and engineering strengths for Hunter Kam.",
  );
  await expectApprovedForkfolioSkillRelationships(page);

  const technicalStrengthsBeforeHowIWork = await page.evaluate(() => {
    const strengths = document.querySelector(
      "#technical-strengths",
    );
    const work = document.querySelector("#how-i-work");

    return Boolean(
      strengths &&
        work &&
        (strengths.compareDocumentPosition(work) &
          Node.DOCUMENT_POSITION_FOLLOWING),
    );
  });
  expect(technicalStrengthsBeforeHowIWork).toBe(true);

  const personDescription = await page.evaluate(() => {
    for (const script of document.querySelectorAll(
      'script[type="application/ld+json"]',
    )) {
      const parsed = JSON.parse(script.textContent ?? "{}");

      if (parsed["@type"] === "ProfilePage") {
        return parsed.mainEntity?.description;
      }
    }

    return null;
  });
  expect(personDescription).toBe(approvedSupportingPosition);

  expectNoApplicationErrors();
});

test("the resume presents experience-forward software and systems positioning", async ({
  page,
}) => {
  const expectNoApplicationErrors = collectApplicationErrors(page);
  const response = await page.goto("/resume");

  expect(response?.status()).toBe(200);
  await expect(
    page.getByRole("heading", { level: 1, name: "Resume", exact: true }),
  ).toBeVisible();
  await expect(page.getByText("Software & Systems Engineering")).toBeVisible();
  await expect(page.getByText(approvedResumeLede)).toBeVisible();
  await expect(page.getByText(approvedResumeSummary)).toBeVisible();
  await expect(page.locator('meta[name="description"]')).toHaveAttribute(
    "content",
    "Resume for Hunter Kam connecting current software and systems engineering work with more than two decades of technical experience.",
  );

  await expect(
    page.getByRole("heading", {
      level: 2,
      name: "Engineering strengths",
      exact: true,
    }),
  ).toBeVisible();
  for (const strength of [
    "Systems troubleshooting",
    "Software, hardware, and data interfaces",
    "Customer and technical-team communication",
    "Measurement and operational discipline",
  ]) {
    await expect(
      page.getByRole("heading", { level: 3, name: strength, exact: true }),
    ).toBeVisible();
  }

  const experience = page.getByRole("region", {
    name: "Selected technical experience",
  });
  await expect(experience).toBeVisible();
  for (const entry of [
    { role: "Equipment Technician", organization: "Qorvo" },
    {
      role: "Electronics Technician",
      organization: "Cretic Energy Services / Forbes Energy Services",
    },
    { role: "Field Engineer", organization: "SPEA" },
    {
      role: "Avionics Technician",
      organization: "Advantage Aircraft Services Inc.",
    },
    {
      role: "Avionics Electronics Technician",
      organization: "U.S. Navy",
    },
  ]) {
    await expect(
      experience.getByRole("heading", {
        level: 3,
        name: entry.role,
        exact: true,
      }),
    ).toBeVisible();
    await expect(
      experience.getByText(entry.organization, { exact: true }),
    ).toBeVisible();
  }

  const projects = page.getByRole("region", { name: "Selected projects" });
  await expect(projects).toBeVisible();
  const projectHeadings = await projects
    .getByRole("heading", { level: 3 })
    .evaluateAll((headings) =>
      headings.map((heading) => heading.textContent?.trim() ?? ""),
    );
  expect(projectHeadings).toEqual([...approvedProjectOrder]);
  for (const project of approvedProjectOrder) {
    await expect(
      projects.getByRole("heading", {
        level: 3,
        name: project,
        exact: true,
      }),
    ).toBeVisible();
  }

  await expect(
    page.getByRole("heading", {
      level: 2,
      name: "Current technical skills",
      exact: true,
    }),
  ).toBeVisible();
  for (const skillGroup of sharedSkillGroupHeadings) {
    await expect(
      page.getByRole("heading", {
        level: 3,
        name: skillGroup,
        exact: true,
      }),
    ).toBeVisible();
  }
  await expectApprovedForkfolioSkillRelationships(page);
  await expect(
    page.getByRole("heading", {
      level: 2,
      name: "Education and training",
      exact: true,
    }),
  ).toBeVisible();
  await expect(page.getByText("Central Texas College")).toBeVisible();
  await expect(
    page.getByText("Texas A&M University-Central Texas"),
  ).toBeVisible();
  await expect(page.getByText("Coding Dojo")).toBeVisible();
  await expect(
    page.getByRole("heading", {
      level: 2,
      name: "Certification",
      exact: true,
    }),
  ).toBeVisible();
  await expect(
    page.getByText("FCC license with radar endorsement.", { exact: true }),
  ).toBeVisible();

  const contactLinks = page.getByRole("region", { name: "Contact links" });
  await expect(contactLinks).toBeVisible();
  for (const link of [
    "Email Hunter",
    "View GitHub profile in a new tab",
    "View projects",
    "About Hunter",
  ]) {
    await expect(
      contactLinks.getByRole("link", { name: link, exact: true }),
    ).toBeVisible();
  }

  const sectionOrder = await page.evaluate(() => {
    const ids = [
      "engineering-strengths",
      "selected-technical-experience",
      "selected-projects",
      "current-technical-skills",
      "education-and-training",
      "certification",
      "resume-contact",
    ];
    return ids.slice(0, -1).every((id, index) => {
      const nextId = ids[index + 1];
      const current = document.getElementById(id);
      const next = nextId ? document.getElementById(nextId) : null;

      return Boolean(
        current &&
          next &&
          (current.compareDocumentPosition(next) &
            Node.DOCUMENT_POSITION_FOLLOWING),
      );
    });
  });
  expect(sectionOrder).toBe(true);

  await expect(
    page.getByText(
      "A professional web resume connecting current software projects with selected prior technical experience.",
    ),
  ).toHaveCount(0);
  await expect(
    page.getByText("Computer Science student and full-stack developer"),
  ).toHaveCount(0);
  await expect(
    page.getByRole("heading", {
      level: 2,
      name: "Technical skills",
      exact: true,
    }),
  ).toHaveCount(0);

  expectNoApplicationErrors();
});

test("the contact page uses broad software and systems opportunity language", async ({
  page,
}) => {
  const expectNoApplicationErrors = collectApplicationErrors(page);
  const response = await page.goto("/contact");

  expect(response?.status()).toBe(200);
  await expect(
    page.getByRole("heading", {
      level: 1,
      name: "Contact Hunter",
      exact: true,
    }),
  ).toBeVisible();
  await expect(
    page.getByText(
      "For software and systems engineering opportunities, systems integration, automation, infrastructure, or technical collaboration, contact Hunter by email.",
    ),
  ).toBeVisible();
  await expect(page.getByText("remote software development roles")).toHaveCount(
    0,
  );
  await expect(
    page.getByRole("link", { name: "Email Hunter", exact: true }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", {
      name: "View GitHub profile in a new tab",
      exact: true,
    }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "View projects", exact: true }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "View resume", exact: true }),
  ).toBeVisible();
  await expect(page.locator('meta[name="description"]')).toHaveAttribute(
    "content",
    "Contact Hunter Kam about software and systems engineering, systems integration, automation, infrastructure, or technical collaboration.",
  );

  expectNoApplicationErrors();
});

test.describe("responsive public routes", () => {
  test.use({ viewport: { width: 390, height: 844 } });

  for (const route of responsiveRoutes) {
    test(`${route.path} remains usable without horizontal overflow`, async ({
      page,
    }) => {
      const expectNoApplicationErrors = collectApplicationErrors(page);
      const response = await page.goto(route.path);

      expect(response?.status()).toBe(200);
      await expect(page.getByRole("main")).toBeVisible();
      await expect(
        page.getByRole("heading", {
          level: 1,
          name: route.heading,
          exact: true,
        }),
      ).toBeVisible();

      const primaryNavigation = page.getByRole("navigation", {
        name: "Primary navigation",
      });
      const homeLink = primaryNavigation.getByRole("link", {
        name: "Home",
        exact: true,
      });
      await expect(primaryNavigation).toBeVisible();
      await expect(homeLink).toBeVisible();
      await expect(homeLink).toHaveAttribute("href", "/");
      await homeLink.focus();
      await expect(homeLink).toBeFocused();

      const hasHorizontalOverflow = await page.evaluate(
        () =>
          document.documentElement.scrollWidth >
          document.documentElement.clientWidth,
      );
      expect(hasHorizontalOverflow).toBe(false);
      expectNoApplicationErrors();
    });
  }
});

test("the homepage skip link moves focus to the main landmark", async ({
  page,
}) => {
  const expectNoApplicationErrors = collectApplicationErrors(page);
  await page.goto("/");

  await page.keyboard.press("Tab");
  const skipLink = page.getByRole("link", { name: "Skip to content" });
  await expect(skipLink).toBeVisible();
  await expect(skipLink).toBeFocused();
  await page.keyboard.press("Enter");

  await expect(page.getByRole("main")).toBeFocused();
  await expect(page).toHaveURL(`${testOrigin}/#main-content`);
  expectNoApplicationErrors();
});

test("robots.txt exposes the test origin and public crawl policy", async ({
  request,
}) => {
  const response = await request.get("/robots.txt");
  const body = await response.text();

  expect(response.status()).toBe(200);
  expect(response.headers()["content-type"]).toMatch(/^text\/plain\b/);
  expect(body).toContain("User-Agent: *");
  expect(body).toContain("Allow: /");
  expect(body).toContain(`Sitemap: ${testOrigin}/sitemap.xml`);
  expect(body).toContain(`Host: ${testOrigin}`);
});

test("sitemap.xml contains exactly the canonical public routes", async ({
  request,
}) => {
  const response = await request.get("/sitemap.xml");
  const body = await response.text();
  const locations = [...body.matchAll(/<loc>([^<]+)<\/loc>/g)].map(
    ([, location]) => location,
  );
  const expectedLocations = publicRoutes.map(({ path }) =>
    new URL(path, testOrigin).href,
  );

  expect(response.status()).toBe(200);
  expect(response.headers()["content-type"]).toMatch(/xml/);
  expect(locations.sort()).toEqual([...expectedLocations].sort());
});

for (const path of [
  "/opengraph-image",
  "/twitter-image",
  "/icon",
  "/apple-icon",
] as const) {
  test(`${path} returns an image`, async ({ request }) => {
    const response = await request.get(path);

    expect(response.status()).toBe(200);
    expect(response.headers()["content-type"]).toMatch(/^image\//);
  });
}

test("a missing route returns a usable noindex page", async ({ page }) => {
  const expectNoApplicationErrors = collectApplicationErrors(page, {
    allowedDocumentStatuses: [404],
  });
  const response = await page.goto("/__browser-test-missing-route__");

  expect(response?.status()).toBe(404);
  await expect(page.getByRole("main")).toBeVisible();
  await expect(
    page.getByRole("navigation", { name: "Primary navigation" }),
  ).toBeVisible();
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
    "content",
    /noindex/i,
  );
  expectNoApplicationErrors();
});
