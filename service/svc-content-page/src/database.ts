import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';  // PostgreSQL client
import { DB_DATABASE, DB_HOST, DB_PASSWORD, DB_PORT, DB_USERNAME } from './config';

const pool = new Pool({
    host: DB_HOST,
    port: DB_PORT,
    user: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DATABASE,
});

export const db = drizzle(pool);
