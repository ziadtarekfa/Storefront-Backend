"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
// import bodyParser from 'body-parser';
var productRoutes_1 = __importDefault(require("./routes/productRoutes"));
var app = (0, express_1["default"])();
app.use('/products', productRoutes_1["default"]);
app.get('/', function (_req, res) {
    res.send('Hello World!');
});
app.listen(3000, function () {
    console.log("Listen for requests on localhost port 3000");
});
