import { Inject, Injectable } from '@nestjs/common';
import { Book } from './book.entity';
import { NewBookData } from './dto/new-book.input';
import { BOOKS_REPOSITORY } from 'src/core/constants/constants';

@Injectable()
export class BooksService {
    constructor(
        @Inject(BOOKS_REPOSITORY)
        private booksRepository: typeof Book,
    ) {}
    
    async findAll(): Promise<Book[]> {
        return await this.booksRepository.findAll<Book>()
    }

    async findOne(title: string): Promise<Book> {
        return this.booksRepository.findOne({
            where: {
                title,
            }
        })
    }

    async create(bookData: NewBookData): Promise<Book> {
        console.log(bookData)
        return await this.booksRepository.create(bookData)
    }
}