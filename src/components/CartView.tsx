"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useCartStore } from "@/hooks/useCartStore";
import { SITE } from "@/lib/site";
import { formatPrice } from "@/lib/format";
import { LineThumb } from "./LineThumb";
import { Plus, Minus, Close, Bag, Truck, Check, Shield } from "./Icons";

export function CartView() {
  const {
    lines, updateQuantity, removeItem,
    couponCode, couponError, applyCoupon, removeCoupon,
  } = useCartStore();
  const subtotal = useCartStore((s) => s.subtotal());
  const discount = useCartStore((s) => s.discount());
  const total = useCartStore((s) => s.total());
  const [code, setCode] = useState("");
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const remaining = Math.max(0, SITE.freeShippingThreshold - subtotal);

  if (mounted && lines.length === 0) {
    return (
      <div className="container-lux flex flex-col items-center justify-center py-24 text-center">
        <Bag className="h-14 w-14 text-gold-300" />
        <h1 className="mt-5 font-display text-4xl text-ink">Your bag is empty</h1>
        <p className="mt-2 text-ink-soft">Discover something that makes you shine.</p>
        <Link href="/products" className="btn-gold mt-6">Start Shopping</Link>
      </div>
    );
  }

  return (
    <div className="container-lux py-10">
      <h1 className="font-display text-5xl text-ink">Your Bag</h1>
      <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_380px]">
        {/* lines */}
        <div>
          {!mounted ? (
            <p className="text-ink-soft">Loading…</p>
          ) : (
            <ul className="divide-y divide-gold-100 border-y border-gold-100">
              {lines.map((l) => (
                <li key={l.lineId} className="flex gap-5 py-6">
                  <Link href={`/products/${l.slug}`} className="relative h-32 w-28 shrink-0 overflow-hidden rounded-xl bg-cream-warm">
                    <LineThumb image={l.image} category={l.category} alt={l.name} />
                  </Link>
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <Link href={`/products/${l.slug}`} className="font-display text-2xl leading-tight text-ink hover:text-gold-700">
                          {l.name}
                        </Link>
                        {l.selectedOptions && (
                          <p className="mt-1 text-sm text-ink-soft">
                            {Object.entries(l.selectedOptions).map(([k, v]) => `${k}: ${v}`).join(" · ")}
                          </p>
                        )}
                      </div>
                      <button aria-label="Remove" onClick={() => removeItem(l.lineId)} className="text-ink-soft hover:text-maroon">
                        <Close className="h-5 w-5" />
                      </button>
                    </div>
                    <div className="mt-auto flex items-center justify-between pt-4">
                      <div className="flex items-center rounded-full border border-gold-200">
                        <button aria-label="Decrease" onClick={() => updateQuantity(l.lineId, l.quantity - 1)} className="px-3 py-2 text-ink hover:text-gold-700">
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="min-w-8 text-center text-sm">{l.quantity}</span>
                        <button aria-label="Increase" onClick={() => updateQuantity(l.lineId, l.quantity + 1)} className="px-3 py-2 text-ink hover:text-gold-700">
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                      <span className="font-display text-2xl text-ink">{formatPrice(l.price * l.quantity)}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
          <Link href="/products" className="mt-6 inline-block text-sm text-gold-700 link-underline">
            ← Continue shopping
          </Link>
        </div>

        {/* summary */}
        <aside className="lg:sticky lg:top-24 lg:h-fit">
          <div className="rounded-3xl border border-gold-200/70 bg-cream-warm p-6">
            <h2 className="font-display text-2xl text-ink">Order Summary</h2>

            {mounted && remaining > 0 && (
              <p className="mt-3 flex items-center gap-2 rounded-xl bg-cream px-3 py-2 text-xs text-ink">
                <Truck className="h-4 w-4 text-gold-700" />
                Add <b className="text-gold-700">{formatPrice(remaining)}</b> for free shipping
              </p>
            )}

            {/* coupon */}
            <div className="mt-4">
              {couponCode ? (
                <div className="flex items-center justify-between rounded-xl bg-emerald/10 px-3 py-2 text-sm text-emerald">
                  <span className="flex items-center gap-1.5"><Check className="h-4 w-4" /> {couponCode} applied</span>
                  <button onClick={removeCoupon} className="text-xs underline">Remove</button>
                </div>
              ) : (
                <>
                  <div className="flex gap-2">
                    <input
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                      placeholder="Discount code"
                      className="w-full rounded-full border border-gold-200 bg-cream px-4 py-2.5 text-sm outline-none focus:border-gold-500"
                    />
                    <button onClick={() => applyCoupon(code)} className="shrink-0 rounded-full bg-ink px-5 text-xs uppercase tracking-wide2 text-cream hover:bg-ink-light">
                      Apply
                    </button>
                  </div>
                  {couponError && <p className="mt-1 text-xs text-maroon">{couponError}</p>}
                  <p className="mt-1.5 text-xs text-ink-soft">Try <b>SHINE10</b> for 10% off</p>
                </>
              )}
            </div>

            <div className="mt-5 space-y-2 border-t border-gold-200/70 pt-4 text-sm">
              <div className="flex justify-between text-ink-light">
                <span>Subtotal</span><span>{mounted ? formatPrice(subtotal) : "—"}</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-emerald">
                  <span>Discount</span><span>−{formatPrice(discount)}</span>
                </div>
              )}
              <div className="flex justify-between text-ink-light">
                <span>Shipping</span>
                <span>{remaining > 0 ? "Calculated at checkout" : "FREE"}</span>
              </div>
              <div className="flex justify-between border-t border-gold-200/70 pt-3 font-display text-2xl text-ink">
                <span>Total</span><span>{mounted ? formatPrice(total) : "—"}</span>
              </div>
            </div>

            <Link href="/checkout" className="btn-ink mt-5 w-full">Proceed to Checkout</Link>
            <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-ink-soft">
              <Shield className="h-4 w-4 text-gold-600" /> Secure checkout · Razorpay
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
