import { prisma } from "@/lib/prisma";

export async function GET() {
  const books = await prisma.rating.findMany({
    select: {
      id: true,
      description: true,
      rate: true,
      created_at: true,
      user: {
        select: {
          id: true,
          name: true,
          image: true,
        },
      },
      book: {
        select: {
          id: true,
          name: true,
          author: true,
          cover_url: true,
          total_pages: true,
        },
      },
    },
    orderBy: {
      created_at: "desc",
    },
  });

  return Response.json(books);
}

export async function POST(req: Request) {
  const { description, rate, book_id, user_id } = await req.json();

  if (!book_id || !user_id || !description || !rate) {
    return new Response(
      "Bad request, book_id, user_id, description and rate are required",
      {
        status: 400,
      }
    );
  }

  await prisma.rating.create({
    data: {
      description,
      rate,
      book_id: book_id,
      user_id: user_id,
    },
  });

  return new Response(null, {
    status: 201,
  });
}
