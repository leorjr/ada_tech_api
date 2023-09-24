import "dotenv/config";
import jwt from "jsonwebtoken";

class UserToken {
  static generate(login: string) {
    const secret = process.env.SECRET_JSON_WEB_TOKEN || "";

    const options = {
      expiresIn: "1h",
    };

    return jwt.sign({ login }, secret, options);
  }
}

export { UserToken };
