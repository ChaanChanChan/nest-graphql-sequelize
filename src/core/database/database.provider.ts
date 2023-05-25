import { Sequelize } from "sequelize-typescript";
import { Book } from "src/books/book.entity";
import 'dotenv/config'

export const databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new Sequelize({
                dialect: 'postgres',
                host: 'localhost',
                port: 5432,
                username: process.env.DB_USERNAME,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_NAME,
                models: [Book],
            })
        sequelize.addModels([Book])
        await sequelize.sync()
        return sequelize
        },
    },
]