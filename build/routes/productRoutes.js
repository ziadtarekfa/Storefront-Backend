"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const phone_1 = require("../models/phone");
const verifyToken_1 = __importDefault(require("../models/verifyToken"));
const router = express_1.default.Router();
const store = new phone_1.PhoneStore();
router.get('/', (_req, res) => {
    store.index().then((data) => {
        res.status(200).send(data);
    });
});
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    store.show(id).then((data) => {
        res.status(200).send(data);
    });
});
router.post('/create', verifyToken_1.default, (req, res) => {
    const product = req.body;
    store.create(product).then((data) => {
        console.log(data);
        res.status(200).json(data);
    });
});
exports.default = router;
