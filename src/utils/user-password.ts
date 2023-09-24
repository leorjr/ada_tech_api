import bcrypt from "bcrypt";
import { AppError } from "../errors/app-error";

class UserPassword {
  static async generateHash(password: string) {
    const saltRounds = 10;

    try {
      const hash = await bcrypt.hashSync(password, saltRounds);

      return hash;
    } catch (error) {
      console.log(error);

      throw new AppError({
        message: "Error to encrypt password",
        statusCode: 500,
      });
    }
  }

  static async comparePassword(password: string, passwordHashed: string) {
    try {
      const match = await bcrypt.compareSync(password, passwordHashed);

      return match;
    } catch (error) {
      console.log(error);

      throw new AppError({
        message: "Error to decrypt password",
        statusCode: 500,
      });
    }
  }
}

export { UserPassword };
