import { AppError } from "../errors/app-error";
import bcrypt from "bcrypt";
import {
  UserInput,
  UserRepositoryInterface,
} from "../interfaces/user.respository.interface";
import { UserRepository } from "../repository/user-repository";
import { UserPassword } from "../utils/user-password";
import { UserToken } from "../utils/user-token";

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

  async login(login: string, password: string) {
    const user = await this.findUserByLogin(login);

    if (!user) {
      throw new AppError({ message: "User Not Found", statusCode: 401 });
    }

    const matchPassword = await UserPassword.comparePassword(password);

    if (!matchPassword) {
      throw new AppError({
        message: "User or Password Incorrect",
        statusCode: 401,
      });
    }

    const { login: loginUser, id } = user;

    const token = UserToken.generate({ loginUser, id });

    return {
      token,
      user,
    };
  }

  async findUserByLogin(login: any) {
    const user = await this.userRepository.findUserByLogin(login);

    return user;
  }
}

export { UserService };
