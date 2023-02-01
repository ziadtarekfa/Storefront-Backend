import client from "../database";

export type Phone = {
    id: number,
    name: string,
    price: number
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
            console.log("id is = " + id);
            const connection = await client.connect();
            const sql = `SELECT * FROM products WHERE id=${id}`;
            const result = await connection.query(sql);
            connection.release();
            return result.rows;
        } catch (err) {
            throw new Error(`${err}`);
        }
    }
    // async create(token: string): Promise<Phone[]> {
    //     try {
    //         const connection = await client.connect();
    //         const sql = `SELECT * FROM products`;
    //         const result = await connection.query(sql);
    //         connection.release();
    //         return result.rows;
    //     } catch (err) {
    //         throw new Error(`${err}`);
    //     }
    // }
}