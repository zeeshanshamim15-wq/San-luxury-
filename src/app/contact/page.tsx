import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { ContactForm } from "@/components/ContactForm";
import { Whatsapp, Instagram, Facebook } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with San Luxury — we're here to help on email, phone and WhatsApp.",
};

export default function ContactPage() {
  return (
    <div className="container-lux py-14">
      <div className="mb-10 text-center">
        <p className="eyebrow">We&apos;d love to hear from you</p>
        <h1 className="mt-2 font-display text-6xl text-ink">Get in Touch</h1>
        <p className="mx-auto mt-3 max-w-lg text-ink-light">
          Questions about an order, sizing, or a custom piece? Our team replies within 24 hours —
          and within minutes on WhatsApp.
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        {/* info */}
        <div className="space-y-4">
          <a href={`https://wa.me/${SITE.whatsapp}`} className="flex items-center gap-4 rounded-2xl border border-gold-200 p-5 transition-colors hover:border-gold-400">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald/10 text-emerald">
              <Whatsapp className="h-6 w-6" />
            </span>
            <div>
              <p className="font-medium text-ink">WhatsApp us</p>
              <p className="text-sm text-ink-soft">{SITE.phone} · fastest reply</p>
            </div>
          </a>
          <a href={`mailto:${SITE.email}`} className="flex items-center gap-4 rounded-2xl border border-gold-200 p-5 transition-colors hover:border-gold-400">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-100 font-display text-xl text-gold-700">@</span>
            <div>
              <p className="font-medium text-ink">Email</p>
              <p className="text-sm text-ink-soft">{SITE.email}</p>
            </div>
          </a>
          <a href={`tel:${SITE.phoneRaw}`} className="flex items-center gap-4 rounded-2xl border border-gold-200 p-5 transition-colors hover:border-gold-400">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-100 font-display text-xl text-gold-700">☎</span>
            <div>
              <p className="font-medium text-ink">Call us</p>
              <p className="text-sm text-ink-soft">{SITE.phone} · Mon–Sat, 10am–7pm</p>
            </div>
          </a>
          <div className="rounded-2xl bg-cream-warm p-5">
            <p className="font-accent text-xs uppercase tracking-luxe text-gold-700">Follow us</p>
            <div className="mt-3 flex gap-3">
              <a href={SITE.social.instagram} aria-label="Instagram" className="rounded-full border border-gold-300 p-3 text-gold-700 transition-colors hover:bg-gold-500 hover:text-ink">
                <Instagram className="h-5 w-5" />
              </a>
              <a href={SITE.social.facebook} aria-label="Facebook" className="rounded-full border border-gold-300 p-3 text-gold-700 transition-colors hover:bg-gold-500 hover:text-ink">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* form */}
        <div className="rounded-3xl border border-gold-200/70 bg-cream p-7 shadow-card">
          <h2 className="mb-4 font-display text-3xl text-ink">Send us a message</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
