import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, meta, TrustContact } from "@/components/content-page";

export const Route = createFileRoute("/terms")({
  head: () =>
    meta(
      "Terms & Conditions | Lowyalty Brandingline Ltd",
      "The terms that apply to quotations, orders, custom production and services provided by Lowyalty Brandingline Ltd."
    ),
  component: Page,
});

const sections = [
  { id: "intro", label: "Introduction" },
  { id: "services", label: "Services" },
  { id: "quotations", label: "Quotations" },
  { id: "specs", label: "Product specifications" },
  { id: "artwork", label: "Artwork and approvals" },
  { id: "pricing", label: "Pricing" },
  { id: "orders", label: "Orders" },
  { id: "production", label: "Production" },
  { id: "delivery", label: "Delivery and collection" },
  { id: "customer", label: "Customer responsibilities" },
  { id: "custom", label: "Custom products" },
  { id: "cancellations", label: "Cancellations" },
  { id: "returns", label: "Returns and refunds" },
  { id: "ip", label: "Intellectual property" },
  { id: "website", label: "Website information" },
  { id: "liability", label: "Limitation of liability" },
  { id: "changes", label: "Changes to these terms" },
  { id: "contact", label: "Contact information" },
];

function Page() {
  return (
    <ContentPage
      eyebrow="Policies"
      title="Terms &amp; Conditions"
      intro="These Terms and Conditions govern the provision of printing, branding, signage, packaging and related services by Lowyalty Brandingline Ltd. Please read them carefully. Requesting a quotation or placing an order indicates acceptance of these terms."
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
          <Section id="intro" title="1. Introduction">
            <p>
              These Terms and Conditions apply to all quotations, orders and
              services provided by Lowyalty Brandingline Ltd, trading as
              Lowyalty Brandingline. They apply in addition to any written
              specifications, order confirmations or agreements that Lowyalty
              Brandingline Ltd may issue in relation to a specific project.
            </p>
            <p>
              Where a quotation or order confirmation expressly varies any of
              these terms, the variation in that document applies in respect of
              that specific order only.
            </p>
          </Section>

          <Section id="services" title="2. Services">
            <p>
              Lowyalty Brandingline Ltd provides printing, branding, signage,
              apparel decoration, promotional products, office stationery,
              packaging and related design and production services for
              businesses, organisations and individual customers. The exact
              scope of work for any project is confirmed at quotation stage and
              again in any order confirmation provided.
            </p>
          </Section>

          <Section id="quotations" title="3. Quotations">
            <p>
              Quotations are prepared based on the information you provide
              about quantity, size, material, printing method, branding,
              finish, delivery and any other relevant requirements. A
              quotation is valid for the period stated on the quotation, or if
              no period is stated, for 14 days from the date of issue.
            </p>
            <p>
              Final pricing may depend on factors including, but not limited
              to: quantity, size, material, printing technique, branding
              method, complexity, production requirements, finishing and
              delivery requirements. Where a product on the website shows a
              starting price, that price is indicative only and may vary once
              full specifications are confirmed.
            </p>
            <p>
              Any request that materially changes the scope, specifications or
              quantities after a quotation has been issued may result in a
              revised quotation.
            </p>
          </Section>

          <Section id="specs" title="4. Product specifications">
            <p>
              Every effort is made to describe products and finishes accurately.
              However, because printing and branding materials may have minor
              variations in colour, texture, thickness or finish, some
              differences from samples or photographs are to be expected.
              Descriptions, images and sample photographs are intended as a
              guide only and do not form part of a contractual description
              unless expressly confirmed in writing.
            </p>
            <p>
              Custom sizes and specifications are available for most products.
              Custom requirements are confirmed at quotation stage and in any
              written approval before production begins.
            </p>
          </Section>

          <Section id="artwork" title="5. Artwork and customer approvals">
            <p>
              For orders involving custom branding, printing, design or
              personalisation, you may be asked to review and approve artwork,
              proofs, layouts, dimensions, colour references, spelling and
              other order details.
            </p>
            <p>
              It is your responsibility to carefully check any proofs or
              approvals provided and to confirm that the artwork, text,
              dimensions, quantities, colours and other order details are
              correct before giving approval. Production will only begin once
              approval is received.
            </p>
            <p>
              If you request changes after approval has been given, or after
              production has started, additional charges and lead-time
              adjustments may apply.
            </p>
          </Section>

          <Section id="pricing" title="6. Pricing">
            <p>
              Prices are quoted in Kenya Shillings (KES) unless otherwise
              stated. Prices may be subject to applicable taxes and any
              delivery, collection or third-party charges applicable to the
              order. Where taxes, delivery or other charges apply, they will
              be clearly shown on the quotation or order confirmation.
            </p>
            <p>
              Starting prices displayed on the website are intended as a guide
              and may vary depending on confirmed quantity, material, size,
              printing method, finish and any applicable add-on services.
            </p>
          </Section>

          <Section id="orders" title="7. Orders">
            <p>
              An order is treated as confirmed only when: (a) the customer has
              accepted the quotation, (b) all required approvals have been
              given, and (c) any required payment or deposit has been received
              in accordance with the agreed payment terms.
            </p>
            <p>
              Lowyalty Brandingline Ltd may, at its discretion, decline to
              proceed with an order where information is incomplete, artwork
              is not suitable for production, or there is another genuine
              reason preventing the work from being completed as requested. In
              such a case we will communicate with you promptly.
            </p>
          </Section>

          <Section id="production" title="8. Production">
            <p>
              Production timelines depend on the product, quantity, complexity,
              artwork requirements, approval turnaround and current production
              schedule. Indicative timelines may be provided during quotation,
              but exact production and delivery dates are confirmed once the
              order is finalised and approvals are in place.
            </p>
            <p>
              Lowyalty Brandingline Ltd will take reasonable steps to meet any
              agreed timescale. However, we cannot guarantee completion by a
              specific date where delays result from circumstances outside our
              reasonable control, including but not limited to customer delays
              in providing information or approvals, supply chain issues,
              equipment failure, third-party delays or other events of force
              majeure.
            </p>
          </Section>

          <Section id="delivery" title="9. Delivery and collection">
            <p>
              Depending on the nature of the order and its location, Lowyalty
              Brandingline Ltd may arrange delivery or you may be able to
              collect the completed order in person from one of our branches.
              Availability and method of delivery are confirmed during the
              quotation or order process.
            </p>
            <p>
              Delivery charges, where applicable, are communicated before
              fulfilment and are clearly stated on the quotation or order
              confirmation.
            </p>
            <p>
              Orders above KES 10,000 qualify for free delivery in
              circumstances confirmed at quotation stage. Otherwise, delivery
              is chargeable depending on location and order size.
            </p>
            <p>
              On delivery or collection, please inspect the order promptly and
              notify us of any concerns without delay.
            </p>
          </Section>

          <Section id="customer" title="10. Customer responsibilities">
            <p>
              You are responsible for providing complete, accurate and timely
              information, including but not limited to:
            </p>
            <ul>
              <li>Order details, quantities and specifications</li>
              <li>Contact, delivery and billing information</li>
              <li>Artwork, logos and brand references in suitable quality</li>
              <li>Review and approval of proofs and artwork</li>
              <li>Making payments according to the agreed payment terms</li>
            </ul>
            <p>
              You warrant that any artwork, logos, text, images or other
              material you supply for printing or branding either belongs to
              you or that you have the right to use it. You agree to
              indemnify Lowyalty Brandingline Ltd against any claim, loss or
              expense arising from a breach of this warranty.
            </p>
          </Section>

          <Section id="custom" title="11. Custom products">
            <p>
              A large proportion of the work produced by Lowyalty Brandingline
              Ltd is custom-made, personalised or produced to your specific
              requirements, including branded apparel, custom signage,
              printed packaging, personalised stationery and bespoke
              promotional items.
            </p>
            <p>
              For custom products, your approval of artwork, specifications,
              colours and other details before production is important.
              Products produced in accordance with a customer-approved design
              cannot normally be returned simply because of a change of mind.
              Please see the Returns and Refunds Policy for further details.
            </p>
          </Section>

          <Section id="cancellations" title="12. Cancellations">
            <p>
              If you wish to cancel an order, please contact Lowyalty
              Brandingline Ltd immediately. Whether a cancellation is possible
              depends on the stage the order has reached:
            </p>
            <ul>
              <li>
                If production has not started and no materials have been
                specifically purchased for the order, cancellation may be
                possible without charge.
              </li>
              <li>
                If production has already begun, or if materials have been
                specifically purchased or prepared, the order may only be
                cancelled on terms that fairly compensate Lowyalty Brandingline
                Ltd for work done and costs incurred up to the point of
                cancellation.
              </li>
              <li>
                For custom, personalised or made-to-order work where
                production is complete or substantially complete, cancellation
                may not be possible and full payment of the order will be
                required.
              </li>
            </ul>
          </Section>

          <Section id="returns" title="13. Returns and refunds">
            <p>
              Our Returns and Refunds Policy forms part of these Terms and
              Conditions. Customers are encouraged to review that policy
              alongside this document.
            </p>
            <p>
              Any claim for incorrect, defective or damaged goods must be
              raised promptly, together with relevant order details and, where
              appropriate, photographs or other supporting evidence. Each case
              is reviewed individually based on the order, approved
              specifications and applicable requirements.
            </p>
            <p>
              Where Lowyalty Brandingline Ltd confirms that an error was made
              in production or specification, a suitable remedy will be
              provided, which may include reprinting, repair, replacement or,
              where appropriate, a refund or credit. Remedies are assessed on a
              case-by-case basis.
            </p>
          </Section>

          <Section id="ip" title="14. Intellectual property">
            <p>
              Any artwork, logos, text, images or other material supplied by
              you remains your property (or the property of your licensors),
              and is only used by Lowyalty Brandingline Ltd for the purpose of
              completing your order.
            </p>
            <p>
              Where Lowyalty Brandingline Ltd provides design services or
              creates artwork specifically for your order, the parties should
              agree at quotation stage how those rights will be treated on
              completion of the work. Unless otherwise agreed in writing,
              Lowyalty Brandingline Ltd retains the right to showcase completed
              work in its portfolio, on its website and in its marketing
              materials, unless you have specifically requested otherwise in
              writing.
            </p>
          </Section>

          <Section id="website" title="15. Website information">
            <p>
              Lowyalty Brandingline Ltd takes reasonable steps to ensure that
              information on the website is accurate and up to date. However,
              product images, descriptions, prices and availability may change
              from time to time, and we cannot guarantee that every item will
              be in stock or exactly as described at all times. The website is
              provided on an "as is" basis and Lowyalty Brandingline Ltd does
              not guarantee that it will be uninterrupted or free of errors.
            </p>
          </Section>

          <Section id="liability" title="16. Limitation of liability">
            <p>
              Lowyalty Brandingline Ltd will perform the services with
              reasonable skill and care. Where, despite reasonable efforts,
              there is a failure in relation to an order, our liability is
              limited (to the maximum extent permitted by law) to the price
              paid for the specific goods or services to which the issue
              relates, or, at our option, to re-performing the services or
              replacing the goods concerned.
            </p>
            <p>
              Lowyalty Brandingline Ltd is not liable for any indirect,
              incidental, consequential or economic loss, including loss of
              profit, business opportunity, goodwill or savings, whether
              arising in contract, tort or otherwise, to the extent that such
              exclusion is permitted by law.
            </p>
            <p>
              Nothing in these terms is intended to exclude or limit any
              liability that cannot lawfully be excluded or limited, including
              liability for death or personal injury caused by negligence, or
              for fraud.
            </p>
          </Section>

          <Section id="changes" title="17. Changes to these terms">
            <p>
              Lowyalty Brandingline Ltd may update these Terms and Conditions
              from time to time to reflect changes in the services we offer,
              our practices or applicable legal requirements. Any updated
              version will be published on this page and, where changes are
              material, may be brought to the attention of enquirers or
              customers. Quotations and orders in progress at the time of a
              change are governed by the version of the terms in force at the
              time the quotation was accepted, unless otherwise agreed.
            </p>
            <p className="text-sm text-muted-foreground">
              These Terms and Conditions were most recently updated in
              September 2026.
            </p>
          </Section>

          <Section id="contact" title="18. Contact information">
            <p>
              Questions, orders, quotation requests and notices relating to
              these terms can be directed to Lowyalty Brandingline Ltd using
              the details published on our{" "}
              <a
                href="/contact"
                className="font-semibold text-primary hover:underline"
              >
                Contact page
              </a>{" "}
              or through the contact block shown below.
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
