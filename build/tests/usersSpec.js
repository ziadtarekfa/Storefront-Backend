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
const server_1 = __importDefault(require("../server"));
const userModel_1 = require("../models/userModel");
const request = (0, supertest_1.default)(server_1.default);
const store = new userModel_1.UserStore();
describe("Test User Model Functions", () => {
    it("list all users", () => {
        expect(store.index).toBeDefined();
    });
    it("list a specific user", () => {
        expect(store.show).toBeDefined();
    });
    it("create a user", () => {
        expect(store.create).toBeDefined();
    });
});
describe("Test Users Endpoints", () => {
    it("gets all users", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/users');
        expect(response.status).toBe(200);
    }));
    it("gets user with id", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/users/3');
        expect(response.status).toBe(200);
    }));
    it("creates a user", () => __awaiter(void 0, void 0, void 0, function* () {
        request.post('/users/create').then((data) => {
            expect(data).toBeDefined;
        });
    }));
});
