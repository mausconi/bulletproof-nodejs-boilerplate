// I only want migrations, rollbacks, and seeds to run when the NODE_ENV is specified
// in the knex seed/migrate command. Knex will error out if it is not specified.
import * as path from 'path';

if (!process.env.NODE_ENV) { throw new Error('NODE_ENV not set'); }

require('dotenv').config();

const BASE_PATH = path.join(__dirname, 'src', 'database');

const knexConfig: any = {
  test: {
    client: 'pg',
    connection: {
      host: process.env.DB_HOST || 'localhost',
      port: Number(process.env.DB_PORT || 5432),
      user: process.env.DB_USER || 'postgresql',
      password: process.env.DB_PASSWORD,
      database: `${process.env.DB_DATABASE}_testing`,
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      max: 10,
    },
    migrations: {
      directory: `${BASE_PATH}/migrations`,
    },
    seeds: {
      directory: `${BASE_PATH}/seeds`,
    },
  },
  development: {
    client: 'pg',
    connection: {
      host: process.env.DB_HOST || 'localhost',
      port: Number(process.env.DB_PORT || 5432),
      user: process.env.DB_USER || 'postgresql',
      password: process.env.DB_PASSWORD,
      database: `${process.env.DB_DATABASE}_development`,
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      max: 10,
    },
    migrations: {
      directory: `${BASE_PATH}/migrations`,
    },
    seeds: {
      directory: `${BASE_PATH}/seeds`,
    },
  },
  production: {
    client: 'pg',
    debug: false,
    connection: {
      host: process.env.DB_HOST || 'localhost',
      port: Number(process.env.DB_PORT || 5432),
      user: process.env.DB_USER || 'postgresql',
      password: process.env.DB_PASSWORD,
      database: `${process.env.DB_DATABASE}_production`,
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      max: 10,
    },
    migrations: {
      directory: `${BASE_PATH}/migrations`,
    },
  },
};
export { knexConfig };
