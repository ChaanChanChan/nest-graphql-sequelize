import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Book } from './models/graphql-book.model';
import { BooksService } from './books.service';
import { NewBookData } from './dto/new-book.input';

@Resolver()
export class BooksResolver {
    constructor(private booksService: BooksService) {}

    // @Query(returns => Book)
    // async book(@Args('title') title: string): Promise<Book> {
    //     const book = await this.booksService.findOne(title)
    //     if(!book) {
    //         throw new NotFoundException(title)
    //     }
    //     return book
    // }

    @Query(() => [Book], {name: 'books'})
    async finAll() {
        return 
    }
    

    // @Mutation(returns => Book)
    // async createBook(
    //     @Args('bookData') bookData: NewBookData
    // ): Promise<Book> {
    //     return this.booksService.create(bookData)
    // }
}
