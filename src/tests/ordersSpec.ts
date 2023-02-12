import { OrderStore } from "../models/orderModel";
import supertest from "supertest";
import app from "../server";

const request = supertest(app);

const order = {
    userId: 1,
    status: "active"
};

describe("Test Orders Endpoints", () => {
    const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hbWUiOiJhaG1lZCIsImxhc3ROYW1lIjoiQWx5IiwiaWF0IjoxNjc1MzUwODU5fQ.ixq7tJJ6pUvst80TeKA7A5wlGfcCCmwtamMCsB_B0OE";
    it("creates an order", async () => {
        const response = await request.post(`/orders/create`).send(order).set("Authorization", "bearer " + TOKEN);
        expect(response.status).toBe(200);
    });

    it("gets current orders for a single user endpoint", async () => {
        const response = await request.get(`/orders/current/user_id/1`).set("Authorization", "bearer " + TOKEN);
        expect(response.status).toBe(200);
    });
});


describe("Test Order Model Functions", () => {
    const store = new OrderStore();
    it("creates an order", async () => {
        const newOrder = await store.createOrder(order);
        expect(newOrder).toBeDefined();
    });

    it("gets current orders by a specific user", async () => {
        const currentOrdersByUser = await store.getCurrentOrdersByUser(1);
        expect(currentOrdersByUser.length).toBeGreaterThan(0);
    });
});




