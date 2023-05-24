import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class NewBookData {
    @Field()
    title: string;

    @Field()
    genere?: string;
}