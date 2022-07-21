import Contact from "../../models/Contact.js";

const getAll = async (req, res) => {
    const {page = 1, limit = 10} = req.query;
    const skip = (page - 1) * limit;
    const result = await Contact.find({}, "-createdAt -updatedAt", {skip, limit: Number(limit)})
    // const result = await Contact.find({}, "title author")
    res.json(result);
}

export default getAll;