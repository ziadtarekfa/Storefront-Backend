"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const orderModel_1 = require("../models/orderModel");
const server_1 = __importDefault(require("../server"));
const request = (0, supertest_1.default)(server_1.default);
const store = new orderModel_1.OrderStore();
const order = {
    userId: 5,
    status: "active"
};
const userId = 5;
describe("Test Order Model Functions", () => {
    it("creates an order", () => {
        expect(store.createOrder).toBeDefined();
    });
    it("gets current orders by a specific user", () => {
        expect(store.getCurrentOrdersByUser).toBeDefined();
    });
});
describe("Test Orders Endpoints", () => {
    it("create an order endpoint", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.post(`/orders/create`);
        expect(response.status).toBe(200);
    }));
    it("gets current orders for a single user endpoint", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get(`/orders/current/user_id/${userId}`);
        expect(response.status).toBe(200);
    }));
});
