import Link from "next/link";
import { Sparkle, ArrowRight } from "@/components/Icons";

export function PromoBanner() {
  return (
    <section className="container-lux py-8">
      <div className="relative overflow-hidden rounded-3xl border border-gold-300/60 bg-gold-sheen px-8 py-10 text-center shadow-card">
        <div className="pointer-events-none absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-cream/30 to-transparent bg-[length:200%_100%]" />
        <div className="relative">
          <Sparkle className="mx-auto h-7 w-7 text-ink/70" />
          <p className="mt-2 font-accent text-xs uppercase tracking-luxe text-ink/70">Limited-time welcome offer</p>
          <h3 className="mt-1 font-display text-4xl text-ink sm:text-5xl">
            Flat 10% off your first order
          </h3>
          <p className="mt-2 text-sm text-ink/75">
            Use code <span className="rounded-md bg-ink/90 px-2 py-0.5 font-semibold tracking-wide text-gold-200">SHINE10</span> at checkout
          </p>
          <Link href="/products" className="btn-ink mt-6">
            Shop Now <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
