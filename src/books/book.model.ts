import {Column, Model, Table} from 'sequelize-typescript'

@Table
export class Book extends Model {
    @Column
    id: string;

    @Column
    title: string;

    @Column
    genere?: string;
}