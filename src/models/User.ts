import mongoose, {Document} from "mongoose";
import {NextFunction} from "express";
import {RequestError} from "../app";
import Joi from "joi";
const {Schema, model} = mongoose;

export interface IUser {
    name: string,
    email: string,
    phone: string,
    passport: string,
    birthday: string,
    id?: number
}

const userSchema = new Schema<IUser>({
    name: {type: String, required: true, match: /[a-zA-Zа-яА-Я]+/},
    email: {type: String, required: true, unique: true, match: /[a-zA-Z0-9]+@\w+\.[a-zA-Z0-9]+\.[a-zA-Z]+/},
    phone: {type: String, required: true, unique: true, match: /^\+\d\([0-9]{4}\) [0-9]{3}-[0-9]{2}-[0-9]{2}$/},
    passport: {type: String, required: true, match: /\d{9}/},
    birthday: {type: String, required: true}
},{versionKey: false, timestamps: true});

export const add = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    phone: Joi.string().required(),
    passport: Joi.string().required(),
    birthday: Joi.string().required()
});

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
userSchema.post('save', handleErrors);

const User = model<IUser>("users", userSchema);

export default User;