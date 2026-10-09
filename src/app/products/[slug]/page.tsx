import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllProducts, getProductBySlug, getRelatedProducts } from "@/data/products";
import { ProductGallery } from "@/components/ProductGallery";
import { ProductPurchasePanel } from "@/components/ProductPurchasePanel";
import { ReviewsSection } from "@/components/ReviewsSection";
import { ProductRow } from "@/components/ProductRow";
import { ChevronRight } from "@/components/Icons";
import { SITE } from "@/lib/site";
import { formatPrice } from "@/lib/format";

export function generateStaticParams() {
  return getAllProducts().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const product = getProductBySlug(params.slug);
  if (!product) return { title: "Product not found" };
  return {
    title: product.name,
    description: product.shortDescription,
    openGraph: { title: product.name, description: product.shortDescription },
  };
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();
  const related = getRelatedProducts(product);

  return (
    <>
      {/* breadcrumb */}
      <nav className="container-lux flex items-center gap-1.5 py-4 text-xs text-ink-soft">
        <Link href="/" className="hover:text-gold-700">Home</Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <Link href="/products" className="hover:text-gold-700">Shop</Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <Link href={`/products?category=${product.category}`} className="capitalize hover:text-gold-700">{product.category}</Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="truncate text-ink">{product.name}</span>
      </nav>

      <div className="container-lux grid gap-10 pb-8 lg:grid-cols-2">
        <ProductGallery images={product.images} category={product.category} name={product.name} />
        <ProductPurchasePanel product={product} />
      </div>

      <ReviewsSection product={product} />

      <ProductRow eyebrow="You may also love" title="Complete the look" products={related} />

      {/* JSON-LD: Product */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: product.name,
            description: product.shortDescription,
            brand: { "@type": "Brand", name: SITE.name },
            offers: {
              "@type": "Offer",
              price: product.price,
              priceCurrency: "INR",
              availability: product.stock > 0 ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
              url: `${SITE.url}/products/${product.slug}`,
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: product.rating,
              reviewCount: product.reviewCount,
            },
          }),
        }}
      />
    </>
  );
}
