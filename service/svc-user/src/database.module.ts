import { Module } from '@nestjs/common';
import { LibSQLDatabase, drizzle } from 'drizzle-orm/libsql';
import { Client } from 'pg';
import { schema } from './database';

@Module({
    providers: [
        {
            provide: 'DB_DEV',
            useFactory: async (): Promise<LibSQLDatabase<typeof schema>> => {
                const client = new Client({
                    user: 'dbUser',
                    host: 'localhost',
                    database: 'dbName',
                    password: 'password',
                    port: 5432,
                });
                await client.connect();

                return drizzle(client, { schema });
            },
        },
    ],
    exports: ['DB_DEV'],
})
export class DatabaseModule { }
