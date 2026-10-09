import type { Product } from "@/types";
import { StarRating } from "./StarRating";

/** Static sample reviews. Wire Wix Reviews here later. */
const SAMPLE = [
  { name: "Riya M.", stars: 5, date: "2 weeks ago", text: "Absolutely gorgeous! The finish is premium and it feels so light. Worth every rupee." },
  { name: "Sneha T.", stars: 5, date: "1 month ago", text: "Bought it for my engagement and got endless compliments. Packaging was beautiful too." },
  { name: "Kavya P.", stars: 4, date: "1 month ago", text: "Lovely piece, colour exactly as shown. Delivery was quick. Would order again." },
];

export function ReviewsSection({ product }: { product: Product }) {
  const dist = [5, 4, 3, 2, 1].map((s) => ({
    s,
    pct: s === 5 ? 78 : s === 4 ? 16 : s === 3 ? 4 : s === 2 ? 1 : 1,
  }));
  return (
    <section className="container-lux border-t border-gold-100 py-14">
      <div className="grid gap-10 lg:grid-cols-[300px_1fr]">
        <div>
          <p className="eyebrow">Customer reviews</p>
          <div className="mt-2 flex items-end gap-3">
            <span className="font-display text-6xl text-ink">{product.rating.toFixed(1)}</span>
            <div className="pb-2">
              <StarRating rating={product.rating} size={16} showCount={false} />
              <p className="mt-1 text-xs text-ink-soft">{product.reviewCount} verified reviews</p>
            </div>
          </div>
          <div className="mt-4 space-y-1.5">
            {dist.map((d) => (
              <div key={d.s} className="flex items-center gap-2 text-xs text-ink-soft">
                <span className="w-3">{d.s}</span>
                <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-gold-100">
                  <div className="h-full rounded-full bg-gold-500" style={{ width: `${d.pct}%` }} />
                </div>
                <span className="w-8 text-right">{d.pct}%</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-5">
          {SAMPLE.map((r) => (
            <div key={r.name} className="rounded-2xl border border-gold-100 p-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gold-100 font-display text-lg text-gold-700">
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-ink">{r.name}</p>
                    <p className="text-xs text-ink-soft">Verified buyer · {r.date}</p>
                  </div>
                </div>
                <StarRating rating={r.stars} size={13} showCount={false} />
              </div>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-light">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
