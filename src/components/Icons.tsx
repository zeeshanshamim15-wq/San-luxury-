import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;
const base = {
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

export const Search = (p: P) => (
  <svg {...base} {...p}><circle cx="11" cy="11" r="7" /><path d="m20 20-3.2-3.2" /></svg>
);
export const User = (p: P) => (
  <svg {...base} {...p}><circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-6 8-6s8 2 8 6" /></svg>
);
export const Bag = (p: P) => (
  <svg {...base} {...p}><path d="M6 8h12l-1 12H7z" /><path d="M9 8V6a3 3 0 0 1 6 0v2" /></svg>
);
export const Heart = (p: P) => (
  <svg {...base} {...p}><path d="M12 20s-7-4.6-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.4-7 10-7 10Z" /></svg>
);
export const Menu = (p: P) => (
  <svg {...base} {...p}><path d="M3 6h18M3 12h18M3 18h18" /></svg>
);
export const Close = (p: P) => (
  <svg {...base} {...p}><path d="M6 6 18 18M18 6 6 18" /></svg>
);
export const ArrowRight = (p: P) => (
  <svg {...base} {...p}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
export const ChevronRight = (p: P) => (
  <svg {...base} {...p}><path d="m9 6 6 6-6 6" /></svg>
);
export const ChevronDown = (p: P) => (
  <svg {...base} {...p}><path d="m6 9 6 6 6-6" /></svg>
);
export const Plus = (p: P) => (
  <svg {...base} {...p}><path d="M12 5v14M5 12h14" /></svg>
);
export const Minus = (p: P) => (
  <svg {...base} {...p}><path d="M5 12h14" /></svg>
);
export const Truck = (p: P) => (
  <svg {...base} {...p}><path d="M3 7h11v9H3z" /><path d="M14 10h4l3 3v3h-7" /><circle cx="7" cy="18" r="1.6" /><circle cx="17.5" cy="18" r="1.6" /></svg>
);
export const Shield = (p: P) => (
  <svg {...base} {...p}><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" /><path d="m9 12 2 2 4-4" /></svg>
);
export const Gift = (p: P) => (
  <svg {...base} {...p}><path d="M4 11h16v9H4z" /><path d="M4 7h16v4H4z" /><path d="M12 7v13" /><path d="M12 7S9 3 7 5s3 2 5 2 7 0 5-2-5 2-5 2" /></svg>
);
export const Refresh = (p: P) => (
  <svg {...base} {...p}><path d="M20 12a8 8 0 1 1-2.3-5.6" /><path d="M20 4v4h-4" /></svg>
);
export const Star = ({ filled, ...p }: P & { filled?: boolean }) => (
  <svg {...base} {...p} fill={filled ? "currentColor" : "none"}>
    <path d="M12 3.5l2.6 5.3 5.9.8-4.3 4.1 1 5.8-5.2-2.8-5.2 2.8 1-5.8L3.5 9.6l5.9-.8z" />
  </svg>
);
export const Instagram = (p: P) => (
  <svg {...base} {...p}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" /></svg>
);
export const Facebook = (p: P) => (
  <svg {...base} {...p}><path d="M14 8h2V5h-2a3 3 0 0 0-3 3v2H9v3h2v6h3v-6h2l1-3h-3V8a1 1 0 0 1 1-1z" /></svg>
);
export const Whatsapp = (p: P) => (
  <svg {...base} {...p}><path d="M4 20l1.4-4A8 8 0 1 1 9 19.6z" /><path d="M9 9.5c0 3 2.5 5.5 5.5 5.5.6 0 1-.6.8-1.1l-1-.6c-.3-.2-.6-.1-.8.1l-.4.5c-1-.4-1.8-1.2-2.2-2.2l.5-.4c.2-.2.3-.5.1-.8l-.6-1c-.5-.2-1.1.2-1.1.8z" fill="currentColor" stroke="none" /></svg>
);
export const Sparkle = (p: P) => (
  <svg {...base} {...p}><path d="M12 3l1.6 5.4L19 10l-5.4 1.6L12 17l-1.6-5.4L5 10l5.4-1.6z" /></svg>
);
export const Check = (p: P) => (
  <svg {...base} {...p}><path d="M5 12l4 4 10-10" /></svg>
);
