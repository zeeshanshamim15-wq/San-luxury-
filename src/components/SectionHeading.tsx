import Link from "next/link";
import { ArrowRight } from "./Icons";

export function SectionHeading({
  eyebrow,
  title,
  viewAllHref,
  center = false,
}: {
  eyebrow?: string;
  title: string;
  viewAllHref?: string;
  center?: boolean;
}) {
  return (
    <div className={`mb-8 flex items-end justify-between gap-4 ${center ? "flex-col text-center" : ""}`}>
      <div className={center ? "mx-auto" : ""}>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2 className="mt-1.5 font-display text-4xl leading-tight text-ink sm:text-[42px]">
          {title}
        </h2>
        {center && <div className="divider-mini mt-4" />}
      </div>
      {viewAllHref && !center && (
        <Link
          href={viewAllHref}
          className="group flex shrink-0 items-center gap-1.5 font-accent text-xs uppercase tracking-wide2 text-gold-700"
        >
          View All
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      )}
    </div>
  );
}
