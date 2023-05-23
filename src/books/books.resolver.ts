import { Resolver } from '@nestjs/graphql';
import { BooksService } from './books.service';

@Resolver()
export class BooksResolver {
  constructor(private readonly booksService: BooksService) {}
}
