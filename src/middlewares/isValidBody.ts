import {Response, Request, NextFunction} from "express";
import { createError } from "../helpers";

const isValidBody = (req: Request, res: Response, next: NextFunction):void => {
    const {name, email, phone} = req.body;
    if(!name || !email || !phone) {
        return next(createError(400, "missing required name field"));
    }
    next();
}
export default isValidBody;