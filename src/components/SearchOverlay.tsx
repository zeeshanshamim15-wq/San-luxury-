"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { PRODUCTS } from "@/data/products";
import { formatPrice } from "@/lib/format";
import { Search, Close } from "./Icons";
import { LineThumb } from "./LineThumb";

const SUGGESTED = ["Kundan", "Choker", "Jhumka", "Emerald", "Bridal", "Under ₹999"];

export function SearchOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [q, setQ] = useState("");

  useEffect(() => {
    if (open) setQ("");
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const results = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return [];
    return PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(term) ||
        p.category.includes(term) ||
        p.tags.some((t) => t.includes(term)),
    ).slice(0, 6);
  }, [q]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      <div className="absolute inset-0 bg-ink/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative mx-auto mt-0 w-full bg-cream shadow-2xl animate-fade-up">
        <div className="container-lux py-6">
          <div className="flex items-center gap-3 border-b-2 border-gold-500 pb-3">
            <Search className="h-6 w-6 text-gold-700" />
            <input
              autoFocus
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search necklaces, jhumkas, bridal sets…"
              className="w-full bg-transparent font-display text-2xl text-ink placeholder:text-ink-soft/60 focus:outline-none"
            />
            <button aria-label="Close search" onClick={onClose}>
              <Close className="h-6 w-6 text-ink" />
            </button>
          </div>

          {!q && (
            <div className="mt-5 flex flex-wrap items-center gap-2">
              <span className="eyebrow mr-1">Popular:</span>
              {SUGGESTED.map((s) => (
                <button
                  key={s}
                  onClick={() => setQ(s)}
                  className="rounded-full border border-gold-300 px-3.5 py-1.5 text-sm text-gold-700 transition-colors hover:bg-gold-500 hover:text-ink"
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          {q && (
            <div className="mt-5 max-h-[60vh] overflow-y-auto">
              {results.length === 0 ? (
                <p className="py-8 text-center text-ink-soft">
                  No matches for “{q}”. Try “kundan” or “earrings”.
                </p>
              ) : (
                <div className="grid gap-2 sm:grid-cols-2">
                  {results.map((p) => (
                    <Link
                      key={p.id}
                      href={`/products/${p.slug}`}
                      onClick={onClose}
                      className="flex items-center gap-4 rounded-2xl p-2 transition-colors hover:bg-cream-warm"
                    >
                      <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-cream-warm">
                        <LineThumb image={p.images[0] ?? null} category={p.category} alt={p.name} sizes="64px" />
                      </div>
                      <div className="min-w-0">
                        <p className="truncate font-display text-lg leading-tight text-ink">{p.name}</p>
                        <p className="text-sm text-gold-700">{formatPrice(p.price)}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
