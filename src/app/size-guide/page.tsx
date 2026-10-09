import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Size Guide",
  description: "Find your perfect ring and bangle size with the San Luxury size guide.",
};

const RINGS = [
  { in: "6", dia: "14.9 mm", circ: "46.8 mm" },
  { in: "7", dia: "15.7 mm", circ: "49.3 mm" },
  { in: "8", dia: "16.5 mm", circ: "51.9 mm" },
  { in: "9", dia: "17.3 mm", circ: "54.4 mm" },
  { in: "10", dia: "18.1 mm", circ: "57.0 mm" },
];

const BANGLES = [
  { size: "2.4", dia: "6.1 cm" },
  { size: "2.6", dia: "6.5 cm" },
  { size: "2.8", dia: "7.0 cm" },
  { size: "2.10", dia: "7.6 cm" },
];

export default function SizeGuidePage() {
  return (
    <div className="bg-cream-fade">
      <div className="container-lux max-w-3xl py-14">
        <p className="eyebrow">Find your fit</p>
        <h1 className="mt-2 font-display text-5xl text-ink">Size Guide</h1>
        <p className="mt-4 text-[15px] leading-relaxed text-ink-light">
          Not sure of your size? Use the charts below, or message us on WhatsApp — we&apos;re
          happy to help you measure at home.
        </p>

        {/* Ring sizes */}
        <section className="mt-10">
          <h2 className="font-display text-3xl text-ink">Ring Sizes</h2>
          <p className="mt-1 text-sm text-ink-soft">Tip: wrap a strip of paper around your finger, mark it, and measure the length (circumference).</p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border border-gold-200 text-left text-sm">
              <thead className="bg-cream-warm">
                <tr>
                  <th className="px-4 py-3 font-accent text-xs uppercase tracking-wide2 text-ink">Indian Size</th>
                  <th className="px-4 py-3 font-accent text-xs uppercase tracking-wide2 text-ink">Diameter</th>
                  <th className="px-4 py-3 font-accent text-xs uppercase tracking-wide2 text-ink">Circumference</th>
                </tr>
              </thead>
              <tbody>
                {RINGS.map((r) => (
                  <tr key={r.in} className="border-t border-gold-100">
                    <td className="px-4 py-3 text-ink">{r.in}</td>
                    <td className="px-4 py-3 text-ink-light">{r.dia}</td>
                    <td className="px-4 py-3 text-ink-light">{r.circ}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Bangle sizes */}
        <section className="mt-10">
          <h2 className="font-display text-3xl text-ink">Bangle Sizes</h2>
          <p className="mt-1 text-sm text-ink-soft">Measure the inner diameter of a bangle that fits you well.</p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border border-gold-200 text-left text-sm">
              <thead className="bg-cream-warm">
                <tr>
                  <th className="px-4 py-3 font-accent text-xs uppercase tracking-wide2 text-ink">Size</th>
                  <th className="px-4 py-3 font-accent text-xs uppercase tracking-wide2 text-ink">Inner Diameter</th>
                </tr>
              </thead>
              <tbody>
                {BANGLES.map((b) => (
                  <tr key={b.size} className="border-t border-gold-100">
                    <td className="px-4 py-3 text-ink">{b.size}</td>
                    <td className="px-4 py-3 text-ink-light">{b.dia}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <p className="mt-10 bg-cream-warm p-5 text-sm text-ink-light">
          Chain lengths & other measurements are listed on each product page. Sizes are
          approximate — reach out on WhatsApp for personalised help.
        </p>
      </div>
    </div>
  );
}
