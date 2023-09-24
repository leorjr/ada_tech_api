import { Request, Response, NextFunction } from "express";
import { ZodError, z } from "zod";
import { UserService } from "../services/user.service";
import { SequelizeUserRepository } from "../repository/sequelize-repository/sequelize-user-repository";
import { Error as SequelizeError } from "sequelize";
import { AppError } from "../errors/app-error";
import { UserValidation } from "../utils/user-validation";
import { SequelizeCardRepository } from "../repository/sequelize-repository/sequelize-card-repository";
import { CardService } from "../services/card.service";

const cardRepository = new SequelizeCardRepository();

class CardController {
  static async listAll(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    const cardService = new CardService(cardRepository);

    try {
      const cards = await cardService.listAll();

      response.status(200).json(cards);
    } catch (error) {
      next(error);
    }
  }
}

export { CardController };
