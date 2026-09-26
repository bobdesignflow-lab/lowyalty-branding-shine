import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, meta, TrustContact } from "@/components/content-page";

export const Route = createFileRoute("/returns")({
  head: () =>
    meta(
      "Returns & Refunds Policy | Lowyalty Brandingline Ltd",
      "How Lowyalty Brandingline Ltd handles reprints, returns and refunds for custom print and branding orders, including manufacturing errors and customer changes."
    ),
  component: Page,
});

const sections = [
  { id: "intro", label: "Introduction" },
  { id: "custom", label: "Custom / personalised products" },
  { id: "standard", label: "Standard / non-custom products" },
  { id: "incorrect", label: "Incorrect or defective products" },
  { id: "damaged", label: "Damaged products" },
  { id: "production-errors", label: "Manufacturing or production errors" },
  { id: "customer-approved", label: "Customer-approved artwork" },
  { id: "customer-changes", label: "Customer changes after production" },
  { id: "cancellations", label: "Cancellations after production starts" },
  { id: "complaints", label: "How to make a complaint or report an issue" },
  { id: "review", label: "How each case is reviewed" },
  { id: "remedies", label: "Available remedies" },
];

function Page() {
  return (
    <ContentPage
      eyebrow="Policies"
      title="Returns &amp; Refunds Policy"
      intro="At Lowyalty Brandingline Ltd we want every customer to be satisfied with the work we produce. Because many of our products are custom-made or personalised to specific requirements, returns and refunds are handled case-by-case in a fair and transparent way. This policy explains the process."
    >
      <div className="grid gap-16 lg:grid-cols-[240px_1fr]">
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-xl border border-border bg-card p-5">
            <p className="text-xs font-black uppercase tracking-wider text-muted-foreground">
              Contents
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="block py-1 font-medium text-muted-foreground transition-colors hover:text-primary"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <article className="prose-legal space-y-12">
          <Section id="intro" title="Introduction">
            <p>
              This Returns and Refunds Policy applies to orders placed with
              Lowyalty Brandingline Ltd for printing, branding, signage,
              apparel decoration, packaging, stationery and other related
              products and services. It should be read together with our Terms
              and Conditions.
            </p>
            <p>
              Nothing in this policy is intended to limit any rights you may
              have under applicable Kenyan consumer law where those rights
              cannot lawfully be excluded.
            </p>
          </Section>

          <Section id="custom" title="Custom / personalised products">
            <p>
              A large proportion of the products we produce are custom-made,
              personalised, printed with customer-supplied artwork or
              manufactured to your unique specifications. Examples include
              branded apparel, custom signage, printed packaging, personalised
              stationery, bespoke promotional items, and large-format
              branding.
            </p>
            <p>
              For these products, your approval of artwork, sizes, quantities,
              colours, material and other specifications is obtained before
              production begins. Please review any proof or approval carefully
              and confirm that every detail is correct, including spelling,
              contact details, logos and dimensions.
            </p>
            <p>
              Custom products produced in accordance with an approved design
              cannot normally be returned or refunded simply due to a change
              of mind, because they have been produced specifically for you
              and cannot reasonably be re-sold. This does not affect your
              rights where an issue has been caused by an error on our part,
              as described below.
            </p>
          </Section>

          <Section id="standard" title="Standard / non-custom products">
            <p>
              Where a product is a standard, non-custom item that has not been
              personalised, branded, printed or produced to your specific
              requirements, it may be eligible for return provided it is in
              unused, resaleable condition and returned within a reasonable
              time of delivery or collection. Please contact us first to
              discuss the item and confirm whether a return is possible.
            </p>
          </Section>

          <Section id="incorrect" title="Incorrect or defective products">
            <p>
              If you receive products that do not match the order
              specifications that were confirmed in writing (for example,
              wrong quantity, wrong product, wrong size, wrong colour print
              where the specification was confirmed in advance), please
              notify us promptly. We will request details of the discrepancy
              and, where Lowyalty Brandingline Ltd confirms the product was
              supplied incorrectly, we will offer a suitable remedy as set
              out in the remedies section below.
            </p>
          </Section>

          <Section id="damaged" title="Damaged products">
            <p>
              Please inspect your order carefully on delivery or at the time
              of collection. If any products are physically damaged, we ask
              that you notify us immediately and, where feasible, provide
              clear photographs of the damage and any relevant packaging.
              Where the damage is confirmed to have occurred before or during
              delivery, we will offer a suitable remedy.
            </p>
          </Section>

          <Section id="production-errors" title="Manufacturing or production errors">
            <p>
              Lowyalty Brandingline Ltd takes care at every stage of
              production. If, despite our checks, you receive work that
              contains a confirmed manufacturing error or production defect
              that was not caused by approved artwork or customer-supplied
              information, please contact us promptly. Such cases will be
              reviewed on a case-by-case basis and, where confirmed, resolved
              using the remedies below.
            </p>
          </Section>

          <Section id="customer-approved" title="Customer-approved artwork">
            <p>
              Once you have approved artwork, proofs, layouts, dimensions,
              wording, colours or other order details in writing (including
              via WhatsApp, email or any written confirmation), the order is
              produced accordingly. If the completed work matches the details
              you approved, Lowyalty Brandingline Ltd is not responsible for
              any subsequent errors, typos, incorrect sizes, incorrect
              contact details or other issues that were present in the
              approved artwork.
            </p>
            <p>
              We strongly encourage you to take the time to review every
              proof carefully before giving approval. If you are unsure about
              any detail, please ask for clarification before approving.
            </p>
          </Section>

          <Section id="customer-changes" title="Customer changes after production">
            <p>
              If you request a change to your order, artwork, specifications
              or details after production has already begun, additional
              charges and adjustments to lead time may apply. Depending on
              the stage of production, it may not be possible to implement
              the change without re-producing some or all of the work. Where
              this is the case, we will communicate the position and any
              extra charges before proceeding.
            </p>
          </Section>

          <Section id="cancellations" title="Cancellations after production starts">
            <p>
              Whether an order can be cancelled after production starts
              depends on the stage the work has reached:
            </p>
            <ul>
              <li>
                If production has not started and no materials have been
                specially purchased, cancellation may be possible without
                charge.
              </li>
              <li>
                If production has begun, or if materials have been specially
                ordered or prepared, the order may only be cancelled on terms
                that fairly compensate Lowyalty Brandingline Ltd for work
                done and costs incurred up to the point of cancellation.
              </li>
              <li>
                For custom or personalised products that are complete or
                substantially complete, cancellation may not be possible and
                payment of the full order price will be required.
              </li>
            </ul>
          </Section>

          <Section id="complaints" title="How to make a complaint or report an issue">
            <p>
              If you are concerned about any aspect of your order, please
              contact Lowyalty Brandingline Ltd promptly so that we can
              address it. To help us resolve your issue efficiently, please
              provide:
            </p>
            <ul>
              <li>Your order details (customer name, order reference if available)</li>
              <li>A clear description of the issue or concern</li>
              <li>
                Where appropriate, clear photographs of the product,
                packaging or damage concerned
              </li>
              <li>Any relevant approvals, quotation emails or messages</li>
            </ul>
            <p>
              Reports can be made by phone, email or WhatsApp using the
              contact details published on our contact page or in the contact
              block at the bottom of this page. We recommend that you report
              any issue as soon as possible after delivery or collection.
            </p>
          </Section>

          <Section id="review" title="How each case is reviewed">
            <p>
              Every return, refund or complaint is reviewed individually. In
              reviewing a case we may consider:
            </p>
            <ul>
              <li>The order details and any written confirmation</li>
              <li>The approved artwork or specifications, where applicable</li>
              <li>The quotation and any terms noted on it</li>
              <li>Photographs or other evidence provided by the customer</li>
              <li>Our internal production records</li>
              <li>Any applicable legal or consumer protections</li>
            </ul>
            <p>
              Once reviewed, we will communicate our findings and proposed
              remedy to you in writing.
            </p>
          </Section>

          <Section id="remedies" title="Available remedies">
            <p>
              Where Lowyalty Brandingline Ltd confirms that an issue is
              attributable to an error in production, specification or
              fulfilment on our side, we will offer a fair and appropriate
              remedy. Depending on the nature of the issue and the product
              involved, remedies may include:
            </p>
            <ul>
              <li>
                Re-printing or re-producing the affected items at no extra
                charge
              </li>
              <li>
                Repairing, adjusting or correcting the work where practical
              </li>
              <li>Replacing the affected items with matching products</li>
              <li>
                A credit towards a future order, in an amount appropriate to
                the issue
              </li>
              <li>
                A refund or partial refund of the amount paid, where
                appropriate in the circumstances
              </li>
            </ul>
            <p>
              The remedy offered will depend on the facts of each case. Our
              goal is to resolve matters fairly and to ensure a satisfactory
              outcome while treating both parties reasonably.
            </p>
          </Section>

          <TrustContact />
        </article>
      </div>

      <style>{`
        .prose-legal ul { list-style: disc; padding-left: 1.25rem; }
        .prose-legal ul li { margin: 0.4rem 0; }
        .prose-legal strong { color: var(--foreground); }
      `}</style>
    </ContentPage>
  );
}

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="font-display text-2xl font-black sm:text-3xl">{title}</h2>
      <div className="mt-5 space-y-4 text-[15px] leading-8 text-muted-foreground">
        {children}
      </div>
    </section>
  );
}
