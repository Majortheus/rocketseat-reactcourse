import { prisma } from "@/lib/prisma";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;

  const query = searchParams.get("query");
  const categoryId = searchParams.get("categoryId");

  const books = await prisma.book.findMany({
    where: {
      AND: [
        {
          categories: {
            some: {
              categoryId:
                categoryId !== null && categoryId !== "all"
                  ? categoryId
                  : undefined,
            },
          },
        },
        {
          OR: [
            {
              author: {
                contains: query !== null ? query : undefined,
              },
            },
            {
              name: {
                contains: query !== null ? query : undefined,
              },
            },
          ],
        },
      ],
    },
    include: {
      categories: {
        include: {
          category: true,
        },
      },
      ratings: {
        include: {
          user: true,
        },
        orderBy: {
          created_at: "desc",
        },
      },
    },
  });

  const booksWithRating = books.map((book) => {
    return {
      ...book,
      rate:
        book.ratings.reduce((acc, rating) => acc + rating.rate, 0) /
        book.ratings.length,
    };
  });

  return Response.json(booksWithRating);
}
