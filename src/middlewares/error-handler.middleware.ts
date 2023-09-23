import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/app-error";

const errorHandler = (
  error: any,
  request: Request,
  respose: Response,
  next: NextFunction
) => {
  console.log(error);

  if (error instanceof AppError) {
    return respose.status(error.statusCode).json({ error: error.message });
  }

  respose.status(500).json({ error: "Internal Server Error" });
};

export { errorHandler };
