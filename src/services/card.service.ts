import { AppError } from "../errors/app-error";
import { UserInput, UserOutput } from "../interfaces/user.interfaces";
import { CardRepository } from "../repository/card-repository";
import { UserPassword } from "../utils/user-password";
import { UserToken } from "../utils/user-token";
import { v4 as uuidv4 } from "uuid";

class CardService {
  constructor(private cardRepository: CardRepository) {}

  async listAll() {
    const cards = await this.cardRepository.listAll();

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
}

export { CardService };
