import supertest from "supertest";
import { OrderStore } from "../models/orderModel";
import app from "../server";
import Order from "../types/Order";

const request = supertest(app);

const store = new OrderStore();
const order = {
    userId: 5,
    status: "active"
};
const userId: number = 1;

describe("Test Order Model Functions", () => {

    it("creates an order", () => {
        store.createOrder(order).then((data) => {
            expect(data.length).toBeGreaterThan(0);
        })
    });

    it("gets current orders by a specific user", () => {
        store.getCurrentOrdersByUser(userId).then((data) => {
            expect(data.length).toBeGreaterThan(0);
        });
    });

});


describe("Test Orders Endpoints", () => {

    it("create an order endpoint", async () => {
        const response = await request.post(`/orders/create`);
        expect(response.status).toBe(200);
    });

    it("gets current orders for a single user endpoint", async () => {
        const response = await request.get(`/orders/current/user_id/${userId}`);
        expect(response.status).toBe(200);
    });

});
