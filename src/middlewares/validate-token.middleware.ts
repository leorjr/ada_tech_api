import { Request, Response, NextFunction } from "express";
import { UserToken } from "../utils/user-token";
import { AppError } from "../errors/app-error";

const validateToken = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const token = request.headers.authorization;

  if (!token) {
    return next(new AppError({ message: "Unauthorized", statusCode: 401 }));
  }

  try {
    const tokenInformation = token?.split(" ")[1] ? token?.split(" ")[1] : "";

    const _ = UserToken.validate(tokenInformation);

    next();
  } catch (error) {
    return next(new AppError({ message: "Unauthorized", statusCode: 401 }));
  }
};

export { validateToken };
