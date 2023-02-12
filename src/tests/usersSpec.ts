import User from "../types/User";
import { UserStore } from "../models/userModel";
import supertest from "supertest";
import app from "../server";

const request = supertest(app);
const user: User = {
    firstName: "gemmy",
    lastName: "gamal",
    password: "gem123"
};

describe("Test Users Endpoints", () => {

    const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hbWUiOiJhaG1lZCIsImxhc3ROYW1lIjoiQWx5IiwiaWF0IjoxNjc1MzUwODU5fQ.ixq7tJJ6pUvst80TeKA7A5wlGfcCCmwtamMCsB_B0OE";

    it("creates a user", async () => {
        const response = await request.post('/users/create').send(user);
        expect(response.status).toBe(200);
    });

    it("gets all users", async () => {
        const response = await request.get('/users').set("Authorization", "bearer " + TOKEN);
        expect(response.status).toBe(200);
    });

    it("gets user with id", async () => {
        const response = await request.get('/users/1').set("Authorization", "bearer " + TOKEN);
        expect(response.status).toBe(200);
    });

});

describe("Test User Model Functions", () => {
    const store = new UserStore();

    it("list all users", async () => {
        const users = await store.index();
        expect(users.length).toBeGreaterThan(0);
    });

    it("list a specific user", async () => {
        const user = await store.show(1);
        expect(user.length).toBeGreaterThan(0);
    });
    it("create a user", async () => {
        const newUser = await store.create(user);
        expect(newUser).toBeDefined();
    });

});




