import express from "express";

import * as ctrl from "../../controllers/users";

import {ctrlWrapper} from "../../helpers";
import {add} from "../../models/User";
import {isValidId, validation} from "../../middlewares";

const UserRouter = express.Router();

UserRouter.get("/", ctrlWrapper(ctrl.getAll));
UserRouter.get("/:id", isValidId, ctrlWrapper(ctrl.getById));
UserRouter.post("/", validation(add), ctrlWrapper(ctrl.add));
UserRouter.put("/:id", isValidId, validation(add), ctrlWrapper(ctrl.updateById));
UserRouter.delete("/:id", isValidId, ctrlWrapper(ctrl.removeById));

export default UserRouter;