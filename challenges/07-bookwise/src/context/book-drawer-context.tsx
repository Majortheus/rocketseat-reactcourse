/* eslint-disable @next/next/no-img-element */
"use client";
import { Book, Review } from "@/@types/api";
import { BookIcon } from "@/assets/icons/book-icon";
import { BookMarkIcon } from "@/assets/icons/book-mark-icon";
import { CheckIcon } from "@/assets/icons/check-icon";
import { CloseIcon } from "@/assets/icons/close-icon";
import { SignInDialog } from "@/components/sign-in-dialog";
import { StarRating } from "@/components/star-rating";
import { StarRatingInput } from "@/components/star-rating-input";
import { api } from "@/lib/axios";
import { queryClient } from "@/lib/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import * as Dialog from "@radix-ui/react-dialog";
import { useMutation } from "@tanstack/react-query";
import dayjs from "dayjs";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { createContext, useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Drawer } from "vaul";
import { z } from "zod";

type BookDrawerContextValue = {
  selectBook: (book: Book) => void;
  closeDrawer: () => void;
};

export const BookDrawerContext = createContext({} as BookDrawerContextValue);

const bookReviewSchema = z.object({
  rate: z.number().min(1).max(5),
  description: z
    .string()
    .min(1, {
      message: "A avaliação deve ter no mínimo 1 caractere",
    })
    .max(450, {
      message: "A avaliação deve ter no máximo 450 caracteres",
    }),
});

type BookReviewSchema = z.infer<typeof bookReviewSchema>;

type BookDrawerProviderProps = {
  children: React.ReactNode;
};

