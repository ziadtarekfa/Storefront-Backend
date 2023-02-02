"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = require("../models/user");
const routes = express_1.default.Router();
const store = new user_1.UserStore();
routes.get('/', (_req, res) => {
    store.index("").then((data) => {
        res.send(data);
    });
});
routes.get('/:id', (req, res) => {
    store.show("", parseInt(req.params.id)).then((data) => {
        res.send(data);
    });
});
routes.post('/create', (req, res) => {
    const { user } = req.body;
    console.log(user);
    store.create("", req.body.user).then((data) => {
        res.send(data);
    });
});
exports.default = routes;
