import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ContentPage, meta } from "@/components/content-page";
import { z } from "zod";
import { useState, useEffect, useCallback } from "react";
import { ArrowLeft, ArrowRight, X, ChevronLeft, ChevronRight } from "lucide-react";

const searchSchema = z.object({ category: z.string().optional() });

export const Route = createFileRoute("/samples")({
  validateSearch: searchSchema,
  head: () => meta("Print Samples | Lowyalty Brandingline", "See examples of stationery, apparel, signage and custom packaging."),
  component: Page,
});

type SampleCategory = {
  slug: string;
  name: string;
  number: string;
  folder: string;
  featured: string;
  images: string[];
};

const CATEGORIES: SampleCategory[] = [
  {
    slug: "corporate-stationery",
    name: "Corporate Stationery",
    number: "01",
    folder: "corporate-stationery",
    featured: "corporate-stationery.jpg",
    images: [
      "486248427_2935324666640773_3678842428366277317_n.jpg",
      "487565843_2943468625826377_6683671573577360955_n.jpg",
      "487808751_2943468375826402_681850075441053146_n.jpg",
      "488259667_2942656195907620_9062472608127259275_n.jpg",
      "490126640_2952597184913521_1324289756535113003_n.jpg",
      "492155111_2966818603491379_253634294723384609_n.jpg",
      "505470150_3019997694840136_7309615973400154189_n.jpg",
      "505475248_3019924781514094_3613035105497128271_n.jpg",
      "505491043_3019430594896846_4523810709956137518_n.jpg",
      "505711570_3019869344852971_4427254580416843559_n.jpg",
      "505723830_3019869224852983_5140800611046632969_n.jpg",
      "505789365_3020227441483828_4176893284336024963_n.jpg",
      "505858261_3020465561460016_7561346250069955768_n.jpg",
      "505867900_3019997814840124_1583462836537299994_n.jpg",
      "505876470_3020465751459997_7252926839734264266_n.jpg",
      "505997289_3019869221519650_2082523125975077594_n.jpg",
      "510453920_3033919766781262_5822816109977274975_n.jpg",
      "514345949_3041901285983110_4485191981390570220_n.jpg",
      "528258626_3077795135727058_7639645843627811093_n.jpg",
      "558840758_3142935845879653_6134322071698416079_n.jpg",
      "558884645_3142935785879659_5603298800398335294_n.jpg",
      "584305894_3187446511428586_4592148817354016270_n.jpg",
      "600271435_3219366958236541_2192054838643909086_n.jpg",
      "616090530_3249803861859517_3648004776651079053_n.jpg",
      "616220339_3249803805192856_8269453852779825541_n.jpg",
      "816031057_3514508242055743_2723726393844607372_n.jpg",
      "9485986991_2932608753579031_1131907068483631116_n.jpg",
      "corporate-stationery.jpg",
    ],
  },
  {
    slug: "branded-apparel",
    name: "Branded Apparel",
    number: "02",
    folder: "branded-apparel",
    featured: "branded-apparel.jpg",
    images: [
      "487742984_2943468622493044_4583056297731739185_n.jpg",
      "488539081_2944886369017936_333750914593540431_n.jpg",
      "490572488_2952597054913534_1799674326694715637_n.jpg",
      "494665686_2977886125717960_426791624989033971_n.jpg",
      "495236921_2977886165717956_3096524025828233533_n.jpg",
      "504649769_3019743954865510_4755842176541651459_n.jpg",
      "505375876_3019743771532195_2410479030120003988_n.jpg",
      "505417759_3019744001532172_3497784252744391048_n.jpg",
      "505712597_3019869218186317_6708558075772318303_n.jpg",
      "506020786_3020465851459987_1209755092206035924_n.jpg",
      "506037062_3020465818126657_778451135043843131_n.jpg",
      "506397566_3020465408126698_1518655573518894000_n.jpg",
      "510983983_3033916033448302_56857679391153980_n.jpg",
      "515898850_3041901469316425_8990589752546054649_n.jpg",
      "572032278_3169524829887421_1984461602260847607_n.jpg",
      "637108969_3281163515390218_2443798392257298830_n.jpg",
      "637979748_3281163645390205_859146366514339961_n.jpg",
      "638381722_3288782601294976_5220614997735982120_n.jpg",
      "638716594_3288782701294966_2022112660649885038_n.jpg",
      "672690083_3347816418724927_3776675665597882146_n.jpg",
      "673525096_3347816768724892_3069751227517252209_n.jpg",
      "684106670_3358502694322966_5176423881529754718_n.jpg",
      "697179593_3375742732598962_647653122366359006_n.jpg",
      "699760964_3375742592598976_3832436022498041263_n.jpg",
      "702272914_3375742685932300_2105747386224869572_n.jpg",
      "725611706_3413193598853875_4576858324267131702_n.jpg",
      "761597430_3459377474235487_100125386809992125_n.jpg",
      "767762614_3466384930201408_2101109378397709621_n.jpg",
      "768987653_3466384823534752_3429015669027280696_n.jpg",
      "776921757_3477243285782239_4287792348691621654_n.jpg",
      "783220486_3483909261782308_7401535571971929065_n.jpg",
      "783220503_3483909065115661_4082436320514687743_n.jpg",
      "784222722_3483908938449007_2259061544547022093_n.jpg",
      "branded-apparel.jpg",
    ],
  },
  {
    slug: "display-signages",
    name: "Displays & Signage",
    number: "03",
    folder: "display-signages",
    featured: "display-signages.jpg",
    images: [
      "486082583_2932608543579052_152549413297026671_n.jpg",
      "487562416_2942656092574297_6370066400359312333_n.jpg",
      "489569170_2952596774913562_4977736882495755501_n.jpg",
      "490583376_2952597204913519_7754985467219354268_n.jpg",
      "503899000_3013456822160890_2166675807780377992_n.jpg",
      "504163584_3013456182160954_1540424219494687670_n.jpg",
      "504341389_3013456858827553_2957556752664900690_n.jpg",
      "505477312_3019936454846260_5864777328245241647_n.jpg",
      "505498446_3019455771560995_1745569227843797511_n.jpg",
      "505517047_3019924648180774_1319984774417749854_n.jpg",
      "505519881_3019936201512952_7385444034965662989_n.jpg",
      "505578661_3019997808173458_8234946302188561111_n.jpg",
      "505698534_3020227524817153_8666622639035489046_n.jpg",
      "505801366_3019924984847407_6565807781049216479_n.jpg",
      "505852460_3019997848173454_5687089073265237961_n.jpg",
      "505898686_3019936414846264_1728452350829528427_n.jpg",
      "505994350_3020227411483831_4391638618709301654_n.jpg",
      "506046216_3020227571483815_330161931119592221_n.jpg",
      "511195353_3033919846781254_6094624923701988858_n.jpg",
      "514261149_3041901082649797_228932111078130270_n.jpg",
      "534831325_3090337867806118_5350032726661302840_n.jpg",
      "536287988_3090337664472805_7929971474877710036_n.jpg",
      "558982130_3144810079025563_1713427576458219075_n.jpg",
      "571334293_3169524909887413_8612956825455385087_n.jpg",
      "571993284_3165749746931596_2680429559016266804_n.jpg",
      "650227749_3304722869700949_183217243669209308_n.jpg",
      "6840a6df-68b0-4bef-bc72-38c786689de5.jpeg",
      "6c995db9-420d-4ff8-a4ce-c734f2f06fa9.jpeg",
      "709226382_3391024567737445_3648448024217119574_n.jpg",
      "709735298_3391024671070768_987075780794154762_n.jpg",
      "709769521_3391024527737449_3983107070654472275_n.jpg",
      "710058990_3391024614404107_3515069498855475115_n.jpg",
      "877044c8c9961ca10040bf4067a4358f.jpg",
      "display-signages.jpg",
    ],
  },
  {
    slug: "packaging-labels",
    name: "Packaging & Labels",
    number: "04",
    folder: "packaging-labels",
    featured: "packaging-labels.jpg",
    images: [
      "486086821_2932608466912393_3585091760802311278_n.jpg",
      "558923043_3144810109025560_3636475723211670811_n.jpg",
      "574526537_3169524939887410_384094455174565375_n.jpg",
      "631359622_3275336695972900_5638620561390568602_n.jpg",
      "packaging-labels.jpg",
    ],
  },
];

