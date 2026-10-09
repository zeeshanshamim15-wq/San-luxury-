import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Sparkle, Check } from "@/components/Icons";
import { SITE } from "@/lib/site";
import { EDITORIAL } from "@/lib/images";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "San Luxury crafts meaningful, beautiful and accessible fashion jewellery — where India's traditional artistry meets modern design.",
};

const VALUES = [
  { t: "Meaningful", d: "Jewellery that celebrates stories, culture and craftsmanship — not just an accessory." },
  { t: "Accessible", d: "Heirloom charm and premium finish, at a price every woman can enjoy." },
  { t: "Modern", d: "Traditional techniques reimagined in contemporary silhouettes for every occasion." },
];

export default function AboutPage() {
  return (
    <>
      {/* hero */}
      <section className="bg-cream-fade">
        <div className="container-lux py-16 text-center">
          <p className="eyebrow flex items-center justify-center gap-2">
            <Sparkle className="h-4 w-4 text-gold-500" /> Our Story
          </p>
          <h1 className="mt-3 font-display text-6xl leading-tight text-ink">
            More than a brand —<br />an emotion
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-ink-light">
            {SITE.tagline} — San Luxury was born from a simple belief: that jewellery
            should feel meaningful, beautiful and accessible to every woman.
          </p>
        </div>
      </section>

      {/* story */}
      <section className="container-lux grid items-center gap-10 py-16 lg:grid-cols-2">
        <div className="relative aspect-[5/4] overflow-hidden rounded-[28px] border border-gold-300/60 shadow-cardHover">
          <Image src={EDITORIAL.sets} alt="San Luxury craftsmanship" fill sizes="(max-width:1024px) 90vw, 45vw" className="object-cover" />
        </div>
        <div>
          <h2 className="font-display text-4xl text-ink">Rooted in heritage,<br />designed for today</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-light">
            We draw inspiration from India&apos;s rich craftsmanship heritage, merging
            traditional artistry with contemporary design. Our artisans focus meticulously
            on detailing — every curve, stone, texture and plating reflects quality and care.
          </p>
          <p className="mt-3 text-[15px] leading-relaxed text-ink-light">
            San Luxury specialises in fine fashion jewellery that captures beauty without
            compromise — crafted with heirloom charm, made to be worn and loved every day.
          </p>
          <ul className="mt-5 space-y-2">
            {["Handcrafted detailing", "Skin-friendly, nickel-free plating", "Premium gift-ready packaging"].map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-ink">
                <Check className="h-5 w-5 text-emerald" /> {f}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* values */}
      <section className="bg-cream-warm py-16">
        <div className="container-lux">
          <div className="mb-8 text-center">
            <p className="eyebrow">What we stand for</p>
            <h2 className="mt-1 font-display text-4xl text-ink">Our promise to you</h2>
            <div className="divider-mini mt-4" />
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {VALUES.map((v) => (
              <div key={v.t} className="rounded-3xl bg-cream p-7 shadow-card">
                <Sparkle className="h-7 w-7 text-gold-400" />
                <h3 className="mt-3 font-display text-2xl text-ink">{v.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-light">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* cta */}
      <section className="container-lux py-16 text-center">
        <h2 className="font-display text-4xl text-ink">Ready to find your sparkle?</h2>
        <Link href="/products" className="btn-gold mt-5">Explore the Collection</Link>
      </section>
    </>
  );
}
