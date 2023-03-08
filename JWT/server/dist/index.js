"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const app = (0, express_1.default)();
dotenv_1.default.config();
const PORT = process.env.PORT || 3003;
const SECRET_KEY = process.env.JWT_SECRET;
console.log(SECRET_KEY);
console.log("테스트");
app.listen(PORT, () => {
    console.log(`${PORT} 번에서 서버가 작동하고 있습니다.`);
});
