import client from "../database";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

export type User = ({
    id: number,
    firstName: string,
    lastName: string,
    password: string
});

dotenv.config();

export class UserStore {



    async index(token: string): Promise<User[]> {
        try {
            const connection = await client.connect();
            const sql = "SELECT * FROM users";
            const result = await connection.query(sql);

            console.log(result);
            return result.rows;
        } catch (err) {
            throw new Error(`${err}`);
        }

    }
    async show(token: string, id: number): Promise<User[]> {
        try {
            const connection = await client.connect();
            const sql = `SELECT * FROM users WHERE id=${id}`;
            const result = await connection.query(sql);

            return result.rows;
        } catch (err) {
            throw new Error(`${err}`);
        }

    }
    async create(user: User): Promise<String> {
        try {
            const connection = await client.connect();
            const salt = await bcrypt.genSalt(10);
            const hash = await bcrypt.hash(user.password, salt);
            const TOKEN_SECRET = process.env.TOKEN_SECRET;
            const sql = `INSERT INTO users (firstName,lastName,password) VALUES 
            ('${user.firstName}','${user.lastName}','${hash}');`;

            await connection.query(sql);

            //create token 
            const accessToken = jwt.sign(user.firstName + " " + user.lastName, TOKEN_SECRET as string);

            return accessToken;

        } catch (err) {
            throw new Error(`Unable to create user ${err}`);
        }

    }

}