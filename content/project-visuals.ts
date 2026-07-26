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
};

export function getProjectVisualGroups(
  slug: ProjectSlug,
): readonly ProjectVisualGroup[] {
  return projectVisualGroups[slug] ?? emptyVisualGroups;
}
