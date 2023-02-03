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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
// res.send() and next() are not Javascript flow control. If you want to stop further 
//processing of the request in your function, you need to code that with traditional 
//Javascript flow control such as return, if/else, etc... to prevent the rest of your 
//code from continuing to run or process the request.
const verifyToken = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const authorizationHeader = req.headers['authorization'];
    if (authorizationHeader == undefined) {
        res.send("Token not sent");
        return;
    }
    const providedToken = authorizationHeader === null || authorizationHeader === void 0 ? void 0 : authorizationHeader.split(' ')[1];
    yield jsonwebtoken_1.default.verify(providedToken, process.env.TOKEN_SECRET, (err) => {
        if (err) {
            res.send("Invalid Token");
        }
        else {
            next();
        }
    });
});
exports.default = verifyToken;
