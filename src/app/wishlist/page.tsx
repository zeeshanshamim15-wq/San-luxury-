import type { Metadata } from "next";
import Link from "next/link";
import { Heart } from "@/components/Icons";

export const metadata: Metadata = { title: "Wishlist" };

export default function WishlistPage() {
  return (
    <div className="container-lux flex flex-col items-center py-24 text-center">
      <Heart className="h-14 w-14 text-gold-300" />
      <h1 className="mt-5 font-display text-4xl text-ink">Your wishlist</h1>
      <p className="mt-2 max-w-sm text-ink-soft">
        Tap the heart on any piece to save it here for later.
      </p>
      <Link href="/products" className="btn-gold mt-6">Browse Jewellery</Link>
    </div>
  );
}
