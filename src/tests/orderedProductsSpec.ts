import { OrderedProductStore } from "../models//orderProductsModel";
import OrderedProduct from "../types/OrderedProduct";


const store = new OrderedProductStore();

const orderedProduct: OrderedProduct = {
    orderId: 1,
    productId: 1,
    quantity: 20
};

describe("Test Ordered Product Model Functions", () => {
    it("creates an order", () => {
        store.createOrderedProduct(orderedProduct).then((data) => {
            expect(data).toBeDefined();
        })
    });

});
