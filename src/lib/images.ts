import type { CategorySlug } from "@/types";

/**
 * Curated stock imagery (local, in /public/products) used until the client's
 * real product photos arrive. Swap these files (same names) or point products
 * at real photos in `data/products.ts`.
 */

// Category image pools — product cards/galleries pull from here.
export const CATEGORY_IMAGES: Record<CategorySlug, string[]> = {
  necklaces: [
    "/products/necklace-1.jpg",
    "/products/necklace-3.jpg",
    "/products/model-necklace.jpg",
    "/products/necklace-2.jpg",
  ],
  earrings: [
    "/products/earring-1.jpg",
    "/products/earring-2.jpg",
    "/products/model-hero.jpg",
  ],
  bracelets: [
    "/products/bracelet-1.jpg",
    "/products/bracelet-2.jpg",
    "/products/bracelet-4.jpg",
    "/products/bracelet-3.jpg",
  ],
  bangles: ["/products/bracelet-3.jpg", "/products/bracelet-1.jpg"],
  rings: ["/products/ring-1.jpg", "/products/ring-2.jpg", "/products/flatlay-1.jpg"],
  sets: [
    "/products/flatlay-1.jpg",
    "/products/model-sets.jpg",
    "/products/necklace-3.jpg",
  ],
  bridal: [
    "/products/model-sets.jpg",
    "/products/necklace-2.jpg",
    "/products/wedding.jpg",
  ],
};

// Editorial / campaign imagery used across the site chrome.
export const EDITORIAL = {
  hero: "/products/model-hero.jpg",
  heroNecklace: "/products/model-necklace.jpg",
  sets: "/products/model-sets.jpg",
  story: "/products/model-story.jpg",
  wedding: "/products/wedding.jpg",
  necklaceStill: "/products/necklace-1.jpg",
  earringStill: "/products/earring-2.jpg",
  braceletStill: "/products/bracelet-1.jpg",
  flatlay: "/products/flatlay-1.jpg",
} as const;

// Collection tiles → representative image per category.
export const COLLECTION_IMAGE: Partial<Record<CategorySlug, string>> = {
  necklaces: "/products/necklace-1.jpg",
  earrings: "/products/earring-1.jpg",
  bracelets: "/products/bracelet-1.jpg",
  sets: "/products/model-sets.jpg",
  rings: "/products/ring-1.jpg",
  bangles: "/products/bracelet-3.jpg",
  bridal: "/products/wedding.jpg",
};
