import express, { Request, Response, NextFunction } from "express";
import { UserController } from "../controllers/user.controller";

const userRoutes = express.Router();

userRoutes.post(
  "/",
  (request: Request, response: Response, next: NextFunction) =>
    UserController.registerUser(request, response, next)
);

export { userRoutes };
