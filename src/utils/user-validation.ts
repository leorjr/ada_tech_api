import { Request, Response } from "express";
import { z, ZodError } from "zod";

class UserValidation {
  static async registerUserInput(request: Request, response: Response) {
    const registerUserBodySchema = z.object({
      login: z.string(),
      password: z.string(),
    });

    try {
      registerUserBodySchema.parse(request.body);
    } catch (error) {
      if (error instanceof ZodError) {
        response.status(401).json({ error: "necessário login e password" });
        return false;
      }
    }

    return true;
  }
}

export { UserValidation };
