import User from "../../types/User";
import { UserStore } from "../../models/userModel";

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




