import { StarFillIcon } from "@/assets/icons/star-fill-icon";
import { StarHalfFillIcon } from "@/assets/icons/star-half-fill-icon";
import { StarOutlineIcon } from "@/assets/icons/star-outline-icon";

export function StarRating({ rate }: { rate?: number }) {
  rate = rate ?? 0;
  const fullStars = Math.floor(rate);
  const halfStars = rate % 1 >= 0.5 ? 1 : 0;
  const emptyStars =
    fullStars + halfStars >= 5 ? 0 : 5 - (fullStars + halfStars);

  return (
    <div className="flex gap-1 text-purple-100">
      {Array.from({ length: fullStars }, (_, i) => (
        <StarFillIcon key={i} size={16} />
      ))}

      {Array.from({ length: halfStars }, (_, i) => (
        <StarHalfFillIcon key={i} size={16} />
      ))}

      {Array.from({ length: emptyStars }, (_, i) => (
        <StarOutlineIcon key={i} size={16} />
      ))}
    </div>
  );
}
