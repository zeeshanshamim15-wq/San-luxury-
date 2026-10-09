"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { formatPrice } from "@/lib/format";
import { SITE } from "@/lib/site";
import { Check, Truck, Gift, Sparkle } from "./Icons";

export function SuccessView() {
  const params = useSearchParams();
  const orderId = params.get("order") ?? "SL00000000";
  const [details, setDetails] = useState<{ total: number; method: string } | null>(null);

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem("sl_last_order");
      if (raw) setDetails(JSON.parse(raw));
    } catch {}
    // TODO(analytics): fire GA4 + Meta `purchase` here, deduped by orderId.
  }, []);

  return (
    <div className="container-lux flex flex-col items-center py-16 text-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald/10">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald text-cream">
          <Check className="h-8 w-8" />
        </div>
      </div>
      <p className="eyebrow mt-6 flex items-center gap-2">
        <Sparkle className="h-4 w-4 text-gold-500" /> Thank you for shopping with us
      </p>
      <h1 className="mt-2 font-display text-5xl text-ink">Order Confirmed!</h1>
      <p className="mt-3 max-w-md text-ink-light">
        Your order <b className="text-gold-700">#{orderId}</b> has been placed successfully.
        A confirmation has been sent to your email and phone.
      </p>

      <div className="mt-8 w-full max-w-md rounded-3xl border border-gold-200/70 bg-cream-warm p-6 text-left">
        <div className="flex items-center justify-between border-b border-gold-200/60 pb-3">
          <span className="text-sm text-ink-soft">Order number</span>
          <span className="font-medium text-ink">#{orderId}</span>
        </div>
        {details && (
          <>
            <div className="flex items-center justify-between border-b border-gold-200/60 py-3">
              <span className="text-sm text-ink-soft">Amount</span>
              <span className="font-display text-xl text-ink">{formatPrice(details.total)}</span>
            </div>
            <div className="flex items-center justify-between py-3">
              <span className="text-sm text-ink-soft">Payment</span>
              <span className="font-medium capitalize text-ink">{details.method === "cod" ? "Cash on Delivery" : "Paid Online"}</span>
            </div>
          </>
        )}
        <div className="mt-2 flex items-center gap-2 rounded-xl bg-cream px-3 py-2.5 text-sm text-ink">
          <Truck className="h-5 w-5 text-gold-700" />
          Estimated delivery in 4–7 business days
        </div>
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/products" className="btn-gold">Continue Shopping</Link>
        <Link href="/track-order" className="btn-outline">Track Order</Link>
      </div>

      <p className="mt-8 flex items-center gap-2 text-sm text-ink-soft">
        <Gift className="h-4 w-4 text-gold-600" />
        Need help? WhatsApp us at{" "}
        <a href={`https://wa.me/${SITE.whatsapp}`} className="text-gold-700 link-underline">{SITE.phone}</a>
      </p>
    </div>
  );
}
