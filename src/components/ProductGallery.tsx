"use client";

import Image from "next/image";
import { useState } from "react";
import type { CategorySlug } from "@/types";
import { ProductPlaceholder } from "./ProductPlaceholder";

export function ProductGallery({
  images,
  category,
  name,
}: {
  images: string[];
  category: CategorySlug;
  name: string;
}) {
  const [active, setActive] = useState(0);
  const hasImages = images.length > 0;
  // Placeholder gallery shows 3 tiles for visual balance.
  const thumbs = hasImages ? images : [0, 1, 2];

  return (
    <div className="lg:sticky lg:top-24">
      <div className="relative aspect-square overflow-hidden rounded-[24px] border border-gold-200/70 bg-cream-warm shadow-card">
        {hasImages ? (
          <Image src={images[active]} alt={name} fill priority sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
        ) : (
          <ProductPlaceholder category={category} label={name} />
        )}
      </div>
      <div className="mt-3 grid grid-cols-4 gap-3">
        {thumbs.map((t, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`relative aspect-square overflow-hidden rounded-xl border transition-colors ${
              active === i ? "border-gold-500" : "border-gold-100 hover:border-gold-300"
            }`}
          >
            {hasImages ? (
              <Image src={images[i]} alt="" fill sizes="120px" className="object-cover" />
            ) : (
              <ProductPlaceholder category={category} />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
