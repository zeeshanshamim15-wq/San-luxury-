import Link from "next/link";
import Image from "next/image";
import { EDITORIAL } from "@/lib/images";
import { Reveal } from "@/components/motion/Reveal";
import { Sparkle } from "@/components/Icons";

const POINTS = [
  { k: "Handcrafted", v: "Every curve, stone and plating detailed with care." },
  { k: "Skin-friendly", v: "Nickel-free plating, gentle for all-day wear." },
  { k: "Heirloom charm", v: "Traditional artistry, modern silhouettes." },
];

export function BrandStory() {
  return (
    <section className="container-lux py-16">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <Reveal variant="left" className="relative order-2 lg:order-1">
          <div className="relative aspect-[5/4] overflow-hidden rounded-[28px] border border-gold-300/60 shadow-cardHover">
            <Image
              src={EDITORIAL.story}
              alt="San Luxury craftsmanship"
              fill
              sizes="(max-width:1024px) 90vw, 45vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/20 to-transparent" />
          </div>
          <div className="absolute -bottom-5 -right-4 hidden rounded-2xl border border-gold-200 bg-cream px-5 py-4 text-center shadow-card sm:block">
            <p className="font-display text-3xl text-gold-700">10k+</p>
            <p className="text-[11px] uppercase tracking-wide2 text-ink-soft">Happy customers</p>
          </div>
        </Reveal>
        <Reveal variant="right" className="order-1 lg:order-2">
          <p className="eyebrow flex items-center gap-2">
            <Sparkle className="h-4 w-4 text-gold-500" /> The San Luxury promise
          </p>
          <h2 className="mt-3 font-display text-5xl leading-tight text-ink">
            More than a brand —<br />an emotion you wear
          </h2>
          <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-ink-light">
            San Luxury celebrates the detail of traditional Indian artistry while
            embracing the sophistication of modern design. Beautiful, meaningful and
            accessible jewellery — crafted for every woman, every story, every day.
          </p>
          <div className="mt-7 grid gap-4 sm:grid-cols-3">
            {POINTS.map((p) => (
              <div key={p.k} className="rounded-2xl bg-cream-warm p-4">
                <p className="font-accent text-[12px] uppercase tracking-wide2 text-gold-700">{p.k}</p>
                <p className="mt-1 text-xs text-ink-light">{p.v}</p>
              </div>
            ))}
          </div>
          <Link href="/about" className="btn-outline mt-7">
            Our Story
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
