import { Book } from "src/books/book.entity";
import { BOOKS_REPOSITORY } from "../core/constants/constants";

export const booksProviders = [
    {
        provide: BOOKS_REPOSITORY,
        useValue: Book,
    }
]