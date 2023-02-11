import { OrderStore } from "../../models/orderModel";

const store = new OrderStore();
const order = {
    userId: 5,
    status: "active"
};
const userId: number = 1;

describe("Test Order Model Functions", () => {

    it("creates an order", () => {
        store.createOrder(order).then((data) => {
            expect(data.length).toBeGreaterThan(0);
        })
    });

    it("gets current orders by a specific user", () => {
        store.getCurrentOrdersByUser(userId).then((data) => {
            expect(data.length).toBeGreaterThan(0);
        });
    });

});


