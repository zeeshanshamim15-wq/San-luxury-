"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CartLine, Product } from "@/types";

/**
 * Local cart store (source of truth for the frontend build).
 * When wiring Wix: replace these actions with SDK calls to `currentCart`
 * (addToCurrentCart / updateCurrentCart / removeLineItems) and mirror the
 * server cart here. The component API (addItem/removeItem/…) stays the same.
 */

const COUPONS: Record<string, { type: "percent" | "flat"; value: number }> = {
  SHINE10: { type: "percent", value: 10 },
  LUXE500: { type: "flat", value: 500 },
};

interface CartState {
  lines: CartLine[];
  isOpen: boolean;
  couponCode: string | null;
  couponError: string;
  // derived helpers
  count: () => number;
  subtotal: () => number;
  discount: () => number;
  total: () => number;
  // actions
  addItem: (product: Product, qty?: number, opts?: Record<string, string>) => void;
  removeItem: (lineId: string) => void;
  updateQuantity: (lineId: string, qty: number) => void;
  applyCoupon: (code: string) => void;
  removeCoupon: () => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  setOpen: (open: boolean) => void;
}

const lineKey = (productId: string, opts?: Record<string, string>) =>
  productId + "::" + JSON.stringify(opts ?? {});

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      lines: [],
      isOpen: false,
      couponCode: null,
      couponError: "",

      count: () => get().lines.reduce((n, l) => n + l.quantity, 0),
      subtotal: () =>
        get().lines.reduce((sum, l) => sum + l.price * l.quantity, 0),
      discount: () => {
        const code = get().couponCode;
        if (!code) return 0;
        const c = COUPONS[code];
        if (!c) return 0;
        const sub = get().subtotal();
        return c.type === "percent"
          ? Math.round((sub * c.value) / 100)
          : Math.min(c.value, sub);
      },
      total: () => Math.max(0, get().subtotal() - get().discount()),

      addItem: (product, qty = 1, opts) => {
        const key = lineKey(product.id, opts);
        const lines = [...get().lines];
        const existing = lines.find(
          (l) => lineKey(l.productId, l.selectedOptions) === key,
        );
        if (existing) {
          existing.quantity += qty;
        } else {
          lines.push({
            lineId: key + "::" + Date.now(),
            productId: product.id,
            slug: product.slug,
            name: product.name,
            price: product.price,
            image: product.images[0] ?? null,
            category: product.category,
            quantity: qty,
            selectedOptions: opts,
          });
        }
        set({ lines, isOpen: true });
      },

      removeItem: (lineId) =>
        set({ lines: get().lines.filter((l) => l.lineId !== lineId) }),

      updateQuantity: (lineId, qty) =>
        set({
          lines: get()
            .lines.map((l) =>
              l.lineId === lineId ? { ...l, quantity: Math.max(1, qty) } : l,
            ),
        }),

      applyCoupon: (code) => {
        const normalized = code.trim().toUpperCase();
        if (!normalized) return;
        if (!COUPONS[normalized]) {
          set({ couponError: "That code isn't valid. Try SHINE10.", couponCode: null });
          return;
        }
        set({ couponCode: normalized, couponError: "" });
      },
      removeCoupon: () => set({ couponCode: null, couponError: "" }),

      clearCart: () => set({ lines: [], couponCode: null, couponError: "" }),
      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),
      setOpen: (open) => set({ isOpen: open }),
    }),
    { name: "san-luxury-cart" },
  ),
);
