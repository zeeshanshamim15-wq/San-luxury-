import Link from "next/link";
import Image from "next/image";
import { SectionHeading } from "@/components/SectionHeading";
import { ArrowRight } from "@/components/Icons";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { COLLECTION_IMAGE } from "@/lib/images";
import type { CategorySlug } from "@/types";

const FEATURED: { slug: CategorySlug; label: string; tagline: string; span?: boolean }[] = [
  { slug: "necklaces", label: "Necklaces", tagline: "Grace around your story", span: true },
  { slug: "earrings", label: "Earrings", tagline: "Little details, big beauty" },
  { slug: "bracelets", label: "Bracelets", tagline: "For everyday elegance" },
  { slug: "sets", label: "Jewellery Sets", tagline: "Complete your look", span: true },
];

export function CollectionsGrid() {
  return (
    <section className="container-lux py-16">
      <Reveal>
        <SectionHeading eyebrow="Explore our" title="Signature Collections" viewAllHref="/products" />
      </Reveal>
      {/* editorial asymmetric grid */}
      <RevealGroup className="grid auto-rows-[220px] grid-cols-2 gap-4 sm:auto-rows-[300px] lg:grid-cols-4">
        {FEATURED.map((c) => (
          <RevealItem
            key={c.slug}
            variant="scale"
            className={c.span ? "col-span-2" : "col-span-1"}
          >
            <Link href={`/products?category=${c.slug}`} className="group block h-full">
              <div className="relative h-full overflow-hidden rounded-2xl shadow-card transition-shadow duration-500 group-hover:shadow-cardHover">
                <Image
                  src={COLLECTION_IMAGE[c.slug]!}
                  alt={c.label}
                  fill
                  sizes="(max-width:1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="font-display text-2xl text-cream sm:text-3xl">{c.label}</p>
                      <p className="text-xs text-cream/80">{c.tagline}</p>
                    </div>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/50 text-cream transition-colors group-hover:border-gold-300 group-hover:bg-gold-500/20 group-hover:text-gold-200">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
