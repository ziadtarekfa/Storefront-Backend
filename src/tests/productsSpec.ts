import supertest from "supertest";
import app from "../server";
import { ProductStore } from "../models/productModel";
const request = supertest(app);

const store = new ProductStore();

describe("Test Product Model Functions", () => {

    it("list all products", () => {
        expect(store.index).toBeDefined();
    });

    it("list a specific product", () => {
        expect(store.show).toBeDefined();
    });
    it("create a product", () => {
        expect(store.create).toBeDefined();
    });

});

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
