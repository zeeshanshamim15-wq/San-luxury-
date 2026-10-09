import Image from "next/image";
import type { CategorySlug } from "@/types";
import { ProductPlaceholder } from "./ProductPlaceholder";

/** Renders the first real image, or a branded placeholder if none exist yet. */
export function ProductImage({
  images,
  category,
  alt,
  sizes,
  priority,
  label,
}: {
  images: string[];
  category: CategorySlug;
  alt: string;
  sizes?: string;
  priority?: boolean;
  label?: string;
}) {
  const src = images[0];
  if (!src) return <ProductPlaceholder category={category} label={label} />;
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes ?? "(max-width:768px) 50vw, 25vw"}
      priority={priority}
      className="object-cover"
    />
  );
}
