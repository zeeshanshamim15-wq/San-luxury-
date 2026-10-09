import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { getAllProducts } from "@/data/products";
import { SHOPPABLE_CATEGORIES } from "@/lib/categories";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;
  const now = new Date();

  const staticRoutes = [
    "",
    "/products",
    "/about",
    "/contact",
    "/faq",
    "/track-order",
    "/care-guide",
    "/size-guide",
    "/shipping-policy",
    "/exchange-policy",
    "/privacy-policy",
    "/terms-and-conditions",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const categoryRoutes = SHOPPABLE_CATEGORIES.map((c) => ({
    url: `${base}/products?category=${c.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  const productRoutes = getAllProducts().map((p) => ({
    url: `${base}/products/${p.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...categoryRoutes, ...productRoutes];
}
