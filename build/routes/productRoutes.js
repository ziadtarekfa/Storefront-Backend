"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var phone_1 = require("../models/phone");
var router = express_1["default"].Router();
var store = new phone_1.PhoneStore();
router.get('/', function (_req, res) {
    store.index().then(function (data) {
        res.send(data);
    });
});
router.get('/:id', function (req, res) {
    console.log("params is = ".concat(req.params.id));
    var id = parseInt(req.params.id);
    store.show(id).then(function (data) {
        res.send(data);
    });
});
exports["default"] = router;
