import { ProductStore } from "../models/productModel";
import Product from "../types/Product";
import supertest from "supertest";
import app from "../server";



const request = supertest(app);

const product: Product = {
    name: "Google Pixel",
    price: 122
}

describe("Test Product Endpoints", () => {
    const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hbWUiOiJhaG1lZCIsImxhc3ROYW1lIjoiQWx5IiwiaWF0IjoxNjc1MzUwODU5fQ.ixq7tJJ6pUvst80TeKA7A5wlGfcCCmwtamMCsB_B0OE";

    it("gets all products", async () => {
        const response = await request.get('/products');
        expect(response.status).toBe(200);
    });

    it("gets product with id", async () => {
        const response = await request.get('/products/1');
        expect(response.status).toBe(200);
    });

    it("creates a product", async () => {
        const response = await request.post('/products/create').send(product).set("Authorization", "bearer " + TOKEN);
        expect(response.status).toBe(200);
    });
});

describe("Test Product Model Functions", () => {

    const store = new ProductStore();

    it("list all products", async () => {
        const products = await store.index();
        expect(products.length).toBeGreaterThan(0);
    });

    it("list a specific product", async () => {
        const product = await store.show(1)
        expect(product.length).toBeGreaterThan(0);
    });

    it("creates a product", async () => {
        const newProduct = await store.create(product);
        expect(newProduct).toBeDefined();
    });
});

