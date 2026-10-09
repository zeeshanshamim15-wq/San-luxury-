"use client";

import { useMemo, useState } from "react";
import type { Product } from "@/types";
import { CATEGORY_LINKS } from "@/lib/categories";
import { formatPrice } from "@/lib/format";
import { ProductCard } from "./ProductCard";
import { ChevronDown } from "./Icons";

type Sort = "featured" | "popular" | "new" | "price-asc" | "price-desc";

const SORTS: { value: Sort; label: string }[] = [
  { value: "featured", label: "Featured" },
  { value: "popular", label: "Bestselling" },
  { value: "new", label: "Newest" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
];

const PRICE_BANDS = [
  { label: "Under ₹999", min: 0, max: 999 },
  { label: "₹999 – ₹2,999", min: 999, max: 2999 },
  { label: "₹3,000 – ₹5,999", min: 3000, max: 5999 },
  { label: "₹6,000 & above", min: 6000, max: Infinity },
];

export function ProductsExplorer({
  products,
  initialCategory = "all-products",
  initialSort = "featured",
}: {
  products: Product[];
  initialCategory?: string;
  initialSort?: Sort;
}) {
  const [category, setCategory] = useState(initialCategory);
  const [sort, setSort] = useState<Sort>(initialSort);
  const [band, setBand] = useState<number | null>(null);
  const [mobileFilters, setMobileFilters] = useState(false);

  const filtered = useMemo(() => {
    let list = products.filter((p) => {
      const inCat =
        category === "all-products" ||
        p.category === category ||
        p.tags.includes(category);
      const b = band !== null ? PRICE_BANDS[band] : null;
      const inBand = !b || (p.price >= b.min && p.price <= b.max);
      return inCat && inBand;
    });
    list = [...list].sort((a, b) => {
      switch (sort) {
        case "popular": return b.reviewCount - a.reviewCount;
        case "new": return (b.badges?.includes("New") ? 1 : 0) - (a.badges?.includes("New") ? 1 : 0);
        case "price-asc": return a.price - b.price;
        case "price-desc": return b.price - a.price;
        default: return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      }
    });
    return list;
  }, [products, category, sort, band]);

  const activeLabel =
    CATEGORY_LINKS.find((c) => c.slug === category)?.label ?? "All Jewellery";

  return (
    <div className="container-lux py-8">
      {/* header */}
      <div className="mb-6 text-center">
        <p className="eyebrow">Shop the collection</p>
        <h1 className="mt-1 font-display text-5xl text-ink">{activeLabel}</h1>
        <div className="divider-mini mt-3" />
      </div>

      {/* category pills */}
      <div className="no-scrollbar -mx-5 mb-6 flex gap-2 overflow-x-auto px-5 pb-1 sm:justify-center">
        {CATEGORY_LINKS.map((c) => (
          <button
            key={c.slug}
            onClick={() => setCategory(c.slug)}
            className={`shrink-0 rounded-full border px-4 py-2 text-sm transition-colors ${
              category === c.slug
                ? "border-gold-500 bg-gold-500 text-ink"
                : "border-gold-200 text-ink-light hover:border-gold-400"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* toolbar */}
      <div className="mb-6 flex items-center justify-between gap-3 border-y border-gold-100 py-3">
        <button
          onClick={() => setMobileFilters((v) => !v)}
          className="flex items-center gap-1.5 text-sm text-ink lg:hidden"
        >
          Price <ChevronDown className="h-4 w-4" />
        </button>
        <p className="hidden text-sm text-ink-soft lg:block">{filtered.length} pieces</p>
        <div className="flex items-center gap-2">
          <span className="hidden text-xs uppercase tracking-wide2 text-ink-soft sm:inline">Sort</span>
          <div className="relative">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as Sort)}
              className="appearance-none rounded-full border border-gold-200 bg-cream py-2 pl-4 pr-9 text-sm text-ink outline-none focus:border-gold-500"
            >
              {SORTS.map((s) => (
                <option key={s.value} value={s.value}>{s.label}</option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-soft" />
          </div>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-[220px_1fr]">
        {/* sidebar filters */}
        <aside className={`${mobileFilters ? "block" : "hidden"} lg:block`}>
          <div className="rounded-2xl border border-gold-100 p-5">
            <p className="font-accent text-xs uppercase tracking-luxe text-gold-700">Price</p>
            <div className="mt-3 space-y-2">
              <button
                onClick={() => setBand(null)}
                className={`block text-sm ${band === null ? "text-gold-700" : "text-ink-light hover:text-ink"}`}
              >
                All prices
              </button>
              {PRICE_BANDS.map((b, i) => (
                <button
                  key={b.label}
                  onClick={() => setBand(i)}
                  className={`block text-sm ${band === i ? "text-gold-700" : "text-ink-light hover:text-ink"}`}
                >
                  {b.label}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-4 rounded-2xl bg-cream-warm p-5">
            <p className="font-display text-xl text-ink">Need help choosing?</p>
            <p className="mt-1 text-sm text-ink-light">Our stylists reply within minutes on WhatsApp.</p>
            <a
              href="https://wa.me/917977115589"
              className="mt-3 inline-block text-sm font-medium text-gold-700 link-underline"
            >
              Chat with us →
            </a>
          </div>
        </aside>

        {/* grid */}
        <div>
          {filtered.length === 0 ? (
            <p className="py-20 text-center text-ink-soft">
              No pieces match these filters. Try widening your price range.
            </p>
          ) : (
            <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3">
              {filtered.map((p, i) => (
                <ProductCard key={p.id} product={p} priority={i < 3} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
