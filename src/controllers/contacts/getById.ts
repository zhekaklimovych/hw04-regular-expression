import Contact from "../../models/Contact";
import {Request, Response} from "express";

import { createError } from "../../helpers/index";

const getById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const result = await Contact.findById(id);
    if (!result) {
        throw createError(404, "Not found")
    }
    res.json(result);
}

export default getById;