function imgPath(category: SampleCategory, filename: string): string {
  return `/assets/samples/${category.folder}/${filename}`;
}

function findCategory(slug?: string): SampleCategory | undefined {
  if (!slug) return undefined;
  return CATEGORIES.find((c) => c.slug === slug);
}

function Page() {
  const { category } = Route.useSearch();
  const navigate = useNavigate();
  const active = findCategory(category);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    setLightboxIndex(null);
  }, [category]);

  const openCategory = (slug: string) => {
    navigate({ to: "/samples", search: { category: slug } });
  };

  const closeCategory = () => {
    navigate({ to: "/samples", search: {} });
  };

  const images = active ? active.images.map((f) => imgPath(active, f)) : [];

  return (
    <>
      <ContentPage
        eyebrow="Selected work"
        title="Ideas made real."
        intro="A sample gallery showing the finishes, formats and brand applications available through our studio."
      >
        {active ? (
          <GalleryView
            category={active}
            images={images}
            onBack={closeCategory}
            onOpenImage={setLightboxIndex}
          />
        ) : (
          <CategoryCards onSelect={openCategory} />
        )}
      </ContentPage>

      {active && lightboxIndex !== null && (
        <Lightbox
          images={images}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
          alt={`${active.name} sample`}
        />
      )}
    </>
  );
}

