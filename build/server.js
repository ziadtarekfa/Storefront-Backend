"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const productRoutes_1 = __importDefault(require("./routes/productRoutes"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use('/products', productRoutes_1.default);
app.use('/users', userRoutes_1.default);
app.get('/', (_req, res) => {
    res.send('Hello World!');
});
app.listen(3000, () => {
    console.log(`Listen for requests on localhost port 3000`);
});
