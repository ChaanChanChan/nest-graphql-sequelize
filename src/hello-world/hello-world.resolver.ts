import { Resolver, Query, Float, Int, Args } from '@nestjs/graphql';

@Resolver()
export class HelloWorldResolver {

    @Query(() => String, {description: 'Returns Hello World', name: 'hello'})
    helloWorld(): string{
        return 'Hello World'
    }

    @Query(() => Float, {name: 'randomNumber'})
    getRandomNumber(): number {
        return Math.random() * 100
    }

    @Query(() => Int, {name: 'randomFromZeroTo', description: 'random number between 0 and 10'})
    getRandomFromZeroTo(
        @Args('to', {nullable: true, type: () => Int}) to: number
    ): number {
        return Math.floor(Math.random() * to) +1
    }
}