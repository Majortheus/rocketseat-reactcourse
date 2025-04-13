import { StarFillIcon } from "@/assets/icons/star-fill-icon";
import { StarOutlineIcon } from "@/assets/icons/star-outline-icon";
import { Controller, useFormContext } from "react-hook-form";

export function StarRatingInput() {
  const { control } = useFormContext();

  return (
    <Controller
      name="rate"
      control={control}
      render={({ field }) => (
        <div className="flex gap-1 text-purple-100">
          {Array.from({ length: 5 }, (_, i) => {
            if (i >= field.value) {
              return (
                <StarOutlineIcon
                  key={i}
                  size={24}
                  onClick={() => field.onChange(i + 1)}
                />
              );
            }

            return (
              <StarFillIcon
                key={i}
                size={24}
                onClick={() => field.onChange(i + 1)}
              />
            );
          })}
        </div>
      )}
    />
  );
}
