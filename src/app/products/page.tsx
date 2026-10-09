import type { Metadata } from "next";
import { getAllProducts } from "@/data/products";
import { ProductsExplorer } from "@/components/ProductsExplorer";

export const metadata: Metadata = {
  title: "Shop All Jewellery",
  description:
    "Browse San Luxury's handcrafted necklaces, earrings, bracelets, bangles, rings and bridal sets. Free shipping above ₹999.",
};

type Sort = "featured" | "popular" | "new" | "price-asc" | "price-desc";

export default function ProductsPage({
  searchParams,
}: {
  searchParams: { category?: string; sort?: string };
}) {
  const products = getAllProducts();
  const category = searchParams.category ?? "all-products";
  const sort = (searchParams.sort as Sort) ?? "featured";
  return (
    <ProductsExplorer
      products={products}
      initialCategory={category}
      initialSort={sort}
    />
  );
}
