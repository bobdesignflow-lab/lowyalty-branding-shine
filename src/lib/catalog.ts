import stationery from "@/assets/stationery.jpg";
import apparel from "@/assets/apparel.jpg";
import signage from "@/assets/signage.jpg";
import packaging from "@/assets/packaging.jpg";

export type Product = {
  slug: string;
  name: string;
  category: string;
  description: string;
  price: number;
  unit: string;
  image: string;
  featured?: boolean;
};

export const categories = [
  { name: "Marketing & Promo", slug: "marketing", image: signage, blurb: "Flyers, brochures and campaign materials" },
  { name: "Office Stationery", slug: "stationery", image: stationery, blurb: "Business cards, letterheads and notebooks" },
  { name: "Apparel", slug: "apparel", image: apparel, blurb: "T-shirts, hoodies, caps and uniforms" },
  { name: "Packaging", slug: "packaging", image: packaging, blurb: "Bags, boxes, labels and product sleeves" },
  { name: "Banners & Displays", slug: "displays", image: signage, blurb: "Roll-ups, flags and exhibition displays" },
  { name: "Corporate Gifts", slug: "gifts", image: stationery, blurb: "Curated gifts for teams and clients" },
  { name: "Labels & Stickers", slug: "stickers", image: packaging, blurb: "Custom-cut labels for every surface" },
  { name: "Vehicle Branding", slug: "vehicle", image: signage, blurb: "Fleet graphics and vehicle wraps" },
];

export const products: Product[] = [
  { slug: "premium-business-cards", name: "Premium Business Cards", category: "Office Stationery", description: "Crisp, professionally finished cards on heavyweight stock.", price: 1800, unit: "per 100", image: stationery, featured: true },
  { slug: "corporate-letterheads", name: "Corporate Letterheads", category: "Office Stationery", description: "Branded A4 letterheads with consistent colour reproduction.", price: 2500, unit: "per 100", image: stationery },
  { slug: "branded-tshirts", name: "Branded T-Shirts", category: "Apparel", description: "Comfortable cotton tees with durable screen or transfer print.", price: 950, unit: "each", image: apparel, featured: true },
  { slug: "embroidered-caps", name: "Embroidered Caps", category: "Apparel", description: "Structured caps finished with detailed custom embroidery.", price: 850, unit: "each", image: apparel },
  { slug: "rollup-banner", name: "Roll-Up Banner", category: "Banners & Displays", description: "Portable premium display complete with stand and carry case.", price: 8500, unit: "each", image: signage, featured: true },
  { slug: "teardrop-flag", name: "Teardrop Flag", category: "Banners & Displays", description: "High-visibility outdoor flag with a sturdy portable base.", price: 7200, unit: "each", image: signage },
  { slug: "branded-carrier-bags", name: "Branded Carrier Bags", category: "Packaging", description: "Custom paper bags in your colours with reinforced handles.", price: 6500, unit: "per 50", image: packaging, featured: true },
  { slug: "product-labels", name: "Product Labels", category: "Labels & Stickers", description: "Vibrant self-adhesive labels cut to your chosen shape.", price: 2200, unit: "per 100", image: packaging },
];

export const formatPrice = (price: number) => `KSh ${price.toLocaleString("en-KE")}`;

export const getProduct = (slug: string) => products.find((product) => product.slug === slug);