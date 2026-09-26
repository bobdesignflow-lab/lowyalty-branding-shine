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

  { slug: "gate-pass-books", name: "Gate Pass Books", category: "Trading Books", description: "Serially numbered gate pass books for secure goods movement tracking between premises.", quoteOnly: true, image: "/assets/shop/trading-books/gate-pass.jpg" },
  { slug: "invoice-books", name: "Invoice Books", category: "Trading Books", description: "Duplicate and triplicate invoice books, customised with your company details and branding.", quoteOnly: true, image: "/assets/shop/trading-books/invoice-books.jpg" },
  { slug: "local-purchase-order-books", name: "Local Purchase Order Books", category: "Trading Books", description: "Professional LPO books with sequential numbering for formal procurement documentation.", quoteOnly: true, image: "/assets/shop/trading-books/local-purchase-orders.jpg" },
  { slug: "petty-cash-books", name: "Petty Cash Books", category: "Trading Books", description: "Columned petty cash books for tracking small business expenditures with voucher referencing.", quoteOnly: true, image: "/assets/shop/trading-books/petty-cash-books.jpg" },
  { slug: "receipt-books", name: "Receipt Books", category: "Trading Books", description: "Custom branded receipt books in duplicate or triplicate format for cash and M-Pesa transactions.", quoteOnly: true, image: "/assets/shop/trading-books/receipt-books.jpg" },

  { slug: "backdrop-banners", name: "Backdrop Banners", category: "Banners & Displays", description: "Large format backdrop banners for events, conferences, studio backgrounds and photo booths.", quoteOnly: true, image: "/assets/shop/banners-displays/backdrop-banners.jpg" },
  { slug: "banner-printing", name: "Banner Printing", category: "Banners & Displays", description: "Durable large-format banners for indoor and outdoor use, printed on heavy-duty PVC.", price: 500, unit: "per sqm", image: "/assets/shop/banners-displays/banner-printing.jpg" },
  { slug: "broadbase-banners", name: "Broadbase Banners", category: "Banners & Displays", description: "Water-fillable broadbase banners for high-wind outdoor locations and roadside promotions.", quoteOnly: true, image: "/assets/shop/banners-displays/broadbase-banners.jpg" },
  { slug: "flags-display", name: "Flags", category: "Banners & Displays", description: "Custom-printed flags in feather, teardrop and rectangular shapes for maximum brand visibility.", quoteOnly: true, image: "/assets/shop/banners-displays/flags.jpg" },
  { slug: "sticker-printing", name: "Sticker Printing", category: "Labels & Stickers", description: "Custom-cut stickers and decals on premium vinyl, kiss-cut or sheeted to your required shape.", quoteOnly: true, image: "/assets/shop/banners-displays/sticker-printing.jpg" },
  { slug: "x-banners", name: "X-Banners", category: "Banners & Displays", description: "Lightweight X-frame banners ideal for trade shows, retail displays and pop-up promotions.", quoteOnly: true, image: "/assets/shop/banners-displays/x-banners.jpg" },

  { slug: "aprons", name: "Aprons", category: "Apparel", description: "Branded aprons for restaurants, cafés, salons and industrial workspaces with adjustable straps.", quoteOnly: true, image: "/assets/shop/apparel/aprons.jpg" },
  { slug: "dust-coats", name: "Dust Coats", category: "Apparel", description: "Hard-wearing dust coats embroidered or printed with company logos for workshops and field teams.", quoteOnly: true, image: "/assets/shop/apparel/dust-coats.jpg" },
  { slug: "hoodies", name: "Hoodies", category: "Apparel", description: "Premium cotton-blend hoodies with embroidered or printed branding for staff, teams and events.", quoteOnly: true, image: "/assets/shop/apparel/hoodies.jpg" },
  { slug: "masai-blankets", name: "Maasai Blankets", category: "Apparel", description: "Authentic Maasai shuka blankets customised with embroidered or printed corporate branding.", quoteOnly: true, image: "/assets/shop/apparel/masai-blankets.jpg" },
  { slug: "overalls", name: "Overalls", category: "Apparel", description: "Industrial and corporate overalls in various colours, branded for construction, manufacturing and logistics.", quoteOnly: true, image: "/assets/shop/apparel/overalls.jpg" },
  { slug: "polo-shirts", name: "Polo Shirts", category: "Apparel", description: "Smart-casual polo shirts with embroidered chest logos for corporate staff and promotional gifting.", quoteOnly: true, image: "/assets/shop/apparel/polo-shirts.jpg" },
  { slug: "puff-jackets", name: "Puff Jackets", category: "Apparel", description: "Insulated puff jackets with custom branding, ideal for outdoor teams and premium corporate gifts.", quoteOnly: true, image: "/assets/shop/apparel/puff-jackets.jpg" },
  { slug: "reflector-jackets", name: "Reflector Jackets", category: "Apparel", description: "High-visibility reflector jackets with reflective strips and company branding for roadside and construction teams.", quoteOnly: true, image: "/assets/shop/apparel/reflector-jackets.jpg" },
  { slug: "school-uniform-logos", name: "School Uniform Logos", category: "Apparel", description: "School badge and logo embroidery or heat transfer application onto uniforms, sports kits and schoolwear.", quoteOnly: true, image: "/assets/shop/apparel/school-logos.jpg" },

  { slug: "graduation-booklets", name: "Graduation Booklets", category: "Books & Publications", description: "Formal graduation booklets with ceremony programmes, profiles and photos on premium paper.", quoteOnly: true, image: "/assets/shop/books-publications/graduation-booklets.png" },
  { slug: "magazines", name: "Magazines", category: "Books & Publications", description: "Full-colour magazine printing with saddle stitch or perfect binding and custom cover finishes.", quoteOnly: true, image: "/assets/shop/books-publications/magazines.jpg" },
  { slug: "reports", name: "Reports & Annual Reports", category: "Books & Publications", description: "Corporate annual reports, board reports and research documents printed and bound to executive standards.", quoteOnly: true, image: "/assets/shop/books-publications/reports.jpg" },

  { slug: "calendars", name: "Calendars", category: "Corporate Gifts", description: "Wall, desk and diorama calendars custom branded for year-round corporate visibility.", quoteOnly: true, image: "/assets/shop/corporate-gifts/calendars.jpg" },
  { slug: "gift-hampers", name: "Gift Hampers", category: "Corporate Gifts", description: "Curated branded gift hampers for holidays, client appreciation and employee recognition programmes.", quoteOnly: true, image: "/assets/shop/corporate-gifts/gift-hampers.jpg" },
  { slug: "key-rings", name: "Key Rings", category: "Corporate Gifts", description: "Custom key rings with engraved or printed logos in metal, acrylic and leather finishes.", quoteOnly: true, image: "/assets/shop/corporate-gifts/key-rings.jpg" },
  { slug: "lanyards", name: "Lanyards", category: "Corporate Gifts", description: "Branded lanyards with card holders for staff ID, conference access badges and event passes.", quoteOnly: true, image: "/assets/shop/corporate-gifts/lanyards.jpg" },
  { slug: "branded-mugs", name: "Branded Mugs", category: "Corporate Gifts", description: "Ceramic mugs with full-colour sublimation or single-colour print, ideal as everyday corporate gifts.", quoteOnly: true, image: "/assets/shop/corporate-gifts/mugs.jpg" },
  { slug: "power-banks", name: "Power Banks", category: "Corporate Gifts", description: "Portable branded power banks with custom printed logos for modern technology-led gifting.", quoteOnly: true, image: "/assets/shop/corporate-gifts/power-banks.jpg" },
  { slug: "thermos-flasks", name: "Thermos Flasks", category: "Corporate Gifts", description: "Vacuum-insulated thermos flasks with engraved or printed branding for office and outdoor use.", quoteOnly: true, image: "/assets/shop/corporate-gifts/thermos-flasks.jpg" },
  { slug: "branded-umbrellas", name: "Branded Umbrellas", category: "Corporate Gifts", description: "Compact and golf umbrellas with full-panel branding for rainy-season promotional gifting.", quoteOnly: true, image: "/assets/shop/corporate-gifts/umbrellas.jpg" },
  { slug: "wall-clocks", name: "Wall Clocks", category: "Corporate Gifts", description: "Branded wall clocks in wooden, acrylic and metal finishes for reception areas and client gifts.", quoteOnly: true, image: "/assets/shop/corporate-gifts/wall-clocks.jpg" },
  { slug: "branded-water-bottles", name: "Branded Water Bottles", category: "Corporate Gifts", description: "Stainless steel and aluminium water bottles with laser engraving or printed branding.", quoteOnly: true, image: "/assets/shop/corporate-gifts/water-bottles.jpg" },

  { slug: "truck-branding", name: "Truck Branding", category: "Vehicle Branding", description: "Full truck, lorry and fleet vehicle branding with durable weatherproof vinyl graphics and wraps.", quoteOnly: true, image: "/assets/shop/vehicle-branding/truck-branding.png" },

  { slug: "event-branding", name: "Event Branding", category: "Office & Environmental Branding", description: "Full event venue branding including backdrops, podiums, table covers, arches and directional signage.", quoteOnly: true, image: "/assets/shop/office-environmental-branding/event-branding.jpg" },
  { slug: "floor-graphics", category: "Office & Environmental Branding", description: "Slip-resistant floor graphics and directional wayfinding decals for retail, offices and public spaces.", quoteOnly: true, image: "/assets/shop/office-environmental-branding/floor-graphics.jpg" },
  { slug: "wall-branding", name: "Wall Branding", category: "Office & Environmental Branding", description: "Wall murals, branded feature walls, frosted film and office graphics for reception and internal spaces.", quoteOnly: true, image: "/assets/shop/office-environmental-branding/wall-branding.jpg" },
  { slug: "window-branding", name: "Window Branding", category: "Office & Environmental Branding", description: "Window graphics, perforated one-way vision film, frosted etch and storefront promotional decals.", quoteOnly: true, image: "/assets/shop/office-environmental-branding/window-branding.jpg" },

  { slug: "3d-signage", name: "3D Signage", category: "Signage", description: "Three-dimensional raised letter and logo signage in acrylic, metal and LED-illuminated finishes.", quoteOnly: true, image: "/assets/shop/signage/3d-signage.jpg" },
  { slug: "indoor-signage", name: "Indoor Signage", category: "Signage", description: "Reception, wayfinding, room and office internal signage with a professional corporate look.", quoteOnly: true, image: "/assets/shop/signage/indoor-signage.jpg" },
  { slug: "light-box-signs", name: "Light Box Signs", category: "Signage", description: "Backlit LED light box signs for storefronts, retail outlets and 24-hour business visibility.", quoteOnly: true, image: "/assets/shop/signage/light-boxes.jpg" },
  { slug: "outdoor-signage", name: "Outdoor Signage", category: "Signage", description: "Weatherproof outdoor building signs, pylon signs and main entrance signage fabricated to last.", quoteOnly: true, image: "/assets/shop/signage/outdoor-signage.jpg" },
  { slug: "reflective-signage", name: "Reflective Signage", category: "Signage", description: "High-intensity reflective road signs, warning plates and industrial safety signage.", quoteOnly: true, image: "/assets/shop/signage/reflective-signage.jpg" },

  { slug: "branded-boxes", name: "Branded Boxes", category: "Packaging", description: "Custom printed boxes in corrugated, rigid and folding carton styles for product and gift packaging.", quoteOnly: true, image: "/assets/shop/packaging/branded-boxes.jpg" },
  { slug: "cake-boxes", name: "Cake Boxes", category: "Packaging", description: "Food-safe cake and pastry boxes with window options and custom printed bakery branding.", quoteOnly: true, image: "/assets/shop/packaging/cake-boxes.jpg" },

  { slug: "diaries", name: "Diaries & Planners", category: "Office Stationery", description: "Executive diaries, desk planners and agenda books branded with company names and personalised names.", quoteOnly: true, image: "/assets/shop/office-stationery/diaries.jpg" },
  { slug: "notepads", name: "Notepads", category: "Office Stationery", description: "Branded desk notepads, jotters and memo pads in various sizes with glued or sewn binding.", quoteOnly: true, image: "/assets/shop/office-stationery/notepads.jpg" },
  { slug: "branded-pens", name: "Branded Pens", category: "Office Stationery", description: "Promotional and executive pens with custom printed or engraved logos for office and marketing use.", quoteOnly: true, image: "/assets/shop/office-stationery/pens.jpg" },
  { slug: "custom-stamps", name: "Custom Stamps", category: "Office Stationery", description: "Self-inking and traditional rubber stamps for company seals, address marks and endorsements.", quoteOnly: true, image: "/assets/shop/office-stationery/stamps.jpg" },

  { slug: "christmas-cards", name: "Christmas Cards", category: "Personal & Event Print", description: "Custom-designed Christmas greeting cards with family, corporate or church branding and envelopes.", quoteOnly: true, image: "/assets/shop/personal-event-print/christmas-cards.jpg" },
  { slug: "eulogy-booklets", name: "Eulogy Booklets", category: "Personal & Event Print", description: "Respectfully printed funeral and memorial service programmes with photo tribute pages.", quoteOnly: true, image: "/assets/shop/personal-event-print/eulogy.jpg" },
  { slug: "graduation-cards", name: "Graduation Cards", category: "Personal & Event Print", description: "Personalised graduation congratulation cards and announcements printed on premium card.", quoteOnly: true, image: "/assets/shop/personal-event-print/graduation-cards.jpg" },
  { slug: "invitation-cards", name: "Invitation Cards", category: "Personal & Event Print", description: "Invitation cards for weddings, birthdays, parties and corporate launches with custom design options.", quoteOnly: true, image: "/assets/shop/personal-event-print/invitation-cards.jpg" },
  { slug: "event-programs", name: "Event Programs", category: "Personal & Event Print", description: "Printed programmes for weddings, church events, burials, sports days and functions.", quoteOnly: true, image: "/assets/shop/personal-event-print/programs.jpg" },
  { slug: "raffle-tickets", name: "Raffle Tickets", category: "Personal & Event Print", description: "Perforated and sequentially numbered raffle, draw and fundraising tickets with security stubs.", quoteOnly: true, image: "/assets/shop/personal-event-print/raffle-tickets.jpg" },
  { slug: "success-cards", name: "Success Cards", category: "Personal & Event Print", description: "Well-wish and success congratulation cards for exams, promotions and new beginnings.", quoteOnly: true, image: "/assets/shop/personal-event-print/success-cards.jpg" },
  { slug: "event-tickets", name: "Event Tickets", category: "Personal & Event Print", description: "Custom printed event entry tickets with tear-off stubs, security numbering and QR codes.", quoteOnly: true, image: "/assets/shop/personal-event-print/tickets.jpg" },
  { slug: "gift-vouchers", name: "Gift Vouchers", category: "Personal & Event Print", description: "Gift voucher cards and certificates with foil stamping, security features and custom denominations.", quoteOnly: true, image: "/assets/shop/personal-event-print/vouchers.jpg" },
  { slug: "wedding-cards", name: "Wedding Cards", category: "Personal & Event Print", description: "Premium wedding invitation cards and inserts with optional foil, embossing and custom envelope design.", quoteOnly: true, image: "/assets/shop/personal-event-print/wedding-cards.jpg" },

  { slug: "brochures", name: "Brochures", category: "Marketing & Promo", description: "Tri-fold, bi-fold and staple-bound brochures to present products, services and company profiles.", price: 90, unit: "each", image: "/assets/shop/marketing-promo/brochures.jpg" },
  { slug: "flyers", name: "Flyers", category: "Marketing & Promo", description: "Single and double-sided flyers and leaflets to promote offers, events and services quickly.", price: 25, unit: "each", image: "/assets/shop/marketing-promo/flyers.jpg" },
  { slug: "inserts-leaflets", name: "Inserts & Leaflets", category: "Marketing & Promo", description: "Compact inserts and leaflets for product packaging, point-of-sale and promotional handouts.", quoteOnly: true, image: "/assets/shop/marketing-promo/inserts.jpg" },
  { slug: "posters", name: "Posters", category: "Marketing & Promo", description: "Eye-catching indoor and outdoor posters for events, offers, announcements and campaigns.", price: 50, unit: "each", image: "/assets/shop/marketing-promo/posters.jpg" },
  { slug: "event-wristbands", name: "Event Wristbands", category: "Marketing & Promo", description: "Tyvek, fabric and silicone wristbands custom printed for events, conferences and access control.", quoteOnly: true, image: "/assets/shop/office-stationery/wristbands.jpg" },
];

export const formatPrice = (price?: number) => price ? `KSh ${price.toLocaleString("en-KE")}` : "";

export const getProduct = (slug: string) => products.find((product) => product.slug === slug);