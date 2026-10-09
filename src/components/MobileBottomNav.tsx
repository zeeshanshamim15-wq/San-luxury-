"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useCartStore } from "@/hooks/useCartStore";
import { Bag, Heart, Menu, User } from "./Icons";

export function MobileBottomNav() {
  const pathname = usePathname();
  const openCart = useCartStore((s) => s.openCart);
  const lines = useCartStore((s) => s.lines);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const count = mounted ? lines.reduce((n, l) => n + l.quantity, 0) : 0;

  const item = (active: boolean) =>
    `flex flex-1 flex-col items-center gap-1 py-2.5 text-[10px] uppercase tracking-wide2 ${
      active ? "text-gold-700" : "text-ink-soft"
    }`;

  return (
    <nav className="fixed bottom-0 left-0 z-40 w-full border-t border-gold-200/70 bg-cream/95 backdrop-blur md:hidden">
      <div className="flex items-stretch">
        <Link href="/products" className={item(pathname === "/products")}>
          <Menu className="h-5 w-5" />
          Shop
        </Link>
        <Link href="/wishlist" className={item(pathname === "/wishlist")}>
          <Heart className="h-5 w-5" />
          Wishlist
        </Link>
        <Link href="/account" className={item(pathname === "/account")}>
          <User className="h-5 w-5" />
          Account
        </Link>
        <button onClick={openCart} className={item(false)}>
          <span className="relative">
            <Bag className="h-5 w-5" />
            {count > 0 && (
              <span className="absolute -right-2 -top-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-gold-500 px-1 text-[9px] font-semibold text-ink">
                {count}
              </span>
            )}
          </span>
          Cart
        </button>
      </div>
    </nav>
  );
}
