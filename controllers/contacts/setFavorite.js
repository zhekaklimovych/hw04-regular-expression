import Contact from "../../models/Contact.js";

import { createError } from "../../helpers/index.js";

const setFavorite = async (req, res) => {
    const { id } = req.params;
    if (!id) {
        throw createError(404, "Not found")
    }
    const result = await Contact.findByIdAndUpdate(id, req.body, {new: true});
    if (!result) {
        throw createError(400, "missing field favorite")
    }
    result.favorite = !result.favorite;
    res.status(200).json(result);
}

export default setFavorite;