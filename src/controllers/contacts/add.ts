import Contact, {IContact} from "../../models/Contact";
import {Request, Response} from "express";

const add = async (req: Request, res: Response): Promise<void> => {
    const result: IContact = await Contact.create(req.body);
    const contact: IContact = {
        id: result.id,
        name: result.name,
        email: result.email,
        phone: result.phone
    }
    res.status(201).json(contact);
}

export default add;