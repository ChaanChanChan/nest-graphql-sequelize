import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Book } from './models/graphql-book.model';
import { BooksService } from './books.service';
import { NewBookData } from './dto/new-book.input';

@Resolver()
export class BooksResolver {
    constructor(private booksService: BooksService) {}

    @Query(() => Book)
    async book(@Args('id') id: number): Promise<Book> {
        const book = await this.booksService.findOne('id')
        if(!book) {
            throw new NotFoundException('id')
        }
        return book
    }

    @Query(() => [Book], {name: 'books', description: 'Returns all books'})
    async findAll() {
        return this.booksService.findAll()
    }
    
    @Mutation(() => Book)
    async createBook(
        @Args('bookData') bookData: NewBookData
    ): Promise<Book> {
        return this.booksService.create(bookData)
    }
}
