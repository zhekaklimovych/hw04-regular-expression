import User from "../../models/User";
import {Request, Response} from "express";
import { createError } from "../../helpers/index";

const updateById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;

    const result = await User.findByIdAndUpdate(id, req.body, {new: true});
    if (!result) {
        throw createError(404, "Not found")
    }
    res.json(result);
}

export default updateById;