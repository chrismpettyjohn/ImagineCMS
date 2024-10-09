import { pgTable, serial, varchar, integer, timestamp } from 'drizzle-orm/pg-core';

export const usersTable = pgTable('users', {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 255 }),
    email: varchar('email', { length: 255 }).unique(),
    age: integer('age'),
    createdAt: timestamp('createdAt').defaultNow(),
    updatedAt: timestamp('updatedAt').defaultNow(),
});
