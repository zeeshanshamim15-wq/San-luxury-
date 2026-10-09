import { ANNOUNCEMENTS } from "@/lib/site";

export function AnnouncementBar() {
  const items = [...ANNOUNCEMENTS, ...ANNOUNCEMENTS];
  return (
    <div className="overflow-hidden bg-ink text-cream">
      <div className="flex w-max animate-marquee gap-12 py-2.5 whitespace-nowrap">
        {items.map((text, i) => (
          <span
            key={i}
            className="font-accent text-[11px] uppercase tracking-wide2 text-gold-200"
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
