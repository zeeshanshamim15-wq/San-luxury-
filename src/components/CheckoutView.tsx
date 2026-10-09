"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useCartStore } from "@/hooks/useCartStore";
import { SITE } from "@/lib/site";
import { formatPrice } from "@/lib/format";
import { LineThumb } from "./LineThumb";
import { Shield, Truck, Check, Bag } from "./Icons";

const inputCls =
  "w-full rounded-xl border border-gold-200 bg-cream px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-gold-500";

export function CheckoutView() {
  const router = useRouter();
  const { lines, clearCart } = useCartStore();
  const subtotal = useCartStore((s) => s.subtotal());
  const discount = useCartStore((s) => s.discount());
  const total = useCartStore((s) => s.total());
  const [mounted, setMounted] = useState(false);
  const [pay, setPay] = useState<"prepaid" | "cod">("prepaid");
  const [placing, setPlacing] = useState(false);
  useEffect(() => setMounted(true), []);

  const codFee = pay === "cod" ? 49 : 0;
  const shipping = subtotal >= SITE.freeShippingThreshold ? 0 : subtotal > 0 ? 79 : 0;
  const grand = total + codFee + shipping;

  const placeOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setPlacing(true);
    // TODO(razorpay): POST /api/razorpay → open Razorpay → POST /api/verify-payment
    // → complete Wix order → clearCart. For the frontend build we simulate success.
    const orderId = "SL" + Date.now().toString().slice(-8);
    setTimeout(() => {
      try {
        sessionStorage.setItem(
          "sl_last_order",
          JSON.stringify({ orderId, total: grand, method: pay, count: lines.reduce((n, l) => n + l.quantity, 0) }),
        );
      } catch {}
      clearCart();
      router.push(`/success?order=${orderId}`);
    }, 900);
  };

  if (mounted && lines.length === 0 && !placing) {
    return (
      <div className="container-lux flex flex-col items-center justify-center py-24 text-center">
        <Bag className="h-14 w-14 text-gold-300" />
        <h1 className="mt-5 font-display text-4xl text-ink">Nothing to check out</h1>
        <Link href="/products" className="btn-gold mt-6">Shop Now</Link>
      </div>
    );
  }

  return (
    <div className="container-lux py-10">
      <h1 className="font-display text-5xl text-ink">Checkout</h1>
      <form onSubmit={placeOrder} className="mt-8 grid gap-10 lg:grid-cols-[1fr_400px]">
        {/* form */}
        <div className="space-y-8">
          <section>
            <h2 className="mb-4 font-display text-2xl text-ink">Contact</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              <input required placeholder="Email address" type="email" className={`${inputCls} sm:col-span-2`} />
              <input required placeholder="Phone number" type="tel" className={`${inputCls} sm:col-span-2`} />
            </div>
          </section>

          <section>
            <h2 className="mb-4 font-display text-2xl text-ink">Shipping Address</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              <input required placeholder="First name" className={inputCls} />
              <input required placeholder="Last name" className={inputCls} />
              <input required placeholder="Address (House no, Street)" className={`${inputCls} sm:col-span-2`} />
              <input placeholder="Apartment, landmark (optional)" className={`${inputCls} sm:col-span-2`} />
              <input required placeholder="City" className={inputCls} />
              <input required placeholder="State" className={inputCls} />
              <input required placeholder="PIN code" className={inputCls} />
              <input placeholder="Country" defaultValue="India" className={inputCls} />
            </div>
          </section>

          <section>
            <h2 className="mb-4 font-display text-2xl text-ink">Payment</h2>
            <div className="space-y-3">
              <label className={`flex cursor-pointer items-center justify-between rounded-xl border p-4 transition-colors ${pay === "prepaid" ? "border-gold-500 bg-gold-50" : "border-gold-200"}`}>
                <span className="flex items-center gap-3">
                  <input type="radio" name="pay" checked={pay === "prepaid"} onChange={() => setPay("prepaid")} className="accent-gold-600" />
                  <span>
                    <span className="block font-medium text-ink">Pay Online (UPI / Card / Netbanking)</span>
                    <span className="block text-xs text-ink-soft">Secure payment via Razorpay · Extra 5% off</span>
                  </span>
                </span>
                <Shield className="h-5 w-5 text-gold-600" />
              </label>
              <label className={`flex cursor-pointer items-center justify-between rounded-xl border p-4 transition-colors ${pay === "cod" ? "border-gold-500 bg-gold-50" : "border-gold-200"}`}>
                <span className="flex items-center gap-3">
                  <input type="radio" name="pay" checked={pay === "cod"} onChange={() => setPay("cod")} className="accent-gold-600" />
                  <span>
                    <span className="block font-medium text-ink">Cash on Delivery</span>
                    <span className="block text-xs text-ink-soft">Pay when it arrives · ₹49 handling fee</span>
                  </span>
                </span>
                <Truck className="h-5 w-5 text-gold-600" />
              </label>
            </div>
          </section>
        </div>

        {/* summary */}
        <aside className="lg:sticky lg:top-24 lg:h-fit">
          <div className="rounded-3xl border border-gold-200/70 bg-cream-warm p-6">
            <h2 className="font-display text-2xl text-ink">Your Order</h2>
            <ul className="mt-4 max-h-64 space-y-3 overflow-y-auto">
              {mounted && lines.map((l) => (
                <li key={l.lineId} className="flex items-center gap-3">
                  <div className="relative h-14 w-12 shrink-0 overflow-hidden rounded-lg bg-cream">
                    <LineThumb image={l.image} category={l.category} alt={l.name} />
                    <span className="absolute -right-1.5 -top-1.5 z-10 flex h-5 min-w-5 items-center justify-center rounded-full bg-ink px-1 text-[10px] text-cream">{l.quantity}</span>
                  </div>
                  <p className="line-clamp-2 flex-1 text-sm text-ink">{l.name}</p>
                  <span className="text-sm text-ink">{formatPrice(l.price * l.quantity)}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5 space-y-2 border-t border-gold-200/70 pt-4 text-sm">
              <div className="flex justify-between text-ink-light"><span>Subtotal</span><span>{mounted ? formatPrice(subtotal) : "—"}</span></div>
              {discount > 0 && <div className="flex justify-between text-emerald"><span>Discount</span><span>−{formatPrice(discount)}</span></div>}
              <div className="flex justify-between text-ink-light"><span>Shipping</span><span>{shipping === 0 ? "FREE" : formatPrice(shipping)}</span></div>
              {codFee > 0 && <div className="flex justify-between text-ink-light"><span>COD fee</span><span>{formatPrice(codFee)}</span></div>}
              <div className="flex justify-between border-t border-gold-200/70 pt-3 font-display text-2xl text-ink"><span>Total</span><span>{mounted ? formatPrice(grand) : "—"}</span></div>
            </div>

            <button type="submit" disabled={placing} className="btn-gold mt-5 w-full disabled:opacity-70">
              {placing ? "Placing order…" : (<>Place Order · {mounted ? formatPrice(grand) : ""}</>)}
            </button>
            <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-ink-soft">
              <Check className="h-4 w-4 text-emerald" /> 7-day easy returns · Secure & encrypted
            </p>
          </div>
        </aside>
      </form>
    </div>
  );
}
