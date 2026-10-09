"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useCartStore } from "@/hooks/useCartStore";
import { SITE } from "@/lib/site";
import { formatPrice } from "@/lib/format";
import { LineThumb } from "./LineThumb";
import { Close, Plus, Minus, Bag, Truck, Check } from "./Icons";

export function CartDrawer() {
  const {
    lines, isOpen, closeCart, updateQuantity, removeItem,
    couponCode, couponError, applyCoupon, removeCoupon,
  } = useCartStore();
  const subtotal = useCartStore((s) => s.subtotal());
  const discount = useCartStore((s) => s.discount());
  const total = useCartStore((s) => s.total());
  const [code, setCode] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  const threshold = SITE.freeShippingThreshold;
  const remaining = Math.max(0, threshold - subtotal);
  const progress = Math.min(100, (subtotal / threshold) * 100);
  const count = lines.reduce((n, l) => n + l.quantity, 0);

  return (
    <div className={`fixed inset-0 z-[70] ${isOpen ? "" : "pointer-events-none"}`} aria-hidden={!isOpen}>
      <div
        className={`absolute inset-0 bg-ink/50 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}
        onClick={closeCart}
      />
      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-cream shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* header */}
        <div className="flex items-center justify-between border-b border-gold-200/70 px-5 py-4">
          <div className="flex items-center gap-2">
            <Bag className="h-5 w-5 text-gold-700" />
            <span className="font-display text-2xl text-ink">Your Bag</span>
            <span className="text-sm text-ink-soft">({mounted ? count : 0})</span>
          </div>
          <button aria-label="Close cart" onClick={closeCart}>
            <Close className="h-6 w-6 text-ink" />
          </button>
        </div>

        {/* free shipping progress */}
        {mounted && count > 0 && (
          <div className="border-b border-gold-100 bg-cream-warm px-5 py-3">
            <p className="flex items-center gap-2 text-xs text-ink">
              <Truck className="h-4 w-4 text-gold-700" />
              {remaining > 0 ? (
                <>Add <b className="text-gold-700">{formatPrice(remaining)}</b> more for FREE shipping</>
              ) : (
                <span className="flex items-center gap-1 text-emerald"><Check className="h-4 w-4" /> You&apos;ve unlocked free shipping!</span>
              )}
            </p>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-gold-100">
              <div className="h-full rounded-full bg-gold-sheen transition-all duration-500" style={{ width: `${progress}%` }} />
            </div>
          </div>
        )}

        {/* lines */}
        <div className="flex-1 overflow-y-auto px-5">
          {!mounted || count === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
              <Bag className="h-12 w-12 text-gold-300" />
              <p className="font-display text-2xl text-ink">Your bag is empty</p>
              <p className="text-sm text-ink-soft">Let&apos;s find something that sparkles.</p>
              <button onClick={closeCart} className="btn-gold mt-2">
                Start Shopping
              </button>
            </div>
          ) : (
            <ul className="divide-y divide-gold-100 py-2">
              {lines.map((l) => (
                <li key={l.lineId} className="flex gap-4 py-4">
                  <Link href={`/products/${l.slug}`} onClick={closeCart} className="relative h-24 w-20 shrink-0 overflow-hidden rounded-xl bg-cream-warm">
                    <LineThumb image={l.image} category={l.category} alt={l.name} />
                  </Link>
                  <div className="flex min-w-0 flex-1 flex-col">
                    <Link href={`/products/${l.slug}`} onClick={closeCart} className="line-clamp-2 font-display text-lg leading-tight text-ink">
                      {l.name}
                    </Link>
                    {l.selectedOptions && (
                      <p className="mt-0.5 text-xs text-ink-soft">
                        {Object.entries(l.selectedOptions).map(([k, v]) => `${k}: ${v}`).join(" · ")}
                      </p>
                    )}
                    <div className="mt-auto flex items-center justify-between pt-2">
                      <div className="flex items-center rounded-full border border-gold-200">
                        <button aria-label="Decrease" onClick={() => updateQuantity(l.lineId, l.quantity - 1)} className="px-2.5 py-1.5 text-ink hover:text-gold-700">
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="min-w-6 text-center text-sm">{l.quantity}</span>
                        <button aria-label="Increase" onClick={() => updateQuantity(l.lineId, l.quantity + 1)} className="px-2.5 py-1.5 text-ink hover:text-gold-700">
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <span className="font-medium text-ink">{formatPrice(l.price * l.quantity)}</span>
                    </div>
                  </div>
                  <button aria-label="Remove" onClick={() => removeItem(l.lineId)} className="self-start text-ink-soft hover:text-maroon">
                    <Close className="h-4 w-4" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* footer */}
        {mounted && count > 0 && (
          <div className="border-t border-gold-200/70 px-5 py-4">
            {/* coupon */}
            {couponCode ? (
              <div className="mb-3 flex items-center justify-between rounded-xl bg-emerald/10 px-3 py-2 text-sm text-emerald">
                <span className="flex items-center gap-1.5"><Check className="h-4 w-4" /> Code {couponCode} applied</span>
                <button onClick={removeCoupon} className="text-xs underline">Remove</button>
              </div>
            ) : (
              <div className="mb-3">
                <div className="flex gap-2">
                  <input
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="Discount code (try SHINE10)"
                    className="w-full rounded-full border border-gold-200 bg-cream px-4 py-2 text-sm outline-none focus:border-gold-500"
                  />
                  <button onClick={() => applyCoupon(code)} className="shrink-0 rounded-full border border-gold-500 px-4 text-xs uppercase tracking-wide2 text-gold-700 hover:bg-gold-500 hover:text-ink">
                    Apply
                  </button>
                </div>
                {couponError && <p className="mt-1 text-xs text-maroon">{couponError}</p>}
              </div>
            )}

            <div className="space-y-1.5 text-sm">
              <div className="flex justify-between text-ink-soft">
                <span>Subtotal</span><span>{formatPrice(subtotal)}</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-emerald">
                  <span>Discount</span><span>−{formatPrice(discount)}</span>
                </div>
              )}
              <div className="flex justify-between border-t border-gold-100 pt-2 font-display text-xl text-ink">
                <span>Total</span><span>{formatPrice(total)}</span>
              </div>
            </div>

            <Link href="/checkout" onClick={closeCart} className="btn-ink mt-4 w-full">
              Checkout · {formatPrice(total)}
            </Link>
            <button onClick={closeCart} className="mt-2 w-full text-center text-xs uppercase tracking-wide2 text-ink-soft hover:text-gold-700">
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}
