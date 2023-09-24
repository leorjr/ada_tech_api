import "dotenv/config";
import jwt from "jsonwebtoken";

class UserToken {
  static generate(payload: any) {
    const secret = process.env.SECRET_JSON_WEB_TOKEN || "";

    const options = {
      expiresIn: "1h",
    };

    return jwt.sign(payload, secret, options);
  }
}

export { UserToken };
