import Contact from "../../models/Contact";
import {Request, Response} from "express";
import { createError } from "../../helpers/index";

const setFavorite = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const ID = await Contact.findById(id);
    if (!ID) throw createError(404, "Not found");

    const {favorite} = req.body;
    if(favorite === undefined) throw createError(400, "missing field favorite")

    const result = await Contact.findByIdAndUpdate(id, req.body, {new: true});
    res.status(200).json(result);
}

export default setFavorite;