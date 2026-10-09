"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * A subtle gold ring that trails the pointer and grows over interactive
 * elements. Desktop + fine-pointer only; hidden on touch. Does not replace the
 * native cursor (kept for usability), it augments it.
 */
export function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });
  const [active, setActive] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const el = e.target as HTMLElement;
      setActive(!!el.closest("a,button,input,select,textarea,[role='button']"));
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden md:block"
      style={{ x: sx, y: sy }}
    >
      <motion.div
        className="sl-round border border-gold-500"
        animate={{
          width: active ? 46 : 26,
          height: active ? 46 : 26,
          opacity: active ? 0.9 : 0.55,
          backgroundColor: active ? "rgba(198,161,91,0.12)" : "rgba(198,161,91,0)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        style={{ marginLeft: "-50%", marginTop: "-50%" }}
      />
    </motion.div>
  );
}
