import mongoose, {Document} from "mongoose";
import {NextFunction} from "express";
import {RequestError} from "../app";
import Joi from "joi";
const {Schema, model} = mongoose;

export interface IContact {
    name: string,
    email: string,
    phone: string,
    favorite?: boolean,
    id?: number
}

const contactSchema = new Schema<IContact>({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    phone: {type: String, required: true, unique: true, match: /\([0-9]{3}\) [0-9]{3}-[0-9]{4}/},
    favorite: {type: Boolean, default: false}
},{versionKey: false, timestamps: true});

const add = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    phone: Joi.string().required(),
    favorite: Joi.bool()
});

const updateFavorite = Joi.object({
    favorite: Joi.bool().required()
});

export const schemas = {
    add,
    updateFavorite,
}

const handleErrors = (error: RequestError, data: Document, next: NextFunction)=> {
    const {name, code} = error;
    if(name === "MongoServerError" && code === 11000) {
        error.status = 409;
    } else {
        error.status = 400;
        error.message = "missing required name field";
    }
    next()
}
//@ts-ignore
contactSchema.post('save', handleErrors);

const Contact = model<IContact>("contacts", contactSchema);

export default Contact;