function CategoryCards({ onSelect }: { onSelect: (slug: string) => void }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {CATEGORIES.map((cat) => (
        <div key={cat.slug} className="flex flex-col">
          <figure
            className="group cursor-pointer overflow-hidden rounded-md bg-muted"
            onClick={() => onSelect(cat.slug)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onSelect(cat.slug);
              }
            }}
          >
            <div className="relative">
              <img
                src={imgPath(cat, cat.featured)}
                alt={`${cat.name} samples`}
                width={1200}
                height={912}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-75" />
              <div className="absolute left-0 right-0 bottom-0 p-6 text-background">
                <span className="text-xs font-black uppercase tracking-wider text-[oklch(0.82_0.16_85)]">
                  {cat.number}
                </span>
                <figcaption className="mt-1 font-display text-2xl font-bold leading-tight">
                  {cat.name}
                </figcaption>
                <p className="mt-2 text-sm text-background/80">
                  {cat.images.length} samples
                </p>
              </div>
            </div>
          </figure>
          <div className="mt-2 px-1 pb-2">
            <button
              onClick={() => onSelect(cat.slug)}
              className="group inline-flex items-center gap-1.5 text-sm font-bold text-foreground transition-all duration-300 hover:text-[oklch(0.56_0.22_25)]"
            >
              <span className="relative">
                View More of This
                <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-[oklch(0.56_0.22_25)] transition-all duration-300 group-hover:w-full" />
              </span>
              <ArrowRight
                size={16}
                className="shrink-0 translate-x-0 transition-transform duration-300 group-hover:translate-x-1.5"
              />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

function GalleryView({
  category,
  images,
  onBack,
  onOpenImage,
}: {
  category: SampleCategory;
  images: string[];
  onBack: () => void;
  onOpenImage: (index: number) => void;
}) {
  return (
    <div>
      <button
        onClick={onBack}
        className="mb-8 inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
      >
        <ArrowLeft size={16} />
        Back to all categories
      </button>

      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <span className="text-xs font-black uppercase tracking-wider text-primary">
            {category.number}
          </span>
          <h2 className="mt-2 font-display text-4xl font-black sm:text-5xl">
            {category.name}
          </h2>
          <p className="mt-3 text-muted-foreground">
            {images.length} sample{images.length === 1 ? "" : "s"} — click any
            image to view larger
          </p>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
        {images.map((src, i) => (
          <GalleryItem
            key={src}
            src={src}
            alt={`${category.name} sample ${i + 1}`}
            onClick={() => onOpenImage(i)}
          />
        ))}
      </div>
    </div>
  );
}

function GalleryItem({
  src,
  alt,
  onClick,
}: {
  src: string;
  alt: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="group relative overflow-hidden rounded-md bg-muted text-left focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      aria-label={`Open ${alt}`}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={src}
          alt={alt}
          width={800}
          height={600}
          loading="lazy"
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-foreground/0 transition-colors duration-300 group-hover:bg-foreground/20" />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="rounded-full bg-background/95 p-3 shadow-lg">
          <svg
            viewBox="0 0 24 24"
            className="size-6 text-foreground"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
            <path d="M11 8v6M8 11h6" />
          </svg>
        </div>
      </div>
    </button>
  );
}

function Lightbox({
  images,
  index,
  onClose,
  onNavigate,
  alt,
}: {
  images: string[];
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
  alt: string;
}) {
  const prev = useCallback(() => {
    onNavigate((index - 1 + images.length) % images.length);
  }, [index, images.length, onNavigate]);

  const next = useCallback(() => {
    onNavigate((index + 1) % images.length);
  }, [index, images.length, onNavigate]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next, onClose]);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/95 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${alt} — ${index + 1} of ${images.length}`}
    >
      <button
        onClick={onClose}
        className="absolute right-4 top-4 z-10 flex size-11 items-center justify-center rounded-full bg-background/10 text-background transition-colors hover:bg-background/20 focus:outline-none focus:ring-2 focus:ring-primary sm:right-6 sm:top-6"
        aria-label="Close lightbox"
      >
        <X size={22} />
      </button>

      {images.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-3 top-1/2 z-10 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-background/10 text-background transition-colors hover:bg-background/20 focus:outline-none focus:ring-2 focus:ring-primary sm:left-5 sm:size-12"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-3 top-1/2 z-10 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-background/10 text-background transition-colors hover:bg-background/20 focus:outline-none focus:ring-2 focus:ring-primary sm:right-5 sm:size-12"
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}

      <div
        className="flex max-h-full w-full max-w-[95vw] items-center justify-center px-12 sm:px-20"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={images[index]}
          alt={`${alt} ${index + 1}`}
          className="max-h-[90vh] w-auto max-w-full rounded-md object-contain shadow-2xl"
        />
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-background/10 px-4 py-1.5 text-xs font-semibold text-background sm:bottom-6 sm:text-sm">
        {index + 1} / {images.length}
      </div>
    </div>
  );
}
