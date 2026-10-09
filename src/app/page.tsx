import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { CollectionsGrid } from "@/components/home/CollectionsGrid";
import { GiftingSection } from "@/components/home/GiftingSection";
import { PromoBanner } from "@/components/home/PromoBanner";
import { Lookbook } from "@/components/home/Lookbook";
import { Testimonials } from "@/components/home/Testimonials";
import { ProductRow } from "@/components/ProductRow";
import { BrandStory } from "@/components/home/BrandStory";
import { getBestsellers, getFeaturedProducts, getNewArrivals } from "@/data/products";
import { SITE } from "@/lib/site";

export default function HomePage() {
  const bestsellers = getBestsellers();
  const featured = getFeaturedProducts().slice(0, 4);
  const newArrivals = getNewArrivals();

  return (
    <>
      <Hero />
      <TrustBar />
      <CollectionsGrid />
      <ProductRow
        eyebrow="Most loved"
        title="Bestsellers"
        products={bestsellers}
        viewAllHref="/products?sort=popular"
      />
      <PromoBanner />
      <Lookbook />
      <GiftingSection />
      <ProductRow
        eyebrow="Fresh in"
        title="New Arrivals"
        products={newArrivals}
        viewAllHref="/products?sort=new"
      />
      <BrandStory />
      <Testimonials />

      {/* JSON-LD: Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: SITE.name,
            url: SITE.url,
            slogan: SITE.tagline,
            email: SITE.email,
            telephone: SITE.phone,
          }),
        }}
      />
    </>
  );
}
