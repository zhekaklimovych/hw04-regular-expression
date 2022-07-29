import express from "express";

import * as ctrl from "../../controllers/contacts";

import {ctrlWrapper} from "../../helpers";
import {schemas} from "../../models/Contact";
import {isValidId, validation} from "../../middlewares";

const ContactRouter = express.Router();

ContactRouter.get("/", ctrlWrapper(ctrl.getAll));
ContactRouter.get("/:id", isValidId, ctrlWrapper(ctrl.getById));
ContactRouter.post("/", validation(schemas.add), ctrlWrapper(ctrl.add));
ContactRouter.put("/:id", isValidId, validation(schemas.add), ctrlWrapper(ctrl.updateById));
ContactRouter.delete("/:id", isValidId, ctrlWrapper(ctrl.removeById));
ContactRouter.patch("/:id/favorite", isValidId, validation(schemas.updateFavorite), ctrlWrapper(ctrl.setFavorite));

export default ContactRouter;