import { createFileRoute, Link } from "@tanstack/react-router";
import { ContentPage, meta, TrustContact } from "@/components/content-page";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { enquiryUrl } from "@/lib/whatsapp";

export const Route = createFileRoute("/faq")({
  head: () =>
    meta(
      "Frequently Asked Questions | Lowyalty Brandingline Ltd",
      "Answers to common questions about ordering printing, branding, signage, packaging and apparel from Lowyalty Brandingline Ltd."
    ),
  component: Page,
});

type FaqItem = { q: string; a: React.ReactNode };

const general: FaqItem[] = [
  {
    q: "What services does Lowyalty Brandingline Ltd offer?",
    a: (
      <>
        Lowyalty Brandingline Ltd is a full-service print and branding
        provider. We offer{" "}
        <strong>
          marketing and promotional print, office stationery, branded
          apparel, packaging, banners and displays, corporate gifts,
          signage, labels and stickers, vehicle branding, awards and
          recognition, books and publications, office and environmental
          branding, personal and event print, and custom trading books
        </strong>
        . You can browse the full range of categories on our Shop page.
      </>
    ),
  },
  {
    q: "Do you handle both printing and branding?",
    a: (
      <>
        Yes. In addition to traditional printing, we offer a wide range of
        branding services including apparel printing and embroidery, large
        format signage, vehicle graphics, wall and window branding, light
        boxes, 3D signage, event branding and custom packaging production.
        Whatever your print or branding requirement, please get in touch
        and we will guide you on the best approach.
      </>
    ),
  },
  {
    q: "Do you provide design services?",
    a: (
      <>
        Yes, design support is available for most orders. If you have
        existing print-ready artwork we can work from that directly. If
        you need design, layout, retouching or artwork preparation work,
        please mention it when requesting your quotation so it can be
        included. Design requirements are confirmed with you before work
        begins.
      </>
    ),
  },
  {
    q: "Can I request a quotation before placing an order?",
    a: (
      <>
        Absolutely. In fact, most orders begin with a quotation. You can
        request a quote by using the website, sending us a WhatsApp
        message, emailing or calling us directly. A quotation lets you
        see the pricing, specifications and timeline before you commit.
      </>
    ),
  },
];

const orders: FaqItem[] = [
  {
    q: "How do I request a quote?",
    a: (
      <>
        The fastest way is to browse the product you are interested in,
        add any relevant items or notes, and use our quote functionality
        to send your enquiry to Lowyalty Brandingline Ltd through
        WhatsApp. You can also go directly to the{" "}
        <Link to="/contact" className="font-semibold text-primary hover:underline">
          Contact page
        </Link>
        , send us an email, or call us on{" "}
        <a href="tel:+254708502332" className="font-semibold text-primary hover:underline">
          0708 502 332
        </a>
        . Share the product, quantity, size, deadline and any other
        details and we will prepare a quotation for you.
      </>
    ),
  },
  {
    q: "Can I request a quote for multiple products?",
    a: (
      <>
        Yes. You can include multiple products in a single quotation
        request. For example, if you need branded t-shirts, roll-up
        banners and business cards for the same event, simply include all
        of them in your enquiry and we will prepare a combined quote.
      </>
    ),
  },
  {
    q: "Can I add several products to my quote?",
    a: (
      <>
        Yes. The more detail you can provide for each product
        (quantities, sizes, materials, finishes, branding requirements),
        the more accurate the quotation will be. If you are unsure about
        any detail, our team can help advise once you reach out.
      </>
    ),
  },
  {
    q: "How will I receive my quotation?",
    a: (
      <>
        Quotations are typically shared by WhatsApp, email or telephone,
        depending on your preference and the nature of the enquiry. If
        you reach out via WhatsApp, the quotation response will usually
        come back through the same channel for speed and convenience.
      </>
    ),
  },
  {
    q: "Do all products have fixed prices?",
    a: (
      <>
        No. Some products on the website show starting prices as a guide,
        but final pricing can depend on quantity, size, material,
        printing method, branding method, finishing, production
        complexity and delivery requirements. For this reason, many
        products require a quotation to give you accurate pricing. Where
        a product is marked as quote-only, final pricing is confirmed
        after we review your specific requirements.
      </>
    ),
  },
];

