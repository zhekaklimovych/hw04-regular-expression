"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const users_js_1 = __importDefault(require("./routes/api/users.js"));
dotenv_1.default.config();
const { DB_HOST = 'http://localhost:3000', PORT = 3000 } = process.env;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/api/users/', users_js_1.default);
app.use((req, res) => {
    res.status(404).json({ message: "Not found" });
});
app.use((error, req, res, next) => {
    const { status = 500, message = "Server error" } = error;
    res.status(status).json({ message });
});
mongoose_1.default.connect(DB_HOST)
    .then(() => {
    console.log("DataBase connected...");
    app.listen(PORT);
    console.log(`Server running on port ${PORT}`);
})
    .catch((error) => {
    console.log(error.message);
    process.exit(1);
});
