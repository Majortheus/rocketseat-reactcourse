/* eslint-disable @next/next/no-img-element */
"use client";

import { Review } from "@/@types/api";
import { StarRating } from "@/components/star-rating";
import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";
import Link from "next/link";

export function ListReviews() {
  const { data: reviews } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      return (await api.get<Review[]>("/reviews")).data;
    },
  });

  return (
    <div className="mt-4 flex flex-col gap-3">
      {reviews?.map((review) => (
        <div key={review.id} className="p-6 bg-gray-700 rounded-lg">
          <div className="flex flex-col gap-8">
            <div className="flex items-start justify-between">
              <div className="flex gap-4 items-center">
                <div className="relative w-10 h-10 flex justify-center items-center">
                  <div className="w-10 h-10 rounded-full bg-linear-to-b from-gradient-from to-gradient-to absolute inset-0" />
                  <img
                    src={review.user.image}
                    alt="avatar"
                    className="w-9 h-9 rounded-full z-10"
                  />
                </div>
                <div>
                  <Link href={`/profile/${review.user.id}`}>
                    {review.user.name}
                  </Link>
                  <div className="text-gray-400 text-sm">
                    {dayjs(review.created_at).fromNow()}
                  </div>
                </div>
              </div>
              <div className="flex gap-1 text-purple-100">
                <StarRating rate={review.rate} />
              </div>
            </div>
            <div className="flex gap-5 items-start">
              <img
                src={review.book.cover_url}
                alt="capa do livro"
                className="w-[108px]"
              />
              <div className="flex flex-col gap-5">
                <div>
                  <h4 className="font-bold leading-snug">{review.book.name}</h4>
                  <div className="text-gray-400 text-sm">
                    {review.book.author}
                  </div>
                </div>
                <div className="text-gray-300 text-sm">
                  {review.description}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
