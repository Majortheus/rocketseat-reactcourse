import { prisma } from "@/lib/prisma";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const user = await prisma.user.findUnique({
    where: {
      id: id,
    },
    select: {
      id: true,
      name: true,
      image: true,
      createdAt: true,
    },
  });

  if (!user) {
    return new Response(null, {
      status: 404,
    });
  }

  const reviews = await prisma.rating.findMany({
    where: {
      user_id: user.id,
    },
    select: {
      id: true,
      description: true,
      rate: true,
      created_at: true,
      book: {
        select: {
          id: true,
          name: true,
          author: true,
          cover_url: true,
          total_pages: true,
          categories: {
            select: {
              category: true,
            },
          },
        },
      },
    },
    orderBy: {
      created_at: "desc",
    },
  });

  return Response.json({ user, reviews });
}
