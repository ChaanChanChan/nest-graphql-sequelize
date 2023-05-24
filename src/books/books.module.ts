import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksResolver } from './books.resolver';
import { SequelizeModule } from '@nestjs/sequelize';
import { Book } from './book.model';

@Module({
  imports: [SequelizeModule.forFeature([Book])],
  providers: [BooksService, BooksResolver]
})
export class BooksModule {}
