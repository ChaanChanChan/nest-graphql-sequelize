import { Sequelize } from "sequelize-typescript";
import { Book } from "src/books/book.entity";

export const databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new Sequelize({
                dialect: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: 'dotenv',
                database: 'booksdb',
                models: [Book],
            })
        sequelize.addModels([Book])
        await sequelize.sync()
        return sequelize
        },
    },
]