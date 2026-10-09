import Image from "next/image";
import type { CategorySlug } from "@/types";
import { ProductPlaceholder } from "./ProductPlaceholder";

/** Small square thumbnail for cart/search rows — real image or branded fallback. */
export function LineThumb({
  image,
  category,
  alt = "",
  sizes = "120px",
}: {
  image: string | null;
  category: CategorySlug;
  alt?: string;
  sizes?: string;
}) {
  if (!image) return <ProductPlaceholder category={category} />;
  return <Image src={image} alt={alt} fill sizes={sizes} className="object-cover" />;
}
