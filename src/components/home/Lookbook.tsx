"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { EDITORIAL } from "@/lib/images";
import { ArrowRight } from "@/components/Icons";

export function Lookbook() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.12, 1.22]);

  return (
    <section ref={ref} className="relative h-[70vh] min-h-[460px] w-full overflow-hidden">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <Image
          src={EDITORIAL.heroNecklace}
          alt="San Luxury autumn edit"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-ink/30 to-transparent" />

      <div className="container-lux relative flex h-full items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-lg text-cream"
        >
          <p className="font-accent text-[11px] uppercase tracking-luxe text-gold-300">The Autumn Edit</p>
          <h2 className="mt-3 font-display text-5xl leading-[1.02] text-cream sm:text-6xl">
            Everyday pieces,<br />effortlessly you
          </h2>
          <p className="mt-4 max-w-md text-sm text-cream/80">
            Delicate chains, warm gold tones and pieces that layer beautifully —
            curated for the way you actually dress.
          </p>
          <Link href="/products?sort=new" className="btn-gold group mt-7">
            Shop the Look
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
