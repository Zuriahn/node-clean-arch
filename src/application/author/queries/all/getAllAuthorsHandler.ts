//  APP
import { NextFunction, Request, Response } from "express";

//  SHARED
import { asyncHandler } from "../../../../shared/handlers/asyncHandler";

//  INFRASTRUCTURE
import { authorRepository } from "../../../../infrastructure/persistence/repositories";

async function GetAllAuthorsQueryHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const params = req.query;

  const data = await authorRepository.GetAllAsync();

  res.status(200).json(data);
}

export default asyncHandler(GetAllAuthorsQueryHandler);