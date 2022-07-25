import Contact from "../../models/Contact";
import {Request, Response} from "express";
import { createError } from "../../helpers/index";

const updateById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    if(!id) {
        throw createError(404, "Not found");
    }
    const result = await Contact.findByIdAndUpdate(id, req.body, {new: true});
    if(!result) {
        throw createError(400, "missing field favorite");
    }
    
    res.json(result);
}

export default updateById;