import { Book } from "src/books/book.entity";

export const booksProviders = [
    {
        provide: 'BOOKS_REPOSITORY',
        useValue: Book,
    }
]