import { createPool } from "mysql2/promise";
import {
    DB_USER,
    DB_HOST,
    DB_NAME,
    DB_PASSWORD,
    DB_PORT
} from './config.js'

export const pool = createPool({
    user: DB_USER,
    password: DB_HOST,
    host: DB_NAME,
    port: DB_PASSWORD,
    database: DB_PORT
})