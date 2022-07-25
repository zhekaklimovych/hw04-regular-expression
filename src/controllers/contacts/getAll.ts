import Contact, {IContact} from "../../models/Contact";
import {Request, Response} from "express";

const getAll = async (req: Request, res: Response): Promise<void> => {
    const {page = 1, limit = 10} = req.query;
    const skip: number = (Number(page) - 1) * Number(limit);
    const result: Array<IContact> = await Contact.find({}, "-createdAt -updatedAt", {skip, limit: Number(limit)})
    res.json(result);
}

export default getAll;