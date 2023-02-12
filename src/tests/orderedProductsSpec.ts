import { OrderedProductStore } from "../models/orderProductsModel";
import OrderedProduct from "../types/OrderedProduct";
import supertest from "supertest";
import app from "../server";
const store = new OrderedProductStore();

const orderedProduct: OrderedProduct = {
    orderId: 1,
    productId: 1,
    quantity: 20
};
const request = supertest(app);

describe("Test Ordered Product Endpoint", () => {
    beforeAll(async () => {

        // create user
        await request.post('/users/create').send({
            firstName: "ibrahim",
            lastName: "Aly",
            password: "ib182"
        });

        // create order
        await request.post(`/orders/create`).send({
            userId: 1,
            status: "active"
        }).set("Authorization", "bearer " + TOKEN);

        // create product
        await request.post('/products/create').send({
            name: "Google Pixel",
            price: 122
        }).set("Authorization", "bearer " + TOKEN);
    });

    const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hbWUiOiJhaG1lZCIsImxhc3ROYW1lIjoiQWx5IiwiaWF0IjoxNjc1MzUwODU5fQ.ixq7tJJ6pUvst80TeKA7A5wlGfcCCmwtamMCsB_B0OE";
    it("creates ordered product endpoint", async () => {
        const response = await request.post('/ordered-products/create').send(orderedProduct).set("Authorization", "bearer " + TOKEN);
        expect(response.status).toBe(200);
    });
})

describe("Test Ordered Product Model Functions", () => {
    it("creates an order", async () => {
        const createdOrderedProduct = await store.createOrderedProduct(orderedProduct);
        expect(createdOrderedProduct).toBeDefined();
    });
});
