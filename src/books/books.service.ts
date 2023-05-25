import { Injectable } from '@nestjs/common';
import { Book } from './book.entity';
import { InjectModel } from '@nestjs/sequelize';
import { NewBookData } from './dto/new-book.input';

@Injectable()
export class BooksService {
    constructor(
        @InjectModel(Book)
        private bookModel: typeof Book,
    ) {}
    
    async findAll(): Promise<Book[]> {
        return await this.bookModel.findAll()
    }

    async findOne(title: string): Promise<Book> {
        return this.bookModel.findOne({
            where: {
                title,
            }
        })
    }

    async create(bookData: NewBookData): Promise<Book> {
        console.log(bookData)
        return this.bookModel.create(bookData)
    }
}
 