export type Book = {
  id: string;
  name: string;
  author: string;
  summary: string;
  cover_url: string;
  total_pages: number;
  created_at: string;
  rate: number;
  ratings: Review[];
  categories: BookCategory[];
};

export type User = {
  id: string;
  name: string;
  image: string;
  createdAt: string;
};

export type Review = {
  id: string;
  description: string;
  rate: number;
  user_id: string;
  user: User;
  book_id: string;
  book: Book;
  created_at: string;
};

export type Category = {
  id: string;
  name: string;
};

export type BookCategory = {
  category: Category;
};
