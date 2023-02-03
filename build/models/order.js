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
exports.OrderStore = void 0;
const database_1 = __importDefault(require("../database"));
class OrderStore {
    createOrder(order) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const connection = yield database_1.default.connect();
                const sql = "INSERT INTO orders (product_id,quantity,user_id,status) VALUES ($1,$2,$3,$4) RETURNING *";
                const values = [order.productId, order.quantity, order.userId, order.status];
                const result = yield connection.query(sql, values);
                connection.release();
                return result.rows[0];
            }
            catch (err) {
                throw new Error("Unable to create order due to" + err);
            }
        });
    }
    getCurrentOrdersByUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const connection = yield database_1.default.connect();
                console.log(userId);
                const sql = "SELECT * FROM orders where user_id = $1 AND status = $2";
                const values = [userId, "active"];
                const result = yield connection.query(sql, values);
                connection.release();
                return result.rows[0];
            }
            catch (err) {
                throw new Error("Unable to get current orders due to" + err);
            }
        });
    }
}
exports.OrderStore = OrderStore;
