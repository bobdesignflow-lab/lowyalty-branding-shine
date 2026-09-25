import { Link } from "@tanstack/react-router";
import { Menu, Search, ShoppingBag, X, Mail, MapPin, Phone, Instagram, Facebook } from "lucide-react";
import { useState, type ReactNode } from "react";
import { useCart } from "@/lib/cart";
import { categories } from "@/lib/catalog";
import { Button } from "./ui/button";
import { email, locations, phones, whatsappUrl } from "@/lib/contact";

const nav = [
  ["About", "/about"], ["Services", "/services"], ["Shop", "/shop"],
  ["Samples", "/samples"], ["Corporate", "/corporate"], ["Contact", "/contact"],
] as const;

export function SiteShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const { count } = useCart();
  return <div className="min-h-screen bg-background text-foreground">
    <div className="bg-foreground text-background">
      <div className="site-container flex flex-wrap items-center justify-center gap-x-5 gap-y-1 py-2 text-center text-xs font-semibold sm:flex-nowrap sm:justify-between sm:text-left">
        <span className="w-full sm:w-auto">Print • Brand • Deliver across Kenya</span>
        <div className="flex items-center gap-4 sm:gap-5">{phones.map(p=><a key={p.tel} href={`tel:${p.tel}`} className="hover:text-primary">{p.label}</a>)}<a href={`mailto:${email}`} className="hover:text-primary">Email us</a></div>
      </div>
    </div>
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <div className="site-container flex h-20 items-center justify-between gap-5">
        <Link to="/" aria-label="Lowyalty Brandingline home" className="flex shrink-0 items-center gap-3">
          <img src="/favicon.png" alt="Lowyalty Brandingline logo" width={44} height={44} className="size-11 rounded-md object-contain bg-primary" />
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
    {open && <div className="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-foreground text-background lg:hidden"><div className="site-container flex h-20 shrink-0 items-center justify-between"><strong className="font-display text-xl">LOWYALTY</strong><Button variant="ghost" size="icon" aria-label="Close menu" className="text-background" onClick={() => setOpen(false)}><X /></Button></div><nav className="site-container grid gap-1 pt-8" aria-label="Mobile navigation">{nav.map(([label, to]) => <Link key={to} to={to} onClick={() => setOpen(false)} className="border-b border-background/15 py-5 font-display text-3xl">{label}</Link>)}</nav><div className="site-container mt-auto grid gap-3 pb-10 pt-8 text-sm">{phones.map(p=><a key={p.tel} href={`tel:${p.tel}`} className="flex items-center gap-2 font-bold hover:text-primary"><Phone size={17} className="shrink-0 text-primary"/>{p.label}</a>)}<a href={`mailto:${email}`} className="flex items-center gap-2 break-all hover:text-primary"><Mail size={17} className="shrink-0 text-primary"/>{email}</a></div></div>}
    <main>{children}</main>
    <footer className="mt-20 border-t-4 border-primary bg-footer text-footer-foreground">
      <div className="site-container grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div><div className="mb-5 flex items-center gap-3"><img src="/favicon.png" alt="Lowyalty Brandingline logo" width={40} height={40} className="size-10 rounded-md object-contain bg-primary" /><strong className="font-display text-xl">LOWYALTY</strong></div><p className="max-w-sm text-sm leading-7 text-muted-foreground">Thoughtful print, signage and branded merchandise made to help Kenyan businesses show up with confidence.</p></div>
        <div><h2 className="mb-4 text-sm font-black uppercase">Explore</h2><div className="grid gap-3 text-sm">{nav.slice(0,4).map(([label,to]) => <Link key={to} to={to} className="hover:text-primary">{label}</Link>)}</div></div>
        <div><h2 className="mb-4 text-sm font-black uppercase">Popular</h2><div className="grid gap-3 text-sm">{categories.slice(0,4).map(c => <Link key={c.slug} to="/shop" search={{category:c.slug,q:undefined}} className="hover:text-primary">{c.name}</Link>)}</div></div>
        <div><h2 className="mb-4 text-sm font-black uppercase">Talk to us</h2><div className="grid gap-4 text-sm"><span className="flex gap-2"><Phone size={17} className="shrink-0 text-primary"/><span>{phones.map((p,i)=><span key={p.tel}>{i>0&&" / "}<a href={`tel:${p.tel}`} className="hover:text-primary">{p.label}</a></span>)}</span></span><a href={`mailto:${email}`} className="flex gap-2 break-all hover:text-primary"><Mail size={17} className="shrink-0 text-primary"/>{email}</a>{locations.map(l=><span key={l.town} className="flex gap-2"><MapPin size={17} className="shrink-0 text-primary"/><span><strong>{l.town}</strong><br/>{l.address}</span></span>)}</div></div>
      </div>
      <div className="bg-footer-dark text-footer-dark-foreground"><div className="site-container flex flex-col items-center justify-between gap-3 py-5 text-xs sm:flex-row"><span>© 2026 Lowyalty Brandingline Ltd.</span><div className="flex gap-4"><Instagram size={16}/><Facebook size={16}/><span>Privacy</span><span>Terms</span></div></div></div>
    </footer>
    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Chat with us on WhatsApp" className="wa-attract fixed bottom-5 right-5 z-50 grid size-14 place-items-center rounded-full bg-whatsapp text-primary-foreground transition-transform hover:scale-110">
      <span className="wa-shine" aria-hidden="true"><span /></span>
      <svg viewBox="0 0 24 24" className="relative size-7 fill-current" aria-hidden="true"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35M12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.31l-.34-.2-3.57.93.95-3.48-.22-.36a9.4 9.4 0 0 1-1.44-5.02c0-5.2 4.23-9.43 9.44-9.43a9.43 9.43 0 0 1 9.43 9.44c0 5.2-4.23 9.43-9.44 9.43m8.03-17.46A11.3 11.3 0 0 0 12.05.72C5.8.72.7 5.8.7 12.07c0 2 .52 3.95 1.52 5.67L.6 23.64l6.03-1.58a11.3 11.3 0 0 0 5.42 1.38h.01c6.25 0 11.34-5.09 11.34-11.35 0-3.03-1.18-5.88-3.32-8.02"/></svg>
    </a>
  </div>;
}