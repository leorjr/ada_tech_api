import express, { Request, Response, NextFunction } from "express";
import { UserController } from "../controllers/user.controller";
import { SequelizeUserRepository } from "../repository/sequelize-repository/sequelize-user-repository";

const userRoutes = express.Router();
const userRepository = new SequelizeUserRepository();
const userController = new UserController(userRepository);

userRoutes.post(
  "/register",
  (request: Request, response: Response, next: NextFunction) =>
    userController.create(request, response, next)
);

userRoutes.post(
  "/login",
  (request: Request, response: Response, next: NextFunction) =>
    userController.login(request, response, next)
);

export { userRoutes };
