import express from "express";
import { OrderStore } from "../models/order";
import verifyToken from "../models/verifyToken";


const router = express.Router();
const store = new OrderStore();

router.post('/create', verifyToken, (req, res) => {
    const order = req.body;
    store.createOrder(order).then((data) => {
        res.send(data);
    })
});

router.get('/current/user_id/:id', verifyToken, (req, res) => {
    const { id } = req.params;
    const userId = parseInt(id);
    store.getCurrentOrdersByUser(userId).then((data) => {
        res.send(data);
    })
});

export default router;