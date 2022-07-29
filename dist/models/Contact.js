"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.schemas = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const joi_1 = __importDefault(require("joi"));
const { Schema, model } = mongoose_1.default;
const contactSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true, unique: true, match: /\([0-9]{3}\) [0-9]{3}-[0-9]{4}/ },
    favorite: { type: Boolean, default: false }
}, { versionKey: false, timestamps: true });
const add = joi_1.default.object({
    name: joi_1.default.string().required(),
    email: joi_1.default.string().required(),
    phone: joi_1.default.string().required(),
    favorite: joi_1.default.bool()
});
const updateFavorite = joi_1.default.object({
    favorite: joi_1.default.bool().required()
});
exports.schemas = {
    add,
    updateFavorite,
};
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
