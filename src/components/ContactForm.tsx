"use client";

import { useState } from "react";
import { Check } from "./Icons";

const inputCls =
  "w-full rounded-xl border border-gold-200 bg-cream px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-gold-500";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO(email): POST /api/contact → email to the brand inbox.
    setSent(true);
  };
  if (sent) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl bg-emerald/10 p-8 text-center text-emerald">
        <Check className="h-10 w-10" />
        <p className="font-display text-2xl">Message sent!</p>
        <p className="text-sm">We&apos;ll get back to you within 24 hours.</p>
      </div>
    );
  }
  return (
    <form onSubmit={submit} className="space-y-3">
      <div className="grid gap-3 sm:grid-cols-2">
        <input required placeholder="Your name" className={inputCls} />
        <input required type="email" placeholder="Email address" className={inputCls} />
      </div>
      <input placeholder="Subject" className={inputCls} />
      <textarea required rows={5} placeholder="How can we help?" className={inputCls} />
      <button type="submit" className="btn-gold w-full">Send Message</button>
    </form>
  );
}
