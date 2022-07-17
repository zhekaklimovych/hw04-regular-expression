import Contact from "../../models/Contact.js";

import { createError } from "../../helpers/index.js";

const removeById = async (req, res) => {
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