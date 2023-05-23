import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Book } from './book.model';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';

@Module({
  imports: [SequelizeModule.forFeature([Book])],
  providers: [BooksService],
  controllers: [BooksController]
})
export class BooksModule {}
