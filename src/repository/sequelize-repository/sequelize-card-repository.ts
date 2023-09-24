import { Card } from "../../models/card.model";
import { User } from "../../models/user.model";
import { CardRepository } from "../card-repository";

class SequelizeCardRepository implements CardRepository {
  async listAll(): Promise<any> {
    const cards = await Card.findAll();
    return cards;
  }
}

export { SequelizeCardRepository };
