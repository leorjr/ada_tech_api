import { Request, Response, NextFunction } from "express";
import { CardService } from "../services/card.service";
import { CardValidation } from "../utils/card-validation";
import { CardRepository } from "../repository/card-repository";

class CardController {
  constructor(private cardRepository: CardRepository) {}
  async listAll(request: Request, response: Response, next: NextFunction) {
    const cardService = new CardService(this.cardRepository);

    try {
      const cards = await cardService.listAll();

      response.status(200).json(cards);
    } catch (error) {
      next(error);
    }
  }

  async create(request: Request, response: Response, next: NextFunction) {
    if (!CardValidation.registerCardInput(request, response)) {
      return;
    }

    const { titulo, conteudo, lista } = request.body;
    const cardService = new CardService(this.cardRepository);

    try {
      const card = await cardService.createACard(titulo, conteudo, lista);
      response.status(201).json(card);
    } catch (error) {
      next(error);
    }
  }

  async update(request: Request, response: Response, next: NextFunction) {
    const { id } = request.params;

    if (!CardValidation.registerCardInput(request, response)) {
      return;
    }

    const { titulo, conteudo, lista } = request.body;

    const cardService = new CardService(this.cardRepository);
    try {
      const card = await cardService.updateACard(id, titulo, conteudo, lista);
      response.status(200).json(card);
    } catch (error) {
      next(error);
    }
  }

  async delete(request: Request, response: Response, next: NextFunction) {
    const { id } = request.params;

    const cardService = new CardService(this.cardRepository);
    try {
      const cardListWithoutCardRemoved = await cardService.deleteACard(id);
      response.status(200).json(cardListWithoutCardRemoved);
    } catch (error) {
      next(error);
    }
  }
}

export { CardController };
