import { Link } from "@tanstack/react-router";
import { Menu, Search, ShoppingBag, X, Mail, MapPin, Phone, Instagram, Facebook } from "lucide-react";
import { useState, type ReactNode } from "react";
import { useCart } from "@/lib/cart";
import { categories } from "@/lib/catalog";
import { Button } from "./ui/button";

const nav = [
  ["About", "/about"], ["Services", "/services"], ["Shop", "/shop"],
  ["Samples", "/samples"], ["Corporate", "/corporate"], ["Contact", "/contact"],
] as const;

export function SiteShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const { count } = useCart();
  return <div className="min-h-screen bg-background text-foreground">
    <div className="bg-foreground text-background">
      <div className="site-container flex min-h-9 items-center justify-between gap-4 py-2 text-xs font-semibold">
        <span>Print • Brand • Deliver across Kenya</span>
        <div className="hidden items-center gap-5 sm:flex"><a href="tel:+254700000000" className="hover:text-primary">+254 700 000 000</a><a href="mailto:hello@lowyaltybrandingline.co.ke" className="hover:text-primary">Email us</a></div>
      </div>
    </div>
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <div className="site-container flex h-20 items-center justify-between gap-5">
        <Link to="/" aria-label="Lowyalty Brandingline home" className="flex shrink-0 items-center gap-3">
          <span className="grid size-11 place-items-center rounded-md bg-primary font-display text-xl font-black text-primary-foreground">L</span>
          <span className="hidden leading-none sm:block"><strong className="block font-display text-lg">LOWYALTY</strong><span className="text-[10px] font-bold uppercase tracking-[.14em] text-muted-foreground">Brandingline Ltd</span></span>
        </Link>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          {nav.map(([label, to]) => <Link key={to} to={to} className="text-sm font-bold hover:text-primary" activeProps={{ className: "text-primary" }}>{label}</Link>)}
        </nav>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" aria-label="Search products" asChild><Link to="/shop" search={{ q: undefined }}><Search size={20} /></Link></Button>
          <Button variant="ghost" size="icon" aria-label={`Cart with ${count} items`} asChild><Link to="/cart" className="relative"><ShoppingBag size={20} />{count > 0 && <span className="absolute right-0 top-0 grid size-5 place-items-center rounded-full bg-primary text-[10px] text-primary-foreground">{count}</span>}</Link></Button>
          <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open menu" onClick={() => setOpen(true)}><Menu size={22} /></Button>
        </div>
      </div>
      <div className="hidden border-t border-border xl:block"><div className="site-container flex items-center justify-between py-3">{categories.slice(0, 6).map((category) => <Link key={category.slug} to="/shop" search={{ category: category.slug, q: undefined }} className="text-xs font-semibold text-muted-foreground hover:text-primary">{category.name}</Link>)}</div></div>
    </header>
    {open && <div className="fixed inset-0 z-50 bg-foreground text-background lg:hidden"><div className="site-container flex h-20 items-center justify-between"><strong className="font-display text-xl">LOWYALTY</strong><Button variant="ghost" size="icon" aria-label="Close menu" className="text-background" onClick={() => setOpen(false)}><X /></Button></div><nav className="site-container grid gap-1 pt-8">{nav.map(([label, to]) => <Link key={to} to={to} onClick={() => setOpen(false)} className="border-b border-background/15 py-5 font-display text-3xl">{label}</Link>)}</nav></div>}
    <main>{children}</main>
    <footer className="mt-20 border-t-4 border-primary bg-footer text-footer-foreground">
      <div className="site-container grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div><div className="mb-5 flex items-center gap-3"><span className="grid size-10 place-items-center rounded-md bg-primary font-display text-lg font-black text-primary-foreground">L</span><strong className="font-display text-xl">LOWYALTY</strong></div><p className="max-w-sm text-sm leading-7 text-muted-foreground">Thoughtful print, signage and branded merchandise made to help Kenyan businesses show up with confidence.</p></div>
        <div><h2 className="mb-4 text-sm font-black uppercase">Explore</h2><div className="grid gap-3 text-sm">{nav.slice(0,4).map(([label,to]) => <Link key={to} to={to} className="hover:text-primary">{label}</Link>)}</div></div>
        <div><h2 className="mb-4 text-sm font-black uppercase">Popular</h2><div className="grid gap-3 text-sm">{categories.slice(0,4).map(c => <Link key={c.slug} to="/shop" search={{category:c.slug,q:undefined}} className="hover:text-primary">{c.name}</Link>)}</div></div>
        <div><h2 className="mb-4 text-sm font-black uppercase">Talk to us</h2><div className="grid gap-4 text-sm"><span className="flex gap-2"><Phone size={17} className="text-primary"/>+254 700 000 000</span><span className="flex gap-2"><Mail size={17} className="text-primary"/>hello@lowyaltybrandingline.co.ke</span><span className="flex gap-2"><MapPin size={17} className="text-primary"/>Nairobi, Kenya</span></div></div>
      </div>
      <div className="bg-footer-dark text-footer-dark-foreground"><div className="site-container flex flex-col items-center justify-between gap-3 py-5 text-xs sm:flex-row"><span>© 2026 Lowyalty Brandingline Ltd.</span><div className="flex gap-4"><Instagram size={16}/><Facebook size={16}/><span>Privacy</span><span>Terms</span></div></div></div>
    </footer>
  </div>;
}