"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema, model } = mongoose_1.default;
const contactSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true, unique: true, match: /[0-9]{3} [0-9]{3}-[0-9]{4}/ },
    favorite: { type: Boolean, default: false }
}, { versionKey: false });
const handleErrors = (error, data, next) => {
    const { name, code } = error;
    if (name === "MongoServerError" && code === 11000) {
        error.status = 409;
    }
    else {
        error.status = 400;
        error.message = "missing required name field";
    }
    next();
};
contactSchema.post('save', handleErrors);
const Contact = model("contacts", contactSchema);
exports.default = Contact;
