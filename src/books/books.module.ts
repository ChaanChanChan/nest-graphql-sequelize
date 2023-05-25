import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksResolver } from './books.resolver';
import { SequelizeModule } from '@nestjs/sequelize';
import { Book } from './book.entity';
import { booksProviders } from 'src/books/books.provider';
import { DatabaseModule } from 'src/core/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [...booksProviders, BooksService, BooksResolver]
})
export class BooksModule {}
