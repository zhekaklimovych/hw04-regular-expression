import Contact from "../../models/Contact";
import {Request, Response} from "express";
import { createError } from "../../helpers/index";

const removeById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const result = await Contact.findByIdAndRemove(id);
    if (!result) {
        throw createError(404, "Not found")
    }
    res.status(200).json({
        message: "contact deleted"
    })
}

export default removeById;