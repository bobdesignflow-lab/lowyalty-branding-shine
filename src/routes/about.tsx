import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, meta } from "@/components/content-page";

export const Route = createFileRoute("/about")({
  head: () =>
    meta(
      "About Lowyalty Brandingline",
      "Meet the Nairobi print and branding studio focused on thoughtful production and reliable service."
    ),
  component: Page,
});

function Page() {
  return (
    <ContentPage
      eyebrow="Our studio"
      title="We make brands impossible to overlook."
      intro="Lowyalty Brandingline Ltd brings design, production and finishing together for ambitious businesses, teams and events."
    >
      {/* FOUNDER SECTION */}
      <section className="grid gap-12 lg:grid-cols-2 lg:gap-20 lg:items-start">
        <div>
          <div className="relative overflow-hidden">
            <img
              src="/assets/about/evanson-kariuki.jpg"
              alt="Evanson Kariuki, Founder of Lowyalty Brandingline Ltd"
              className="w-full h-auto block max-w-full"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>

        <div className="lg:pt-4">
          <span className="text-xs font-black uppercase tracking-[0.2em] text-primary">
            THE FOUNDER
          </span>
          <h2 className="mt-6 font-display text-4xl font-black tracking-tight sm:text-5xl">
            Evanson Kariuki
          </h2>
          <p className="mt-3 text-base font-semibold text-muted-foreground">
            Founder, Lowyalty Brandingline Ltd
          </p>

          <div className="mt-8 h-px w-16 bg-border" />

          <h3 className="mt-8 font-display text-2xl font-bold leading-snug sm:text-3xl">
            Behind the brand is a belief in making every brand count.
          </h3>

          <div className="mt-8 space-y-6 text-base leading-8 text-muted-foreground sm:text-lg sm:leading-9">
            <p>
              &ldquo;Lowyalty Brandingline Ltd was built around a simple idea:
              every brand deserves to be seen with purpose.&rdquo;
            </p>
            <p>
              From corporate stationery and apparel to large-format printing,
              signage, promotional merchandise and visual branding, Lowyalty
              brings ideas into the physical world through print, design and
              branding.
            </p>
            <p>
              We work across different branding and production needs, helping
              businesses, organisations and individuals turn their identity
              into tangible experiences — something people can see, use and
              remember.
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT LOWYALTY SECTION */}
      <section className="mt-28 sm:mt-36">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-black uppercase tracking-[0.2em] text-primary">
            ABOUT LOWYALTY
          </span>
          <h2 className="mt-6 font-display text-3xl font-black leading-tight tracking-tight sm:text-5xl">
            More than printing. We bring brands into the real world.
          </h2>

          <div className="mx-auto mt-10 h-px w-16 bg-border" />

          <div className="mt-10 space-y-6 text-base leading-8 text-muted-foreground sm:text-lg sm:leading-9">
            <p>
              At Lowyalty, we believe branding is not simply about putting a
              logo on a product. It is about creating consistency, making an
              impression and giving every physical touchpoint a purpose.
            </p>
            <p>
              Our approach brings together design, print, branding and
              production so that an idea can move from concept to something
              real.
            </p>
          </div>
        </div>
      </section>

      {/* BRAND PHILOSOPHY QUOTE */}
      <section className="mt-28 sm:mt-36">
        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-1/2 top-0 h-px w-24 -translate-x-1/2 bg-primary/40" />

          <blockquote className="px-4 py-16 text-center sm:px-8 sm:py-20">
            <p className="font-display text-2xl font-semibold leading-relaxed tracking-tight text-foreground sm:text-3xl sm:leading-snug md:text-4xl">
              &ldquo;A brand is more than what people see; it is what they
              remember, what they experience, and what they carry with them.&rdquo;
            </p>

            <div className="mx-auto mt-12 h-px w-12 bg-border" />

            <footer className="mt-10">
              <div className="text-sm font-black uppercase tracking-[0.18em] text-primary">
                — Evanson Kariuki
              </div>
              <div className="mt-2 text-sm font-medium text-muted-foreground">
                Founder, Lowyalty Brandingline Ltd
              </div>
            </footer>
          </blockquote>

          <div className="absolute bottom-0 left-1/2 h-px w-24 -translate-x-1/2 bg-primary/40" />
        </div>
      </section>
    </ContentPage>
  );
}
