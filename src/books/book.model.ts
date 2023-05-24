import { Field, ObjectType } from "@nestjs/graphql";
import { AllowNull, AutoIncrement, Column, Model, PrimaryKey, Table, Unique } from "sequelize-typescript";

@ObjectType()
@Table
export class Book extends Model<Book>{
    @Field()
    @AutoIncrement
    @PrimaryKey
    @Column
    id: string;

    @Field()
    @Column
    title: string;

    @Field()
    @AllowNull
    @Column
    genere?: string;
}