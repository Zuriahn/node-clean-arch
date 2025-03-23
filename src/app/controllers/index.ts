import authorControllerConfig from "./authorController";
import errorHandler from "../middlewares/error.handler";

export function addPresentation(app: import("express").Application) {
  app.use(authorControllerConfig.nameController, authorControllerConfig.router);
  app.use(errorHandler);
}