export function BookDrawerProvider({ children }: BookDrawerProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [signInDialogIsOpen, setSignInDialogIsOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const session = useSession();
  const form = useForm<BookReviewSchema>({
    resolver: zodResolver(bookReviewSchema),
    defaultValues: {
      rate: 1,
      description: "",
    },
  });

  const selectBook = (book: Book) => {
    setSelectedBook(book);
    localStorage.setItem("@bookwise:book", JSON.stringify(book));
    setIsOpen(true);
  };

  const closeDrawer = () => {
    setIsOpen(false);
    setTimeout(() => setSelectedBook(null), 200);
    localStorage.removeItem("@bookwise:book");
    form.reset();
  };

  const openSignInDialog = () => {
    setSignInDialogIsOpen(true);
  };

  const closeSignInDialog = () => {
    setSignInDialogIsOpen(false);
  };

  const createNewReview = async ({ description, rate }: BookReviewSchema) => {
    await api.post("/reviews", {
      description,
      rate,
      book_id: selectedBook?.id,
      user_id: session.data?.user.id,
    });

    await queryClient.invalidateQueries({
      queryKey: ["reviews"],
    });
  };

  const { mutate: createNewReviewMutation } = useMutation({
    mutationKey: ["create-review"],
    mutationFn: createNewReview,
    onSuccess: (_, { description, rate }) => {
      const booksCache = queryClient.getQueriesData<Book[]>({
        queryKey: ["books"],
      });

      booksCache.forEach(([cacheKey, cacheData]) => {
        if (!cacheData) return;

        const newBooks = cacheData.map((book) => {
          if (book.id === selectedBook?.id) {
            const newBook = {
              ...book,
              rate:
                (book.ratings.reduce((acc, curr) => acc + curr.rate, 0) +
                  rate) /
                (book.ratings.length + 1),
              ratings: [
                ...book.ratings,
                {
                  id: crypto.randomUUID(),
                  description,
                  rate,
                  user_id: session.data!.user.id,
                  user: {
                    id: session.data!.user.id,
                    name: session.data!.user.name,
                    image: session.data!.user.image,
                  },
                  book_id: book.id,
                  book: book,
                  created_at: dayjs().format("YYYY-MM-DD HH:mm:ss"),
                } as Review,
              ],
            };

            newBook.ratings = newBook.ratings.sort(
              (a, b) => dayjs(b.created_at).unix() - dayjs(a.created_at).unix()
            );

            setSelectedBook(newBook);
            return newBook;
          }

          return book;
        });

        queryClient.setQueryData<Book[]>(cacheKey, newBooks);
      });

      form.reset();
    },
  });

  useEffect(() => {
    const book = localStorage.getItem("@bookwise:book");
    if (book) {
      setSelectedBook(JSON.parse(book));
      setIsOpen(true);
    }
  }, []);

  const userReview =
    session.status === "authenticated" &&
    selectedBook &&
    selectedBook.ratings.find(
      (review) =>
        review.book_id === selectedBook.id &&
        review.user_id === session.data.user.id
    );

  const description = form.watch("description");

  return (
    <BookDrawerContext.Provider
      value={{
        selectBook,
        closeDrawer,
      }}
    >
      <Drawer.Root direction="right" open={isOpen} onClose={closeDrawer}>
        {children}
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-xs" />
          <Drawer.Content className="fixed top-0 right-0 h-screen w-full max-w-2xl bg-gray-800 flex flex-col shadow-drawer py-16 px-12 gap-10 overflow-y-auto overflow-x-hidden z-30">
            <Drawer.Close className="text-gray-400 top-6 right-12 absolute cursor-pointer">
              <CloseIcon size={24} />
            </Drawer.Close>
            <Drawer.Title className="sr-only">
              {selectedBook?.name}
            </Drawer.Title>
            <Drawer.Description className="sr-only">
              {selectedBook?.author}
            </Drawer.Description>

            <div className="flex flex-col bg-gray-700 rounded-lg py-6 px-8 gap-10">
              <div className="flex gap-8">
                <img src={selectedBook?.cover_url} alt="capa do livro" />
                <div className="flex flex-col justify-between">
                  <div className="flex flex-col gap-2">
                    <h2 className="text-lg font-bold leading-snug">
                      {selectedBook?.name}
                    </h2>
                    <div className="text-gray-400 text-sm">
                      {selectedBook?.author}
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <StarRating rate={selectedBook?.rate} />
                    <div className="text-sm text-gray-400">
                      {selectedBook?.ratings.length} avaliações
                    </div>
                  </div>
                </div>
              </div>

              <div className="py-6 flex gap-14 border-t border-gray-600">
                <div className="flex gap-4 items-center">
                  <span className="text-green-100">
                    <BookMarkIcon />
                  </span>
                  <div>
                    <div className="text-sm text-gray-300">Categoria</div>
                    <div>
                      {selectedBook?.categories
                        .map((c) => c.category.name)
                        .join(", ")}
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <span className="text-green-100">
                    <BookIcon />
                  </span>
                  <div>
                    <div className="text-sm text-gray-300">Páginas</div>
                    <div>{selectedBook?.total_pages}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex justify-between items-center">
                <h5 className="text-sm text-gray-200">Avaliações</h5>
                {session.status !== "authenticated" && (
                  <button
                    className="cursor-pointer py-1 px-2"
                    onClick={openSignInDialog}
                  >
                    <span className="text-purple-100 font-bold">Avaliar</span>
                  </button>
                )}
              </div>
              {session.status === "authenticated" && !userReview && (
                <form
                  className="flex flex-col gap-5 bg-gray-700 p-6 rounded-lg"
                  onSubmit={form.handleSubmit(({ description, rate }) =>
                    createNewReviewMutation({ description, rate })
                  )}
                >
                  <FormProvider {...form}>
                    <div className="flex justify-between w-full">
                      <div className="flex gap-4 items-center">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-b from-gradient-from to-gradient-to flex justify-center items-center">
                          <img
                            src={session.data?.user.image}
                            alt="avatar"
                            className="w-9 h-9 rounded-full z-10"
                          />
                        </div>
                        <div className="flex">
                          {session.data?.user.name.slice(0, 18)}
                          {(session.data?.user.name.length ?? 0) > 18 && "..."}
                        </div>
                      </div>
                      <StarRatingInput />
                    </div>
                    <div className="flex flex-col gap-3">
                      <div className="bg-gray-800 border border-gray-500 w-full h-[164px] rounded-sm relative">
                        <textarea
                          className="resize-none w-full h-full pt-3.5 px-5 outline-none text-sm"
                          placeholder="Escreva sua avaliação"
                          disabled={form.formState.isSubmitting}
                          {...form.register("description")}
                        />
                        <div
                          data-has-error={!!form.formState.errors.description}
                          className="absolute bottom-1 right-5 text-xs text-[#7C7C8A] bg-gray-800 p-1 rounded-sm data-[has-error=true]:text-red-400"
                        >
                          {description.length}/450
                        </div>
                        {form.formState.errors.description && (
                          <div className="text-red-400 text-xs">
                            {form.formState.errors.description.message}
                          </div>
                        )}
                      </div>
                      <div className="flex ml-auto gap-2">
                        <button
                          type="button"
                          onClick={() => closeDrawer()}
                          disabled={form.formState.isSubmitting}
                          className="p-2 rounded-sm bg-gray-600 cursor-pointer text-purple-100"
                        >
                          <CloseIcon />
                        </button>
                        <button
                          type="submit"
                          disabled={form.formState.isSubmitting}
                          className="p-2 rounded-sm bg-gray-600 cursor-pointer text-green-100"
                        >
                          <CheckIcon />
                        </button>
                      </div>
                    </div>
                  </FormProvider>
                </form>
              )}
              {selectedBook?.ratings.map((rating) => (
                <div
                  key={rating.id}
                  data-is-from-user={rating.user_id === session.data?.user.id}
                  className="flex flex-col gap-5 bg-gray-700 p-6 rounded-lg data-[is-from-user=true]:bg-gray-600"
                >
                  <div className="flex justify-between w-full">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-b from-gradient-from to-gradient-to flex justify-center items-center">
                        <img
                          src={rating.user.image}
                          alt="avatar"
                          className="w-9 h-9 rounded-full z-10"
                        />
                      </div>
                      <div className="flex flex-col h-[44px]">
                        <Link
                          href={`/profile/${rating.user.id}`}
                          onClick={closeDrawer}
                          className="text-gray-100"
                        >
                          {rating.user.name}
                        </Link>
                        <div className="text-sm text-gray-400">
                          {dayjs(rating.created_at).fromNow()}
                        </div>
                      </div>
                    </div>
                    <StarRating rate={rating.rate} />
                  </div>
                  <div className="text-gray-300 text-sm">
                    {rating.description}
                  </div>
                </div>
              ))}
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
      <Dialog.Root open={signInDialogIsOpen} onOpenChange={closeSignInDialog}>
        <SignInDialog />
      </Dialog.Root>
    </BookDrawerContext.Provider>
  );
}
