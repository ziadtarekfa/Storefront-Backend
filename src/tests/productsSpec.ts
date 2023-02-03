import supertest from "supertest";
import app from "../server";

const request = supertest(app);


describe("Test Product Endpoints", () => {

    it("gets all products", async () => {
        const response = await request.get('/products');
        expect(response.status).toBe(200);
    });

    it("gets product with id", async () => {
        const response = await request.get('/products/3');
        expect(response.status).toBe(200);
    });

    it("creates a product", async () => {
        const response = await request.post('/products/create');
        expect(response.status).toBe(200);
    })

});
