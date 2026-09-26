import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import { email, phones } from "@/lib/contact";
import { enquiryUrl } from "@/lib/whatsapp";

export function ContentPage({ eyebrow, title, intro, children }: { eyebrow: string; title: string; intro: string; children: ReactNode }) { return <><section className="bg-foreground text-background"><div className="site-container py-20"><span className="text-sm font-black uppercase text-primary">{eyebrow}</span><h1 className="mt-4 max-w-4xl font-display text-5xl font-black sm:text-6xl">{title}</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-background/70">{intro}</p></div></section><div className="site-container section-pad">{children}</div></> }
export const meta = (title:string,description:string) => ({meta:[{title},{name:"description",content:description},{property:"og:title",content:title},{property:"og:description",content:description},{property:"og:image",content:"/favicon.png"},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:image",content:"/favicon.png"}]});

export function TrustContact() {
  return (
    <section className="rounded-2xl border border-border bg-gradient-to-br from-card to-muted p-8 sm:p-10">
      <div className="grid items-center gap-8 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <span className="text-xs font-black uppercase tracking-wider text-primary">
            Questions about our policies?
          </span>
          <h3 className="mt-3 font-display text-3xl font-black sm:text-4xl">
            Contact Lowyalty Brandingline Ltd.
          </h3>
          <p className="mt-4 max-w-xl text-[15px] leading-8 text-muted-foreground">
            If anything in our policies is unclear, or if you would like to
            discuss an order, quotation or enquiry, our team is ready to help.
            Reach us by phone, email or WhatsApp for the fastest response.
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            {phones.map((p) => (
              <li key={p.tel}>
                <span className="inline-flex items-center gap-2">
                  <Phone size={16} className="text-primary" />
                  <a
                    href={`tel:${p.tel}`}
                    className="font-semibold hover:text-primary"
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
                  className="font-semibold hover:text-primary break-all"
                >
                  {email}
                </a>
              </span>
            </li>
          </ul>
        </div>
        <div className="grid gap-3">
          <Button asChild size="lg">
            <a
              href={enquiryUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full justify-center"
            >
              <MessageCircle size={17} />
              Chat on WhatsApp
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/contact" className="w-full justify-center">
              Go to Contact page
            </Link>
          </Button>
          <Button asChild variant="ghost" size="lg">
            <a
              href={`mailto:${email}`}
              className="w-full justify-center"
            >
              <Mail size={17} />
              Email us
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
