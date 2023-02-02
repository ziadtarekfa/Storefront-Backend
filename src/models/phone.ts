import client from "../database";
export type Phone = {
    id: number;
    name: string;
    price: number;
}

export class PhoneStore {
    async index(): Promise<Phone[]> {
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
    async show(id: number): Promise<Phone[]> {
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

    async create(product: Phone): Promise<Phone[]> {
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