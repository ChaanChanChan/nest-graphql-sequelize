import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class NewBookData {    
    @Field(type => Int)
    id: number;

    @Field(type => String)
    title: string;

    @Field(type => String, {nullable: true})
    genere?: string;
}