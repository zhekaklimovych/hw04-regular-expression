"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validation = (schema) => {
    const func = (req, res, next) => {
        const { error } = schema.validate(req.body);
        if (error) {
            error.status = 400;
            return next(error);
        }
        next();
    };
    return func;
};
exports.default = validation;
