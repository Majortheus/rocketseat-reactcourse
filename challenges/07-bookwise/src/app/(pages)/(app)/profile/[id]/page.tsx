/* eslint-disable @next/next/no-img-element */
"use client";
import { Review, User } from "@/@types/api";
import { BookIcon } from "@/assets/icons/book-icon";
import { BookMarkIcon } from "@/assets/icons/book-mark-icon";
import { BooksIcon } from "@/assets/icons/books-icons";
import { ChevronLeft } from "@/assets/icons/chevron-left";
import { MagnifyingGlassIcon } from "@/assets/icons/magnifying-glass";
import { UserDetailsIcon } from "@/assets/icons/user-details";
import { UserIcon } from "@/assets/icons/user-icon";
import { StarRating } from "@/components/star-rating";
import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";
import { useSession } from "next-auth/react";
import { useParams, useRouter } from "next/navigation";

export default function Profile() {
  const { id } = useParams<{ id: string }>();
  const session = useSession();
  const router = useRouter();

  const { data: profile } = useQuery({
    queryKey: ["reviews", id],
    queryFn: async () => {
      const response = await api.get<{ user: User; reviews: Review[] }>(
        `/reviews/${id}`
      );
      return response.data;
    },
  });

  const goBack = () => {
    router.back();
  };

  return (
    <main className="flex flex-col gap-10 mt-11 pr-16 items-center">
      <div className="grid grid-cols-[minmax(312px,624px)_308px] gap-x-16 gap-y-10">
        {session.status === "authenticated" && session.data.user.id === id ? (
          <h1 className="flex items-center gap-3 w-full col-span-2">
            <span className="text-green-100 h-[32px] text-[2rem]">
              <UserIcon size={32} />
            </span>
            <span className="font-bold text-2xl leading-snug">Perfil</span>
          </h1>
        ) : (
          <button
            className="flex items-center gap-3 w-full col-span-2 h-[33px] cursor-pointer"
            onClick={goBack}
          >
            <ChevronLeft />
            <div className="flex items-center h-[20px] font-bold leading-none">
              Voltar
            </div>
          </button>
        )}

        <div className="flex flex-col gap-8">
          <div className="flex gap-2 px-5 py-3.5 border border-gray-500 rounded-sm text-gray-500 w-full">
            <input
              placeholder="Buscar livro ou autor"
              className="w-full text-sm focus:outline-none placeholder:gray-400"
            />
            <MagnifyingGlassIcon />
          </div>

          {profile?.reviews.map((review) => (
            <div key={review.id} className="flex flex-col gap-2">
              <div className="text-gray-300">
                {dayjs(review.created_at).fromNow()}
              </div>
              <div className="bg-gray-700 rounded-lg p-6 flex flex-col gap-6">
                <div className="flex gap-6">
                  <img
                    src={`/${review.book.cover_url}`}
                    alt="capa do livro"
                    className="w-[98px]"
                  />
                  <div className="flex flex-col justify-between">
                    <div className="flex flex-col gap-1">
                      <h4 className="font-bold leading-snug">
                        {review.book.name}
                      </h4>
                      <div className="text-gray-400 text-sm">
                        {review.book.author}
                      </div>
                    </div>
                    <StarRating rate={review.rate} />
                  </div>
                </div>
                <div className="text-sm text-gray-300">
                  {review.description}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="border-l border-gray-700 flex flex-col justify-center items-center gap-8 px-14 pb-5 h-fit">
          <div className="flex flex-col gap-5 justify-center items-center pb-2">
            <div className="relative w-[72px] h-[72px] flex justify-center items-center">
              <div className="w-[72px] h-[72px] rounded-full bg-linear-to-b from-gradient-from to-gradient-to absolute inset-0" />
              <img
                src={profile?.user.image}
                alt="avatar"
                className="w-[68px] h-[68px] rounded-full z-10"
              />
            </div>
            <div className="flex flex-col justify-center items-center">
              <h4 className="font-bold leading-snug text-xl">
                {profile?.user.name.slice(0, 18)}
                {(profile?.user.name.length ?? 0) > 18 && "..."}
              </h4>
              <div className="text-gray-400 text-sm">
                membro desde {dayjs(profile?.user.created_at).format("YYYY")}
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="bg-linear-to-r from-gradient-from to-gradient-to w-8 h-1 rounded-full" />
          </div>
          <div className="pt-5 flex flex-col gap-10">
            <div className="flex gap-5 items-center">
              <span className="text-green-100">
                <BookIcon size={32} />
              </span>
              <div className="flex flex-col">
                <div>
                  {profile?.reviews.reduce(
                    (acc, curr) => acc + curr.book.total_pages,
                    0
                  )}
                </div>
                <div className="text-gray-300 text-sm">Páginas lidas</div>
              </div>
            </div>
            <div className="flex gap-5 items-center">
              <span className="text-green-100">
                <BooksIcon size={32} />
              </span>
              <div className="flex flex-col">
                <div>{profile?.reviews.length}</div>
                <div className="text-gray-300 text-sm">Livros avaliados</div>
              </div>
            </div>
            <div className="flex gap-5 items-center">
              <span className="text-green-100">
                <UserDetailsIcon size={32} />
              </span>
              <div className="flex flex-col">
                <div>
                  {
                    profile?.reviews.reduce((acc, curr) => {
                      if (!acc.includes(curr.book.author)) {
                        acc.push(curr.book.author);
                      }
                      return acc;
                    }, [] as string[]).length
                  }
                </div>
                <div className="text-gray-300 text-sm">Autores lidos</div>
              </div>
            </div>
            <div className="flex gap-5 items-center">
              <span className="text-green-100">
                <BookMarkIcon size={32} />
              </span>
              <div className="flex flex-col">
                <div>
                  {profile?.reviews
                    .reduce((acc, curr) => {
                      for (let i = 0; i < curr.book.categories.length; i++) {
                        const category = curr.book.categories[i];

                        if (
                          !acc.find(
                            (c) => c.categoryId === category.category.id
                          )
                        ) {
                          acc.push({
                            categoryId: category.category.id,
                            name: category.category.name,
                            count: 1,
                          });
                        } else {
                          const categoryIndex = acc.findIndex(
                            (c) => c.categoryId === category.category.id
                          );
                          acc[categoryIndex].count++;
                        }
                      }
                      return acc;
                    }, [] as { categoryId: string; name: string; count: number }[])
                    .sort((a, b) => (b?.count ?? 0) - (a?.count ?? 0))?.[0]
                    ?.name ?? "Nenhum"}
                </div>
                <div className="text-gray-300 text-sm">Categoria mais lida</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
