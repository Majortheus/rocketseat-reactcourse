import { prisma } from '@/lib/prisma'


export async function GET() {

  const ratings = await prisma.rating.groupBy({
      by: ['book_id'],
      _avg: {
        rate: true,
      },
      orderBy: {
        _avg: {
          rate: 'desc'
        },
      },
      take: 5,
  })

  const books = await prisma.book.findMany({
    where: {
      id: {
        in: ratings.map((rating) => rating.book_id)
      }
    }
  })

  const booksWithRating = ratings.map((rating) => {
    return {
      ...books.find((book) => book.id === rating.book_id),
      rate: rating._avg.rate
    }
  })

  return Response.json(booksWithRating)  
}