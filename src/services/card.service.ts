import { AppError } from "../errors/app-error";
import { CardRepository } from "../repository/card-repository";
import { v4 as uuidv4 } from "uuid";

class CardService {
  constructor(private cardRepository: CardRepository) {}

  async list() {
    const cards = await this.cardRepository.list();

    return cards;
  }

  async getById(id: string) {
    const cards = await this.cardRepository.findById(id);

    return cards;
  }

  async create(titulo: string, conteudo: string, lista: string) {
    const cardExists = await this.cardRepository.findByTitle(titulo);

    if (cardExists) {
      throw new AppError({ message: "Card Already Exists", statusCode: 401 });
    }

    const card = await this.cardRepository.create(
      uuidv4(),
      titulo,
      conteudo,
      lista
    );

    return card;
  }

  async update(id: string, titulo: string, conteudo: string, lista: string) {
    const card = await this.cardRepository.findById(id);

    if (!card) {
      throw new AppError({ message: "Card not found", statusCode: 404 });
    }

    const cardTitle = await this.cardRepository.findByTitle(titulo);

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

  async delete(id: string) {
    const card = await this.cardRepository.findById(id);

    if (!card) {
      throw new AppError({ message: "Card not found", statusCode: 404 });
    }

    const cardListWithoutCardRemoved = await this.cardRepository.delete(id);

    return cardListWithoutCardRemoved;
  }
}

export { CardService };
