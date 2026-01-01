export interface Book {
  title: string;
  author: string;
  genre: string;
  year: number;
  description: string;
  rating: number;
}

export interface BookResponse {
  books: Book[];
}

