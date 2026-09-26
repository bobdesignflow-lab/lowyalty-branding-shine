import { createFileRoute, Link } from "@tanstack/react-router";
import { meta } from "@/components/content-page";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import { useCart } from "@/lib/cart";
import { corporateQuoteUrl } from "@/lib/whatsapp";


export const Route = createFileRoute("/corporate")({
  head: () => meta("Corporate Print Solutions | Lowyalty", "Consistent multi-item branding, staff kits, event collateral and repeat print support."),
  component: Page,
});

const strip = ["Print", "Branding", "Apparel", "Signage", "Merchandise", "Design"];

function Hero() {
  const { items } = useCart();
  return (
    <section className="relative overflow-hidden bg-foreground text-background">
      <div className="site-container grid items-center gap-12 pt-14 pb-10 sm:pt-20 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:pt-24 lg:pb-16">
        <div className="animate-in fade-in slide-in-from-bottom-3 duration-700">
          <span className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-background/70">
            <span className="h-px w-8 bg-primary" />Corporate branding &amp; print
          </span>
          <h1 className="mt-6 font-display text-[2.6rem] font-extrabold leading-[1.02] tracking-tight sm:text-6xl lg:text-[4.4rem]">
            Your brand,<br /><span className="text-background/60">consistently</span> represented.
          </h1>
          <p className="mt-7 max-w-xl text-lg font-semibold leading-7 text-background/90 sm:text-xl">
            Corporate branding, print and visual solutions for organisations that care about how they show up.
          </p>
          <p className="mt-4 max-w-xl leading-7 text-background/60">
            From corporate stationery and staff apparel to large-format branding, promotional merchandise and visual communications — we bring your brand together across every physical touchpoint.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="h-12 px-7 transition-transform hover:-translate-y-0.5">
              <a href={corporateQuoteUrl(items)} target="_blank" rel="noopener noreferrer"><MessageCircle size={18}/>Request a Corporate Quote</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-12 border-background/25 bg-transparent px-7 text-background hover:bg-background/10 hover:text-background">
              <Link to="/samples">View Our Work</Link>
            </Button>
          </div>
        </div>

        <div className="relative animate-in fade-in zoom-in-95 duration-1000 lg:pb-10 lg:pl-6">
          <div className="overflow-hidden rounded-lg border border-background/10 shadow-2xl">
            <img src="/assets/home/categories/banners-displays.jpg" alt="Large-format branded signage produced for a corporate client" className="aspect-[4/3] w-full object-cover object-center sm:aspect-[5/4]" loading="eager" />
          </div>
          <div className="absolute -bottom-6 -left-2 hidden w-[42%] overflow-hidden rounded-lg border-4 border-foreground shadow-xl sm:block lg:bottom-0 lg:-left-4">
            <img src="/assets/home/categories/apparel.jpg" alt="Branded staff apparel" className="aspect-square w-full object-cover object-center" loading="lazy" />
          </div>
        </div>
      </div>

      <div className="site-container border-t border-background/10 py-6">
        <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-background/45 lg:justify-start">
          {strip.map((s, i) => (
            <li key={s} className="flex items-center gap-4">{i > 0 && <span className="text-primary">•</span>}{s}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const solutions = [
  { name: "Corporate Print", desc: "Professional print materials designed to keep your organisation consistent, credible and ready for everyday business.", items: ["Business Cards","Letterheads","Company Profiles","Brochures","Flyers","Presentation Folders","Receipts & Invoice Books","Corporate Stationery"] },
  { name: "Office & Environment Branding", desc: "Transform physical workspaces into environments that clearly communicate your organisation and its identity.", items: ["Office Branding","Wall Graphics","Glass Branding","Reception Branding","Directional Signage","Room Identification","Internal Communication Displays","Workspace Signage"] },
  { name: "Staff & Apparel", desc: "Branded apparel that gives teams a consistent and professional appearance across everyday operations and customer-facing environments.", items: ["Polo Shirts","Corporate Shirts","Hoodies","T-Shirts","Workwear","Uniform Branding","Embroidery","Screen Printing"] },
  { name: "Signage & Large Format", desc: "High-impact visual branding produced for offices, events, retail environments and outdoor spaces.", items: ["Large Format Printing","Banners","Roll-Up Banners","Teardrop Banners","Posters","Outdoor Signage","Wall Branding","Event Displays"] },
  { name: "Promotional Merchandise", desc: "Branded items that keep your organisation visible beyond the office and create useful, memorable touchpoints.", items: ["Branded Mugs","Water Bottles","Flasks","Notebooks","Diaries","Promotional Gifts","Branded Bags","Corporate Giveaways"] },
  { name: "Design & Visual Communication", desc: "Creative support that turns your brand requirements into clear, professional and production-ready visual materials.", items: ["Graphic Design","Corporate Artwork","Print-Ready Artwork","Marketing Materials","Campaign Visuals","Brand Applications","Layout & Artwork Preparation"] },
];

function Solutions() {
  return (
    <section className="site-container section-pad" aria-labelledby="solutions-title">
      <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr] lg:items-end lg:gap-16">
        <div>
          <span className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-muted-foreground"><span className="h-px w-8 bg-primary" />Corporate solutions</span>
          <h2 id="solutions-title" className="mt-5 max-w-xl font-display text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-[2.6rem]">Everything your brand needs to show up consistently.</h2>
        </div>
        <p className="max-w-xl leading-7 text-muted-foreground lg:justify-self-end">From everyday corporate print to branded apparel, office environments, signage and promotional merchandise, we help organisations maintain a consistent and professional presence wherever their brand appears.</p>
      </div>

      <ol className="mt-14 border-b border-border sm:mt-20">
        {solutions.map((s, i) => (
          <li key={s.name} className="group grid gap-4 border-t border-border py-8 transition-colors sm:grid-cols-[4.5rem_1fr] lg:grid-cols-[6rem_1fr_1.15fr] lg:gap-10 lg:py-10">
            <span className="font-display text-2xl font-extrabold text-primary/40 transition-colors group-hover:text-primary sm:text-4xl">0{i + 1}</span>
            <div>
              <h3 className="font-display text-xl font-extrabold tracking-tight transition-transform duration-300 group-hover:translate-x-1 sm:text-2xl">{s.name}</h3>
              <p className="mt-3 max-w-md leading-7 text-muted-foreground">{s.desc}</p>
            </div>
            <ul className="flex flex-wrap content-start gap-x-5 gap-y-2 text-sm font-medium text-foreground/75 sm:col-start-2 lg:col-start-auto lg:pt-1.5">
              {s.items.map((it) => <li key={it} className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-primary" />{it}</li>)}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Portfolio() {
  return (
    <section className="section-pad" aria-labelledby="portfolio-title">
      <div className="site-container">
        <div className="max-w-3xl">
          <span className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-muted-foreground">
            <span className="h-px w-8 bg-primary" />Selected Corporate Work
          </span>
          <h2 id="portfolio-title" className="mt-5 font-display text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-[2.6rem]">
            Built for the way your brand shows up.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
            A selection of branding, print and visual production work created for organisations, teams, events and physical environments.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-7">
          <article className="group relative overflow-hidden rounded-md border border-border bg-muted lg:col-span-8">
            <div className="overflow-hidden">
              <img
                src="/assets/home/categories/office-stationery.jpg"
                alt="Corporate stationery suite including letterheads, envelopes, notebooks and business cards"
                loading="lazy"
                width={1200}
                height={912}
                className="aspect-[4/3] w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
              />
            </div>
            <div className="border-t border-border bg-background p-6 sm:p-8">
              <span className="text-xs font-black uppercase tracking-[0.12em] text-primary">Corporate Branding</span>
              <h3 className="mt-4 font-display text-2xl font-black leading-tight sm:text-3xl">Branding that works beyond the logo.</h3>
              <p className="mt-4 max-w-2xl leading-7 text-muted-foreground transition-opacity duration-300 sm:opacity-80 group-hover:opacity-100">
                From apparel and stationery to physical environments, we apply brand identities consistently across the materials people interact with every day.
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm font-bold text-foreground">
                <span className="transition-transform duration-300 group-hover:translate-x-0.5">View this work</span>
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          </article>

          <article className="group relative overflow-hidden rounded-md border border-border bg-muted lg:col-span-4">
            <div className="overflow-hidden">
              <img
                src="/assets/home/categories/apparel.jpg"
                alt="Branded apparel and staff uniforms including t-shirts, hoodie, cap, tote bag and lanyard"
                loading="lazy"
                width={1200}
                height={912}
                className="aspect-[4/3] w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
              />
            </div>
            <div className="border-t border-border bg-background p-6 sm:p-8">
              <span className="text-xs font-black uppercase tracking-[0.12em] text-primary">Apparel &amp; Staff Branding</span>
              <h3 className="mt-4 font-display text-xl font-black leading-tight sm:text-2xl">A consistent team presence.</h3>
              <p className="mt-4 leading-7 text-muted-foreground transition-opacity duration-300 sm:opacity-80 group-hover:opacity-100">
                Branded apparel and uniforms produced to bring teams together under one clear visual identity.
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm font-bold text-foreground">
                <span className="transition-transform duration-300 group-hover:translate-x-0.5">View this work</span>
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          </article>

          <article className="group relative overflow-hidden rounded-md border border-border bg-muted lg:col-span-6">
            <div className="overflow-hidden">
              <img
                src="/assets/home/categories/banners-displays.jpg"
                alt="Large format signage, roll-up banners and event displays"
                loading="lazy"
                width={1200}
                height={912}
                className="aspect-[4/3] w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
              />
            </div>
            <div className="border-t border-border bg-background p-6 sm:p-8">
              <span className="text-xs font-black uppercase tracking-[0.12em] text-primary">Large Format &amp; Signage</span>
              <h3 className="mt-4 font-display text-xl font-black leading-tight sm:text-2xl">Make the brand impossible to miss.</h3>
              <p className="mt-4 leading-7 text-muted-foreground transition-opacity duration-300 sm:opacity-80 group-hover:opacity-100">
                Large-format applications designed for offices, events, outdoor environments and high-visibility spaces.
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm font-bold text-foreground">
                <span className="transition-transform duration-300 group-hover:translate-x-0.5">View this work</span>
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          </article>

          <article className="group relative overflow-hidden rounded-md border border-border bg-muted lg:col-span-6">
            <div className="overflow-hidden">
              <img
                src="/assets/home/categories/packaging.jpg"
                alt="Branded promotional merchandise, packaging and labels"
                loading="lazy"
                width={1200}
                height={912}
                className="aspect-[4/3] w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
              />
            </div>
            <div className="border-t border-border bg-background p-6 sm:p-8">
              <span className="text-xs font-black uppercase tracking-[0.12em] text-primary">Promotional Merchandise</span>
              <h3 className="mt-4 font-display text-xl font-black leading-tight sm:text-2xl">Branded touchpoints people remember.</h3>
              <p className="mt-4 leading-7 text-muted-foreground transition-opacity duration-300 sm:opacity-80 group-hover:opacity-100">
                Useful branded merchandise that extends your organisation's identity beyond the workplace.
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm font-bold text-foreground">
                <span className="transition-transform duration-300 group-hover:translate-x-0.5">View this work</span>
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          </article>
        </div>

        <div className="mt-14 text-center">
          <Button variant="outline" size="lg" asChild>
            <Link to="/samples">View Our Work <ArrowRight size={17} /></Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

const sectors = [
  {
    label: "Financial Services",
    orgs: [
      {
        name: "Absa Bank",
        note: "Multiple branch locations",
        branches: [
          "Limuru", "Muthaiga", "Hurlingham", "Marketplace", "Sarit",
          "Imara Daima", "Garissa", "Bunyala", "Kingsway", "Nairobi West", "Nyahururu",
        ],
      },
      { name: "K-Unity Sacco" },
    ],
  },
  {
    label: "Hospitality",
    orgs: [
      { name: "Hill Park Hotels" },
      { name: "Sugar And Lime Cafe" },
    ],
  },
  {
    label: "Retail / Collections",
    orgs: [
      { name: "Kenya Kanga Collection" },
    ],
  },
];

const whyPoints = [
  {
    num: "01",
    title: "ONE PRODUCTION PARTNER",
    desc: "Bring multiple branding and print requirements together instead of coordinating every item separately.",
  },
  {
    num: "02",
    title: "BRAND CONSISTENCY",
    desc: "Keep your visual identity consistent across stationery, apparel, signage, merchandise and physical brand applications.",
  },
  {
    num: "03",
    title: "MULTIPLE PRODUCTION METHODS",
    desc: "Access different production methods including digital printing, large-format printing, embroidery, screen printing and other branding applications.",
  },
  {
    num: "04",
    title: "FROM DESIGN TO PRODUCTION",
    desc: "Move from artwork and design requirements into physical production with a partner that understands both sides of the process.",
  },
  {
    num: "05",
    title: "REPEAT CORPORATE REQUIREMENTS",
    desc: "Maintain continuity when your organisation needs recurring stationery, apparel, promotional materials or other branded items.",
  },
  {
    num: "06",
    title: "BUILT AROUND THE REQUIREMENT",
    desc: "Every project begins with understanding what needs to be produced, where it will be used and how the brand should be represented.",
  },
];

const processSteps = [
  {
    num: "01",
    title: "UNDERSTAND",
    desc: "We start by understanding what you need, where it will be used, quantities, specifications and the intended brand application.",
  },
  {
    num: "02",
    title: "DEVELOP",
    desc: "We review the artwork or help develop the visual direction and production requirements.",
  },
  {
    num: "03",
    title: "APPROVE",
    desc: "Before production, the required artwork, specifications and final details are confirmed.",
  },
  {
    num: "04",
    title: "PRODUCE",
    desc: "Your approved work moves into the appropriate production process based on the required application.",
  },
  {
    num: "05",
    title: "DELIVER",
    desc: "Completed materials are prepared for collection or delivery according to the agreed arrangement.",
  },
];

function WhyProcess() {
  return (
    <section className="section-pad" aria-labelledby="why-title">
      <div className="site-container">
        {/* PART A — WHY LOWYALTY */}
        <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-24">
          <div>
            <span className="flex items-center gap-3 text-[0.7rem] font-black uppercase tracking-[0.28em] text-muted-foreground">
              <span className="h-px w-10 bg-primary" />
              WHY LOWYALTY
            </span>
            <h2
              id="why-title"
              className="mt-6 font-display text-3xl font-extrabold leading-[1.05] tracking-tight sm:text-[2.5rem] lg:text-[2.8rem] lg:leading-[1.03]"
            >
              One production partner.{" "}
              <span className="block sm:inline text-muted-foreground/70">Multiple ways to bring your brand to life.</span>
            </h2>
            <p className="mt-7 max-w-lg text-[1.05rem] leading-[1.9rem] text-muted-foreground">
              From artwork preparation and print production to branded apparel, signage and promotional materials, we bring different production requirements together under one partner.
            </p>
            <div className="mt-12 flex items-center gap-4">
              <div className="h-px w-14 bg-foreground/20" />
              <span className="text-[0.72rem] font-black uppercase tracking-[0.25em] text-foreground/40">
                06 points
              </span>
            </div>
          </div>

          <ol className="relative">
            {whyPoints.map((p, i) => (
              <li
                key={p.num}
                className={`group relative transition-colors duration-300 ${
                  i > 0 ? "" : ""
                } py-8 first:pt-0 last:pb-0 sm:py-9`}
              >
                <div
                  className={`absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent ${
                    i === 0 ? "opacity-0" : "opacity-100"
                  }`}
                />
                <div className="relative grid gap-5 sm:grid-cols-[7rem_1fr] sm:gap-7 lg:grid-cols-[8rem_1fr] lg:gap-9">
                  <div className="relative">
                    <span className="font-display text-[2.8rem] font-extrabold leading-none tracking-tight text-primary/25 transition-all duration-500 group-hover:text-primary/70 sm:text-[3.4rem] lg:text-[4rem]">
                      {p.num}
                    </span>
                    <div className="mt-3 hidden h-px w-10 bg-primary/0 transition-all duration-500 group-hover:w-14 group-hover:bg-primary/40 sm:block lg:mt-4" />
                  </div>
                  <div className="pt-2 sm:pt-3 lg:pt-[0.9rem]">
                    <div className="overflow-hidden">
                      <h3 className="font-display text-[0.92rem] font-black uppercase tracking-[0.2em] text-foreground transition-all duration-500 group-hover:tracking-[0.24em] sm:text-[1.02rem] lg:text-[1.06rem]">
                        {p.title}
                      </h3>
                    </div>
                    <p className="mt-4 max-w-xl leading-[1.85rem] text-muted-foreground sm:text-[0.97rem] sm:leading-[1.9rem] lg:max-w-2xl">
                      {p.desc}
                    </p>
                  </div>
                </div>
              </li>
            ))}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-60" />
          </ol>
        </div>

        {/* PART B — HOW WE WORK */}
        <div className="mt-28 sm:mt-32 lg:mt-40">
          <div className="grid gap-7 lg:grid-cols-[1fr_1.1fr] lg:items-end lg:gap-20">
            <div>
              <span className="flex items-center gap-3 text-[0.7rem] font-black uppercase tracking-[0.28em] text-muted-foreground">
                <span className="h-px w-10 bg-primary" />
                HOW WE WORK
              </span>
              <h2 className="mt-6 max-w-xl font-display text-3xl font-extrabold leading-[1.05] tracking-tight sm:text-[2.5rem] lg:text-[2.8rem] lg:leading-[1.03]">
                From requirement to finished product.
              </h2>
            </div>
            <p className="max-w-xl text-[1.05rem] leading-[1.9rem] text-muted-foreground lg:justify-self-end">
              A straightforward process designed to keep your project clear from the first conversation to final production.
            </p>
          </div>

          {/* Desktop & Tablet horizontal process */}
          <div className="relative mt-20 hidden sm:block">
            <div className="absolute left-[2.5%] right-[2.5%] top-[6.4rem] h-px bg-border lg:left-[5%] lg:right-[5%] lg:top-[7.5rem]">
              <div className="absolute inset-0 h-px bg-gradient-to-r from-transparent via-foreground/15 to-transparent" />
            </div>

            <ol className="relative grid grid-cols-5 gap-2 sm:gap-4 lg:gap-6 xl:gap-8">
              {processSteps.map((step, i) => (
                <li key={step.num} className="group relative">
                  <div className="relative flex flex-col items-start sm:items-center">
                    <div className="relative z-10">
                      <div className="flex items-center">
                        <span className="font-display text-[2.8rem] font-extrabold leading-none tracking-tight text-foreground/10 transition-colors duration-500 group-hover:text-primary/50 sm:text-[3.2rem] lg:text-[4rem] xl:text-[4.5rem]">
                          {step.num}
                        </span>
                        {i < processSteps.length - 1 && (
                          <span className="hidden text-[1.3rem] font-light tracking-tight text-foreground/20 transition-colors duration-500 group-hover:text-primary/30 sm:ml-2 sm:block lg:ml-3 lg:text-[1.7rem] xl:ml-4">
                            →
                          </span>
                        )}
                      </div>
                    </div>

                    <h3 className="mt-6 font-display text-[0.72rem] font-black uppercase tracking-[0.24em] text-foreground transition-all duration-500 group-hover:-translate-y-0.5 group-hover:text-primary sm:mt-8 sm:text-[0.82rem] sm:tracking-[0.26em] lg:mt-10 lg:text-[0.88rem] lg:tracking-[0.28em]">
                      {step.title}
                    </h3>
                    <p className="mt-4 max-w-[13rem] text-[0.8rem] leading-[1.6rem] text-muted-foreground sm:text-left sm:text-[0.82rem] sm:leading-[1.65rem] lg:text-center lg:text-[0.88rem] lg:leading-[1.75rem] xl:max-w-[15rem]">
                      {step.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Mobile vertical timeline */}
          <ol className="relative mt-16 space-y-0 sm:hidden">
            <div className="absolute left-[1.05rem] top-2 bottom-2 w-px bg-gradient-to-b from-border via-foreground/10 to-border" />
            {processSteps.map((step, i) => (
              <li key={step.num} className="group relative py-6 pl-14 first:pt-0 last:pb-0">
                <div className="absolute left-0 top-1 first:top-0">
                  <span className="font-display text-[2.1rem] font-extrabold leading-none tracking-tight text-foreground/10 transition-colors duration-500 group-hover:text-primary/45">
                    {step.num}
                  </span>
                  <div className="mt-2 h-px w-8 bg-border transition-all duration-500 group-hover:w-11 group-hover:bg-primary/40" />
                </div>
                <h3 className="pt-1 font-display text-[0.78rem] font-black uppercase tracking-[0.22em] text-foreground transition-all duration-500 group-hover:tracking-[0.25em] first:pt-0">
                  {step.title}
                </h3>
                <p className="mt-3 text-[0.9rem] leading-[1.75rem] text-muted-foreground">
                  {step.desc}
                </p>
              </li>
            ))}
          </ol>

          {/* Section end: anticipation for the Final CTA */}
          <div className="mt-24 border-t border-border pt-14 sm:mt-28 sm:pt-16 lg:mt-36 lg:pt-20">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-20">
              <div>
                <div className="flex items-center gap-3">
                  <div className="h-px w-10 bg-primary/50" />
                  <span className="text-[0.68rem] font-black uppercase tracking-[0.28em] text-foreground/40">
                    Next step
                  </span>
                </div>
                <p className="mt-5 max-w-2xl font-display text-[1.5rem] font-extrabold leading-[1.15] tracking-tight text-foreground sm:text-[1.85rem] lg:text-[2rem] lg:leading-[1.12]">
                  The next conversation begins with what your organisation needs to produce.
                </p>
              </div>
              <p className="max-w-xl text-[0.98rem] leading-[1.9rem] text-muted-foreground lg:justify-self-end">
                From there we can clarify the scope, production approach and the practical details that keep the process straightforward for everyone involved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ClientsExperience() {
  return (
    <section className="section-pad" aria-labelledby="clients-title">
      <div className="site-container">
        <div className="max-w-3xl">
          <span className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-muted-foreground">
            <span className="h-px w-8 bg-primary" />Corporate Experience
          </span>
          <h2 id="clients-title" className="mt-5 font-display text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-[2.6rem]">
            Brands we've had the opportunity to work with.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
            From financial services and hospitality to retail, organisations and growing businesses, our work spans different environments where consistent branding and professional production matter.
          </p>
        </div>

        <div className="mt-16 grid gap-14 border-t border-border pt-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20 lg:pt-16">
          <div className="flex flex-col justify-start gap-10 lg:sticky lg:top-10 lg:self-start">
            <div>
              <p className="font-display text-[1.9rem] font-extrabold leading-[1.12] tracking-tight text-foreground sm:text-[2.4rem] lg:text-[2.7rem]">
                Corporate branding is about <span className="text-primary">consistency</span> at every touchpoint.
              </p>
            </div>
            <div className="h-px w-20 bg-border" />
            <p className="max-w-md leading-7 text-muted-foreground">
              Every organisation has different requirements. Our role is to understand the brand, the application and the production requirement — then deliver accordingly.
            </p>
          </div>

          <div className="space-y-10">
            {sectors.map((sector) => (
              <div key={sector.label} className="group">
                <div className="mb-6 flex items-baseline gap-4">
                  <span className="text-[0.7rem] font-black uppercase tracking-[0.28em] text-primary">
                    {sector.label}
                  </span>
                  <span className="h-px flex-1 bg-border transition-all duration-300 group-hover:bg-foreground/20" />
                </div>

                <ul className="space-y-0">
                  {sector.orgs.map((org, idx) => (
                    <li key={org.name} className="border-b border-border first:border-t first:border-border">
                      <div className="flex items-baseline justify-between gap-6 py-6 transition-colors hover:bg-muted/40 sm:px-2">
                        <div>
                          <h3 className="font-display text-lg font-black tracking-[0.06em] text-foreground transition-transform duration-300 hover:translate-x-1 sm:text-xl">
                            {org.name.toUpperCase()}
                          </h3>
                          {org.note && (
                            <p className="mt-2 text-sm font-medium text-muted-foreground">
                              {org.note}
                            </p>
                          )}
                        </div>
                        <span className="font-display text-sm font-bold tracking-widest text-primary/30 transition-colors group-hover:text-primary/60">
                          0{idx + 1}
                        </span>
                      </div>

                      {org.branches && (
                        <div className="border-t border-border/60 bg-muted/20 px-2 py-5 sm:px-4">
                          <p className="max-w-2xl text-[0.78rem] font-semibold leading-6 tracking-[0.02em] text-muted-foreground">
                            {org.branches.map((b, i) => (
                              <span key={b}>
                                {b}
                                {i < org.branches.length - 1 && (
                                  <span className="mx-1.5 text-primary/50">•</span>
                                )}
                              </span>
                            ))}
                          </p>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Page() {
  return (
    <>
      <Hero />
      <Solutions />
      <Portfolio />
      <ClientsExperience />
      <WhyProcess />
    </>
  );
}
