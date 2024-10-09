import { Field, ObjectType, ID } from '@nestjs/graphql';

@ObjectType()
export class UserModel {
    @Field(() => ID)
    id: string;

    @Field()
    name: string;

    @Field({ nullable: true })
    email?: string;

    @Field()
    createdAt: Date;

    @Field({ nullable: true })
    updatedAt?: Date;
}
