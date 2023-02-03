"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const order_1 = require("../models/order");
const verifyToken_1 = __importDefault(require("../models/verifyToken"));
const router = express_1.default.Router();
const store = new order_1.OrderStore();
router.post('/create', verifyToken_1.default, (req, res) => {
    const order = req.body;
    store.createOrder(order).then((data) => {
        res.status(200).send(data);
    });
});
router.get('/current/user_id/:id', verifyToken_1.default, (req, res) => {
    const { id } = req.params;
    const userId = parseInt(id);
    store.getCurrentOrdersByUser(userId).then((data) => {
        res.status(200).send(data);
    });
});
exports.default = router;
