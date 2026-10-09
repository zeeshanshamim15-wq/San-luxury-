"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { CATEGORY_LINKS, SHOPPABLE_CATEGORIES } from "@/lib/categories";
import { useCartStore } from "@/hooks/useCartStore";
import { Search, User, Bag, Menu, Close, ChevronDown } from "./Icons";
import { SearchOverlay } from "./SearchOverlay";

const NAV = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/products" },
  { label: "Bestsellers", href: "/products?sort=popular" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const openCart = useCartStore((s) => s.openCart);
  const lines = useCartStore((s) => s.lines);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const count = mounted ? lines.reduce((n, l) => n + l.quantity, 0) : 0;

  return (
    <>
      <header
        className={`sticky top-0 z-40 border-b transition-all duration-300 ${
          scrolled
            ? "border-gold-200/60 bg-cream/95 backdrop-blur"
            : "border-transparent bg-cream"
        }`}
      >
        <div className="container-lux flex h-[72px] items-center justify-between gap-4">
          {/* left: mobile menu + desktop nav */}
          <div className="flex flex-1 items-center gap-6">
            <button
              aria-label="Open menu"
              onClick={() => setMenuOpen(true)}
              className="lg:hidden"
            >
              <Menu className="h-6 w-6 text-ink" />
            </button>
            <nav className="hidden items-center gap-7 lg:flex">
              {NAV.slice(0, 2).map((n) => (
                <Link
                  key={n.label}
                  href={n.href}
                  className="link-underline font-accent text-[13px] uppercase tracking-wide2 text-ink"
                >
                  {n.label}
                </Link>
              ))}
              {/* Collections dropdown */}
              <div className="group relative">
                <button className="flex items-center gap-1 font-accent text-[13px] uppercase tracking-wide2 text-ink">
                  Collections <ChevronDown className="h-3.5 w-3.5" />
                </button>
                <div className="invisible absolute left-1/2 top-full z-50 w-56 -translate-x-1/2 pt-4 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                  <div className="rounded-2xl border border-gold-200/70 bg-cream p-2 shadow-card">
                    {SHOPPABLE_CATEGORIES.map((c) => (
                      <Link
                        key={c.slug}
                        href={`/products?category=${c.slug}`}
                        className="block rounded-xl px-4 py-2.5 text-sm text-ink transition-colors hover:bg-cream-warm"
                      >
                        <span className="font-medium">{c.label}</span>
                        <span className="block text-xs text-ink-soft">{c.tagline}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </nav>
          </div>

          {/* center: logo */}
          <Link href="/" className="shrink-0" aria-label="San Luxury home">
            <Image
              src="/logo.png"
              alt="San Luxury"
              width={200}
              height={70}
              priority
              className="h-11 w-auto mix-blend-multiply sm:h-12"
            />
          </Link>

          {/* right: actions */}
          <div className="flex flex-1 items-center justify-end gap-4 sm:gap-5">
            <nav className="hidden items-center gap-7 lg:flex">
              {NAV.slice(2).map((n) => (
                <Link
                  key={n.label}
                  href={n.href}
                  className="link-underline font-accent text-[13px] uppercase tracking-wide2 text-ink"
                >
                  {n.label}
                </Link>
              ))}
            </nav>
            <button aria-label="Search" onClick={() => setSearchOpen(true)}>
              <Search className="h-[22px] w-[22px] text-ink transition-colors hover:text-gold-600" />
            </button>
            <Link href="/account" aria-label="Account" className="hidden sm:block">
              <User className="h-[22px] w-[22px] text-ink transition-colors hover:text-gold-600" />
            </Link>
            <button aria-label="Cart" onClick={openCart} className="relative">
              <Bag className="h-[22px] w-[22px] text-ink transition-colors hover:text-gold-600" />
              {count > 0 && (
                <span className="absolute -right-2 -top-2 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-gold-500 px-1 text-[10px] font-semibold text-ink">
                  {count}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile slide-in menu */}
      <div
        className={`fixed inset-0 z-50 lg:hidden ${menuOpen ? "" : "pointer-events-none"}`}
        aria-hidden={!menuOpen}
      >
        <div
          className={`absolute inset-0 bg-ink/40 transition-opacity duration-300 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={`absolute left-0 top-0 h-full w-[84%] max-w-sm bg-cream shadow-2xl transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-gold-200/60 px-5 py-4">
            <span className="font-display text-2xl text-ink">Menu</span>
            <button aria-label="Close menu" onClick={() => setMenuOpen(false)}>
              <Close className="h-6 w-6 text-ink" />
            </button>
          </div>
          <nav className="flex flex-col px-5 py-2">
            {NAV.map((n) => (
              <Link
                key={n.label}
                href={n.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-gold-100 py-3.5 font-accent text-sm uppercase tracking-wide2 text-ink"
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="px-5 py-3">
            <p className="eyebrow mb-2">Shop by category</p>
            <div className="grid grid-cols-2 gap-2">
              {CATEGORY_LINKS.slice(1).map((c) => (
                <Link
                  key={c.slug}
                  href={`/products?category=${c.slug}`}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl bg-cream-warm px-3 py-2.5 text-sm text-ink"
                >
                  {c.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
