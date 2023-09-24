import express, { Request, Response, NextFunction } from "express";
import { UserController } from "../controllers/user.controller";
import { validateToken } from "../middlewares/validate-token.middleware";

const userRoutes = express.Router();

userRoutes.post(
  "/register",
  (request: Request, response: Response, next: NextFunction) =>
    UserController.registerUser(request, response, next)
);

userRoutes.post(
  "/login",
  (request: Request, response: Response, next: NextFunction) =>
    UserController.login(request, response, next)
);

export { userRoutes };
