import express from "express";
import { OrderStore } from "../models/orderModel";
import verifyToken from "../middleware/verifyToken";


const router = express.Router();
const store = new OrderStore();

router.post('/create', verifyToken, (req, res) => {
    const order = req.body;
    store.createOrder(order).then((data) => {
        res.status(200).send(data);
    }).catch((err) => {
        res.send("Unable to create order due to " + err);
    });
});

router.get('/current/user_id/:id', verifyToken, (req, res) => {
    const { id } = req.params;
    const userId = parseInt(id);
    store.getCurrentOrdersByUser(userId).then((data) => {
        res.status(200).send(data);
    }).catch((err) => {
        res.send("unable to get current order by user due to " + err);
    });
});

export default router;