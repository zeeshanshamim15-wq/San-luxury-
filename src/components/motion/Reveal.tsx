"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const VARIANTS: Record<string, Variants> = {
  up: {
    hidden: { opacity: 0, y: 32 },
    show: { opacity: 1, y: 0 },
  },
  fade: {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.94 },
    show: { opacity: 1, scale: 1 },
  },
  left: {
    hidden: { opacity: 0, x: -40 },
    show: { opacity: 1, x: 0 },
  },
  right: {
    hidden: { opacity: 0, x: 40 },
    show: { opacity: 1, x: 0 },
  },
};

export function Reveal({
  children,
  variant = "up",
  delay = 0,
  duration = 0.7,
  className,
  once = true,
  amount = 0.2,
}: {
  children: ReactNode;
  variant?: keyof typeof VARIANTS;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  amount?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={VARIANTS[variant]}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/** Staggers direct children that are <RevealItem>s. */
export function RevealGroup({
  children,
  className,
  stagger = 0.09,
  once = true,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  once?: boolean;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.15 }}
      variants={{ show: { transition: { staggerChildren: stagger } } }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  variant = "up",
  className,
  duration = 0.6,
}: {
  children: ReactNode;
  variant?: keyof typeof VARIANTS;
  className?: string;
  duration?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={VARIANTS[variant]}
      transition={{ duration, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
