import express from "express";

import * as ctrl from "../../controllers/contacts/index.js";

import {ctrlWrapper} from "../../helpers/index.js";

import {isValidId} from "../../middlewares/index.js";

const ContactRouter = express.Router();

ContactRouter.get("/", ctrlWrapper(ctrl.getAll));
ContactRouter.get("/:id", isValidId, ctrlWrapper(ctrl.getById));
ContactRouter.post("/", ctrlWrapper(ctrl.add));
ContactRouter.put("/:id", isValidId, ctrlWrapper(ctrl.updateById));
ContactRouter.delete("/:id", isValidId, ctrlWrapper(ctrl.removeById));
ContactRouter.patch("/:id/favorite", isValidId, ctrlWrapper(ctrl.setFavorite));

export default ContactRouter;