import { AppError } from "../errors/app-error";
import { CardRepository } from "../repository/card-repository";
import { v4 as uuidv4 } from "uuid";

class CardService {
  constructor(private cardRepository: CardRepository) {}

  async listAll() {
    const cards = await this.cardRepository.listAll();

    return cards;
  }

  async getById(id: string) {
    const cards = await this.cardRepository.getById(id);

    return cards;
  }

  async createACard(titulo: string, conteudo: string, lista: string) {
    const cardExists = await this.cardRepository.findCardByTitle(titulo);

    if (cardExists) {
      throw new AppError({ message: "Card Already Exists", statusCode: 401 });
    }

    const card = await this.cardRepository.createACard(
      uuidv4(),
      titulo,
      conteudo,
      lista
    );

    return card;
  }

  async updateACard(
    id: string,
    titulo: string,
    conteudo: string,
    lista: string
  ) {
    const card = await this.cardRepository.getById(id);

    if (!card) {
      throw new AppError({ message: "Card not found", statusCode: 404 });
    }

    const cardTitle = await this.cardRepository.findCardByTitle(titulo);

    if (cardTitle) {
      throw new AppError({ message: "Title Already Exists", statusCode: 401 });
    }

    const cardUpdated = await this.cardRepository.update(
      id,
      titulo,
      conteudo,
      lista
    );

    return cardUpdated;
  }

  async deleteACard(id: string) {
    const card = await this.cardRepository.getById(id);

    if (!card) {
      throw new AppError({ message: "Card not found", statusCode: 404 });
    }

    const cardListWithoutCardRemoved = await this.cardRepository.delete(id);

    return cardListWithoutCardRemoved;
  }
}

export { CardService };
