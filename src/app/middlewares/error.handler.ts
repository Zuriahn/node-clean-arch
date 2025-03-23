import { NextFunction, Request, Response } from "express";
import { ErrorHandler } from "../../shared/exceptions/errorHandler";

export default function errorHandler(
  err: ErrorHandler,
  req: Request,
  res: Response,
  next: NextFunction
) {
  res.status(err.code || 500).json(err);
}
