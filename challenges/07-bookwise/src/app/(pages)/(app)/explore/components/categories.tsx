"use client";

import { Category } from "@/@types/api";
import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { Controller, useFormContext } from "react-hook-form";

export function Categories() {
  const { control } = useFormContext();
  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      return (await api.get<Category[]>("/categories")).data;
    },
  });

  const categoriesWithAll = [
    { id: "all", name: "Tudo" },
    ...(categories ?? []),
  ] as Category[];

  return (
    <div className="flex gap-3.5 items-center flex-wrap">
      <Controller
        name="categoryId"
        control={control}
        render={({ field }) => (
          <>
            {categoriesWithAll?.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => {
                  field.onChange(category.id);
                }}
                data-selected={category.id === field.value}
                className="select-none rounded-full border-2 group border-purple-100 px-4 py-1 flex justify-center items-center h-8 cursor-pointer data-[selected=true]:bg-purple-200 data-[selected=true]:border-purple-200"
              >
                <span className="group-data-[selected=true]:text-gray-100 text-purple-100">
                  {category.name}
                </span>
              </button>
            ))}
          </>
        )}
      />
    </div>
  );
}
