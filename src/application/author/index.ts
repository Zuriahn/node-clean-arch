import { createActions } from "./commands/create/index";
import { allActions } from "./queries/all/index";

export const commands = {
  create: createActions,
};

export const queries = {
  all: allActions,
};
