import { createFileRoute, Link } from "@tanstack/react-router";
import { ContentPage, meta, TrustContact } from "@/components/content-page";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { email, phones } from "@/lib/contact";
import { enquiryUrl } from "@/lib/whatsapp";

export const Route = createFileRoute("/privacy")({
  head: () =>
    meta(
      "Privacy Policy | Lowyalty Brandingline Ltd",
      "How Lowyalty Brandingline Ltd collects, uses and protects the personal information you share when requesting quotes, placing orders or contacting us."
    ),
  component: Page,
});

const sections = [
  { id: "about", label: "About this policy" },
  { id: "who", label: "Who we are" },
  { id: "collect", label: "Information we may collect" },
  { id: "why", label: "Why we collect information" },
  { id: "use", label: "How we use information" },
  { id: "share", label: "Sharing with service providers" },
  { id: "protect", label: "How we protect information" },
  { id: "retain", label: "How long we keep information" },
  { id: "rights", label: "Your rights" },
  { id: "contact", label: "Contact us about privacy" },
  { id: "changes", label: "Changes to this policy" },
];

function Page() {
  return (
    <ContentPage
      eyebrow="Policies"
      title="Privacy Policy"
      intro="This Privacy Policy explains how Lowyalty Brandingline Ltd collects, uses, discloses and protects the personal information that customers, enquirers and website visitors share with us. It applies to information received through our website, contact forms, WhatsApp, email, telephone and in person."
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
          <Section id="about" title="About this policy">
            <p>
              Lowyalty Brandingline Ltd respects the privacy of every person who
              contacts us, visits our website, requests a quotation or places an
              order. This policy sets out, in plain language, the kinds of
              personal information we may receive, what we do with it, how we
              protect it, and the rights available to you in relation to your
              personal information.
            </p>
            <p>
              This policy is intended to be consistent with the principles and
              rights set out in Kenya's data protection framework. If there is
              anything in this policy that is unclear, please contact us using
              the details at the bottom of this page and we will be happy to
              explain further.
            </p>
          </Section>

          <Section id="who" title="Who we are">
            <p>
              For the purposes of this Privacy Policy, the data controller is{" "}
              <strong>Lowyalty Brandingline Ltd</strong>, a printing, branding
              and signage services provider operating from branches in Ngong and
              Nairobi, Kenya. We offer printing, branding, apparel decoration,
              signage, promotional products, stationery, packaging and related
              services to businesses, organisations and individual customers
              across Kenya.
            </p>
          </Section>

          <Section id="collect" title="Information we may collect">
            <p>
              The personal information we collect depends on how you interact
              with us. It may include:
            </p>
            <ul>
              <li>Your full name</li>
              <li>
                Telephone or mobile number (including WhatsApp numbers where
                provided)
              </li>
              <li>Email address</li>
              <li>Company, business or organisation name, where provided</li>
              <li>
                Information contained in an enquiry, quotation request or order
                (such as product types, quantities, delivery requirements and
                any special instructions)
              </li>
              <li>
                Details of the products, services or branding work you are
                requesting
              </li>
              <li>
                Information you voluntarily submit through website forms,
                WhatsApp messages, email, telephone conversations or in-person
                meetings
              </li>
              <li>
                Delivery or collection addresses provided as part of an order
              </li>
            </ul>
            <p>
              We only collect information that is reasonably necessary for us
              to respond to your enquiry, prepare a quotation, deliver a
              service or complete an order.
            </p>
          </Section>

          <Section id="why" title="Why we collect information">
            <p>
              We collect personal information so that we can:
            </p>
            <ul>
              <li>Respond to questions, enquiries and quotation requests</li>
              <li>
                Prepare accurate quotations based on your specific requirements
              </li>
              <li>
                Produce, print, brand, finish and deliver custom products and
                services
              </li>
              <li>
                Contact you about your order, quotation or ongoing project
              </li>
              <li>
                Provide customer support, follow-ups and production updates
              </li>
              <li>Share artwork proofs or specifications for your approval</li>
              <li>
                Arrange delivery or coordinate collection of finished orders
              </li>
              <li>
                Comply with any applicable legal, regulatory or record-keeping
                obligations
              </li>
            </ul>
          </Section>

          <Section id="use" title="How we use information">
            <p>
              Personal information is used for the purposes for which it was
              provided, and for closely related purposes that would reasonably
              be expected. For example:
            </p>
            <ul>
              <li>
                If you submit a quote request, we use the details provided to
                understand your requirements and prepare a quotation, usually by
                WhatsApp, email or telephone.
              </li>
              <li>
                If you place an order, we use the information to manage
                production, seek approvals where required, coordinate
                delivery/collection and issue any relevant documents.
              </li>
              <li>
                If you have subscribed to updates or offers, we may from time
                to time send newsletters or promotional information. You may
                opt out at any time by replying or contacting us.
              </li>
            </ul>
            <p>
              We do not sell, rent or trade your personal information to third
              parties for their own marketing purposes.
            </p>
          </Section>

          <Section id="share" title="Sharing with service providers">
            <p>
              In the course of providing our services, we may need to share
              certain information with trusted service providers where it is
              necessary to complete the work. Examples include:
            </p>
            <ul>
              <li>
                Couriers or delivery partners, to the extent needed to deliver
                finished orders to an address you have provided
              </li>
              <li>
                External designers or specialist production partners where
                required to fulfil a specific part of your order
              </li>
              <li>
                Payment service providers, where applicable, to process
                confirmed order payments
              </li>
              <li>
                Professional advisers or legal/accounting professionals where
                there is a legitimate business or compliance reason to do so
              </li>
            </ul>
            <p>
              Where information is shared in these ways, we take reasonable
              steps to ensure that service providers handle the information
              appropriately and only for the purposes we have instructed them
              for.
            </p>
            <p>
              We may also disclose personal information if required to do so by
              law, court order or a lawful request from a competent authority.
            </p>
          </Section>

          <Section id="protect" title="How we protect information">
            <p>
              We take reasonable technical and organisational measures to
              protect personal information against unauthorised access, loss,
              misuse, alteration or disclosure. These measures include:
            </p>
            <ul>
              <li>
                Limiting access to customer information to members of our team
                who need it to perform their work
              </li>
              <li>
                Securing premises and equipment used to store customer records
              </li>
              <li>
                Maintaining appropriate password and device security on
                computers and mobile devices used to access customer
                information
              </li>
              <li>
                Following careful processes when sharing information with
                external partners
              </li>
            </ul>
            <p>
              While we work hard to protect the information in our care, no
              method of storage or transmission over the internet is completely
              secure. We therefore cannot guarantee absolute security, and any
              information you submit is provided at your own risk.
            </p>
          </Section>

          <Section id="retain" title="How long we keep information">
            <p>
              We retain personal information for as long as it is reasonably
              necessary for the purposes for which it was collected, taking
              into account any active orders, outstanding quotations, legal
              requirements and legitimate business needs.
            </p>
            <p>
              In practice, this generally means we retain details for the
              duration of any active customer relationship, plus a reasonable
              period afterwards so that we can respond to follow-up questions,
              produce reference material or support any reorders. We may also
              retain certain records where we are required to do so by
              applicable law.
            </p>
            <p>
              When personal information is no longer required, we take steps to
              securely delete, destroy or anonymise it as appropriate.
            </p>
          </Section>

          <Section id="rights" title="Your rights">
            <p>
              Subject to applicable law and any lawful exceptions, you may have
              rights in relation to your personal information, including the
              right to:
            </p>
            <ul>
              <li>Request confirmation of whether we hold information about you</li>
              <li>
                Request access to, or a copy of, the personal information we
                hold about you
              </li>
              <li>
                Request correction of any inaccurate or incomplete information
              </li>
              <li>
                Request deletion or removal of information, where the grounds
                for continued processing no longer apply
              </li>
              <li>
                Object to, or request restriction of, certain types of
                processing
              </li>
              <li>
                Withdraw any consent previously given for us to process your
                information for a specific purpose
              </li>
            </ul>
            <p>
              To exercise any of these rights, please contact us using the
              details in the section below. We will respond to legitimate
              requests within a reasonable time and in accordance with
              applicable law.
            </p>
          </Section>

          <Section id="contact" title="Contact us about privacy">
            <p>
              If you have any questions, concerns or requests about this
              Privacy Policy, how we handle your personal information, or if
              you wish to exercise any of your rights, please contact Lowyalty
              Brandingline Ltd using any of the channels below:
            </p>
            <div className="mt-4 rounded-xl border border-border bg-card p-5">
              <ul className="space-y-3 text-sm">
                {phones.map((p) => (
                  <li key={p.tel}>
                    <span className="inline-flex items-center gap-2">
                      <Phone size={16} className="text-primary" />
                      <a
                        href={`tel:${p.tel}`}
                        className="font-medium hover:text-primary"
                      >
                        {p.label}
                      </a>
                    </span>
                  </li>
                ))}
                <li>
                  <span className="inline-flex items-center gap-2">
                    <Mail size={16} className="text-primary" />
                    <a
                      href={`mailto:${email}`}
                      className="font-medium hover:text-primary break-all"
                    >
                      {email}
                    </a>
                  </span>
                </li>
                <li>
                  <span className="inline-flex items-center gap-2">
                    <MessageCircle size={16} className="text-primary" />
                    <a
                      href={enquiryUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium hover:text-primary"
                    >
                      WhatsApp enquiry
                    </a>
                  </span>
                </li>
              </ul>
            </div>
          </Section>

          <Section id="changes" title="Changes to this policy">
            <p>
              From time to time we may update this Privacy Policy to reflect
              changes in our practices, the services we offer, or applicable
              legal requirements. Any updates will be published on this page,
              and where changes are material we will take reasonable steps to
              bring them to your attention (for example, by placing a notice on
              our website or contacting you directly where appropriate).
            </p>
            <p className="text-sm text-muted-foreground">
              This Privacy Policy was most recently updated in September 2026.
            </p>
          </Section>

          <TrustContact />
        </article>
      </div>
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
      <style>{`
        .prose-legal ul { list-style: disc; padding-left: 1.25rem; }
        .prose-legal ul li { margin: 0.4rem 0; }
        .prose-legal strong { color: var(--foreground); }
      `}</style>
    </section>
  );
}