const custom: FaqItem[] = [
  {
    q: "Can I request custom sizes?",
    a: (
      <>
        Yes. Custom sizes are available for most products including
        banners, signage, stationery, packaging, labels and displays. If
        a standard size is not suitable for your project, please mention
        the exact dimensions when requesting a quotation and we will
        price accordingly.
      </>
    ),
  },
  {
    q: "Can you work with my existing artwork?",
    a: (
      <>
        Yes. If you already have logo files, artwork or designs, we are
        happy to use them. Where possible, please provide artwork in a
        print-ready or high-resolution format. If your artwork needs
        adjustment or preparation before printing, we can advise on what
        is needed.
      </>
    ),
  },
  {
    q: "Can Lowyalty help with design?",
    a: (
      <>
        Yes. Lowyalty Brandingline Ltd offers design and artwork support
        for customers who need it. If you do not have print-ready
        artwork, or you would like our input on layouts, colours,
        typography or branding, simply mention this when requesting your
        quotation. Design support can be included as part of your order
        where needed.
      </>
    ),
  },
  {
    q: "Can you handle large-format branding?",
    a: (
      <>
        Yes. Large-format work is one of our core services, including
        outdoor and indoor signage, banners, backdrops, wall branding,
        window graphics, light boxes, 3D signs, vehicle branding,
        teardrop and feather flags, roll-up banners and exhibition
        displays. Contact us with the dimensions and application and we
        will recommend the best material and production method.
      </>
    ),
  },
];

const delivery: FaqItem[] = [
  {
    q: "Do you offer delivery?",
    a: (
      <>
        Delivery is available for many orders. Whether delivery can be
        arranged depends on the product, its size/weight, your location
        and the scope of the order. Delivery options, where available,
        are confirmed at quotation stage.
      </>
    ),
  },
  {
    q: "How are delivery charges determined?",
    a: (
      <>
        Delivery charges depend on your location, the order size and
        weight, urgency, and the delivery method used. Where delivery
        applies, the charge is communicated clearly with your quotation
        or order confirmation before fulfilment. You will not be charged
        delivery fees that have not been previously agreed.
      </>
    ),
  },
  {
    q: "Can I collect my order?",
    a: (
      <>
        Yes. Customers may, where applicable, collect finished orders in
        person from one of our branches:{" "}
        <strong>Ngong</strong> (3T Building, 1st Floor, Room 207) or{" "}
        <strong>Nairobi</strong> (Printers Arcade, 1st Floor, Room M9).
        If you plan to collect, please mention it when requesting your
        quotation so we can schedule accordingly.
      </>
    ),
  },
  {
    q: "How long does an order take?",
    a: (
      <>
        Production and delivery timelines vary from order to order. The
        main factors include the product type, quantity, artwork
        readiness, complexity, the approvals process, any design work
        required and the current production schedule. A timeline is
        confirmed with your quotation and again once your order is
        finalised. If you have a specific deadline, please share it when
        enquiring so we can confirm whether it can be met.
      </>
    ),
  },
];

const payment: FaqItem[] = [
  {
    q: "How do I pay?",
    a: (
      <>
        Payment methods, payment terms and any deposit requirements are
        confirmed during the quotation and order process for each order.
        To confirm exactly how to pay for a specific quotation or order,
        please contact Lowyalty Brandingline Ltd directly and we will
        guide you through the available options.
      </>
    ),
  },
  {
    q: "When is payment required?",
    a: (
      <>
        Payment terms are confirmed on a per-order basis. Depending on
        the order value, customisation and scope, a deposit, part
        payment or payment in advance may be required before production
        begins. These requirements will be clearly communicated before
        you confirm your order.
      </>
    ),
  },
  {
    q: "Do all products have the same payment terms?",
    a: (
      <>
        No. Payment terms can vary depending on the products ordered,
        total order value, the extent of customisation, production
        complexity and any pre-agreed arrangement with Lowyalty
        Brandingline Ltd. Terms are always confirmed clearly in writing
        before an order proceeds.
      </>
    ),
  },
];

