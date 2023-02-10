import express from "express";
import { OrderedProductStore } from "../models/orderProductsModel";

import verifyToken from "../middleware/verifyToken";

const router = express.Router();
const store = new OrderedProductStore();

router.post('/create', verifyToken, (req, res) => {
    const orderedProduct = req.body;
    store.createOrderedProduct(orderedProduct).then((data) => {
        res.send(data).status(200);
    }).catch((err) => {
        res.send("Unable to create order product due to " + err);
    });
});

export default router;