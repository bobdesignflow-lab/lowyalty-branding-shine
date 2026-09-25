import { Link } from "@tanstack/react-router";
import { ShoppingBag, Quote } from "lucide-react";
import { type Product, formatPrice } from "@/lib/catalog";
import { useCart } from "@/lib/cart";
import { Button } from "./ui/button";

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  return <article className="group overflow-hidden rounded-md border border-border bg-card">
    <Link to="/product/$slug" params={{ slug: product.slug }} className="block overflow-hidden bg-muted">
      <img src={product.image} alt={product.name} loading="lazy" width={1200} height={912} className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
    </Link>
    <div className="p-5"><p className="mb-2 text-xs font-bold uppercase text-primary">{product.category}</p><Link to="/product/$slug" params={{ slug: product.slug }}><h3 className="font-display text-xl font-bold group-hover:text-primary">{product.name}</h3></Link>{product.quoteOnly ? (<p className="mt-2 text-sm font-semibold text-primary">Custom pricing</p>) : (<p className="mt-2 text-sm text-muted-foreground">From <strong className="text-foreground">{formatPrice(product.price)}</strong> / {product.unit}</p>)}{product.quoteOnly ? (<Button variant="outline" className="mt-5 w-full" asChild><Link to="/contact"><Quote size={17}/>Request a quote</Link></Button>) : (<Button className="mt-5 w-full" onClick={() => addItem(product)}><ShoppingBag size={17}/>Add to cart</Button>)}</div>
  </article>;
}