import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';
import { join } from 'path';

@Module({
    imports: [
        GraphQLModule.forRoot({
            autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
        }),
    ],
    providers: [UserResolver, UserService],
})
export class UserModule { }
