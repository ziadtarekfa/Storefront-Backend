"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const phone_1 = require("../models/phone");
const router = express_1.default.Router();
const store = new phone_1.PhoneStore();
router.get('/', (_req, res) => {
    store.index().then((data) => {
        res.send(data);
    });
});
router.get('/:id', (req, res) => {
    console.log(`params is = ${req.params.id}`);
    const id = parseInt(req.params.id);
    store.show(id).then((data) => {
        res.send(data);
    });
});
exports.default = router;
