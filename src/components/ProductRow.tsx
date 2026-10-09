import type { Product } from "@/types";
import { SectionHeading } from "./SectionHeading";
import { ProductCard } from "./ProductCard";
import { Reveal, RevealGroup, RevealItem } from "./motion/Reveal";

export function ProductRow({
  eyebrow,
  title,
  products,
  viewAllHref,
}: {
  eyebrow?: string;
  title: string;
  products: Product[];
  viewAllHref?: string;
}) {
  return (
    <section className="container-lux py-16">
      <Reveal>
        <SectionHeading eyebrow={eyebrow} title={title} viewAllHref={viewAllHref} />
      </Reveal>
      <RevealGroup className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4" stagger={0.07}>
        {products.map((p, i) => (
          <RevealItem key={p.id} variant="up">
            <ProductCard product={p} priority={i < 2} />
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
