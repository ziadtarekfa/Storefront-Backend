"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const productHandler_1 = __importDefault(require("./handlers/productHandler"));
const userHandler_1 = __importDefault(require("./handlers/userHandler"));
const orderHandler_1 = __importDefault(require("./handlers/orderHandler"));
const orderProductsHandler_1 = __importDefault(require("./handlers/orderProductsHandler"));
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use('/orders', orderHandler_1.default);
app.use('/products', productHandler_1.default);
app.use('/users', userHandler_1.default);
app.use('/ordered-products', orderProductsHandler_1.default);
app.get('/', (_req, res) => {
    res.send('Hello World!');
});
app.listen(process.env.SERVER_PORT, () => {
    console.log(`Listen for requests on localhost port 3000`);
});
exports.default = app;
