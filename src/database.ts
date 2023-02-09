import dotenv from "dotenv";
import { Pool } from "pg";

dotenv.config();

let databaseConfiguration;
if (process.env.ENV == 'dev') {
    databaseConfiguration = {
        host: process.env.POSTGRES_HOST,
        database: process.env.POSTGRES_DB,
        user: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD
    };
}
else if (process.env.ENV == 'test') {
    databaseConfiguration = {
        host: process.env.POSTGRES_HOST,
        database: process.env.POSTGRES_DB_TEST,
        user: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD
    };
}
const client = new Pool(databaseConfiguration);
export default client;