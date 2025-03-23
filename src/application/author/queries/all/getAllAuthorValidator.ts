import { query } from "express-validator";

const queryValidator = [query("limit").optional({ nullable: true })];

export default queryValidator;
