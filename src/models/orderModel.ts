import client from "../database"
import Order from "../types/Order";


export class OrderStore {

    async createOrder(order: Order): Promise<Order[]> {
        try {
            const connection = await client.connect();
            const sql = "INSERT INTO orders (user_id,status) VALUES ($1,$2) RETURNING *";
            const values = [order.userId, order.status];
            const result = await connection.query(sql, values);
            connection.release();
            return result.rows[0];
        } catch (err) {
            throw new Error("Unable to create order due to" + err);
        }
    }
    async getCurrentOrdersByUser(userId: number): Promise<Order[]> {
        try {
            const connection = await client.connect();
            const sql = "SELECT * FROM orders where user_id = $1";
            const values = [userId];
            const result = await connection.query(sql, values);
            connection.release();
            return result.rows;
        } catch (err) {
            throw new Error("Unable to get current orders due to" + err);
        }
    }
}