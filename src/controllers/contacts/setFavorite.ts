import Contact from "../../models/Contact";
import {Request, Response} from "express";
import { createError } from "../../helpers/index";
import {Document} from "mongoose";

const setFavorite = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    if (!id) {
        throw createError(404, "Not found")
    }
    const result = await Contact.findByIdAndUpdate(id, req.body, {new: true});
    if (!result) {
        throw createError(400, "missing field favorite")
    }
    //@ts-ignore
    result.favorite = !result.favorite;
    res.status(200).json(result);
}

export default setFavorite;