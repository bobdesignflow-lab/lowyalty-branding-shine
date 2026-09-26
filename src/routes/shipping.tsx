import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, meta, TrustContact } from "@/components/content-page";

export const Route = createFileRoute("/shipping")({
  head: () =>
    meta(
      "Shipping & Delivery Policy | Lowyalty Brandingline Ltd",
      "Production timelines, delivery availability, charges and collection options for print, branding, signage and packaging orders from Lowyalty Brandingline Ltd."
    ),
  component: Page,
});

const sections = [
  { id: "intro", label: "Introduction" },
  { id: "production", label: "Production timelines" },
  { id: "delivery-availability", label: "Delivery availability" },
  { id: "delivery-charges", label: "Delivery charges" },
  { id: "free-delivery", label: "Free delivery" },
  { id: "collection", label: "In-branch collection" },
  { id: "timelines", label: "Delivery timelines" },
  { id: "delays", label: "Delays and communication" },
  { id: "on-delivery", label: "On delivery / collection" },
];

function Page() {
  return (
    <ContentPage
      eyebrow="Help"
      title="Shipping &amp; Delivery Information"
      intro="Lowyalty Brandingline Ltd provides custom printing, branding and signage production services. Because every order is different, production and delivery timelines are confirmed individually. This page explains what to expect and how delivery and collection are arranged."
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
              This Shipping and Delivery policy applies to orders placed with
              Lowyalty Brandingline Ltd. Because the products we supply are
              often custom-made or produced to specific customer requirements,
              delivery options, timelines and charges can vary from order to
              order. The exact arrangements for your order are confirmed at
              quotation stage and again when the order is finalised.
            </p>
          </Section>

          <Section id="production" title="Production timelines">
            <p>
              Before an order is dispatched or made available for collection,
              it passes through production. Production times vary depending on
              a number of factors, including:
            </p>
            <ul>
              <li>The product or products being produced</li>
              <li>The quantity ordered</li>
              <li>The complexity of the design, branding or finish</li>
              <li>
                Whether artwork has been supplied print-ready, or requires
                design or preparation work by our team
              </li>
              <li>How quickly any required approvals are returned</li>
              <li>Current production volumes and scheduling</li>
            </ul>
            <p>
              An indication of expected production timeline will be provided
              with your quotation. The exact completion date is confirmed once
              the order details and approvals are in place.
            </p>
          </Section>

          <Section id="delivery-availability" title="Delivery availability">
            <p>
              Delivery is available for many orders placed with Lowyalty
              Brandingline Ltd. Whether delivery is possible for your specific
              order depends on:
            </p>
            <ul>
              <li>The size, weight and nature of the finished products</li>
              <li>Your delivery location</li>
              <li>The overall scope and value of the order</li>
            </ul>
            <p>
              Delivery arrangements, where available, are confirmed during the
              quotation or order process. If you have a specific delivery
              requirement, please mention it when requesting your quotation so
              it can be taken into account.
            </p>
          </Section>

          <Section id="delivery-charges" title="Delivery charges">
            <p>
              Where delivery is available, delivery charges will be
              communicated with your quotation or order confirmation, before
              the order is fulfilled. You will not be charged delivery fees
              that have not been previously communicated and agreed.
            </p>
            <p>
              Charges may vary depending on location, order size, urgency,
              weight and the delivery method used. For repeat or corporate
              customers, arrangements may be agreed on a per-order or ongoing
              basis.
            </p>
          </Section>

          <Section id="free-delivery" title="Free delivery">
            <p>
              Free delivery is offered on qualifying orders with a total value
              of <strong>KES 10,000 and above</strong>. Eligibility and
              applicability of free delivery depend on the delivery location
              and the nature of the order, and are confirmed when your
              quotation is prepared. Free delivery is not available for every
              location, so please confirm when placing your enquiry.
            </p>
          </Section>

          <Section id="collection" title="In-branch collection">
            <p>
              Where applicable, you may arrange to collect your completed
              order in person from one of our Lowyalty Brandingline Ltd
              branches:
            </p>
            <ul>
              <li>
                <strong>Ngong</strong> — 3T Building, 1st Floor, Room 207
              </li>
              <li>
                <strong>Nairobi</strong> — Printers Arcade, 1st Floor, Room
                M9
              </li>
            </ul>
            <p>
              If you prefer to collect, please let us know when requesting a
              quotation or placing your order so that collection can be
              factored into your order arrangements and timeline. We will
              contact you as soon as the order is ready for collection.
            </p>
          </Section>

          <Section id="timelines" title="Delivery timelines">
            <p>
              Overall production and delivery timelines vary from order to
              order. A timeframe is confirmed with your quotation and again
              when your order is finalised.
            </p>
            <p>
              Lowyalty Brandingline Ltd takes reasonable steps to meet
              confirmed timeframes. However, we do not offer an absolute
              guarantee of delivery by a specific date or time where delays
              are caused by factors outside our reasonable control.
            </p>
            <p>
              If your order is time-sensitive, please mention your deadline
              when requesting a quotation, and we will advise whether it can
              be accommodated before you proceed.
            </p>
          </Section>

          <Section id="delays" title="Delays and communication">
            <p>
              Occasionally, completion or delivery may take longer than
              expected. Where a delay occurs, we will communicate with you as
              soon as practical. Common reasons for delays include:
            </p>
            <ul>
              <li>
                Delays in receiving artwork, approvals or required information
                from the customer
              </li>
              <li>
                Changes requested by the customer after work has started
              </li>
              <li>Supply issues affecting materials or specialist components</li>
              <li>Third-party courier or delivery partner delays</li>
              <li>
                Circumstances outside our reasonable control, such as
                equipment failure, adverse weather, road closures or other
                events of force majeure
              </li>
            </ul>
            <p>
              Where such delays arise, we will keep you informed and provide
              updated guidance as soon as we are able.
            </p>
          </Section>

          <Section id="on-delivery" title="On delivery / collection">
            <p>
              Please inspect your order carefully at the time of delivery or
              collection. If anything appears damaged, incorrect or
              incomplete, please notify us promptly, ideally on the same day
              and in any case as soon as possible after receipt. Where
              feasible, please provide photographs of the issue and any
              relevant packaging. Prompt notification helps us resolve any
              concerns quickly and efficiently.
            </p>
            <p>
              More information about reporting issues, returns and refunds is
              available in our{" "}
              <a
                href="/returns"
                className="font-semibold text-primary hover:underline"
              >
                Returns &amp; Refunds Policy
              </a>
              .
            </p>
          </Section>

          <TrustContact />
        </article>
      </div>

      <style>{`
        .prose-legal ul { list-style: disc; padding-left: 1.25rem; }
        .prose-legal ul li { margin: 0.4rem 0; }
        .prose-legal strong { color: var(--foreground); }
        .prose-legal a { color: var(--color-primary); }
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
