"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ctrl = __importStar(require("../../controllers/contacts"));
const helpers_1 = require("../../helpers");
const middlewares_1 = require("../../middlewares");
const ContactRouter = express_1.default.Router();
ContactRouter.get("/", (0, helpers_1.ctrlWrapper)(ctrl.getAll));
ContactRouter.get("/:id", middlewares_1.isValidId, (0, helpers_1.ctrlWrapper)(ctrl.getById));
ContactRouter.post("/", (0, helpers_1.ctrlWrapper)(ctrl.add));
ContactRouter.put("/:id", middlewares_1.isValidId, (0, helpers_1.ctrlWrapper)(ctrl.updateById));
ContactRouter.delete("/:id", middlewares_1.isValidId, (0, helpers_1.ctrlWrapper)(ctrl.removeById));
ContactRouter.patch("/:id/favorite", middlewares_1.isValidId, (0, helpers_1.ctrlWrapper)(ctrl.setFavorite));
exports.default = ContactRouter;
