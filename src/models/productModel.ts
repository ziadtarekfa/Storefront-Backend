import client from "../database";
import Product from "../types/Product";

export class ProductStore {
    async index(): Promise<Product[]> {
        try {
            const connection = await client.connect();
            const sql = 'SELECT * FROM products';
            const result = await connection.query(sql);
            connection.release();
            return result.rows;
        } catch (err) {
            throw new Error(`${err}`);
        }
    }
    async show(id: number): Promise<Product[]> {
        try {
            const connection = await client.connect();
            const sql = `SELECT * FROM products WHERE id = $1`;
            const values = [id];
            const result = await connection.query(sql, values);
            connection.release();
            return result.rows;
        } catch (err) {
            throw new Error(`${err}`);
        }
    }

    async create(product: Product): Promise<Product[]> {
        try {
            const connection = await client.connect();
            const sql = "INSERT INTO products (name, price) VALUES($1, $2) RETURNING *";
            const values = [product.name, product.price];
            const result = await connection.query(sql, values);
            connection.release();
            return result.rows[0];
        } catch (err) {
            throw new Error(`${err}`);
        }
    }
}