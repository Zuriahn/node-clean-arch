import express from "express";

import { commands, queries } from "../../application/author/index";

import schemaValidatorMiddleware from "../middlewares/schemaValidatorMiddleware";

const nameController = "/author";
const router = express.Router();

router.get(
  `/all`,
  queries.all.validator,
  schemaValidatorMiddleware,
  queries.all.handler
);

router.post(
  "/",
  commands.create.validator,
  schemaValidatorMiddleware,
  commands.create.handler
);

export default { nameController, router };
