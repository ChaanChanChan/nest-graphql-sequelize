import { Injectable } from '@nestjs/common';
import { Book } from './book.model';
import { InjectModel } from '@nestjs/sequelize';
import { NewBookData } from './dto/new-book.input';
import * as dotenv from 'dotenv';

dotenv.config();
@Injectable()
export class BooksService {
    constructor(
        @InjectModel(Book)
        private bookModel: typeof Book,
    ) {}
    
    async findAll(): Promise<Book[]> {
        return this.bookModel.findAll()
    }

    async findOne(id: string): Promise<Book> {
        return this.bookModel.findOne({
            where: {
                id,
            }
        })
    }

    async create(bookData: NewBookData): Promise<Book> {
        console.log(bookData)
        return this.bookModel.create(bookData)
    }
}
 