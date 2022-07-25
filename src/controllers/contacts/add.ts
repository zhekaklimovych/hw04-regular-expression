import Contact, {IContact} from "../../models/Contact";
import {Request, Response} from "express";
import {Document} from "mongoose";

const add = async (req: Request, res: Response): Promise<void> => {
    const result: Document<IContact> = await Contact.create(req.body);
    res.status(201).json(result);
}

export default add;