"use client";

import { useState } from "react";
import { ArrowRight, Check } from "./Icons";

export function NewsletterForm({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
    // TODO(wix): POST /api/subscribe → add Wix contact + welcome email.
    setDone(true);
  };

  if (done) {
    return (
      <div className="flex items-center gap-2 text-sm text-emerald">
        <Check className="h-5 w-5" />
        You&apos;re in! Watch your inbox for SHINE10.
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="flex w-full max-w-md items-center gap-2">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email address"
        className={`w-full rounded-full border bg-transparent px-5 py-3 text-sm outline-none transition-colors ${
          compact
            ? "border-cream/30 text-cream placeholder:text-cream/50 focus:border-gold-300"
            : "border-gold-300 text-ink placeholder:text-ink-soft/60 focus:border-gold-600"
        }`}
      />
      <button
        type="submit"
        aria-label="Subscribe"
        className="flex h-11 w-12 shrink-0 items-center justify-center rounded-full bg-gold-sheen text-ink transition-transform hover:scale-105"
      >
        <ArrowRight className="h-5 w-5" />
      </button>
    </form>
  );
}
