import Link from "next/link";
import { SITE } from "@/lib/site";
import { SHOPPABLE_CATEGORIES } from "@/lib/categories";
import { NewsletterForm } from "./NewsletterForm";
import { Instagram, Facebook, Whatsapp, Sparkle } from "./Icons";

const HELP = [
  { label: "FAQs", href: "/faq" },
  { label: "Shipping Policy", href: "/shipping-policy" },
  { label: "Returns & Exchange", href: "/exchange-policy" },
  { label: "Care Guide", href: "/care-guide" },
  { label: "Size Guide", href: "/size-guide" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
];
const COMPANY = [
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Bestsellers", href: "/products?sort=popular" },
  { label: "Track Order", href: "/track-order" },
];

export function Footer() {
  return (
    <footer className="mt-24 bg-ink text-cream">
      {/* Newsletter band */}
      <div className="border-b border-cream/10">
        <div className="container-lux flex flex-col items-center gap-5 py-14 text-center">
          <Sparkle className="h-7 w-7 text-gold-300" />
          <h2 className="font-display text-4xl text-cream sm:text-5xl">
            Join the San Luxury Circle
          </h2>
          <p className="max-w-xl text-sm text-cream/70">
            Be first to shop new collections, festive drops and members-only offers.
            Get <span className="text-gold-300">10% off</span> your first order.
          </p>
          <NewsletterForm compact />
        </div>
      </div>

      {/* Link columns */}
      <div className="container-lux grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-3xl text-gold-300">{SITE.name}</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-cream/70">
            {SITE.positioning}. Handcrafted fashion jewellery where traditional
            artistry meets modern design.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <a href={SITE.social.instagram} aria-label="Instagram" className="rounded-full border border-cream/20 p-2.5 transition-colors hover:border-gold-300 hover:text-gold-300">
              <Instagram className="h-4 w-4" />
            </a>
            <a href={SITE.social.facebook} aria-label="Facebook" className="rounded-full border border-cream/20 p-2.5 transition-colors hover:border-gold-300 hover:text-gold-300">
              <Facebook className="h-4 w-4" />
            </a>
            <a href={`https://wa.me/${SITE.whatsapp}`} aria-label="WhatsApp" className="rounded-full border border-cream/20 p-2.5 transition-colors hover:border-gold-300 hover:text-gold-300">
              <Whatsapp className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-accent text-xs uppercase tracking-luxe text-gold-300">Shop</h3>
          <ul className="mt-4 space-y-2.5">
            {SHOPPABLE_CATEGORIES.map((c) => (
              <li key={c.slug}>
                <Link href={`/products?category=${c.slug}`} className="text-sm text-cream/70 transition-colors hover:text-gold-200">
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-accent text-xs uppercase tracking-luxe text-gold-300">Company</h3>
          <ul className="mt-4 space-y-2.5">
            {COMPANY.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm text-cream/70 transition-colors hover:text-gold-200">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <h3 className="mt-6 font-accent text-xs uppercase tracking-luxe text-gold-300">Help</h3>
          <ul className="mt-4 space-y-2.5">
            {HELP.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm text-cream/70 transition-colors hover:text-gold-200">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-accent text-xs uppercase tracking-luxe text-gold-300">Get in touch</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-cream/70">
            <li>
              <a href={`mailto:${SITE.email}`} className="hover:text-gold-200">{SITE.email}</a>
            </li>
            <li>
              <a href={`tel:${SITE.phoneRaw}`} className="hover:text-gold-200">{SITE.phone}</a>
            </li>
            <li>{SITE.address}</li>
          </ul>
          <div className="mt-6">
            <p className="font-accent text-xs uppercase tracking-luxe text-gold-300">We Accept</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {["UPI", "Visa", "MasterCard", "RuPay", "COD"].map((m) => (
                <span key={m} className="rounded-md border border-cream/15 px-2.5 py-1 text-[11px] text-cream/60">
                  {m}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-lux flex flex-col items-center justify-between gap-3 py-6 text-center text-xs text-cream/50 sm:flex-row sm:text-left">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p>Handcrafted with love in India · {SITE.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
