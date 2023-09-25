import { Request, Response } from "express";
import { z, ZodError } from "zod";

class CardValidation {
  static async registerCardInput(request: Request, response: Response) {
    const registerCardBodySchema = z.object({
      titulo: z.string(),
      conteudo: z.string(),
      lista: z.string(),
    });

    try {
      registerCardBodySchema.parse(request.body);
    } catch (error) {
      if (error instanceof ZodError) {
        response
          .status(400)
          .json({ error: "necessário informar titulo, conteudo e lista" });
        return false;
      }
    }

    return true;
  }
}

export { CardValidation };
