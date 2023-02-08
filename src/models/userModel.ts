import client from "../database";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../types/User";



dotenv.config();

export class UserStore {

    async index(): Promise<User[]> {
        try {
            const connection = await client.connect();
            const sql = "SELECT * FROM users";
            const result = await connection.query(sql);

            return result.rows;
        } catch (err) {
            throw new Error(`${err}`);
        }

    }
    async show(id: number): Promise<User[]> {
        try {
            const connection = await client.connect();
            const sql = `SELECT * FROM users WHERE id=$1`;
            const values = [id];
            const result = await connection.query(sql, values);

            return result.rows;
        } catch (err) {
            throw new Error(`${err}`);
        }

    }
    async create(user: User): Promise<Object> {
        try {
            const connection = await client.connect();
            const salt = await bcrypt.genSalt(10);
            const hash = await bcrypt.hash(user.password, salt);
            const TOKEN_SECRET = process.env.TOKEN_SECRET;
            const sql = `INSERT INTO users (firstName,lastName,password) VALUES ($1,$2,$3) RETURNING *;`;
            const values = [user.firstName, user.lastName, hash];

            const result = await connection.query(sql, values);

            //create token 
            const accessToken = jwt.sign({ "firstName": user.firstName, "lastName": user.lastName }, TOKEN_SECRET as string);

            return { "token": accessToken, "user": result.rows[0] };

        } catch (err) {
            throw new Error(`Unable to create user ${err}`);
        }

    }

}