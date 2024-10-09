import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { UserModel } from './user.model';

@Resolver(() => UserModel)
export class UserResolver {
    constructor(private readonly userService: UserService) { }

    @Query(() => [UserModel])
    async findManyUsers(): Promise<UserModel[]> {
        return this.userService.findMany();
    }

    @Query(() => UserModel, { nullable: true })
    async findOneUser(@Args('id') id: string): Promise<UserModel> {
        return this.userService.findOne(id);
    }

    @Mutation(() => UserModel)
    async insertUser(
        @Args('name') name: string,
        @Args('email', { nullable: true }) email?: string,
    ): Promise<UserModel> {
        return this.userService.insertOne({ name, email });
    }

    @Mutation(() => UserModel)
    async upsertUser(
        @Args('id') id: string,
        @Args('name') name: string,
        @Args('email', { nullable: true }) email?: string,
    ): Promise<UserModel> {
        return this.userService.upsertOne(id, { name, email });
    }

    @Mutation(() => UserModel)
    async deleteUser(@Args('id') id: string): Promise<UserModel> {
        return this.userService.deleteOne(id);
    }
}
