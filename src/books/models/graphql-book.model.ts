import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Book {
    @Field(type => Int)
    id: number;

    @Field(type => String)
    title: string;

    @Field(type => String, {nullable: true})
    genere?: string;
}