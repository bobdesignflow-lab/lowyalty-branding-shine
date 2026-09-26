export type Product = {
  slug: string;
  name: string;
  category: string;
  description: string;
  price?: number;
  unit?: string;
  image: string;
  featured?: boolean;
  quoteOnly?: boolean;
};

export const categories = [
  { name: "Marketing & Promo", slug: "marketing", image: "/assets/home/categories/marketing-promo.jpg", blurb: "Flyers, brochures and campaign materials", featured: true },
  { name: "Office Stationery", slug: "stationery", image: "/assets/home/categories/office-stationery.jpg", blurb: "Business cards, letterheads and notebooks", featured: true },
  { name: "Apparel", slug: "apparel", image: "/assets/home/categories/apparel.jpg", blurb: "T-shirts, hoodies, caps and uniforms", featured: true },
  { name: "Packaging", slug: "packaging", image: "/assets/home/categories/packaging.jpg", blurb: "Bags, boxes, labels and product sleeves", featured: true },
  { name: "Banners & Displays", slug: "displays", image: "/assets/home/categories/banners-displays.jpg", blurb: "Roll-ups, flags and exhibition displays", featured: true },
  { name: "Corporate Gifts", slug: "gifts", image: "/assets/home/categories/corporate-gifts.jpg", blurb: "Curated gifts for teams and clients", featured: true },
  { name: "Signage", slug: "signage", image: "/assets/home/categories/signage.jpg", blurb: "Indoor, outdoor, directional and light box signs", featured: true },
  { name: "Labels & Stickers", slug: "stickers", image: "/assets/home/categories/labels-stickers.jpg", blurb: "Custom-cut labels for every surface", featured: true },
  { name: "Vehicle Branding", slug: "vehicle", image: "/assets/home/categories/signage.jpg", blurb: "Fleet graphics and vehicle wraps" },
  { name: "Awards & Recognition", slug: "awards", image: "/assets/home/categories/corporate-gifts.jpg", blurb: "Certificates, trophies, medals and plaques" },
  { name: "Books & Publications", slug: "books", image: "/assets/home/categories/office-stationery.jpg", blurb: "Annual reports, manuals, booklets and novels" },
  { name: "Office & Environmental Branding", slug: "environmental", image: "/assets/home/categories/signage.jpg", blurb: "Wall murals, window film, event and podium branding" },
  { name: "Personal & Event Print", slug: "events", image: "/assets/home/categories/marketing-promo.jpg", blurb: "Wedding cards, invitations, programs and vouchers" },
  { name: "Trading Books", slug: "trading", image: "/assets/home/categories/office-stationery.jpg", blurb: "Invoice, receipt, LPO and delivery note books" },
];

export const products: Product[] = [
  { slug: "premium-business-cards", name: "Premium Business Cards", category: "Office Stationery", description: "Crisp, professionally finished cards on heavyweight stock.", price: 1800, unit: "per 100", image: "/assets/shop/business-cards.jpg", featured: true },
  { slug: "corporate-letterheads", name: "Corporate Letterheads", category: "Office Stationery", description: "Branded A4 letterheads with consistent colour reproduction.", price: 2500, unit: "per 100", image: "/assets/shop/letterheads.jpg" },
  { slug: "branded-tshirts", name: "Branded T-Shirts", category: "Apparel", description: "Comfortable cotton tees with durable screen or transfer print.", price: 950, unit: "each", image: "/assets/shop/branded-t-shirts.jpg", featured: true },
  { slug: "embroidered-caps", name: "Embroidered Caps", category: "Apparel", description: "Structured caps finished with detailed custom embroidery.", price: 850, unit: "each", image: "/assets/shop/embroidered-caps.jpg" },
  { slug: "rollup-banner", name: "Roll-Up Banner", category: "Banners & Displays", description: "Portable premium display complete with stand and carry case.", price: 8500, unit: "each", image: "/assets/shop/roll-up-banners.jpg", featured: true },
  { slug: "teardrop-flag", name: "Teardrop Flag", category: "Banners & Displays", description: "High-visibility outdoor flag with a sturdy portable base.", price: 7200, unit: "each", image: "/assets/shop/tear-drop-flag.jpg" },
  { slug: "branded-carrier-bags", name: "Branded Carrier Bags", category: "Packaging", description: "Custom paper bags in your colours with reinforced handles.", price: 6500, unit: "per 50", image: "/assets/shop/branded-carrier-bags.jpg", featured: true },
  { slug: "product-labels", name: "Product Labels", category: "Labels & Stickers", description: "Vibrant self-adhesive labels cut to your chosen shape.", price: 2200, unit: "per 100", image: "/assets/shop/product-labels.jpg" },
  { slug: "award-certificates", name: "Certificates", category: "Awards & Recognition", description: "Professionally printed certificates on premium cardstock, ideal for employee recognition, academic achievement and training completions.", price: 150, unit: "each", image: "/assets/shop/certificates.jpg" },
  { slug: "framed-certificates", name: "Framed Certificates", category: "Awards & Recognition", description: "Printed certificates elegantly mounted in quality wooden or acrylic frames, ready for display on office walls or reception areas.", price: 2800, unit: "each", image: "/assets/shop/framed-certificates.jpg" },
  { slug: "custom-trophies", name: "Trophies", category: "Awards & Recognition", description: "Bespoke trophies crafted in a range of sizes and finishes, from classic cups to modern acrylic pieces for corporate awards and sports tournaments.", quoteOnly: true, image: "/assets/shop/awards.jpg" },
  { slug: "medals-ribbons", name: "Medals", category: "Awards & Recognition", description: "Durable metal medals paired with custom-printed ribbons, perfect for school sports days, corporate fun days and championship events.", price: 850, unit: "each", image: "/assets/shop/medals.jpg" },
  { slug: "engraved-plaques", name: "Plaques", category: "Awards & Recognition", description: "Wooden, acrylic and metal plaques with precision engraving, used for long-service awards, donor recognition and building dedications.", quoteOnly: true, image: "/assets/shop/plaques.jpg" },
  { slug: "custom-recognition-awards", name: "Awards", category: "Awards & Recognition", description: "Fully custom acrylic, crystal and shield awards designed around your brand, ideal for gala dinners, CEO awards and industry recognition ceremonies.", quoteOnly: true, image: "/assets/shop/awards.jpg" },
];

export const formatPrice = (price?: number) => price ? `KSh ${price.toLocaleString("en-KE")}` : "";

export const getProduct = (slug: string) => products.find((product) => product.slug === slug);