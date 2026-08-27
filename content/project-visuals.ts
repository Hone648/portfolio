import type { ProjectSlug } from "./project-metadata";

export type ProjectVisualKind = "screenshot" | "diagram";

export type ProjectVisualAsset = {
  readonly id: string;
  readonly kind: ProjectVisualKind;
  readonly title: string;
  readonly src: `/images/${string}.png` | `/diagrams/${string}.svg`;
  readonly width: number;
  readonly height: number;
  readonly alt: string;
  readonly caption: string;
  readonly evidenceNote: string;
};

export type ProjectVisualGroup = {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly visuals: readonly ProjectVisualAsset[];
};

const emptyVisualGroups: readonly ProjectVisualGroup[] = [];

export const projectVisualGroups: Partial<
  Record<ProjectSlug, readonly ProjectVisualGroup[]>
> = {
  newbudget: [
    {
      id: "monthly-planning",
      title: "Monthly planning",
      description:
        "The central month-first workspace combines income, carryover, obligations, payment state, quick expenses, and remaining balance in one review surface.",
      visuals: [
        {
          id: "newbudget-monthly-workspace",
          kind: "screenshot",
          title: "Monthly budget workspace",
          src: "/images/newbudget/newbudget-monthly-workspace.png",
          width: 1914,
          height: 913,
          alt: "newBudget monthly workspace showing income sources, carryover, monthly obligations, payment state, quick-expense entry, and remaining balance.",
          caption:
            "The month-first workspace combines income, carryover, recurring obligations, payment state, quick expenses, and remaining balance in one review surface.",
          evidenceNote:
            "Authentic application capture using an owner-approved demonstration account and demonstration financial records. The visible values are approved for publication, and the screenshot does not expose email, provider, or application-user identifiers.",
        },
      ],
    },
    {
      id: "tracking-and-trends",
      title: "Tracking and trends",
      description:
        "Supporting views aggregate expense categories and present debt and payment history across selectable time periods.",
      visuals: [
        {
          id: "newbudget-expense-trends",
          kind: "screenshot",
          title: "Expense trends",
          src: "/images/newbudget/newbudget-expense-trends.png",
          width: 1915,
          height: 913,
          alt: "newBudget expense-tracking view showing category totals, month and time-range controls, and a chart of spending over time.",
          caption:
            "Expense tracking aggregates category totals and presents selectable historical spending trends.",
          evidenceNote:
            "Authentic application capture using owner-approved demonstration records. The chart demonstrates implemented product behavior rather than audited reporting or financial advice.",
        },
        {
          id: "newbudget-debt-payment-trends",
          kind: "screenshot",
          title: "Debt and payment trends",
          src: "/images/newbudget/newbudget-debt-payment-trends.png",
          width: 1916,
          height: 915,
          alt: "newBudget debt-tracking view showing searchable obligations, type filters, payee and payment details, and a historical payment-trend chart.",
          caption:
            "Debt tracking combines obligation records, payee context, filtering, and historical payment trends.",
          evidenceNote:
            "Authentic application capture using owner-approved demonstration records. Estimated planning values are not lender statements, audited balances, or lender-exact accounting outputs.",
        },
      ],
    },
    {
      id: "month-first-model",
      title: "Month-first planning model",
      description:
        "The selected month composes current financial inputs, previews future recurring obligations without unnecessary writes, and persists a monthly record only when an action requires it.",
      visuals: [
        {
          id: "newbudget-month-first-planning",
          kind: "diagram",
          title: "Month-first planning model",
          src: "/diagrams/newbudget-month-first-planning.svg",
          width: 1600,
          height: 980,
          alt: "Diagram showing a selected month composing income, carryover, recurring items, quick expenses, payment state, and remaining balance, with future recurring items previewed deterministically until user action persists a monthly record.",
          caption:
            "A selected month is the planning boundary: current inputs are composed into the visible workspace, while future recurring items can be previewed without creating monthly records until the user acts.",
          evidenceNote:
            "Code-authored explanatory diagram derived from reviewed newBudget implementation and narrative evidence. It is not a complete production architecture map and omits deployment topology, private identifiers, provider details, and real financial values.",
        },
      ],
    },
  ],
  unicos: [
    {
      id: "operational-overview",
      title: "Operational overview",
      description:
        "Read-only and searchable surfaces for current shop activity, repair orders, and customer records in the local-development application.",
      visuals: [
        {
          id: "dashboard",
          kind: "screenshot",
          title: "Workflow dashboard",
          src: "/images/unicos/unicos-dashboard.png",
          width: 1913,
          height: 913,
          alt: "Unicos dashboard showing active repair-order counts, ready-for-pickup work, unpaid invoices, closure blockers, and recently updated repair orders.",
          caption:
            "The read-only dashboard surfaces active work, pickup readiness, unpaid invoices, closure blockers, and recent repair-order activity.",
          evidenceNote:
            "Authentic local-development capture using privacy-reviewed demonstration records. Some values remain intentionally obscured, and the screenshot does not represent production deployment or real-shop operation.",
        },
        {
          id: "repair-orders",
          kind: "screenshot",
          title: "Repair-order queue",
          src: "/images/unicos/unicos-repair-orders.png",
          width: 1914,
          height: 910,
          alt: "Unicos repair-order queue showing search, workflow-status filters, repair-order numbers, customer and vehicle context, and opened and promised dates.",
          caption:
            "The searchable repair-order queue organises work by repair-order number, workflow state, customer and vehicle context, assignment, and relevant dates.",
          evidenceNote:
            "Authentic local-development capture using privacy-reviewed demonstration records. Some values remain intentionally obscured, and the screenshot demonstrates the implemented queue rather than production operation.",
        },
        {
          id: "customers",
          kind: "screenshot",
          title: "Customer workspace",
          src: "/images/unicos/unicos-customers.png",
          width: 1913,
          height: 909,
          alt: "Unicos customer workspace showing customer search, customer type, contact columns, city, and active-state information.",
          caption:
            "The customer workspace provides a searchable shop-facing index for individual and business customer records.",
          evidenceNote:
            "Authentic local-development capture. Several values remain intentionally obscured in the supplied screenshot; the image is used to demonstrate the implemented customer-list interface.",
        },
      ],
    },
    {
      id: "repair-order-workflows",
      title: "Repair-order workflows",
      description:
        "Server-rendered forms and detail views that keep repair-order, communication, attachment, estimate, and invoice actions within explicit application workflows.",
      visuals: [
        {
          id: "repair-order-detail",
          kind: "screenshot",
          title: "Repair-order detail workspace",
          src: "/images/unicos/unicos-edit-repair-order.png",
          width: 1916,
          height: 913,
          alt: "Unicos repair-order detail workspace showing customer and vehicle context, status controls, notes, estimates, attachments, and status history.",
          caption:
            "The repair-order detail workspace keeps customer and vehicle context, status movement, notes, estimates, attachments, and history around the central repair-order record.",
          evidenceNote:
            "Authentic local-development capture using approved demonstration records. Available controls depend on application permissions and workflow state.",
        },
        {
          id: "communication-entry",
          kind: "screenshot",
          title: "Communication entry workflow",
          src: "/images/unicos/unicos-communication-entry.png",
          width: 1916,
          height: 913,
          alt: "Unicos communication-entry form showing occurred time, direction, channel, contact role, contact name, summary, next step, outcome, and authorization-related fields.",
          caption:
            "The communication form records repair-order-scoped contact history without claiming email, SMS, or external messaging integration.",
          evidenceNote:
            "Authentic local-development capture. The form creates an internal communication-history entry and does not send a message.",
        },
        {
          id: "attachment-upload",
          kind: "screenshot",
          title: "Attachment upload workflow",
          src: "/images/unicos/unicos-add-attachment.png",
          width: 1919,
          height: 913,
          alt: "Unicos attachment-upload form showing file selection, category, and description fields for a repair-order attachment.",
          caption:
            "The attachment workflow associates a categorised file and description with a repair order through the shop-facing application.",
          evidenceNote:
            "Authentic local-development capture. Current attachment persistence uses local development storage; production storage, private serving, scanning, backup, and recovery remain future work.",
        },
        {
          id: "estimate-creation",
          kind: "screenshot",
          title: "Estimate creation workflow",
          src: "/images/unicos/unicos-estimate.png",
          width: 1917,
          height: 913,
          alt: "Unicos new-estimate form showing repair-order context, insurance and claim fields, deductible, estimated total, and notes.",
          caption:
            "The estimate workflow creates a repair-order-scoped draft with optional insurance context, deductible information, estimated total, and notes.",
          evidenceNote:
            "Authentic local-development capture using approved demonstration records. It does not demonstrate insurance-system integration or a production estimate process.",
        },
        {
          id: "invoice-creation",
          kind: "screenshot",
          title: "Invoice creation workflow",
          src: "/images/unicos/unicos-create-invoice.png",
          width: 1916,
          height: 913,
          alt: "Unicos new-invoice form showing repair-order context, invoice number handling, issued and due dates, subtotal, tax, and notes.",
          caption:
            "The invoice form creates an application-level draft invoice for an eligible repair order while keeping issue and payment actions as separate workflow decisions.",
          evidenceNote:
            "Authentic local-development capture. Unicos records invoices and payments but is not a payment processor or full accounting ledger.",
        },
      ],
    },
    {
      id: "billing-reporting-administration",
      title: "Billing, reporting, and administration",
      description:
        "Billing operations, read-only reporting, and the separate emergency/development administration interface.",
      visuals: [
        {
          id: "invoice-queue",
          kind: "screenshot",
          title: "Invoice queue",
          src: "/images/unicos/unicos-billing.png",
          width: 1915,
          height: 910,
          alt: "Unicos invoice queue showing search, status filters, invoice and repair-order numbers, customer and vehicle context, totals, paid amounts, balances, and dates.",
          caption:
            "The billing queue provides searchable invoice status, repair-order relationships, totals, recorded payments, balances, and issue or due-date context.",
          evidenceNote:
            "Authentic local-development capture using approved demonstration records. The screenshot does not represent production financial operations.",
        },
        {
          id: "operational-reports",
          kind: "screenshot",
          title: "Operational reports",
          src: "/images/unicos/unicos-reports.png",
          width: 1914,
          height: 910,
          alt: "Unicos reports page showing date and status filters, CSV export actions, and repair-order, billing, and estimate operational metrics.",
          caption:
            "The reports page provides read-only filters, operational counts, attention queues, and CSV exports from existing repair-order, invoice, and estimate records.",
          evidenceNote:
            "Authentic local-development capture. Reports are operational snapshots, not mature business intelligence, revenue analytics, or receivables-ageing infrastructure.",
        },
        {
          id: "development-admin",
          kind: "screenshot",
          title: "Development administration console",
          src: "/images/unicos/unicos-admin.png",
          width: 1916,
          height: 917,
          alt: "Unicos Django administration console showing grouped application models and recent development administration actions.",
          caption:
            "Django admin remains a separate emergency and development interface for trusted inspection and correction rather than the normal shop-facing operator workflow.",
          evidenceNote:
            "Authentic local-development capture. Protected lifecycle and financial mutations use aligned services or read-only restrictions where implemented; complete admin policy unification is not claimed.",
        },
      ],
    },
    {
      id: "sanitized-architecture",
      title: "Sanitized architecture",
      description:
        "Code-authored diagrams derived from reviewed Unicos documentation and implementation evidence without exposing private source details or implying production deployment.",
      visuals: [
        {
          id: "domain-service-boundaries",
          kind: "diagram",
          title: "Domain and service boundaries",
          src: "/diagrams/unicos-domain-service-boundaries.svg",
          width: 1600,
          height: 1000,
          alt: "Sanitized Unicos architecture diagram showing the local Docker Compose boundary, browser requests, Django views and forms, authorization checks, domain services, models, PostgreSQL, focused HTMX enhancement, and separate development administration interface.",
          caption:
            "The server-rendered application keeps shop-facing requests close to permission checks, repair-order-scoped policies, lifecycle and billing services, models, and PostgreSQL while treating Django admin as a separate emergency and development interface.",
          evidenceNote:
            "Code-authored diagram derived from reviewed Unicos documentation and implementation evidence. Private source details and unimplemented production infrastructure are intentionally omitted.",
        },
        {
          id: "repair-order-workflow",
          kind: "diagram",
          title: "Repair-order workflow and lifecycle boundaries",
          src: "/diagrams/unicos-repair-order-workflow.svg",
          width: 1600,
          height: 1100,
          alt: "Sanitized Unicos workflow diagram showing customer and vehicle context, the central repair order, status history, communications, attachments, estimate and supplement lifecycles, guarded draft-invoice conversion, invoices, payments, and final-state restrictions.",
          caption:
            "Repair orders provide the central workflow context while explicit services guard estimate transitions, invoice conversion, billing actions, payment recording, and final repair-order states.",
          evidenceNote:
            "Code-authored diagram derived from reviewed active-development evidence. It does not claim production operation, complete authorization, payment processing, or a full accounting ledger.",
        },
      ],
    },
  ],
  forkfolio: [
    {
      id: "operator-workspace",
      title: "Operator workspace",
      description:
        "The tenant-facing management surface presents the selected restaurant workspace, role context, and navigation for structured content operations.",
      visuals: [
        {
          id: "forkfolio-management-dashboard",
          kind: "screenshot",
          title: "Tenant management dashboard",
          src: "/images/forkfolio/forkfolio-management-dashboard.png",
          width: 1600,
          height: 900,
          alt: "Forkfolio management dashboard for the fictional Ember & Vine showroom showing the selected workspace, website-manager role, signed-in user, and navigation to restaurant, locations, menus, links, promotions, branding, publication, media, and team areas.",
          caption:
            "The dashboard shows the tenant-facing management shell, selected restaurant workspace, role context, and operational navigation.",
          evidenceNote:
            "Authentic local-development capture using the fictional Ember & Vine showroom. It demonstrates the tenant-facing management surface and does not represent production deployment or live-customer operation.",
        },
      ],
    },
    {
      id: "structured-operations",
      title: "Structured operations",
      description:
        "Restaurant operations are modeled as editable domain records for hours, menus, item availability, and prices rather than freeform page text.",
      visuals: [
        {
          id: "forkfolio-operating-hours",
          kind: "screenshot",
          title: "Operating hours workspace",
          src: "/images/forkfolio/forkfolio-operating-hours.png",
          width: 1600,
          height: 1000,
          alt: "Forkfolio operating-hours workspace for the fictional Ember & Vine showroom showing the date-rule checker, regular weekly schedule, split Saturday service, and special-hours section.",
          caption:
            "The hours workspace separates date inspection, weekly schedule periods, split service windows, and special-hours context.",
          evidenceNote:
            "Authentic local-development capture using fictional showroom records. It demonstrates implemented operating-hours management and date-aware behavior, not a real restaurant schedule.",
        },
        {
          id: "forkfolio-menu-management",
          kind: "screenshot",
          title: "Structured menu management",
          src: "/images/forkfolio/forkfolio-menu-management.png",
          width: 1600,
          height: 900,
          alt: "Forkfolio menu item workspace for the fictional Ember & Vine showroom showing Hearth Bread details, availability, Dinner currency context, and an ordered fixed-price row.",
          caption:
            "The menu workspace keeps item details, availability, menu currency context, and prices as structured restaurant records.",
          evidenceNote:
            "Authentic local-development capture using fictional showroom menu records. It demonstrates structured menu management and does not represent a live restaurant or ordering system.",
        },
      ],
    },
    {
      id: "release-and-publication",
      title: "Release and publication",
      description:
        "Editable restaurant content moves through application-level publication and is served publicly from a deliberate release-backed state.",
      visuals: [
        {
          id: "forkfolio-publication-history",
          kind: "screenshot",
          title: "Publication and release history",
          src: "/images/forkfolio/forkfolio-publication-history.png",
          width: 1600,
          height: 900,
          alt: "Forkfolio publication dashboard for the fictional Ember & Vine showroom showing a submit-current-state action, an empty submissions table, and a release-history row with preview and reactivate actions.",
          caption:
            "The publication dashboard exposes current submission state and a release-history workspace for reviewed public-site snapshots.",
          evidenceNote:
            "Authentic local-development capture using the fictional showroom. It demonstrates application-level publication and release-history behavior, not production deployment, infrastructure rollback, backup/restore, or production scheduler operation.",
        },
        {
          id: "forkfolio-public-site",
          kind: "screenshot",
          title: "Released public restaurant page",
          src: "/images/forkfolio/forkfolio-public-site.png",
          width: 500,
          height: 1000,
          alt: "Release-backed Forkfolio public restaurant page for the fictional Ember & Vine showroom showing branded restaurant identity, restaurant description, logo, and hero imagery.",
          caption:
            "The released public page renders the fictional restaurant brand, description, logo, and visual presentation from published showroom content.",
          evidenceNote:
            "Authentic local-development capture of release-backed public rendering for the fictional Ember & Vine showroom. It demonstrates implemented public-site presentation and does not represent a production-hosted or live-customer site.",
        },
      ],
    },
  ],
};

export function getProjectVisualGroups(
  slug: ProjectSlug,
): readonly ProjectVisualGroup[] {
  return projectVisualGroups[slug] ?? emptyVisualGroups;
}

export function getProjectVisualGroupById(
  slug: ProjectSlug,
  groupId: ProjectVisualGroup["id"],
): ProjectVisualGroup | undefined {
  return getProjectVisualGroups(slug).find((group) => group.id === groupId);
}
