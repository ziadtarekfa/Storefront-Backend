import supertest from "supertest";
import app from "../server";
import { ProductStore } from "../models/productModel";
import Product from "../types/Product";
const request = supertest(app);



const store = new ProductStore();
const product: Product = {
    name: "Sony Xperia Z4",
    price: 102
}

describe("Test Product Model Functions", () => {

    it("list all products", () => {
        store.create(product).then(() => {
            store.index().then((products) => {
                expect(products.length).toBeGreaterThan(0);
            });
        });
    });

    it("list a specific product", () => {
        store.show(1).then((data) => {
            expect(data.length).toBeGreaterThan(0);
        }).catch((err) => {
            console.log(err);
        })
        expect(store.show).toBeDefined();
    });
    it("creates a product", () => {

        store.create(product).then((data) => {
            expect(data.length).toBeGreaterThan(0);
        }).catch((err) => {
            console.log(err);
        })
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
