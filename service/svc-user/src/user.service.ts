import { Inject, Injectable } from '@nestjs/common';
import { LibSQLDatabase } from 'drizzle-orm/libsql';
import { UserModel } from './user.model';

@Injectable()
export class UserService {
    constructor(
        @Inject('DB_DEV') private drizzleDev: LibSQLDatabase<typeof schema>
    ) { }

    // Find many users
    async findMany(): Promise<UserModel[]> {
        const users = await this.drizzleDev.query.users.findMany();
        return users;
    }

    // Find one user by id
    async findOne(userId: string): Promise<UserModel> {
        const user = await this.drizzleDev.query.users.findOne({
            where: {
                id: userId,
            },
        });
        return user;
    }

    // Insert a new user
    async insertOne(userData: Partial<schema.users>): Promise<UserModel> {
        const newUser = await this.drizzleDev.query.users.insertOne({
            data: userData,
        });
        return newUser;
    }

    // Upsert (update or insert) a user
    async upsertOne(userId: string, userData: Partial<schema.users>): Promise<UserModel> {
        const upsertedUser = await this.drizzleDev.query.users.upsertOne({
            where: {
                id: userId,
            },
            update: userData,
            create: {
                ...userData,
                id: userId,
            },
        });
        return upsertedUser;
    }

    // Delete a user by id
    async deleteOne(userId: string): Promise<UserModel> {
        const deletedUser = await this.drizzleDev.query.users.deleteOne({
            where: {
                id: userId,
            },
        });
        return deletedUser;
    }
}
