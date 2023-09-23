import { AppError } from "../errors/app-error";
import bcrypt from "bcrypt";
import {
  UserInput,
  UserRepositoryInterface,
} from "../interfaces/user.respository.interface";
import { UserRepository } from "../repository/user-repository";
import { UserPassword } from "../utils/user-encrypt-password";

class UserService {
  constructor(private userRepository: UserRepository) {}

  async registerUser(login: string, password: string) {
    const userExists = await this.findUserByLogin(login);

    if (userExists) {
      throw new AppError({ message: "User Already Exists", statusCode: 401 });
    }

    const passwordHashed = await UserPassword.generateHash(password);

    const user = await this.userRepository.create(login, passwordHashed);

    return user;
  }

  async findUserByLogin(login: any) {
    const user = await this.userRepository.findUserByLogin(login);
    return user;
  }
}

export { UserService };
