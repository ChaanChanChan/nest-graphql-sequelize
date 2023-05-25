import { Column, Model, PrimaryKey, Table } from "sequelize-typescript";

@Table
export class Book extends Model<Book>{
    @PrimaryKey
    @Column
    id: number;

    @Column
    title: string;

    @Column
    genere?: string;
}