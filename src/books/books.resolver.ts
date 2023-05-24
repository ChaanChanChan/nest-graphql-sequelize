import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Book } from './book.model';
import { BooksService } from './books.service';
import { NewBookData } from './dto/new-book.input';

@Resolver()
export class BooksResolver {
    constructor(private booksService: BooksService) {}

    @Query(returns => Book)
    async book(@Args('id') id: string): Promise<Book> {
        const book = await this.booksService.findOne(id)
        if(!book) {
            throw new NotFoundException(id)
        }
        
        return book
    }

    @Query(returns => [Book])
    books(): Promise<Book[]> {
        return this.booksService.findAll()
    }
    

    @Mutation(returns => Book)
    async createBook(
        @Args('bookData') bookData: NewBookData
    ): Promise<Book> {
        return this.booksService.create(bookData)
    }
}
