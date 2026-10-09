// Domain types for the storefront.
// Shaped to map cleanly onto Wix Stores products later (id, slug, price, media, options).

export type CategorySlug =
  | "necklaces"
  | "earrings"
  | "bracelets"
  | "bangles"
  | "rings"
  | "bridal"
  | "sets";

export interface ProductOption {
  name: string; // e.g. "Plating", "Size"
  values: string[]; // e.g. ["Gold", "Rose Gold"]
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: CategorySlug;
  /** Extra collections this product belongs to (festive, wedding, antique, kundan, emerald…). */
  tags: string[];
  price: number; // INR, current price
  compareAtPrice?: number; // INR, struck-through "was" price
  /** Real image URLs when available; empty array → branded SVG placeholder renders. */
  images: string[];
  shortDescription: string;
  description: string;
  material: string; // e.g. "Gold-plated brass, Kundan, faux pearls"
  rating: number; // 0–5
  reviewCount: number;
  stock: number;
  options?: ProductOption[];
  badges?: string[]; // e.g. ["Bestseller", "New"]
  featured?: boolean;
}

export interface CartLine {
  lineId: string;
  productId: string;
  slug: string;
  name: string;
  price: number;
  image: string | null;
  category: CategorySlug;
  quantity: number;
  selectedOptions?: Record<string, string>;
}
