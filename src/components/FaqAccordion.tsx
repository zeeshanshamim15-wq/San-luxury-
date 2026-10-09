"use client";

import { useState } from "react";
import { Plus, Minus } from "./Icons";

export interface Faq {
  q: string;
  a: string;
}

export function FaqAccordion({ items }: { items: Faq[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-gold-100 border-y border-gold-100">
      {items.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
            >
              <span className="font-display text-xl text-ink">{f.q}</span>
              {isOpen ? (
                <Minus className="h-5 w-5 shrink-0 text-gold-700" />
              ) : (
                <Plus className="h-5 w-5 shrink-0 text-gold-700" />
              )}
            </button>
            <div
              className={`grid transition-all duration-300 ${
                isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="text-[15px] leading-relaxed text-ink-light">{f.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
