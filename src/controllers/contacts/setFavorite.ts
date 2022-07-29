import Contact, {IContact} from "../../models/Contact";
import {Request, Response} from "express";
import { createError } from "../../helpers/index";

const setFavorite = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const {favorite} = req.body;
    if(favorite === undefined) throw createError(400, "missing field favorite")

    const result: IContact | null = await Contact.findByIdAndUpdate(id, req.body, {new: true});
    if (!result) throw createError(404, "Not found");
    res.status(200).json(result);
}

export default setFavorite;