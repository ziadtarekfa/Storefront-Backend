"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const user_1 = require("../models/user");
const verifyToken_1 = __importDefault(require("../models/verifyToken"));
const routes = express_1.default.Router();
const store = new user_1.UserStore();
const jsonParser = body_parser_1.default.json();
routes.get('/', verifyToken_1.default, (_req, res) => {
    store.index().then((data) => {
        res.status(200).send(data);
    });
});
routes.get('/:id', verifyToken_1.default, (req, res) => {
    store.show(parseInt(req.params.id)).then((data) => {
        res.status(200).send(data);
    });
});
routes.post('/create', jsonParser, (req, res) => {
    const user = req.body;
    store.create(user).then((data) => {
        console.log(data);
        res.status(200).json(data);
    });
});
exports.default = routes;
