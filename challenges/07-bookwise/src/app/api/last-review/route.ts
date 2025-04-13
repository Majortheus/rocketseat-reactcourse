import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return new Response(null, {
      status: 401,
    });
  }

  const rating = await prisma.rating.findFirst({
    include: {
      user: true,
      book: true,
    },
    where: {
      user_id: session.user.id,
    },
    orderBy: {
      created_at: "desc",
    },
  });

  return Response.json(rating);
}
