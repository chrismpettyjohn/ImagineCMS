import { config as dotenvConfig } from 'dotenv';
import assert from 'assert';

dotenvConfig();

assert(process.env.DB_HOST, 'DB_HOST is required');
assert(process.env.DB_PORT, 'DB_PORT is required');
assert(process.env.DB_USERNAME, 'DB_USERNAME is required');
assert(process.env.DB_PASSWORD, 'DB_PASSWORD is required');
assert(process.env.DB_DATABASE, 'DB_DATABASE is required');

export const { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_DATABASE } = process.env;