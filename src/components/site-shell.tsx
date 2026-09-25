import { Link } from "@tanstack/react-router";
import { Menu, Search, ShoppingBag, X, Mail, MapPin, Phone } from "lucide-react";
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
          <img src="/favicon.png" alt="Lowyalty Brandingline logo" width={44} height={44} className="size-11 object-contain" />
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
    <footer className="mt-20 bg-footer text-footer-foreground">
      <div className="border-b border-white/10">
        <div className="site-container flex flex-col items-center justify-between gap-6 py-10 md:flex-row md:gap-10">
          <div className="flex items-start gap-4">
            <div className="grid shrink-0 size-12 place-items-center rounded-xl border-2 border-[oklch(0.82_0.16_85)]/60">
              <Mail size={24} className="text-[oklch(0.82_0.16_85)]" />
            </div>
            <div>
              <h3 className="font-display text-xl font-black text-white md:text-2xl">STAY UPDATED WITH OUR LATEST OFFERS!</h3>
              <p className="mt-1 text-sm text-footer-foreground/80">Subscribe to our newsletter and never miss an offer.</p>
            </div>
          </div>
          <form className="w-full max-w-lg shrink-0 sm:flex">
            <input type="email" placeholder="Enter your email address" className="w-full rounded-l-lg border-0 bg-white px-5 py-3.5 text-sm text-foreground outline-none placeholder:text-muted-foreground/60 sm:rounded-r-none" />
            <button type="button" className="mt-2 w-full rounded-lg bg-[oklch(0.82_0.16_85)] px-8 py-3.5 text-sm font-black uppercase tracking-wider text-foreground transition-colors hover:bg-[oklch(0.78_0.17_85)] sm:mt-0 sm:w-auto sm:rounded-l-none sm:rounded-r-lg">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="site-container grid gap-10 py-14 md:grid-cols-[1.1fr_1fr_1fr_1fr_1.3fr]">
        <div>
          <div className="mb-5 flex items-center gap-3">
            <img src="/favicon.png" alt="Lowyalty Brandingline logo" width={44} height={44} className="size-11 object-contain" />
            <div className="leading-none">
              <strong className="block font-display text-2xl text-white">LOWYALTY</strong>
              <span className="text-[10px] font-bold uppercase tracking-[.14em] text-footer-foreground/60">Brandingline Ltd</span>
            </div>
          </div>
          <p className="max-w-sm text-sm leading-7 text-footer-foreground/75">Your one-stop solution for all branding and printing needs. We deliver quality you can trust to help Kenyan businesses show up with confidence.</p>
          <div className="mt-6 flex gap-3">
            {[
              { icon: "M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z", label: "Facebook" },
              { icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z", label: "Instagram" },
              { icon: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.294.297-.49.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.116.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.485-8.413z", label: "WhatsApp" },
              { icon: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z", label: "YouTube" },
            ].map((s) => (
              <a key={s.label} href="#" aria-label={s.label} className="grid size-10 place-items-center rounded-full border border-white/15 text-footer-foreground/70 transition-colors hover:border-[oklch(0.82_0.16_85)]/60 hover:text-[oklch(0.82_0.16_85)]">
                <svg viewBox="0 0 24 24" className="size-4 fill-current"><path d={s.icon} /></svg>
              </a>
            ))}
          </div>
        </div>
        <div>
          <h2 className="mb-5 text-sm font-black uppercase tracking-wide text-[oklch(0.82_0.16_85)]">Quick Links</h2>
          <div className="grid gap-3 text-sm text-footer-foreground/80">
            {nav.map(([label, to]) => <Link key={to} to={to} className="transition-colors hover:text-[oklch(0.82_0.16_85)]">{label}</Link>)}
          </div>
        </div>
        <div>
          <h2 className="mb-5 text-sm font-black uppercase tracking-wide text-[oklch(0.82_0.16_85)]">Our Services</h2>
          <div className="grid gap-3 text-sm text-footer-foreground/80">
            {categories.slice(0, 7).map(c => <Link key={c.slug} to="/shop" search={{category:c.slug,q:undefined}} className="transition-colors hover:text-[oklch(0.82_0.16_85)]">{c.name}</Link>)}
          </div>
        </div>
        <div>
          <h2 className="mb-5 text-sm font-black uppercase tracking-wide text-[oklch(0.82_0.16_85)]">Customer Service</h2>
          <div className="grid gap-3 text-sm text-footer-foreground/80">
            <Link to="/faq" className="transition-colors hover:text-[oklch(0.82_0.16_85)]">FAQ's</Link>
            <Link to="/shipping" className="transition-colors hover:text-[oklch(0.82_0.16_85)]">Shipping Policy</Link>
            <Link to="/returns" className="transition-colors hover:text-[oklch(0.82_0.16_85)]">Return &amp; Refund</Link>
            <Link to="/terms" className="transition-colors hover:text-[oklch(0.82_0.16_85)]">Terms &amp; Conditions</Link>
            <Link to="/privacy" className="transition-colors hover:text-[oklch(0.82_0.16_85)]">Privacy Policy</Link>
          </div>
        </div>
        <div>
          <h2 className="mb-5 text-sm font-black uppercase tracking-wide text-[oklch(0.82_0.16_85)]">Contact Us</h2>
          <div className="grid gap-4 text-sm text-footer-foreground/80">
            {locations.map(l => <span key={l.town} className="flex gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0 text-[oklch(0.82_0.16_85)]"/>
              <span><strong className="text-white">{l.town}</strong><br/>{l.address}</span>
            </span>)}
            <span className="flex gap-3">
              <Phone size={18} className="mt-0.5 shrink-0 text-[oklch(0.82_0.16_85)]"/>
              <span className="whitespace-nowrap">{phones.map((p,i)=><span key={p.tel}>{i>0&&" / "}<a href={`tel:${p.tel}`} className="transition-colors hover:text-[oklch(0.82_0.16_85)]">{p.label}</a></span>)}</span>
            </span>
            <a href={`mailto:${email}`} className="flex gap-3 whitespace-nowrap transition-colors hover:text-[oklch(0.82_0.16_85)]"><Mail size={18} className="mt-0.5 shrink-0 text-[oklch(0.82_0.16_85)]"/>{email}</a>
            <span className="flex gap-3">
              <svg viewBox="0 0 24 24" className="mt-0.5 size-[18px] shrink-0 text-[oklch(0.82_0.16_85)]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              <span><strong className="text-white">Mon - Sat</strong><br/>8:00 AM - 7:00 PM</span>
            </span>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 bg-footer-dark text-footer-dark-foreground/90">
        <div className="site-container flex flex-col items-center justify-between gap-4 py-5 text-xs sm:flex-row">
          <span className="text-footer-dark-foreground/70">© 2026 Lowyalty Brandingline Ltd. All Rights Reserved.</span>
          <div className="flex items-center gap-3">
            <span className="mr-2 text-footer-dark-foreground/70">We Accept:</span>
            <div className="flex gap-2">
              <span className="grid h-9 w-14 place-items-center rounded-md bg-white px-2 font-black text-blue-700 italic shadow-sm" aria-label="Visa">VISA</span>
              <span className="relative grid h-9 w-14 place-items-center overflow-hidden rounded-md bg-white shadow-sm" aria-label="Mastercard">
                <span className="flex">
                  <span className="size-5 rounded-full bg-red-500 opacity-90"></span>
                  <span className="size-5 -ml-2 rounded-full bg-yellow-500 opacity-90"></span>
                </span>
              </span>
              <span className="grid h-9 w-16 place-items-center rounded-md bg-gradient-to-b from-[oklch(0.55_0.18_145)] to-[oklch(0.45_0.18_145)] px-2 text-[10px] font-black text-white shadow-sm" aria-label="M-Pesa">M-PESA</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Chat with us on WhatsApp" className="wa-attract fixed bottom-5 right-5 z-50 grid size-14 place-items-center rounded-full bg-whatsapp text-primary-foreground transition-transform hover:scale-110">
      <span className="wa-shine" aria-hidden="true"><span /></span>
      <svg viewBox="0 0 24 24" className="relative size-7 fill-current" aria-hidden="true"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35M12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.31l-.34-.2-3.57.93.95-3.48-.22-.36a9.4 9.4 0 0 1-1.44-5.02c0-5.2 4.23-9.43 9.44-9.43a9.43 9.43 0 0 1 9.43 9.44c0 5.2-4.23 9.43-9.44 9.43m8.03-17.46A11.3 11.3 0 0 0 12.05.72C5.8.72.7 5.8.7 12.07c0 2 .52 3.95 1.52 5.67L.6 23.64l6.03-1.58a11.3 11.3 0 0 0 5.42 1.38h.01c6.25 0 11.34-5.09 11.34-11.35 0-3.03-1.18-5.88-3.32-8.02"/></svg>
    </a>
  </div>;
}