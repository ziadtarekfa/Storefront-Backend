import client from "../database"


export type Order = ({
    id: number,
    productId: number,
    quantity: number,
    userId: number,
    status: string
})

export class OrderStore {

    async createOrder(order: Order): Promise<Order[]> {
        try {
            const connection = await client.connect();
            const sql = "INSERT INTO orders (product_id,quantity,user_id,status) VALUES ($1,$2,$3,$4) RETURNING *";
            const values = [order.productId, order.quantity, order.userId, order.status];
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
            console.log(userId);
            const sql = "SELECT * FROM orders where user_id = $1 AND status = $2";
            const values = [userId, "active"];
            const result = await connection.query(sql, values);
            connection.release();
            return result.rows[0];
        } catch (err) {
            throw new Error("Unable to get current orders due to" + err);
        }
    }
}