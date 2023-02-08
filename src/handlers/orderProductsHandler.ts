import express from "express";
import { OrderedProductStore } from "../models/orderProductsModel";

import verifyToken from "../middleware/verifyToken";

const router = express.Router();
const store = new OrderedProductStore();

router.post('/create', verifyToken, (req, res) => {
    const orderedProduct = req.body;
    store.createOrderedProduct(orderedProduct).then((data) => {
        res.send(data).status(200);
    })
});

export default router;