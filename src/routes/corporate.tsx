import { createFileRoute, Link } from "@tanstack/react-router";
import { meta } from "@/components/content-page";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import signage from "@/assets/signage.jpg";
import apparel from "@/assets/apparel.jpg";
import stationery from "@/assets/stationery.jpg";
import packaging from "@/assets/packaging.jpg";

export const Route = createFileRoute("/corporate")({
  head: () => meta("Corporate Print Solutions | Lowyalty", "Consistent multi-item branding, staff kits, event collateral and repeat print support."),
  component: Page,
});

const strip = ["Print", "Branding", "Apparel", "Signage", "Merchandise", "Design"];

function Hero() {
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
              <Link to="/contact">Request a Corporate Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-12 border-background/25 bg-transparent px-7 text-background hover:bg-background/10 hover:text-background">
              <Link to="/samples">View Our Work</Link>
            </Button>
          </div>
        </div>

        <div className="relative animate-in fade-in zoom-in-95 duration-1000 lg:pb-10 lg:pl-6">
          <div className="overflow-hidden rounded-lg border border-background/10 shadow-2xl">
            <img src={signage} alt="Large-format branded signage produced for a corporate client" className="aspect-[4/3] w-full object-cover sm:aspect-[5/4]" loading="eager" />
          </div>
          <div className="absolute -bottom-6 -left-2 hidden w-[42%] overflow-hidden rounded-lg border-4 border-foreground shadow-xl sm:block lg:bottom-0 lg:-left-4">
            <img src={apparel} alt="Branded staff apparel" className="aspect-square w-full object-cover" loading="lazy" />
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
                src={stationery}
                alt="Corporate stationery suite including letterheads, envelopes, notebooks and business cards"
                loading="lazy"
                width={1200}
                height={912}
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
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
                src={apparel}
                alt="Branded apparel and staff uniforms including t-shirts, hoodie, cap, tote bag and lanyard"
                loading="lazy"
                width={1200}
                height={912}
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
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
                src={signage}
                alt="Large format signage, roll-up banners and event displays"
                loading="lazy"
                width={1200}
                height={912}
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
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
                src={packaging}
                alt="Branded promotional merchandise, packaging and labels"
                loading="lazy"
                width={1200}
                height={912}
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
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

function Page() {
  return (
    <>
      <Hero />
      <Solutions />
      <Portfolio />
    </>
  );
}
