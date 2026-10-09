"use client";

import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/types";
import { formatPrice, discountPercent } from "@/lib/format";
import { useCartStore } from "@/hooks/useCartStore";
import { ProductPlaceholder } from "./ProductPlaceholder";
import { StarRating } from "./StarRating";
import { Bag, Heart } from "./Icons";

export function ProductCard({ product, priority }: { product: Product; priority?: boolean }) {
  const addItem = useCartStore((s) => s.addItem);
  const off = discountPercent(product.price, product.compareAtPrice);
  const hasOptions = !!product.options?.length;

  const quickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    // Products with options open the PDP to choose; others add directly.
    if (hasOptions) {
      window.location.href = `/products/${product.slug}`;
      return;
    }
    addItem(product, 1);
  };

  return (
    <Link href={`/products/${product.slug}`} className="group block">
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-cream-warm shadow-card transition-shadow duration-500 group-hover:shadow-cardHover">
        {product.images.length === 0 ? (
          <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
            <ProductPlaceholder category={product.category} label={product.category} />
          </div>
        ) : (
          <>
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              sizes="(max-width:768px) 50vw, 25vw"
              priority={priority}
              className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
            />
            {product.images[1] && (
              <Image
                src={product.images[1]}
                alt=""
                fill
                sizes="(max-width:768px) 50vw, 25vw"
                aria-hidden
                className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
            )}
          </>
        )}

        {/* badges */}
        <div className="absolute left-3 top-3 flex flex-col gap-1.5">
          {off && (
            <span className="rounded-full bg-maroon px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-cream">
              {off}% Off
            </span>
          )}
          {product.badges?.slice(0, 1).map((b) => (
            <span key={b} className="rounded-full bg-ink/85 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-gold-200">
              {b}
            </span>
          ))}
        </div>

        {/* wishlist */}
        <button
          aria-label="Add to wishlist"
          onClick={(e) => e.preventDefault()}
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-cream/85 text-ink opacity-0 backdrop-blur transition-all duration-300 hover:text-maroon group-hover:opacity-100"
        >
          <Heart className="h-[18px] w-[18px]" />
        </button>

        {/* quick add */}
        <div className="absolute inset-x-3 bottom-3 translate-y-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <button
            onClick={quickAdd}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-cream/95 py-3 font-accent text-[12px] uppercase tracking-wide2 text-ink backdrop-blur transition-colors hover:bg-gold-sheen"
          >
            <Bag className="h-4 w-4" />
            {hasOptions ? "Choose Options" : "Add to Cart"}
          </button>
        </div>
      </div>

      <div className="mt-3.5 px-0.5">
        <StarRating rating={product.rating} count={product.reviewCount} size={12} />
        <h3 className="mt-1.5 line-clamp-1 font-display text-lg leading-snug text-ink transition-colors group-hover:text-gold-700">
          {product.name}
        </h3>
        <div className="mt-1 flex items-center gap-2">
          <span className="font-medium text-ink">{formatPrice(product.price)}</span>
          {product.compareAtPrice && (
            <span className="text-sm text-ink-soft line-through">
              {formatPrice(product.compareAtPrice)}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
