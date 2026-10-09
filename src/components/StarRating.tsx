import { Star } from "./Icons";

export function StarRating({
  rating,
  count,
  size = 14,
  showCount = true,
}: {
  rating: number;
  count?: number;
  size?: number;
  showCount?: boolean;
}) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex text-gold-500">
        {[0, 1, 2, 3, 4].map((i) => (
          <Star
            key={i}
            filled={i < Math.round(rating)}
            style={{ width: size, height: size }}
          />
        ))}
      </div>
      {showCount && (
        <span className="text-xs text-ink-soft">
          {rating.toFixed(1)}
          {count !== undefined && ` (${count})`}
        </span>
      )}
    </div>
  );
}
