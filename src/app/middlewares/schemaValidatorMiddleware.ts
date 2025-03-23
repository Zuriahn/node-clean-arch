import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import { asyncHandler } from "../../shared/handlers/asyncHandler";
import { ErrorHandler } from "../../shared/exceptions/errorHandler";
import { formatValidationErrors } from "../../shared/utils/formatValidatorErrors";

async function schemaValidatorMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const result = validationResult(req);
  if (result.isEmpty()) {
    next();
  } else {
    throw new ErrorHandler(
      409,
      "Validator errors",
      null,
      formatValidationErrors(result.array())
    );
  }
}

export default asyncHandler(schemaValidatorMiddleware);
