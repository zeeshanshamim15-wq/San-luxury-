import type { CategorySlug } from "@/types";

/**
 * Elegant gold line-art placeholder shown when a product has no photo yet.
 * Keeps the jewellery grid looking intentional & premium until real images
 * are dropped into /public/products and listed on the product.
 */

const GLYPHS: Record<CategorySlug, JSX.Element> = {
  necklaces: (
    <g>
      <path d="M40 44 Q100 118 160 44" fill="none" />
      <path d="M52 52 Q100 108 148 52" fill="none" opacity="0.5" />
      <circle cx="100" cy="118" r="9" />
      <path d="M100 127 l-6 18 h12 z" />
      <circle cx="76" cy="96" r="3" />
      <circle cx="124" cy="96" r="3" />
    </g>
  ),
  earrings: (
    <g>
      <circle cx="74" cy="58" r="8" fill="none" />
      <path d="M74 66 Q60 96 74 118 Q88 96 74 66 Z" fill="none" />
      <circle cx="74" cy="100" r="4" />
      <circle cx="126" cy="58" r="8" fill="none" />
      <path d="M126 66 Q112 96 126 118 Q140 96 126 66 Z" fill="none" />
      <circle cx="126" cy="100" r="4" />
    </g>
  ),
  bracelets: (
    <g>
      <ellipse cx="100" cy="90" rx="58" ry="34" fill="none" />
      <ellipse cx="100" cy="90" rx="48" ry="26" fill="none" opacity="0.45" />
      <circle cx="100" cy="56" r="7" />
      <circle cx="70" cy="66" r="3" />
      <circle cx="130" cy="66" r="3" />
    </g>
  ),
  bangles: (
    <g>
      <circle cx="100" cy="90" r="46" fill="none" />
      <circle cx="100" cy="90" r="36" fill="none" opacity="0.4" />
      <circle cx="100" cy="90" r="26" fill="none" opacity="0.25" />
    </g>
  ),
  rings: (
    <g>
      <circle cx="100" cy="104" r="34" fill="none" />
      <path d="M84 74 L100 44 L116 74 Z" fill="none" />
      <path d="M84 74 h32" fill="none" />
      <path d="M92 74 L100 44 L108 74" fill="none" opacity="0.5" />
    </g>
  ),
  sets: (
    <g>
      <path d="M46 46 Q100 108 154 46" fill="none" />
      <circle cx="100" cy="108" r="8" />
      <circle cx="60" cy="132" r="7" fill="none" />
      <path d="M60 139 Q52 156 60 168 Q68 156 60 139 Z" fill="none" />
      <circle cx="140" cy="132" r="7" fill="none" />
      <path d="M140 139 Q132 156 140 168 Q148 156 140 139 Z" fill="none" />
    </g>
  ),
  bridal: (
    <g>
      <path d="M40 50 Q100 120 160 50" fill="none" />
      <path d="M54 60 Q100 112 146 60" fill="none" opacity="0.5" />
      <path d="M100 40 l5 12 12 2 -9 9 3 12 -11 -7 -11 7 3 -12 -9 -9 12 -2 z" />
      <circle cx="100" cy="120" r="6" />
    </g>
  ),
};

export function ProductPlaceholder({
  category,
  className = "",
  label,
}: {
  category: CategorySlug;
  className?: string;
  label?: string;
}) {
  return (
    <div
      className={`relative flex h-full w-full items-center justify-center overflow-hidden bg-cream-fade ${className}`}
    >
      {/* subtle corner filigree */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
        <div className="absolute -left-8 -top-8 h-40 w-40 rounded-full border border-gold-700" />
        <div className="absolute -bottom-10 -right-10 h-48 w-48 rounded-full border border-gold-700" />
      </div>
      <svg
        viewBox="0 0 200 200"
        className="h-[62%] w-[62%] text-gold-600"
        stroke="currentColor"
        strokeWidth={2.2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="currentColor"
      >
        {GLYPHS[category]}
      </svg>
      {label && (
        <span className="absolute bottom-4 font-accent text-[11px] uppercase tracking-luxe text-gold-700/70">
          {label}
        </span>
      )}
    </div>
  );
}
