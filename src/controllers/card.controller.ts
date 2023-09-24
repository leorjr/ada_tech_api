import { Request, Response, NextFunction } from "express";
import { ZodError, z } from "zod";
import { UserService } from "../services/user.service";
import { SequelizeUserRepository } from "../repository/sequelize-repository/sequelize-user-repository";
import { Error as SequelizeError } from "sequelize";
import { AppError } from "../errors/app-error";
import { UserValidation } from "../utils/user-validation";
import { SequelizeCardRepository } from "../repository/sequelize-repository/sequelize-card-repository";
import { CardService } from "../services/card.service";
import { CardValidation } from "../utils/card-validation";

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

  static async create(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    if (!CardValidation.registerCardInput(request, response)) {
      return;
    }

    const { titulo, descricao, lista } = request.body;
    const cardService = new CardService(cardRepository);

    try {
      const card = await cardService.createACard(titulo, descricao, lista);
      response.status(201).json(card);
    } catch (error) {
      next(error);
    }
  }
}

export { CardController };
