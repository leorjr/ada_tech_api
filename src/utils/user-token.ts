import "dotenv/config";
import jwt, { JwtPayload } from "jsonwebtoken";
import { AppError } from "../errors/app-error";

class UserToken {
  static secret = process.env.SECRET_JSON_WEB_TOKEN || "";

  static generate(login: string) {
    const options = {
      expiresIn: "1h",
    };

    const token = jwt.sign({ login }, UserToken.secret, options);

    return token;
  }

  static validate(token: string): JwtPayload {
    try {
      const decodedToken = jwt.verify(token, UserToken.secret) as JwtPayload;
      return decodedToken;
    } catch (error) {
      throw new AppError({ message: "Invalid token", statusCode: 401 });
    }
  }
}

export { UserToken };
