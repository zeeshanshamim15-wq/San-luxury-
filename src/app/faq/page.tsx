import type { Metadata } from "next";
import Link from "next/link";
import { FaqAccordion } from "@/components/FaqAccordion";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQs",
  description: "Answers to common questions about San Luxury jewellery, orders, shipping, returns and care.",
};

const FAQS = [
  { q: "What is San Luxury jewellery made of?", a: "Our pieces are handcrafted fashion jewellery — typically gold-plated brass or alloy set with Kundan, cubic zirconia, faux pearls and coloured stones. Each piece is nickel-free and skin-friendly for comfortable all-day wear." },
  { q: "Is the jewellery real gold?", a: "No — San Luxury specialises in premium imitation / fashion jewellery. You get the look and finish of fine jewellery, crafted with heirloom charm, at an accessible price." },
  { q: "How long does delivery take?", a: "Orders are processed in 1–2 business days and delivered in 4–7 business days across India. You'll get a tracking link on email and WhatsApp once your order ships." },
  { q: "Do you offer Cash on Delivery?", a: "Yes, COD is available on eligible pin codes for a small ₹49 handling fee. Prepaid orders (UPI/Card/Netbanking via Razorpay) are processed fastest and get an extra discount." },
  { q: "What is your return policy?", a: "We offer easy 7-day returns and exchanges on unused items in original packaging. Message us on WhatsApp or email with your order number to start a hassle-free return." },
  { q: "How do I care for my jewellery?", a: "Keep it away from water, perfume and moisture, and store it in the pouch provided. See our Care Guide for full tips to keep your pieces looking new." },
  { q: "Will the plating fade?", a: "With proper care, the plating lasts long. Like all fashion jewellery, plating naturally wears over time with heavy use — our care tips help it last much longer." },
  { q: "How can I track my order?", a: "Use the Track Order page with your order ID, or check 'My Orders' in your account. You'll also receive tracking updates on WhatsApp." },
];

export default function FaqPage() {
  return (
    <div className="container-lux max-w-3xl py-14">
      <div className="text-center">
        <p className="eyebrow">Help centre</p>
        <h1 className="mt-2 font-display text-6xl text-ink">Frequently Asked Questions</h1>
        <div className="divider-mini mt-4" />
      </div>
      <div className="mt-10">
        <FaqAccordion items={FAQS} />
      </div>
      <div className="mt-10 bg-cream-warm p-7 text-center">
        <h2 className="font-display text-3xl text-ink">Still have a question?</h2>
        <p className="mt-2 text-sm text-ink-light">Our team replies within minutes on WhatsApp.</p>
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          <a href={`https://wa.me/${SITE.whatsapp}`} className="btn-gold">Chat on WhatsApp</a>
          <Link href="/contact" className="btn-outline">Contact Us</Link>
        </div>
      </div>
    </div>
  );
}
