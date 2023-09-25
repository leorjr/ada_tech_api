import { Request, Response, NextFunction } from "express";
import { UserService } from "../services/user.service";
import { UserValidation } from "../utils/user-validation";
import { UserRepository } from "../repository/user-repository";

class UserController {
  constructor(private userRepository: UserRepository) {}
  async create(request: Request, response: Response, next: NextFunction) {
    if (!UserValidation.registerUserInput(request, response)) {
      return;
    }

    const { login, password } = request.body;
    const userService = new UserService(this.userRepository);

    try {
      await userService.create(login, password);
      response.status(201).json({ message: "User created!" });
    } catch (error) {
      next(error);
    }
  }

  async login(request: Request, response: Response, next: NextFunction) {
    if (!UserValidation.registerUserInput(request, response)) {
      return;
    }

    const { login, password } = request.body;
    const userService = new UserService(this.userRepository);

    try {
      const token: string = await userService.login(login, password);

      response.status(200).json({ token });
    } catch (error) {
      next(error);
    }
  }
}

export { UserController };
