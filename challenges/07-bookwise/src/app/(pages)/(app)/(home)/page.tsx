"use client";
import { ChevronRightIcon } from "@/assets/icons/chevron-right-icon";
import { TrendingIcon } from "@/assets/icons/trending-icon";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { ListPopularBooks } from "./components/list-popular-books";
import { ListReviews } from "./components/list-reviews";
import { UserLastReview } from "./components/user-last-review";

export default function Home() {
  const session = useSession();
  return (
    <main className="flex flex-col gap-10 mt-11 pr-16 items-center">
      <div className="grid grid-cols-[minmax(304px,608px)_324px] gap-16 ">
        <h1 className="flex items-center gap-3 col-span-2">
          <span className="text-green-100 h-[32px] text-[2rem]">
            <TrendingIcon size={32} />
          </span>
          <span className="font-bold text-2xl leading-snug">Início</span>
        </h1>
        <div className="flex flex-col gap-10">
          {session.status === "authenticated" && (
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <h3 className="text-sm">Sua última leitura</h3>
                <Link
                  href={`/profile/${session.data.user.id}`}
                  className="font-bold text-sm py-1 px-2 flex text-purple-100 gap-2 items-center"
                >
                  Ver todos
                  <span className="h-[19px]">
                    <ChevronRightIcon />
                  </span>
                </Link>
              </div>
              <UserLastReview />
            </div>
          )}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm">Avaliações mais recentes</h3>
            <ListReviews />
          </div>
        </div>
        <div className="w-full">
          <div className="flex justify-between items-center">
            <h3 className="text-sm">Livros populares</h3>
            <Link
              href="/explore"
              className="font-bold text-sm py-1 px-2 flex text-purple-100 gap-2 items-center"
            >
              Ver todos
              <span className="h-[19px]">
                <ChevronRightIcon />
              </span>
            </Link>
          </div>

          <ListPopularBooks />
        </div>
      </div>
    </main>
  );
}
