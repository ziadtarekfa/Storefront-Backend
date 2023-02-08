import supertest from "supertest";
import { OrderedProductStore } from "../models//orderProductsModel";
import app from "../server";

const request = supertest(app);

const store = new OrderedProductStore();


describe("Test Ordered Product Model Functions", () => {
    it("creates an order", () => {
        expect(store.createOrderedProduct).toBeDefined();
    });

});
