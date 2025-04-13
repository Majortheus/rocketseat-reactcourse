/* eslint-disable @next/next/no-img-element */
"use client";

import { Review } from "@/@types/api";
import { StarRating } from "@/components/star-rating";
import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";

export function UserLastReview() {
  const { data: review } = useQuery({
    queryKey: ["last-review"],
    queryFn: async () => {
      return (await api.get<Review>("/last-review")).data;
    },
  });

  if (!review) {
    return <></>;
  }

  return (
    <div className="mt-4 flex flex-col gap-3">
      <div key={review.id} className="p-6 bg-gray-600 rounded-lg">
        <div className="flex flex-col gap-8">
          <div className="flex gap-5 items-start">
            <img
              src={review.book.cover_url}
              alt="capa do livro"
              className="w-[108px]"
            />
            <div className="flex flex-col gap-5 w-full">
              <div className="flex items-start justify-between">
                <div className="flex gap-4 items-center">
                  <div>
                    <div className="text-gray-400 text-sm">
                      {dayjs(review.created_at).fromNow()}
                    </div>
                  </div>
                </div>
                <div className="flex gap-1 text-purple-100">
                  <StarRating rate={review.rate} />
                </div>
              </div>
              <div>
                <h4 className="font-bold leading-snug">{review.book.name}</h4>
                <div className="text-gray-400 text-sm">
                  {review.book.author}
                </div>
              </div>
              <div className="text-gray-300 text-sm">{review.description}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
