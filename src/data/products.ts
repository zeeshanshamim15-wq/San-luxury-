import type { Product } from "@/types";
import { CATEGORY_IMAGES } from "@/lib/images";

/**
 * Mock catalog for the frontend build.
 * Product names/prices seeded from San Luxury's real range; the rest is realistic
 * placeholder content. Swap this array for Wix `queryProducts()` results later —
 * the shape maps 1:1 (id, slug, price, images, options).
 *
 * `images: []` → a branded SVG placeholder renders automatically.
 * Drop real photos in /public/products/<slug>-1.jpg and list them here.
 */
export const PRODUCTS: Product[] = [
  {
    id: "sl-001",
    slug: "the-mayura-royal-kundan-choker-set",
    name: "The Mayura Royal Kundan Choker Set",
    category: "sets",
    tags: ["bridal", "wedding", "kundan", "festive", "antique"],
    price: 10990,
    compareAtPrice: 13990,
    images: [],
    shortDescription: "Regal Kundan choker with matching earrings & maang tikka.",
    description:
      "A showstopping bridal choker inspired by royal Rajasthani craftsmanship. Hand-set uncut Kundan stones, a peacock centrepiece and cascading faux-pearl drops, finished in warm 22k-look gold plating. Comes with matching chandbali earrings and a maang tikka — a complete bridal statement.",
    material: "Gold-plated brass, Kundan, faux pearls, emerald-green beads",
    rating: 4.9,
    reviewCount: 128,
    stock: 6,
    options: [{ name: "Plating", values: ["Antique Gold", "Bright Gold"] }],
    badges: ["Bestseller", "Bridal"],
    featured: true,
  },
  {
    id: "sl-002",
    slug: "the-mayura-royal-peacock-choker-set",
    name: "The Mayura Royal Peacock Choker Set",
    category: "sets",
    tags: ["bridal", "wedding", "festive", "antique"],
    price: 8400,
    compareAtPrice: 10500,
    images: [],
    shortDescription: "Peacock-motif choker set with pearl fringe.",
    description:
      "The Mayura peacock spreads across this antique-gold choker, its feathers picked out in green and ruby-red stones. Paired with statement jhumkas, it's made for sangeet nights and festive celebrations.",
    material: "Antique gold-plated alloy, coloured stones, faux pearls",
    rating: 4.8,
    reviewCount: 94,
    stock: 9,
    badges: ["Bestseller"],
    featured: true,
  },
  {
    id: "sl-003",
    slug: "the-aura-geometric-emerald-cut-statement-set",
    name: 'The "Aura Geometric" Emerald-Cut Statement Set',
    category: "sets",
    tags: ["party", "emerald", "stone"],
    price: 3590,
    compareAtPrice: 4790,
    images: [],
    shortDescription: "Modern emerald-cut necklace & earrings.",
    description:
      "Clean geometry meets old-world glamour. Emerald-cut green stones are framed in a sleek gold setting for a contemporary silhouette that dresses up cocktail evenings and receptions alike.",
    material: "Gold-plated brass, emerald-cut cubic zirconia",
    rating: 4.7,
    reviewCount: 61,
    stock: 14,
    badges: ["New"],
    featured: true,
  },
  {
    id: "sl-004",
    slug: "the-gaja-prabha-divine-ganesha-choker-set",
    name: "The Gaja Prabha Divine Ganesha Choker Set",
    category: "sets",
    tags: ["festive", "temple", "antique", "wedding"],
    price: 9200,
    compareAtPrice: 11500,
    images: [],
    shortDescription: "Temple-inspired Ganesha choker set.",
    description:
      "A temple-jewellery tribute with a hand-detailed Ganesha centrepiece, matte antique-gold finish and ruby-red accents. Rooted in South-Indian tradition, made for festive and wedding wear.",
    material: "Matte antique gold-plated alloy, ruby-red stones, pearls",
    rating: 4.9,
    reviewCount: 47,
    stock: 5,
    badges: ["Festive"],
    featured: true,
  },
  {
    id: "sl-005",
    slug: "artisan-teardrop-statement-earrings",
    name: "Artisan Teardrop Statement Earrings",
    category: "earrings",
    tags: ["party", "daily", "gifting"],
    price: 1900,
    compareAtPrice: 2600,
    images: [],
    shortDescription: "Lightweight teardrop danglers for every day.",
    description:
      "Everyday elegance in a feather-light teardrop silhouette. Subtle enough for work, pretty enough for a dinner date — and gentle on the ears all day.",
    material: "Gold-plated brass, cubic zirconia",
    rating: 4.6,
    reviewCount: 73,
    stock: 30,
    badges: ["Bestseller"],
    featured: true,
  },
  {
    id: "sl-006",
    slug: "the-midnight-moonstone-threader-earrings",
    name: "The Midnight Moonstone Threader Earrings",
    category: "earrings",
    tags: ["party", "stone", "gifting"],
    price: 2472,
    compareAtPrice: 3090,
    images: [],
    shortDescription: "Delicate moonstone threaders with a soft glow.",
    description:
      "Slim gold threaders drop into a luminous moonstone, catching the light with every turn of the head. Minimal, modern and endlessly wearable.",
    material: "Gold-plated brass, faux moonstone",
    rating: 4.7,
    reviewCount: 52,
    stock: 22,
    badges: ["New"],
    featured: true,
  },
  {
    id: "sl-007",
    slug: "rajwadi-emerald-drop-necklace",
    name: "Rajwadi Emerald Drop Necklace",
    category: "necklaces",
    tags: ["emerald", "wedding", "party", "stone"],
    price: 4650,
    compareAtPrice: 5990,
    images: [],
    shortDescription: "Emerald-green drops on a delicate gold chain.",
    description:
      "A row of emerald-green stones falls into a single teardrop pendant on this graceful necklace. The Rajwadi green pairs beautifully with both silk sarees and evening gowns.",
    material: "Gold-plated brass, green cubic zirconia, faux pearls",
    rating: 4.8,
    reviewCount: 88,
    stock: 12,
    badges: ["Bestseller"],
    featured: true,
  },
  {
    id: "sl-008",
    slug: "noor-polki-bridal-necklace-set",
    name: "Noor Polki Bridal Necklace Set",
    category: "bridal",
    tags: ["bridal", "wedding", "kundan", "antique"],
    price: 12490,
    compareAtPrice: 15990,
    images: [],
    shortDescription: "Grand Polki bridal set with layered pearls.",
    description:
      "The Noor is our grandest bridal set — layered uncut Polki stones, triple strands of faux pearls and a matching choker, long haar, earrings and tikka. Made to be the centre of your wedding day.",
    material: "Gold-plated brass, Polki stones, faux pearls",
    rating: 5.0,
    reviewCount: 39,
    stock: 4,
    badges: ["Bridal", "Premium"],
    featured: true,
  },
  {
    id: "sl-009",
    slug: "chand-bali-jhumka-earrings",
    name: "Chandbali Jhumka Earrings",
    category: "earrings",
    tags: ["festive", "wedding", "antique"],
    price: 2290,
    compareAtPrice: 2990,
    images: [],
    shortDescription: "Classic crescent chandbali jhumkas.",
    description:
      "The timeless chandbali — a crescent moon of detailed gold-work above a swinging jhumka, edged with tiny pearls. A festive-season essential.",
    material: "Antique gold-plated alloy, faux pearls",
    rating: 4.7,
    reviewCount: 110,
    stock: 26,
    badges: ["Festive"],
  },
  {
    id: "sl-010",
    slug: "pearl-cascade-layered-necklace",
    name: "Pearl Cascade Layered Necklace",
    category: "necklaces",
    tags: ["party", "daily", "gifting"],
    price: 3190,
    compareAtPrice: 3990,
    images: [],
    shortDescription: "Multi-strand pearl necklace with gold spacers.",
    description:
      "Three cascading strands of soft ivory pearls, held with delicate gold spacers. Effortlessly elegant over a plain kurta or a little black dress.",
    material: "Faux pearls, gold-plated spacers",
    rating: 4.5,
    reviewCount: 44,
    stock: 18,
  },
  {
    id: "sl-011",
    slug: "meenakari-kada-bangles-pair",
    name: "Meenakari Kada Bangles (Pair)",
    category: "bangles",
    tags: ["festive", "wedding", "antique"],
    price: 2790,
    compareAtPrice: 3590,
    images: [],
    shortDescription: "Hand-painted Meenakari kada, set of two.",
    description:
      "A pair of broad kada bangles finished in vivid Meenakari enamel-work over gold. Traditional colour, statement width — beautiful stacked or worn solo.",
    material: "Gold-plated brass, Meenakari enamel",
    rating: 4.6,
    reviewCount: 35,
    stock: 15,
    options: [{ name: "Size", values: ["2.4", "2.6", "2.8"] }],
    badges: ["Festive"],
  },
  {
    id: "sl-012",
    slug: "solitaire-promise-ring",
    name: "Solitaire Promise Ring",
    category: "rings",
    tags: ["daily", "gifting", "stone"],
    price: 1490,
    compareAtPrice: 1990,
    images: [],
    shortDescription: "A single sparkling solitaire in gold.",
    description:
      "One brilliant-cut solitaire on a slim gold band — understated sparkle that goes with absolutely everything. A perfect little gift.",
    material: "Gold-plated brass, cubic zirconia",
    rating: 4.4,
    reviewCount: 67,
    stock: 40,
    options: [{ name: "Size", values: ["6", "7", "8", "9"] }],
    badges: ["Gifting"],
  },
  {
    id: "sl-013",
    slug: "tennis-bracelet-crystal-line",
    name: "Crystal Line Tennis Bracelet",
    category: "bracelets",
    tags: ["party", "gifting", "stone"],
    price: 2190,
    compareAtPrice: 2890,
    images: [],
    shortDescription: "A continuous line of crystals on gold.",
    description:
      "The classic tennis bracelet — an unbroken line of crystal-cut stones set in gold, with a secure clasp. Timeless wrist-candy for parties and gifting.",
    material: "Gold-plated brass, cubic zirconia",
    rating: 4.6,
    reviewCount: 58,
    stock: 24,
    badges: ["Gifting"],
  },
  {
    id: "sl-014",
    slug: "antique-lakshmi-coin-haar",
    name: "Antique Lakshmi Coin Haar",
    category: "necklaces",
    tags: ["festive", "wedding", "temple", "antique"],
    price: 5490,
    compareAtPrice: 6990,
    images: [],
    shortDescription: "Long temple haar with Lakshmi coins.",
    description:
      "A long temple-style haar strung with Goddess Lakshmi coins in matte antique gold. Steeped in South-Indian tradition, unmistakably regal.",
    material: "Matte antique gold-plated alloy",
    rating: 4.8,
    reviewCount: 41,
    stock: 8,
    badges: ["Festive"],
  },
  {
    id: "sl-015",
    slug: "rose-gold-heart-studs",
    name: "Rose Gold Heart Studs",
    category: "earrings",
    tags: ["daily", "gifting"],
    price: 990,
    compareAtPrice: 1490,
    images: [],
    shortDescription: "Tiny rose-gold heart studs.",
    description:
      "Sweet little heart studs in warm rose-gold — the kind of dainty everyday pair you'll never want to take off.",
    material: "Rose gold-plated brass",
    rating: 4.5,
    reviewCount: 96,
    stock: 55,
    badges: ["Under ₹999"],
  },
  {
    id: "sl-016",
    slug: "kundan-maang-tikka",
    name: "Kundan Maang Tikka",
    category: "bridal",
    tags: ["bridal", "wedding", "kundan", "festive"],
    price: 1690,
    compareAtPrice: 2190,
    images: [],
    shortDescription: "Classic Kundan maang tikka.",
    description:
      "A single-strand Kundan maang tikka with a pearl drop — the finishing touch to bridal and festive looks.",
    material: "Gold-plated brass, Kundan, faux pearl",
    rating: 4.7,
    reviewCount: 33,
    stock: 20,
  },
  {
    id: "sl-017",
    slug: "minimal-gold-bar-necklace",
    name: "Minimal Gold Bar Necklace",
    category: "necklaces",
    tags: ["daily", "gifting"],
    price: 1290,
    compareAtPrice: 1690,
    images: [],
    shortDescription: "Sleek gold bar pendant for daily wear.",
    description:
      "A slim horizontal bar on a fine gold chain — modern minimalism that layers effortlessly and never leaves the everyday rotation.",
    material: "Gold-plated stainless steel",
    rating: 4.4,
    reviewCount: 71,
    stock: 48,
    badges: ["Under ₹999"],
  },
  {
    id: "sl-018",
    slug: "emerald-halo-cocktail-ring",
    name: "Emerald Halo Cocktail Ring",
    category: "rings",
    tags: ["party", "emerald", "stone"],
    price: 1990,
    compareAtPrice: 2590,
    images: [],
    shortDescription: "Bold emerald stone in a crystal halo.",
    description:
      "A statement cocktail ring: a deep emerald-green centre stone ringed by a halo of crystals. Instant glamour for evenings out.",
    material: "Gold-plated brass, green & clear cubic zirconia",
    rating: 4.6,
    reviewCount: 29,
    stock: 16,
    options: [{ name: "Size", values: ["6", "7", "8"] }],
  },
  {
    id: "sl-019",
    slug: "pearl-drop-bridal-earrings",
    name: "Pearl Drop Bridal Earrings",
    category: "bridal",
    tags: ["bridal", "wedding", "party"],
    price: 2890,
    compareAtPrice: 3690,
    images: [],
    shortDescription: "Grand pearl-drop earrings for brides.",
    description:
      "Oversized pearl-drop earrings with a crystal-studded top — the kind of grand, graceful pair that photographs beautifully on the big day.",
    material: "Gold-plated brass, faux pearls, cubic zirconia",
    rating: 4.8,
    reviewCount: 26,
    stock: 11,
    badges: ["Bridal"],
  },
  {
    id: "sl-020",
    slug: "stackable-cz-bangles-set-of-4",
    name: "Stackable CZ Bangles (Set of 4)",
    category: "bangles",
    tags: ["party", "daily", "gifting", "stone"],
    price: 3290,
    compareAtPrice: 4290,
    images: [],
    shortDescription: "Four thin CZ bangles to stack.",
    description:
      "A set of four slim gold bangles lined with tiny crystals — wear all four for full sparkle or mix into your everyday stack.",
    material: "Gold-plated brass, cubic zirconia",
    rating: 4.5,
    reviewCount: 38,
    stock: 19,
  },
  {
    id: "sl-021",
    slug: "victorian-choker-necklace",
    name: "Victorian Choker Necklace",
    category: "necklaces",
    tags: ["party", "wedding", "antique", "stone"],
    price: 4290,
    compareAtPrice: 5490,
    images: [],
    shortDescription: "Vintage Victorian-finish choker.",
    description:
      "A dusky Victorian-finish choker set with soft pastel stones and pearl drops — old-world romance for receptions and cocktail evenings.",
    material: "Victorian gold-plated alloy, pastel stones, pearls",
    rating: 4.7,
    reviewCount: 30,
    stock: 9,
  },
  {
    id: "sl-022",
    slug: "delicate-charm-bracelet",
    name: "Delicate Charm Bracelet",
    category: "bracelets",
    tags: ["daily", "gifting"],
    price: 1190,
    compareAtPrice: 1590,
    images: [],
    shortDescription: "Dainty gold charm bracelet.",
    description:
      "A fine gold chain scattered with tiny charms — a delicate, playful everyday piece that makes a lovely little gift.",
    material: "Gold-plated brass",
    rating: 4.4,
    reviewCount: 49,
    stock: 34,
    badges: ["Under ₹999"],
  },
  {
    id: "sl-023",
    slug: "temple-jhumka-with-pearls",
    name: "Grand Temple Jhumka with Pearls",
    category: "earrings",
    tags: ["festive", "wedding", "temple", "antique"],
    price: 3190,
    compareAtPrice: 3990,
    images: [],
    shortDescription: "Large temple jhumkas with pearl fringe.",
    description:
      "Big, beautiful temple jhumkas in matte antique gold, edged with a full fringe of pearls. A festive-season and wedding favourite.",
    material: "Matte antique gold-plated alloy, faux pearls",
    rating: 4.9,
    reviewCount: 57,
    stock: 13,
    badges: ["Festive", "Bestseller"],
  },
  {
    id: "sl-024",
    slug: "the-luxe-heritage-statement-set",
    name: "The Luxe Heritage Statement Set",
    category: "sets",
    tags: ["wedding", "party", "antique", "stone"],
    price: 6990,
    compareAtPrice: 8990,
    images: [],
    shortDescription: "Heritage-inspired necklace & earring set.",
    description:
      "The Luxe Heritage set marries antique gold-work with a scatter of coloured stones — a versatile statement duo that carries reception looks with ease.",
    material: "Antique gold-plated alloy, coloured stones, pearls",
    rating: 4.8,
    reviewCount: 34,
    stock: 7,
    badges: ["Premium"],
  },
];

