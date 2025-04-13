/* eslint-disable @next/next/no-img-element */
"use client";

import { Book } from "@/@types/api";
import { StarRating } from "@/components/star-rating";
import { BookDrawerContext } from "@/context/book-drawer-context";
import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { useFormContext } from "react-hook-form";

export function ListBooks() {
  const { watch } = useFormContext();
  const { selectBook } = useContext(BookDrawerContext);

  const query = watch("query");
  const categoryId = watch("categoryId");

  const { data: books } = useQuery({
    queryKey: ["books", query, categoryId],
    queryFn: async () => {
      return (
        await api.get<Book[]>("/books", {
          params: { query, categoryId },
        })
      ).data;
    },
  });

  return (
    <div className="mt-4 grid grid-cols-3 gap-5 w-full">
      {books?.map((book) => (
        <div
          key={book.id}
          className="p-6 bg-gray-700 rounded-lg cursor-pointer flex gap-5 items-center"
          onClick={() => selectBook(book)}
        >
          <img
            src={`/${book.cover_url}`}
            alt="capa do livro"
            className="w-[108px] h-[152px]"
          />
          <div className="flex flex-col gap-5 justify-between h-full">
            <div>
              <h4 className="font-bold leading-snug">
                {book.name.slice(0, 27)}
                {book.name.length > 27 && "..."}
              </h4>
              <div className="text-gray-400 text-sm">{book.author}</div>
            </div>
            <div className="flex gap-1 text-purple-100">
              <StarRating rate={book.rate} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
