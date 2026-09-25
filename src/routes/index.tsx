import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowRight, Search, Sparkles, CheckCircle2, Clock3, Truck, Palette } from "lucide-react";
import { useState } from "react";
import { categories, products } from "@/lib/catalog";
import { ProductCard } from "@/components/product-card";
import { Button } from "@/components/ui/button";
import stationery from "@/assets/stationery.jpg";

type Review = {
  quote: string;
  name: string;
  org: string;
  location: string;
};

const reviews: Review[] = [
  { quote: "The team understood the brief quickly and the final stationery felt premium.", name: "Amina Wanjiru", org: "Safaricom Business", location: "Nairobi" },
  { quote: "Our event materials arrived on time, matched perfectly and looked brilliant on site.", name: "David Ochieng", org: "Kenya Tourism Board", location: "Nairobi" },
  { quote: "Lowyalty made a complex staff branding order feel simple from start to finish.", name: "Grace Mwangi", org: "Equity Group Foundation", location: "Nairobi" },
  { quote: "Bob from Absa Bank here — the corporate rebrand print run was flawless. Colour consistency across branches was spot on.", name: "Bob Kiprono", org: "Absa Bank Kenya", location: "Nairobi" },
  { quote: "Hills Park Hotel has worked with many printers, but Lowyalty's menu cards and branded guest items are the best we've received.", name: "Sarah Chebet", org: "Hills Park Hotel", location: "Limuru" },
  { quote: "Our kangas and lesos came out beautifully. The fabric printing quality and colour vibrancy exceeded our expectations.", name: "Neema Said", org: "Kenya Kanga Collection", location: "Mombasa" },
  { quote: "Brackenhurst has relied on Lowyalty for school diaries, event banners and staff uniforms for three years. Consistent quality every time.", name: "Peter Njoroge", org: "Brackenhurst", location: "Limuru" },
  { quote: "Afya Care's patient folders, branded scrubs and outdoor signage were all handled in one order. Saved us so much coordination time.", name: "Dr. Elizabeth Kamau", org: "Afya Care Medical Centre", location: "Limuru" },
  { quote: "Limuru Girls' school badges, graduation gowns and printed reports looked absolutely stunning. Parents kept asking who printed them.", name: "Margaret Wairimu", org: "Limuru Girls High School", location: "Limuru" },
  { quote: "One Tribe Church's branded t-shirts, hymn books and pull-up banners for our crusade were delivered a day early. Excellent service.", name: "Pastor John Mutua", org: "One Tribe Church", location: "Limuru" },
  { quote: "K-Unity Sacco ordered thousands of branded notebooks, pens and wall calendars for members. Every piece was on spec and beautifully finished.", name: "Lucy Waithera", org: "K-Unity Limuru", location: "Limuru" },
  { quote: "St John's Ambulance relies on clear, durable signage and uniform branding. Lowyalty delivered exactly that — tough, readable and professional.", name: "Samuel Koech", org: "St John's Ambulance Kenya", location: "Nairobi" },
];

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Printing & Branding Nairobi | Lowyalty" },
    { name: "description", content: "Custom printing, signage, branded apparel and packaging made in Nairobi by Lowyalty Brandingline Ltd." },
    { property: "og:title", content: "Lowyalty Brandingline Ltd — Print with impact" },
    { property: "og:description", content: "Reliable print and branding for businesses, events and everyday moments." },
    { property: "og:image", content: "/favicon.png" },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:image", content: "/favicon.png" },
  ]}),
  component: HomePage,
});

