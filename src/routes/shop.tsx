import { createFileRoute, Link } from "@tanstack/react-router";
import { Search, SlidersHorizontal } from "lucide-react";
import { z } from "zod";
import { categories, products } from "@/lib/catalog";
import { ProductCard } from "@/components/product-card";

const searchSchema = z.object({ q: z.string().optional(), category: z.string().optional() });
export const Route = createFileRoute("/shop")({
  validateSearch: searchSchema,
  head: () => ({ meta: [ { title: "Print Shop | Lowyalty Brandingline" }, { name: "description", content: "Shop business cards, branded apparel, banners, packaging and stickers in Nairobi." }, { property: "og:title", content: "Lowyalty Print Shop" }, { property: "og:description", content: "Custom print and branding products for Kenyan businesses." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" } ] }),
  component: ShopPage,
});
function ShopPage() {
  const { q, category } = Route.useSearch();
  const selected = categories.find((c) => c.slug === category);
  const list = products.filter((p) => (!q || p.name.toLowerCase().includes(q.toLowerCase()) || p.category.toLowerCase().includes(q.toLowerCase())) && (!selected || p.category === selected.name || (selected.slug === "displays" && p.category === "Banners & Displays") || (selected.slug === "stationery" && p.category === "Office Stationery") || (selected.slug === "stickers" && p.category === "Labels & Stickers")));
  return <div className="site-container section-pad"><div className="max-w-3xl"><span className="text-sm font-black uppercase text-primary">Print shop</span><h1 className="mt-3 font-display text-5xl font-black">Built for your next big impression.</h1><p className="mt-5 text-lg text-muted-foreground">Browse popular products and customise the details after you choose.</p></div><div className="mt-10 flex flex-wrap gap-2"><Link to="/shop" search={{q,category:undefined}} className={`rounded-md border px-4 py-2 text-sm font-bold ${!category ? "border-primary bg-primary text-primary-foreground" : "border-border"}`}>All</Link>{categories.map(c=><Link key={c.slug} to="/shop" search={{q,category:c.slug}} className={`rounded-md border px-4 py-2 text-sm font-bold ${category===c.slug ? "border-primary bg-primary text-primary-foreground" : "border-border"}`}>{c.name}</Link>)}</div><div className="mt-8 flex items-center justify-between border-y border-border py-4 text-sm"><span className="flex items-center gap-2"><Search size={17}/>{q ? `Results for “${q}”` : `${list.length} products`}</span><span className="flex items-center gap-2 text-muted-foreground"><SlidersHorizontal size={17}/>Starting prices</span></div>{list.length ? <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{list.map(p=><ProductCard key={p.slug} product={p}/>)}</div> : <div className="my-20 text-center"><h2 className="font-display text-2xl font-bold">No matching products yet</h2><p className="mt-2 text-muted-foreground">Try another search or ask us for a custom quote.</p></div>}</div>;
}