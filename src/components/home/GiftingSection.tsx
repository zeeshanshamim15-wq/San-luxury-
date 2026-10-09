import Link from "next/link";
import Image from "next/image";
import { Gift, ArrowRight } from "@/components/Icons";
import { OCCASIONS } from "@/lib/categories";
import { EDITORIAL } from "@/lib/images";
import { Reveal } from "@/components/motion/Reveal";

export function GiftingSection() {
  return (
    <section className="relative overflow-hidden bg-ink py-16 text-cream">
      <div className="pointer-events-none absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-gold-500/10 blur-3xl" />
      <div className="container-lux relative grid items-center gap-10 lg:grid-cols-2">
        <Reveal variant="left">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-cream/10">
            <Image
              src={EDITORIAL.wedding}
              alt="A gift that speaks — San Luxury gifting"
              fill
              sizes="(max-width:1024px) 90vw, 45vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
            <div className="absolute bottom-5 left-5 rounded-full bg-cream/95 px-4 py-2 text-xs uppercase tracking-wide2 text-ink">
              Premium gift-ready packaging
            </div>
          </div>
        </Reveal>

        <Reveal variant="right">
          <p className="eyebrow text-gold-300">A gift that speaks</p>
          <h2 className="mt-2 font-display text-5xl leading-tight text-cream sm:text-[56px]">
            Celebrate every bond<br />with something timeless
          </h2>
          <p className="mt-4 max-w-md text-sm text-cream/70">
            From first anniversaries to festive surprises — find a piece as
            meaningful as the moment.
          </p>

          <div className="mt-7 grid grid-cols-2 gap-3">
            {OCCASIONS.map((o) => (
              <Link
                key={o.slug}
                href={`/products?category=${o.tag}`}
                className="group flex items-center justify-between rounded-2xl border border-cream/12 bg-cream/[0.03] p-4 transition-colors hover:border-gold-300/60 hover:bg-cream/[0.06]"
              >
                <span className="flex items-center gap-3">
                  <Gift className="h-5 w-5 text-gold-300" />
                  <span className="font-display text-lg text-cream">{o.label}</span>
                </span>
                <ArrowRight className="h-4 w-4 text-cream/40 transition-all group-hover:translate-x-1 group-hover:text-gold-300" />
              </Link>
            ))}
          </div>

          <Link href="/products?category=gifting" className="btn-gold mt-6">
            <Gift className="h-4 w-4" />
            Shop Gifting
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
