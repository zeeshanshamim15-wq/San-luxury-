import { SITE } from "@/lib/site";
import { Truck, Shield, Gift, Refresh } from "@/components/Icons";

const ICONS = { truck: Truck, shield: Shield, gift: Gift, refresh: Refresh };

export function TrustBar() {
  return (
    <section className="border-y border-gold-200/60 bg-cream">
      <div className="container-lux grid grid-cols-2 gap-y-6 py-7 md:grid-cols-4">
        {SITE.usps.map((u) => {
          const Icon = ICONS[u.icon as keyof typeof ICONS];
          return (
            <div key={u.title} className="flex items-center gap-3 px-2">
              <Icon className="h-8 w-8 shrink-0 text-gold-600" />
              <div>
                <p className="font-accent text-[13px] uppercase tracking-wide2 text-ink">{u.title}</p>
                <p className="text-xs text-ink-soft">{u.detail}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
