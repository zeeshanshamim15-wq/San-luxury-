"use client";

import { useState } from "react";
import { Truck, Check } from "./Icons";

const inputCls =
  "w-full border border-gold-200 bg-cream px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-gold-500";

const STEPS = ["Order Placed", "Packed", "Shipped", "Out for Delivery", "Delivered"];

export function TrackOrderForm() {
  const [submitted, setSubmitted] = useState(false);
  const [orderId, setOrderId] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO(wix/courier): look up real order status via orders API / courier webhook.
    setSubmitted(true);
  };

  if (submitted) {
    const current = 2; // demo: "Shipped"
    return (
      <div className="border border-gold-200 p-7">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center bg-gold-100 text-gold-700">
            <Truck className="h-6 w-6" />
          </span>
          <div>
            <p className="font-display text-2xl text-ink">Order #{orderId || "SL12345678"}</p>
            <p className="text-sm text-ink-soft">Estimated delivery: 3–4 days</p>
          </div>
        </div>
        <ol className="mt-7 space-y-4">
          {STEPS.map((s, i) => {
            const done = i <= current;
            return (
              <li key={s} className="flex items-center gap-3">
                <span className={`flex h-7 w-7 items-center justify-center text-xs ${done ? "bg-emerald text-cream" : "bg-cream-warm text-ink-soft"}`}>
                  {done ? <Check className="h-4 w-4" /> : i + 1}
                </span>
                <span className={done ? "text-ink" : "text-ink-soft"}>{s}</span>
              </li>
            );
          })}
        </ol>
        <button onClick={() => setSubmitted(false)} className="btn-outline mt-7">Track another order</button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="border border-gold-200 p-7">
      <p className="font-accent text-xs uppercase tracking-wide2 text-ink">Order ID</p>
      <input value={orderId} onChange={(e) => setOrderId(e.target.value)} placeholder="e.g. SL12345678" className={`${inputCls} mt-2`} required />
      <p className="mt-4 font-accent text-xs uppercase tracking-wide2 text-ink">Email or phone</p>
      <input placeholder="Registered email or phone" className={`${inputCls} mt-2`} required />
      <button type="submit" className="btn-gold mt-5 w-full">Track Order</button>
    </form>
  );
}