// Assign curated stock imagery by category (rotating for variety) to any
// product without its own photos. Replace with real photos per-product later.
const _imgCounters: Partial<Record<string, number>> = {};
for (const p of PRODUCTS) {
  if (p.images.length) continue;
  const pool = CATEGORY_IMAGES[p.category] ?? [];
  if (!pool.length) continue;
  const start = _imgCounters[p.category] ?? 0;
  _imgCounters[p.category] = start + 1;
  p.images = [pool[start % pool.length], pool[(start + 1) % pool.length]];
}

// ---- Selectors (swap bodies for Wix queries later) ----

export function getAllProducts(): Product[] {
  return PRODUCTS;
}

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "all-products") return PRODUCTS;
  return PRODUCTS.filter(
    (p) => p.category === category || p.tags.includes(category),
  );
}

export function getFeaturedProducts(): Product[] {
  return PRODUCTS.filter((p) => p.featured);
}

export function getBestsellers(): Product[] {
  return PRODUCTS.filter((p) => p.badges?.includes("Bestseller")).slice(0, 8);
}

export function getNewArrivals(): Product[] {
  return PRODUCTS.filter((p) => p.badges?.includes("New"))
    .concat(PRODUCTS.slice(14, 18))
    .slice(0, 8);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return PRODUCTS.filter(
    (p) => p.id !== product.id && p.category === product.category,
  )
    .concat(PRODUCTS.filter((p) => p.id !== product.id))
    .slice(0, limit);
}
