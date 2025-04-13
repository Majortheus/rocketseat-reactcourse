"use client";
import { BinoculosIcon } from "@/assets/icons/binoculos-icon";
import { MagnifyingGlassIcon } from "@/assets/icons/magnifying-glass";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { Categories } from "./components/categories";
import { ListBooks } from "./components/list-books";

const explorerBooksSchema = z.object({
  search: z.string(),
  query: z.string(),
  categoryId: z.string(),
});

type ExplorerBooksSchema = z.infer<typeof explorerBooksSchema>;

export default function Explorer() {
  const form = useForm<ExplorerBooksSchema>({
    resolver: zodResolver(explorerBooksSchema),
    defaultValues: {
      search: "",
      query: "",
      categoryId: "all",
    },
  });

  const onQuerySubmit = (data: ExplorerBooksSchema) => {
    form.setValue("query", data.search);
  };

  return (
    <main className="flex mt-11 pr-16 justify-center">
      <form
        className="flex flex-col gap-10 max-w-5xl"
        onSubmit={form.handleSubmit(onQuerySubmit)}
      >
        <FormProvider {...form}>
          <div className="flex items-center justify-between">
            <h1 className="flex items-center gap-3">
              <span className="text-green-100 h-[32px] text-[2rem]">
                <BinoculosIcon size={32} />
              </span>
              <span className="font-bold text-2xl leading-snug">Explorar</span>
            </h1>
            <div className="flex gap-2 px-5 py-3.5 border border-gray-500 rounded-sm w-md text-gray-500">
              <input
                placeholder="Buscar livro ou autor"
                className="w-full text-sm focus:outline-none placeholder:gray-400"
                {...form.register("search")}
              />
              <MagnifyingGlassIcon />
            </div>
          </div>

          <div className="flex flex-col gap-16 ">
            <div className="flex flex-col gap-12">
              <Categories />
              <ListBooks />
            </div>
          </div>
        </FormProvider>
      </form>
    </main>
  );
}