const sections = [
  { id: "general", label: "General", items: general },
  { id: "orders", label: "Orders &amp; Quotes", items: orders },
  { id: "custom", label: "Custom Printing &amp; Branding", items: custom },
  { id: "delivery", label: "Delivery &amp; Collection", items: delivery },
  { id: "payment", label: "Payment", items: payment },
];

function Page() {
  return (
    <ContentPage
      eyebrow="Help"
      title="Frequently Asked Questions"
      intro="Answers to the questions our customers ask most often about printing, branding, quotations, orders, delivery and payment. If your question is not answered here, please get in touch — our team is happy to help."
    >
      <div className="grid gap-16 lg:grid-cols-[240px_1fr]">
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-xl border border-border bg-card p-5">
            <p className="text-xs font-black uppercase tracking-wider text-muted-foreground">
              Sections
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="block py-1 font-medium text-muted-foreground transition-colors hover:text-primary"
                    dangerouslySetInnerHTML={{ __html: s.label }}
                  />
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-lg border-t border-border pt-5">
              <Button
                asChild
                className="w-full bg-whatsapp text-primary-foreground hover:bg-whatsapp/90"
              >
                <a
                  href={enquiryUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="justify-center text-sm"
                >
                  <MessageCircle size={16} />
                  Still stuck? Chat on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </aside>

        <article className="space-y-16">
          {sections.map((s) => (
            <section key={s.id} id={s.id} className="scroll-mt-24">
              <div className="flex items-end justify-between gap-4 border-b border-border pb-4">
                <h2
                  className="font-display text-2xl font-black sm:text-3xl"
                  dangerouslySetInnerHTML={{ __html: s.label }}
                />
                <a
                  href="#top"
                  className="text-xs font-bold uppercase tracking-wider text-muted-foreground transition-colors hover:text-primary"
                >
                  Back to top ↑
                </a>
              </div>
              <Accordion
                type="multiple"
                className="mt-4 border-0 divide-y divide-border"
              >
                {s.items.map((item, i) => (
                  <AccordionItem
                    key={i}
                    value={`${s.id}-${i}`}
                    className="border-0 py-1 first:pt-0"
                  >
                    <AccordionTrigger className="py-5 text-left text-[15px] font-bold leading-7 hover:no-underline sm:text-base sm:leading-8">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="pb-6 pr-6 text-[15px] leading-8 text-muted-foreground">
                        {item.a}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>
          ))}

          <section className="rounded-2xl border border-border bg-gradient-to-br from-[oklch(0.18_0.02_255)] to-[oklch(0.22_0.02_255)] p-8 text-background sm:p-10">
            <div className="grid items-center gap-8 lg:grid-cols-[1.3fr_1fr]">
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-[oklch(0.82_0.16_85)]">
                  Didn't find an answer?
                </span>
                <h3 className="mt-3 font-display text-3xl font-black text-white sm:text-4xl">
                  We're one message away.
                </h3>
                <p className="mt-4 max-w-xl text-[15px] leading-8 text-background/75">
                  Reach out to Lowyalty Brandingline Ltd with your question
                  by WhatsApp, phone or email. For most enquiries, WhatsApp
                  gives you the fastest response from our team.
                </p>
              </div>
              <div className="grid gap-3">
                <Button
                  asChild
                  size="lg"
                  className="w-full justify-center bg-whatsapp text-primary-foreground hover:bg-whatsapp/90"
                >
                  <a
                    href={enquiryUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle size={17} />
                    Chat on WhatsApp
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full justify-center">
                  <Link to="/contact">
                    Go to Contact page
                    <ArrowRight size={17} />
                  </Link>
                </Button>
              </div>
            </div>
          </section>

          <TrustContact />
        </article>
      </div>

      <style>{`
        [data-radix-accordion-content][data-state='open'] { animation: accordion-down .24s ease-out; }
        [data-radix-accordion-content][data-state='closed'] { animation: accordion-up .2s ease-out; }
      `}</style>
    </ContentPage>
  );
}
