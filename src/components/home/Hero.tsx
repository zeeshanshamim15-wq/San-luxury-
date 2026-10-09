"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { EDITORIAL } from "@/lib/images";
import { Magnetic } from "@/components/motion/Magnetic";
import { ArrowRight, Sparkle, Star } from "@/components/Icons";

const line = {
  hidden: { opacity: 0, y: "60%" },
  show: (i: number) => ({
    opacity: 1,
    y: "0%",
    transition: { duration: 0.8, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream-fade">
      <div className="pointer-events-none absolute -right-40 top-0 h-[560px] w-[560px] rounded-full bg-gold-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-gold-100/50 blur-3xl" />

      <div className="container-lux relative grid items-center gap-8 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-6 lg:py-16">
        {/* copy */}
        <div className="relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow flex items-center gap-2"
          >
            <Sparkle className="h-4 w-4 text-gold-500" />
            Jewellery for your brighter story
          </motion.p>

          <h1 className="mt-4 font-display text-[54px] font-medium leading-[0.95] text-ink sm:text-[72px] lg:text-[82px]">
            {["Timeless", "Elegance,"].map((w, i) => (
              <span key={w} className="block overflow-hidden">
                <motion.span custom={i} variants={line} initial="hidden" animate="show" className="block">
                  {w}
                </motion.span>
              </span>
            ))}
            <span className="block overflow-hidden">
              <motion.span
                custom={2}
                variants={line}
                initial="hidden"
                animate="show"
                className="block bg-gold-sheen bg-clip-text text-transparent"
              >
                Made for You
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-6 max-w-md text-[15px] leading-relaxed text-ink-light"
          >
            Discover handcrafted jewellery that adds meaning to every moment —
            where traditional artistry meets modern design. Beauty without compromise.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.7 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Magnetic>
              <Link href="/products" className="btn-gold group">
                Shop the Collection
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Magnetic>
            <Magnetic strength={0.25}>
              <Link href="/products?category=bridal" className="btn-outline">
                Explore Bridal
              </Link>
            </Magnetic>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-10 flex flex-wrap items-center gap-6"
          >
            <div>
              <div className="flex text-gold-500">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} filled className="h-4 w-4" />
                ))}
              </div>
              <p className="mt-1 text-xs text-ink-soft">
                <b className="text-ink">4.8/5</b> from 10,000+ happy customers
              </p>
            </div>
            <div className="h-10 w-px bg-gold-300/60" />
            <p className="text-xs text-ink-soft">
              <b className="text-ink">Free shipping</b> above ₹999<br />
              7-day easy returns
            </p>
          </motion.div>
        </div>

        {/* visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[32px] border border-gold-300/60 shadow-cardHover sm:max-w-lg">
            <motion.div
              className="absolute inset-0"
              animate={{ scale: [1, 1.08] }}
              transition={{ duration: 14, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            >
              <Image
                src={EDITORIAL.hero}
                alt="Model wearing San Luxury handcrafted gold jewellery"
                fill
                priority
                sizes="(max-width:1024px) 90vw, 45vw"
                className="object-cover"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-transparent" />

            {/* vertical label */}
            <span className="absolute left-4 top-6 [writing-mode:vertical-rl] font-accent text-[10px] uppercase tracking-luxe text-cream/90">
              San Luxury · Est. Craft
            </span>
          </div>

          {/* floating bestseller chip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.7 }}
            className="absolute -left-3 bottom-12 hidden rounded-2xl border border-gold-200 bg-cream/95 px-4 py-3 shadow-card backdrop-blur sm:block"
          >
            <p className="font-accent text-[10px] uppercase tracking-luxe text-gold-700">Bestseller</p>
            <p className="font-display text-lg leading-tight text-ink">Mayura Kundan Choker</p>
            <p className="text-sm text-gold-700">₹10,990</p>
          </motion.div>

          {/* floating tag */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.25, duration: 0.7 }}
            className="absolute -right-2 top-10 hidden rounded-full bg-ink px-4 py-2 text-xs uppercase tracking-wide2 text-gold-200 shadow-card sm:block"
          >
            More than jewellery — a feeling
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
