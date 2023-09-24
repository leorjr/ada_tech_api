import { Card } from "../../models/card.model";
import { User } from "../../models/user.model";
import { CardRepository } from "../card-repository";

class SequelizeCardRepository implements CardRepository {
  async listAll(): Promise<any> {
    const cards = await Card.findAll();
    return cards;
  }

  async createACard(
    id: string,
    titulo: string,
    conteudo: string,
    lista: string
  ): Promise<any> {
    const card = await Card.create({ id, titulo, conteudo, lista });
    return card;
  }
}

export { SequelizeCardRepository };
