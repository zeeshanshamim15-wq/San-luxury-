"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import type { Product } from "@/types";
import { formatPrice, discountPercent } from "@/lib/format";
import { useCartStore } from "@/hooks/useCartStore";
import { StarRating } from "./StarRating";
import { Bag, Plus, Minus, Truck, Shield, Refresh, Check } from "./Icons";

export function ProductPurchasePanel({ product }: { product: Product }) {
  const router = useRouter();
  const addItem = useCartStore((s) => s.addItem);
  const [qty, setQty] = useState(1);
  const [selected, setSelected] = useState<Record<string, string>>(
    Object.fromEntries((product.options ?? []).map((o) => [o.name, o.values[0]])),
  );
  const [added, setAdded] = useState(false);
  const off = discountPercent(product.price, product.compareAtPrice);

  const opts = product.options?.length ? selected : undefined;

  const add = () => {
    addItem(product, qty, opts);
    setAdded(true);
    setTimeout(() => setAdded(false), 1600);
  };
  const buyNow = () => {
    addItem(product, qty, opts);
    router.push("/checkout");
  };

  return (
    <div>
      {product.badges && (
        <div className="mb-3 flex flex-wrap gap-2">
          {product.badges.map((b) => (
            <span key={b} className="rounded-full bg-cream-warm px-3 py-1 text-[11px] font-medium uppercase tracking-wide2 text-gold-700">
              {b}
            </span>
          ))}
        </div>
      )}
      <h1 className="font-display text-4xl leading-tight text-ink sm:text-5xl">{product.name}</h1>
      <div className="mt-3">
        <StarRating rating={product.rating} count={product.reviewCount} size={16} />
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-3">
        <span className="font-display text-4xl text-ink">{formatPrice(product.price)}</span>
        {product.compareAtPrice && (
          <span className="text-xl text-ink-soft line-through">{formatPrice(product.compareAtPrice)}</span>
        )}
        {off && (
          <span className="rounded-full bg-maroon px-3 py-1 text-xs font-semibold text-cream">Save {off}%</span>
        )}
      </div>
      <p className="mt-1 text-xs text-ink-soft">Inclusive of all taxes · EMI available at checkout</p>

      <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-ink-light">{product.shortDescription}</p>

      {/* options */}
      {product.options?.map((o) => (
        <div key={o.name} className="mt-6">
          <p className="font-accent text-xs uppercase tracking-wide2 text-ink">{o.name}</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {o.values.map((v) => (
              <button
                key={v}
                onClick={() => setSelected((s) => ({ ...s, [o.name]: v }))}
                className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                  selected[o.name] === v
                    ? "border-gold-500 bg-gold-500 text-ink"
                    : "border-gold-200 text-ink-light hover:border-gold-400"
                }`}
              >
                {v}
              </button>
            ))}
          </div>
        </div>
      ))}

      {/* qty + stock */}
      <div className="mt-6 flex items-center gap-4">
        <div className="flex items-center rounded-full border border-gold-200">
          <button aria-label="Decrease" onClick={() => setQty((q) => Math.max(1, q - 1))} className="px-4 py-2.5 text-ink hover:text-gold-700">
            <Minus className="h-4 w-4" />
          </button>
          <span className="min-w-8 text-center">{qty}</span>
          <button aria-label="Increase" onClick={() => setQty((q) => q + 1)} className="px-4 py-2.5 text-ink hover:text-gold-700">
            <Plus className="h-4 w-4" />
          </button>
        </div>
        {product.stock <= 10 && (
          <span className="text-sm text-maroon">Only {product.stock} left — selling fast!</span>
        )}
      </div>

      {/* CTAs */}
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <button onClick={add} className="btn-outline flex-1">
          {added ? (<><Check className="h-4 w-4" /> Added</>) : (<><Bag className="h-4 w-4" /> Add to Cart</>)}
        </button>
        <button onClick={buyNow} className="btn-gold flex-1">Buy It Now</button>
      </div>

      {/* trust points */}
      <div className="mt-7 grid gap-3 rounded-2xl bg-cream-warm p-5 sm:grid-cols-3">
        {[
          { icon: Truck, t: "Free shipping", s: "Above ₹999" },
          { icon: Refresh, t: "7-day returns", s: "Easy & free" },
          { icon: Shield, t: "Secure checkout", s: "100% safe" },
        ].map(({ icon: Icon, t, s }) => (
          <div key={t} className="flex items-center gap-2.5">
            <Icon className="h-6 w-6 shrink-0 text-gold-600" />
            <div>
              <p className="text-sm font-medium text-ink">{t}</p>
              <p className="text-xs text-ink-soft">{s}</p>
            </div>
          </div>
        ))}
      </div>

      {/* details */}
      <div className="mt-7 border-t border-gold-100 pt-6">
        <p className="font-accent text-xs uppercase tracking-wide2 text-ink">Description</p>
        <p className="mt-2 text-[15px] leading-relaxed text-ink-light">{product.description}</p>
        <dl className="mt-4 space-y-2 text-sm">
          <div className="flex gap-2">
            <dt className="w-28 shrink-0 text-ink-soft">Material</dt>
            <dd className="text-ink">{product.material}</dd>
          </div>
          <div className="flex gap-2">
            <dt className="w-28 shrink-0 text-ink-soft">Category</dt>
            <dd className="capitalize text-ink">{product.category}</dd>
          </div>
          <div className="flex gap-2">
            <dt className="w-28 shrink-0 text-ink-soft">Care</dt>
            <dd className="text-ink">Keep away from water & perfume. Store in the pouch provided.</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
