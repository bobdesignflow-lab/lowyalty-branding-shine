import { createFileRoute } from "@tanstack/react-router";
import { meta } from "@/components/content-page";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { useCart } from "@/lib/cart";
import { generalQuoteUrl } from "@/lib/whatsapp";

const items = [
  "Creative & artwork",
  "Commercial printing",
  "Large-format signage",
  "Apparel branding",
  "Custom packaging",
  "Corporate merchandise",
];

export const Route = createFileRoute("/services")({
  head: () =>
    meta(
      "Print & Branding Services | Lowyalty",
      "Explore graphic design, commercial print, signage, apparel, packaging and promotional merchandise."
    ),
  component: Page,
});

function Page() {
  const { items: cartItems } = useCart();

  return (
    <>
      {/* ── Services Hero ── */}
      <section
        style={{
          backgroundImage: "url('/assets/services/hero/services-hero.png')",
          backgroundSize: "cover",
          backgroundPosition: "left center",
          backgroundRepeat: "no-repeat",
        }}
        className="relative text-background overflow-hidden"
      >
        {/* Subtle gradient: opaque on the left for text safety, transparent on the right so the print scene shows through */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, rgba(10,14,30,0.55) 0%, rgba(10,14,30,0.25) 50%, rgba(10,14,30,0.0) 100%)",
            pointerEvents: "none",
          }}
        />

        <div className="site-container py-20 relative" style={{ zIndex: 1 }}>
          <span className="text-sm font-black uppercase text-primary">
            What we do
          </span>
          <h1 className="mt-4 max-w-4xl font-display text-5xl font-black sm:text-6xl">
            From a blank page to a finished brand moment.
          </h1>
          <p
            className="mt-6 max-w-2xl text-lg leading-8"
            style={{ color: "rgba(255,255,255,0.75)" }}
          >
            Choose one service or bring us the whole project. We coordinate the
            details so every item feels like it belongs to the same brand.
          </p>
        </div>
      </section>

      {/* ── Service tiles & CTA ── */}
      <div className="site-container section-pad">
        <div className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
          {items.map((x, i) => (
            <article key={x} className="bg-background p-8">
              <span className="text-sm font-black text-primary">0{i + 1}</span>
              <h2 className="mt-8 font-display text-2xl font-black">{x}</h2>
              <p className="mt-3 leading-7 text-muted-foreground">
                Practical recommendations, accurate production and considered
                finishing for every brief.
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button asChild>
            <a
              href={generalQuoteUrl(cartItems)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={17} />
              Discuss your project on WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </>
  );
}