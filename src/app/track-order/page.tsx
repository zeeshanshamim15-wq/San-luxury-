import type { Metadata } from "next";
import { TrackOrderForm } from "@/components/TrackOrderForm";

export const metadata: Metadata = {
  title: "Track Your Order",
  description: "Track your San Luxury order status in real time.",
};

export default function TrackOrderPage() {
  return (
    <div className="container-lux max-w-xl py-14">
      <div className="text-center">
        <p className="eyebrow">Order status</p>
        <h1 className="mt-2 font-display text-5xl text-ink">Track Your Order</h1>
        <p className="mt-3 text-sm text-ink-light">
          Enter your order ID to see exactly where your jewellery is.
        </p>
      </div>
      <div className="mt-8">
        <TrackOrderForm />
      </div>
    </div>
  );
}
