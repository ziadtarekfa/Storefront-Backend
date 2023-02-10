import supertest from "supertest";
import app from "../server";
import User from "../types/User";
import { UserStore } from "../models/userModel";

const request = supertest(app);

const store = new UserStore();

const user: User = {
    firstName: "Ziad",
    lastName: "Tarek",
    password: "zt123"
}

describe("Test User Model Functions", () => {

    it("list all users", () => {
        store.create(user).then(() => {
            store.index().then((users) => {
                expect(users.length).toBeGreaterThan(0);
            });
        });
    });

    it("list a specific user", () => {
        store.show(1).then((user) => {
            expect(user.length).toBeGreaterThan(0);
        });
    });
    it("create a user", () => {
        store.create(user).then((data) => {
            expect(data).toBeDefined();
        });
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

