import { createFileRoute, Link } from "@tanstack/react-router";
import { ContentPage, meta } from "@/components/content-page";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, MessageCircle, ArrowRight } from "lucide-react";
import { useState } from "react";
import { email, locations, phones } from "@/lib/contact";
import { useCart } from "@/lib/cart";
import { generalQuoteUrl } from "@/lib/whatsapp";

export const Route = createFileRoute("/contact")({
  head: () =>
    meta(
      "Contact Lowyalty Brandingline",
      "Request a quote for printing, branding, signage, packaging or branded apparel in Ngong and Limuru."
    ),
  component: Page,
});

type MapLocation = {
  town: string;
  address: string;
  fullAddress: string;
  mapQuery: string;
  mapTitle: string;
};

const mapLocations: MapLocation[] = [
  {
    town: "Ngong",
    address: "3T Building\n1st Floor, Room 207\nNgong",
    fullAddress: "3T Building, 1st Floor, Room 207, Ngong, Kenya",
    mapQuery: encodeURIComponent("3T Building Ngong Kenya"),
    mapTitle: "Lowyalty Brandingline Ltd Ngong location map",
  },
  {
    town: "Limuru",
    address: "Clay Citi-wide Plaza\n1st Floor, Room 1-2\nLimuru",
    fullAddress: "Clay Citi-wide Plaza, 1st Floor, Room 1-2, Limuru, Kenya",
    mapQuery: encodeURIComponent("Clay Citi-wide Plaza Limuru Kenya"),
    mapTitle: "Lowyalty Brandingline Ltd Limuru location map",
  },
];

function Page() {
  const { items } = useCart();
  const [sent, setSent] = useState(false);
  return (
    <ContentPage
      eyebrow="Start a project"
      title="Tell us what you want to make."
      intro="Share the item, quantity and deadline. We'll help with specifications, artwork and the right production approach. The fastest way to get a response is on WhatsApp."
    >
      <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
        <div className="grid content-start gap-6">
          <span className="flex gap-3">
            <Phone className="shrink-0 text-primary" />
            <span>
              {phones.map((p, i) => (
                <span key={p.tel}>
                  {i > 0 && " / "}
                  <a href={`tel:${p.tel}`} className="hover:text-primary">
                    {p.label}
                  </a>
                </span>
              ))}
            </span>
          </span>
          <a
            href={`mailto:${email}`}
            className="flex gap-3 break-all hover:text-primary"
          >
            <Mail className="shrink-0 text-primary" />
            {email}
          </a>
          {locations.map((l) => (
            <span key={l.town} className="flex gap-3">
              <MapPin className="shrink-0 text-primary" />
              <span>
                <strong>{l.town}</strong>
                <br />
                {l.address}
              </span>
            </span>
          ))}
          <Button
            className="mt-2 bg-whatsapp text-primary-foreground hover:bg-whatsapp/90"
            asChild
          >
            <a
              href={generalQuoteUrl(items)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={17} />
              Chat on WhatsApp (Fastest)
            </a>
          </Button>
        </div>
        {sent ? (
          <div className="grid min-h-80 place-items-center bg-muted p-8 text-center">
            <div>
              <h2 className="font-display text-3xl font-black">
                Brief received.
              </h2>
              <p className="mt-3 text-muted-foreground">
                This demonstration does not send messages yet. Connect the
                store and company inbox to activate submissions.
              </p>
            </div>
          </div>
        ) : (
          <form
            className="grid gap-5 bg-muted p-6 sm:p-8"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Your name" />
              <Field label="Phone number" type="tel" />
              <Field label="Email address" type="email" />
              <Field label="Product or service" />
            </div>
            <label className="text-sm font-bold">
              Project details
              <textarea
                required
                rows={6}
                className="mt-2 w-full rounded-md border border-input bg-background p-3 font-normal"
                placeholder="Quantity, size, deadline and any special finish..."
              />
            </label>
            <p className="text-xs leading-6 text-muted-foreground">
              By submitting this form, you agree that Lowyalty Brandingline Ltd
              may use the information provided to respond to your enquiry or
              quotation request. Please see our{" "}
              <Link
                to="/privacy"
                className="font-semibold text-primary hover:underline"
              >
                Privacy Policy
              </Link>{" "}
              for more information about how your personal information is
              handled.
            </p>
            <Button type="submit" className="w-fit">
              Send request
            </Button>
          </form>
        )}
      </div>

      <section className="mt-24">
        <div className="mb-12 text-center">
          <span className="text-sm font-black uppercase tracking-wider text-primary">
            Our Locations
          </span>
          <h2 className="mt-4 font-display text-4xl font-black sm:text-5xl">
            Find us at two convenient locations.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-muted-foreground">
            Visit us in person at either of our branches — we're ready to help
            with your next printing and branding project.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {mapLocations.map((loc) => (
            <LocationCard key={loc.town} loc={loc} />
          ))}
        </div>
      </section>
    </ContentPage>
  );
}

function LocationCard({ loc }: { loc: MapLocation }) {
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    loc.fullAddress
  )}`;
  const embedUrl = `https://www.google.com/maps?q=${loc.mapQuery}&output=embed`;

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-300 hover:shadow-lg">
      <div className="border-b border-border bg-gradient-to-r from-[oklch(0.18_0.02_255)] to-[oklch(0.22_0.02_255)] px-6 py-5 sm:px-7 sm:py-6">
        <div className="flex items-start gap-4">
          <div className="grid size-12 shrink-0 place-items-center rounded-xl border-2 border-[oklch(0.82_0.16_85)]/50 bg-white/5">
            <MapPin size={24} className="text-[oklch(0.82_0.16_85)]" />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="font-display text-2xl font-black text-white">
              {loc.town}
            </h3>
            <div className="mt-2 whitespace-pre-line text-sm leading-6 text-white/75">
              {loc.address}
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full overflow-hidden bg-muted">
        <div className="aspect-[4/3] w-full sm:aspect-[16/11]">
          <iframe
            title={loc.mapTitle}
            src={embedUrl}
            className="h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>

      <div className="mt-auto border-t border-border bg-card px-6 py-5 sm:px-7 sm:py-5">
        <Button asChild className="w-full group/btn">
          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Get directions to Lowyalty Brandingline Ltd ${loc.town} branch on Google Maps`}
          >
            Get Directions
            <ArrowRight
              size={17}
              className="transition-transform duration-200 group-hover/btn:translate-x-0.5"
            />
          </a>
        </Button>
      </div>
    </article>
  );
}

function Field({ label, type = "text" }: { label: string; type?: string }) {
  return (
    <label className="text-sm font-bold">
      {label}
      <input
        required
        type={type}
        className="mt-2 h-12 w-full rounded-md border border-input bg-background px-3 font-normal"
      />
    </label>
  );
}