function HomePage() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const search = () => navigate({ to: "/shop", search: { q: query || undefined, category: undefined } });
  return <>
    <section className="relative overflow-hidden bg-foreground text-background">
      <img src={stationery} alt="Premium branded stationery by Lowyalty" width={1200} height={912} className="absolute inset-0 h-full w-full object-cover opacity-35" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--foreground)_15%,transparent_90%)]" />
      <div className="site-container relative flex min-h-[610px] items-center py-20"><div className="max-w-3xl">
        <span className="mb-6 inline-flex items-center gap-2 border-l-4 border-primary pl-4 text-sm font-bold uppercase text-background/80"><Sparkles size={16}/>Made for brands that mean business</span>
        <h1 className="font-display text-5xl font-black leading-[1.05] sm:text-7xl">What are you<br/><span className="text-primary">printing today?</span></h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-background/75">From one sharp business card to a full corporate rollout, we turn your idea into something people can hold, wear and remember.</p>
        <form className="mt-9 flex max-w-2xl flex-col gap-2 bg-background p-2 sm:flex-row" onSubmit={(e) => { e.preventDefault(); search(); }}><label className="flex min-h-14 flex-1 items-center gap-3 px-4 text-foreground"><Search className="text-primary"/><input value={query} onChange={(e) => setQuery(e.target.value)} className="w-full bg-transparent outline-none" placeholder="Search cards, banners, t-shirts..." aria-label="Search products" /></label><Button size="lg" type="submit">Search products<ArrowRight size={18}/></Button></form>
        <div className="mt-7 flex flex-wrap gap-5 text-xs font-semibold text-background/70"><span className="flex gap-2"><CheckCircle2 size={16} className="text-primary"/>Quality checked</span><span className="flex gap-2"><Clock3 size={16} className="text-primary"/>Reliable timelines</span><span className="flex gap-2"><Truck size={16} className="text-primary"/>Kenya-wide delivery</span></div>
      </div></div>
    </section>

    <section className="section-pad"><div className="site-container"><SectionTitle eyebrow="Everything you need" title="Explore our print categories" copy="Find a fast starting point, then customise size, finish, quantity and delivery with our team."/><div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{categories.map((c, i) => <Link key={c.slug} to="/shop" search={{category:c.slug,q:undefined}} className="group relative min-h-72 overflow-hidden rounded-md"><img src={c.image} alt={c.name} loading="lazy" width={1200} height={912} className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"/><div className="absolute inset-0 bg-[linear-gradient(0deg,var(--foreground),transparent_75%)]"/><div className="absolute inset-x-0 bottom-0 p-6 text-background"><span className="mb-2 block text-xs font-bold text-primary">0{i+1}</span><h3 className="font-display text-xl font-bold">{c.name}</h3><p className="mt-2 text-sm text-background/70">{c.blurb}</p></div></Link>)}</div></div></section>

    <section className="bg-secondary"><div className="site-container grid gap-12 py-20 lg:grid-cols-[.9fr_1.1fr] lg:items-center"><div><span className="text-sm font-black uppercase text-primary">What we do</span><h2 className="mt-4 font-display text-4xl font-black sm:text-5xl">One partner from idea to delivery.</h2><p className="mt-5 max-w-xl leading-7 text-muted-foreground">We bring design thinking, print production and finishing under one roof so your brand stays consistent everywhere it appears.</p><Button asChild className="mt-7"><Link to="/services">Explore services<ArrowRight size={17}/></Link></Button></div><div className="grid gap-px bg-foreground/15 sm:grid-cols-2">{[[Palette,"Design studio","Brand-ready artwork and practical guidance."],[Sparkles,"Print production","Clean colour, sharp detail and premium finishes."],[CheckCircle2,"Quality control","Every order is checked before it leaves us."],[Truck,"Delivery","Collection in Nairobi or delivery across Kenya."]].map(([Icon,title,copy]) => { const C=Icon as typeof Palette; return <div key={String(title)} className="bg-background p-7"><C className="text-primary"/><h3 className="mt-5 font-display text-xl font-bold">{String(title)}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{String(copy)}</p></div>})}</div></div></section>

    <section className="section-pad"><div className="site-container"><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><SectionTitle eyebrow="Popular right now" title="Made to get noticed" copy="Our most requested print and branding essentials."/><Button variant="outline" asChild><Link to="/shop" search={{q:undefined,category:undefined}}>View all products<ArrowRight size={17}/></Link></Button></div><div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{products.filter(p => p.featured).map(p => <ProductCard key={p.slug} product={p}/>)}</div></div></section>

    <section className="bg-foreground text-background"><div className="site-container grid gap-12 py-20 lg:grid-cols-2 lg:items-center"><img src={stationery} alt="Lowyalty print workmanship" loading="lazy" width={1200} height={912} className="aspect-[4/3] w-full rounded-md object-cover"/><div><span className="text-sm font-black uppercase text-primary">About Lowyalty</span><h2 className="mt-4 font-display text-4xl font-black sm:text-5xl">Your brand deserves more than ordinary print.</h2><p className="mt-6 text-lg leading-8 text-background/70">We help teams turn brand ideas into carefully produced materials—from everyday stationery to campaigns that take over a room.</p><Button variant="default" asChild className="mt-8"><Link to="/about">Meet our studio<ArrowRight size={17}/></Link></Button></div></div></section>

    <section className="section-pad overflow-hidden">
      <div className="site-container">
        <SectionTitle eyebrow="Client notes" title="Work that earns a second order" copy="A sample of the experience we aim to deliver on every project." />
        <div className="relative mt-10">
          <style>{`
            @keyframes marquee-scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .marquee-track {
              display: flex;
              gap: 1.25rem;
              width: max-content;
              animation: marquee-scroll 60s linear infinite;
            }
            .marquee-track:hover {
              animation-play-state: paused;
            }
            .marquee-fade-left,
            .marquee-fade-right {
              position: absolute;
              top: 0;
              bottom: 0;
              width: 80px;
              z-index: 10;
              pointer-events: none;
            }
            .marquee-fade-left {
              left: 0;
              background: linear-gradient(to right, hsl(var(--background)), transparent);
            }
            .marquee-fade-right {
              right: 0;
              background: linear-gradient(to left, hsl(var(--background)), transparent);
            }
            @media (prefers-reduced-motion: reduce) {
              .marquee-track {
                animation: none;
              }
            }
          `}</style>
          <div className="marquee-fade-left" />
          <div className="marquee-fade-right" />
          <div className="overflow-hidden">
            <div className="marquee-track">
              {[...reviews, ...reviews].map((review, idx) => (
                <blockquote key={`${review.name}-${idx}`} className="shrink-0 basis-[340px] max-w-[340px] sm:basis-[400px] sm:max-w-[400px] border-t-4 border-primary bg-muted p-7">
                  <p className="font-display text-xl font-semibold leading-8">&ldquo;{review.quote}&rdquo;</p>
                  <footer className="mt-6 text-sm font-bold">
                    {review.name} <span className="font-normal text-muted-foreground">— {review.org}</span>
                    <div className="mt-1 text-xs font-normal text-muted-foreground">{review.location}, Kenya</div>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="site-container mb-16 bg-primary px-6 py-14 text-center text-primary-foreground sm:px-12"><h2 className="font-display text-4xl font-black">Ready to make your brand tangible?</h2><p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80">Browse our most popular print products or send a custom brief for a tailored quote.</p><div className="mt-7 flex flex-wrap justify-center gap-3"><Button variant="dark" asChild><Link to="/shop" search={{q:undefined,category:undefined}}>Start shopping<ArrowRight size={17}/></Link></Button><Button className="border border-primary-foreground bg-transparent" asChild><Link to="/contact">Request a quote</Link></Button></div></section>
  </>;
}

function SectionTitle({eyebrow,title,copy}:{eyebrow:string;title:string;copy:string}) { return <div className="max-w-2xl"><span className="text-sm font-black uppercase text-primary">{eyebrow}</span><h2 className="mt-3 font-display text-3xl font-black sm:text-4xl">{title}</h2><p className="mt-4 leading-7 text-muted-foreground">{copy}</p></div> }