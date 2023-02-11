import supertest from "supertest";

import app from "../../server";

const request = supertest(app);

describe("Test Orders Endpoints", () => {

    it("create an order endpoint", async () => {
        const response = await request.post(`/orders/create`);
        expect(response.status).toBe(200);
    });

    it("gets current orders for a single user endpoint", async () => {
        const response = await request.get(`/orders/current/user_id/1`);
        expect(response.status).toBe(200);
    });

});
