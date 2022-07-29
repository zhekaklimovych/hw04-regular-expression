"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("../helpers");
const isValidBody = (req, res, next) => {
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        return next((0, helpers_1.createError)(400, "missing required name field"));
    }
    next();
};
exports.default = isValidBody;
