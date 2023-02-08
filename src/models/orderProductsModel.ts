import OrderedProduct from "../types/OrderedProduct";
import client from "../database";


export class OrderedProductStore {

    async createOrderedProduct(orderedProduct: OrderedProduct): Promise<OrderedProduct> {
        try {
            const connection = await client.connect();
            const sql = "INSERT INTO order_products (order_id,product_id,quantity) VALUES ($1,$2,$3) RETURNING *";
            const values = [orderedProduct.orderId, orderedProduct.productId, orderedProduct.quantity];
            const result = await connection.query(sql, values);
            connection.release();
            return result.rows[0];
        } catch (err) {
            throw new Error("Unable to create ordered product due to" + err);
        }
    }
}