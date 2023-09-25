import { Card } from "../../models/card.model";
import { CardRepository } from "../card-repository";

class SequelizeCardRepository implements CardRepository {
  async delete(id: string): Promise<any> {
    const cardListWithoutCardRemoved = await Card.destroy({
      where: { id },
    }).then(async () => await Card.findAll());

    return cardListWithoutCardRemoved;
  }
  async update(
    id: string,
    titulo: string,
    conteudo: string,
    lista: string
  ): Promise<any> {
    const cardUpdated = await Card.update(
      { titulo, conteudo, lista },
      { where: { id } }
    ).then(async () => await Card.findOne({ where: { id } }));

    return cardUpdated;
  }

  async findById(id: string): Promise<any> {
    const card = await Card.findOne({ where: { id } });
    return card;
  }
  async findByTitle(titulo: string) {
    const card = await Card.findOne({ where: { titulo } });
    return card;
  }

  async list() {
    const cards = await Card.findAll();
    return cards;
  }

  async create(
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
