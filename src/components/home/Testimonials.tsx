import { SectionHeading } from "@/components/SectionHeading";
import { StarRating } from "@/components/StarRating";
import { Sparkle } from "@/components/Icons";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";

const REVIEWS = [
  {
    name: "Ananya R.",
    location: "Mumbai",
    text: "The Kundan choker looked even better in person. Got so many compliments at my sister's wedding — nobody believed it wasn't real gold!",
    product: "Mayura Royal Kundan Choker",
  },
  {
    name: "Priya S.",
    location: "Delhi",
    text: "Beautiful packaging, fast delivery and the earrings are so lightweight. This is my third order from San Luxury and definitely not the last.",
    product: "Chandbali Jhumka Earrings",
  },
  {
    name: "Meera K.",
    location: "Bangalore",
    text: "Ordered for a gift and ended up buying one for myself too. The finish is stunning and it hasn't faded at all. Highly recommend!",
    product: "Rajwadi Emerald Drop Necklace",
  },
];

export function Testimonials() {
  return (
    <section className="bg-cream-warm py-16">
      <div className="container-lux">
        <Reveal>
          <SectionHeading eyebrow="Loved by 10,000+" title="What our customers say" center />
        </Reveal>
        <RevealGroup className="grid gap-5 md:grid-cols-3">
          {REVIEWS.map((r) => (
            <RevealItem key={r.name} variant="up" className="flex">
            <figure className="flex flex-col rounded-3xl bg-cream p-7 shadow-card">
              <Sparkle className="h-6 w-6 text-gold-400" />
              <StarRating rating={5} size={14} showCount={false} />
              <blockquote className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-light">
                “{r.text}”
              </blockquote>
              <figcaption className="mt-5 border-t border-gold-100 pt-4">
                <p className="font-display text-lg text-ink">{r.name}</p>
                <p className="text-xs text-ink-soft">{r.location} · Verified buyer</p>
                <p className="mt-1 text-xs text-gold-700">{r.product}</p>
              </figcaption>
            </figure>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
