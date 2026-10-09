import type { Metadata } from "next";
import Link from "next/link";
import { User, Bag, Truck } from "@/components/Icons";

export const metadata: Metadata = { title: "My Account" };

export default function AccountPage() {
  return (
    <div className="container-lux max-w-md py-16">
      <div className="rounded-3xl border border-gold-200/70 bg-cream p-8 shadow-card">
        <div className="flex flex-col items-center text-center">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gold-100 text-gold-700">
            <User className="h-8 w-8" />
          </span>
          <h1 className="mt-4 font-display text-4xl text-ink">Welcome back</h1>
          <p className="mt-1 text-sm text-ink-soft">Sign in to view your orders & wishlist</p>
        </div>

        {/* TODO(wix): wire Wix Members login (email/password). This is a UI stub. */}
        <form className="mt-6 space-y-3">
          <input type="email" placeholder="Email address" className="w-full rounded-xl border border-gold-200 bg-cream px-4 py-3 text-sm outline-none focus:border-gold-500" />
          <input type="password" placeholder="Password" className="w-full rounded-xl border border-gold-200 bg-cream px-4 py-3 text-sm outline-none focus:border-gold-500" />
          <button type="button" className="btn-gold w-full">Sign In</button>
        </form>
        <p className="mt-4 text-center text-sm text-ink-soft">
          New here? <Link href="/account" className="text-gold-700 link-underline">Create an account</Link>
        </p>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3">
        <Link href="/products" className="flex items-center gap-2 rounded-2xl bg-cream-warm p-4 text-sm text-ink">
          <Bag className="h-5 w-5 text-gold-600" /> My Orders
        </Link>
        <Link href="/track-order" className="flex items-center gap-2 bg-cream-warm p-4 text-sm text-ink">
          <Truck className="h-5 w-5 text-gold-600" /> Track Order
        </Link>
      </div>
    </div>
  );
}
