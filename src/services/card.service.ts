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
}

export { CardService };
