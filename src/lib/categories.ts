import type { CategorySlug } from "@/types";

/**
 * Category taxonomy. When wiring Wix Headless, fill each `wixCollectionId`
 * with the collection GUID from the Wix dashboard and query by it.
 */
export interface CategoryLink {
  slug: CategorySlug | "all-products";
  label: string;
  tagline: string;
  wixCollectionId?: string; // TODO(wix): fill from dashboard
}

export const CATEGORY_LINKS: CategoryLink[] = [
  { slug: "all-products", label: "All Jewellery", tagline: "The full San Luxury collection" },
  { slug: "necklaces", label: "Necklaces", tagline: "Grace around your story" },
  { slug: "earrings", label: "Earrings", tagline: "Little details, big beauty" },
  { slug: "bracelets", label: "Bracelets", tagline: "For everyday elegance" },
  { slug: "bangles", label: "Bangles", tagline: "Tradition on your wrist" },
  { slug: "rings", label: "Rings", tagline: "A promise in gold" },
  { slug: "sets", label: "Jewellery Sets", tagline: "Complete your look" },
  { slug: "bridal", label: "Bridal", tagline: "For the day you'll never forget" },
];

export const SHOPPABLE_CATEGORIES = CATEGORY_LINKS.filter(
  (c) => c.slug !== "all-products",
);

export const CATEGORY_LABELS: Record<string, string> = Object.fromEntries(
  CATEGORY_LINKS.map((c) => [c.slug, c.label]),
);

/** Curated "shop by occasion" buckets → map to tag filters. */
export const OCCASIONS = [
  { slug: "birthdays", label: "Birthdays", tag: "gifting" },
  { slug: "anniversaries", label: "Anniversaries", tag: "gifting" },
  { slug: "festive", label: "Festive Gifting", tag: "festive" },
  { slug: "wedding", label: "Wedding", tag: "wedding" },
] as const;
