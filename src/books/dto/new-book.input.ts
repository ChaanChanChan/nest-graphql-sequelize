import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class NewBookData {
    @Field()
    id: number;
    
    @Field()
    title: string;

    @Field()
    genere?: string;
}