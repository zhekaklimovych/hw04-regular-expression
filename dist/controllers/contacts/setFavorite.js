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
const Contact_1 = __importDefault(require("../../models/Contact"));
const index_1 = require("../../helpers/index");
const setFavorite = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const ID = yield Contact_1.default.findById(id);
    if (!ID)
        throw (0, index_1.createError)(404, "Not found");
    const { favorite } = req.body;
    if (favorite === undefined)
        throw (0, index_1.createError)(400, "missing field favorite");
    const result = yield Contact_1.default.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(result);
});
exports.default = setFavorite;
