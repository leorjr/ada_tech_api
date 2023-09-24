import { AppError } from "../errors/app-error";
import { UserInput, UserOutput } from "../interfaces/user.interfaces";
import { UserRepository } from "../repository/user-repository";
import { UserPassword } from "../utils/user-password";
import { UserToken } from "../utils/user-token";

class UserService {
  constructor(private userRepository: UserRepository) {}

  async registerUser(login: string, password: string) {
    const userResponse: UserOutput | null = await this.findUserByLogin(login);

    if (userResponse) {
      throw new AppError({ message: "User Already Exists", statusCode: 401 });
    }

    const passwordHashed = await UserPassword.generateHash(password);

    const user: UserOutput = await this.userRepository.create(
      login,
      passwordHashed
    );

    return user;
  }

  async login({ login, password }: UserInput) {
    const userResponse: UserOutput | null = await this.findUserByLogin(login);

    if (!userResponse) {
      throw new AppError({ message: "User Not Found", statusCode: 401 });
    }

    const matchPassword = await UserPassword.comparePassword(
      password,
      userResponse.password
    );

    if (!matchPassword) {
      throw new AppError({
        message: "User or Password Incorrect",
        statusCode: 401,
      });
    }

    const token: string = UserToken.generate(login);

    return token;
  }

  async findUserByLogin(login: string) {
    const userResponse: UserOutput | null =
      await this.userRepository.findUserByLogin(login);

    return userResponse;
  }
}

export { UserService };
