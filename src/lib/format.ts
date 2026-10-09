import { SITE } from "./site";

/** Format a number as an INR price string, e.g. 10990 → "₹10,990". */
export function formatPrice(amount: number): string {
  return (
    SITE.currencySymbol +
    amount.toLocaleString("en-IN", { maximumFractionDigits: 0 })
  );
}

/** Percentage saved between compareAtPrice and price. */
export function discountPercent(price: number, compareAt?: number): number | null {
  if (!compareAt || compareAt <= price) return null;
  return Math.round(((compareAt - price) / compareAt) * 100);
}
