import { Request, Response, NextFunction } from "express";
import { UserService } from "../services/user.service";
import { SequelizeUserRepository } from "../repository/sequelize-repository/sequelize-user-repository";
import { UserValidation } from "../utils/user-validation";

const userRepository = new SequelizeUserRepository();

class UserController {
  static async registerUser(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    if (!UserValidation.registerUserInput(request, response)) {
      return;
    }

    const { login, password } = request.body;
    const userService = new UserService(userRepository);

    try {
      await userService.registerUser(login, password);
      response.status(201).json({ message: "User created!" });
    } catch (error) {
      next(error);
    }
  }

  static async login(request: Request, response: Response, next: NextFunction) {
    if (!UserValidation.registerUserInput(request, response)) {
      return;
    }

    const { login, password } = request.body;
    const userService = new UserService(userRepository);

    try {
      const token = await userService.login({ login, password });

      response.status(200).json({ token });
    } catch (error) {
      next(error);
    }
  }
}

export { UserController };
