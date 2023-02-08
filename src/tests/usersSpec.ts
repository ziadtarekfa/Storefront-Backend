import supertest from "supertest";
import app from "../server";
import { UserStore } from "../models/userModel";

const request = supertest(app);

const store = new UserStore();



describe("Test User Model Functions", () => {

    it("list all users", () => {
        expect(store.index).toBeDefined();
    });

    it("list a specific user", () => {
        expect(store.show).toBeDefined();
    });
    it("create a user", () => {
        expect(store.create).toBeDefined();
    });

});


describe("Test Users Endpoints", () => {

    it("gets all users", async () => {
        const response = await request.get('/users');
        expect(response.status).toBe(200);
    });

    it("gets user with id", async () => {
        const response = await request.get('/users/3');
        expect(response.status).toBe(200);
    });

    it("creates a user", async () => {
        request.post('/users/create').then((data) => {
            expect(data).toBeDefined;
        });

    })

});

