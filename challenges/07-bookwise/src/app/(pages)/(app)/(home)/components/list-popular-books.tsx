/* eslint-disable @next/next/no-img-element */
"use client";

import { Book } from "@/@types/api";
import { StarRating } from "@/components/star-rating";
import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

export function ListPopularBooks() {
  const { data: popularBooks } = useQuery({
    queryKey: ["popular-books"],
    queryFn: async () => {
      return (await api.get<Book[]>("/popular-books")).data;
    },
  });

  return (
    <div className="mt-4 flex flex-col gap-3">
      {popularBooks?.map((book) => (
        <div key={book.id} className="p-6 bg-gray-700 rounded-lg">
          <div className="flex gap-5 items-center">
            <img
              src={book.cover_url}
              alt="capa do livro"
              className="w-[64px] h-[94px]"
            />
            <div className="flex flex-col gap-5">
              <div>
                <h4 className="font-bold leading-snug">{book.name}</h4>
                <div className="text-gray-400 text-sm">{book.author}</div>
              </div>
              <div className="flex gap-1 text-purple-100">
                <StarRating rate={book.rate} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
