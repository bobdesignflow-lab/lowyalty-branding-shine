import { createFileRoute, Link } from "@tanstack/react-router";
import { meta } from "@/components/content-page";
import { Button } from "@/components/ui/button";
import signage from "@/assets/signage.jpg";
import apparel from "@/assets/apparel.jpg";

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

function Page() {
  return (
    <>
      <Hero />
      <div className="site-container section-pad">
        <div className="grid gap-5 md:grid-cols-3">{["Centralised production","Repeat-order consistency","Multi-location delivery"].map((x,i)=><div key={x} className="border-t-4 border-primary bg-muted p-8"><span className="text-sm font-black text-primary">0{i+1}</span><h2 className="mt-8 font-display text-2xl font-black">{x}</h2><p className="mt-3 leading-7 text-muted-foreground">A clear, accountable workflow built around your brand standards and deadlines.</p></div>)}</div>
        <div className="mt-12 text-center"><Button asChild><Link to="/contact">Request a corporate quote</Link></Button></div>
      </div>
    </>
  );
}
