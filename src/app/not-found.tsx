import Link from "next/link";
import { Sparkle } from "@/components/Icons";

export default function NotFound() {
  return (
    <div className="container-lux flex flex-col items-center py-28 text-center">
      <Sparkle className="h-12 w-12 text-gold-400" />
      <p className="mt-4 font-display text-8xl text-gold-500">404</p>
      <h1 className="mt-2 font-display text-4xl text-ink">This page slipped away</h1>
      <p className="mt-2 max-w-sm text-ink-soft">
        The piece you&apos;re looking for may have moved or sold out. Let&apos;s get you back to the sparkle.
      </p>
      <div className="mt-6 flex gap-3">
        <Link href="/" className="btn-gold">Back Home</Link>
        <Link href="/products" className="btn-outline">Shop All</Link>
      </div>
    </div>
  );
}
