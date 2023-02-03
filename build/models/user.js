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
exports.UserStore = void 0;
const database_1 = __importDefault(require("../database"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
class UserStore {
    index() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const connection = yield database_1.default.connect();
                const sql = "SELECT * FROM users";
                const result = yield connection.query(sql);
                return result.rows;
            }
            catch (err) {
                throw new Error(`${err}`);
            }
        });
    }
    show(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const connection = yield database_1.default.connect();
                const sql = `SELECT * FROM users WHERE id=$1`;
                const values = [id];
                const result = yield connection.query(sql, values);
                return result.rows;
            }
            catch (err) {
                throw new Error(`${err}`);
            }
        });
    }
    create(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const connection = yield database_1.default.connect();
                const salt = yield bcrypt_1.default.genSalt(10);
                const hash = yield bcrypt_1.default.hash(user.password, salt);
                const TOKEN_SECRET = process.env.TOKEN_SECRET;
                const sql = `INSERT INTO users (firstName,lastName,password) VALUES ($1,$2,$3) RETURNING *;`;
                const values = [user.firstName, user.lastName, hash];
                const result = yield connection.query(sql, values);
                //create token 
                const accessToken = jsonwebtoken_1.default.sign({ "firstName": user.firstName, "lastName": user.lastName }, TOKEN_SECRET);
                return { "token": accessToken, "user": result.rows[0] };
            }
            catch (err) {
                throw new Error(`Unable to create user ${err}`);
            }
        });
    }
}
exports.UserStore = UserStore;
