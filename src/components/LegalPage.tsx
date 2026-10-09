export interface LegalSection {
  heading: string;
  body: string[];
}

export function LegalPage({
  title,
  updated,
  intro,
  sections,
}: {
  title: string;
  updated?: string;
  intro?: string;
  sections: LegalSection[];
}) {
  return (
    <div className="bg-cream-fade">
      <div className="container-lux max-w-3xl py-14">
        <p className="eyebrow">San Luxury</p>
        <h1 className="mt-2 font-display text-5xl text-ink">{title}</h1>
        {updated && <p className="mt-2 text-xs text-ink-soft">Last updated: {updated}</p>}
        {intro && <p className="mt-5 text-[15px] leading-relaxed text-ink-light">{intro}</p>}
        <div className="mt-8 space-y-7">
          {sections.map((s) => (
            <section key={s.heading}>
              <h2 className="font-display text-2xl text-ink">{s.heading}</h2>
              {s.body.map((p, i) => (
                <p key={i} className="mt-2 text-[15px] leading-relaxed text-ink-light">{p}</p>
              ))}
            </section>
          ))}
        </div>
        <p className="mt-10 rounded-2xl bg-cream-warm p-5 text-sm text-ink-light">
          Note: This is placeholder policy copy for the storefront build.
          Replace with San Luxury&apos;s legally-approved text before launch.
        </p>
      </div>
    </div>
  );
}
