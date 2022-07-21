import Contact from "../../models/Contact.js";

import { createError } from "../../helpers/index.js";

const getById = async (req, res) => {
    const { id } = req.params;
    const result = await Contact.findById(id);
    if (!result) {
        throw createError(404, "Not found")
    }
    res.json(result);
}

export default getById;