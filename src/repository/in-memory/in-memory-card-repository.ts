import { Card } from "../../models/card.model";
import { CardRepository } from "../card-repository";

class InMemoryCardRepository implements CardRepository {
  private cards: any[];

  constructor() {
    this.cards = [];
  }

  async findById(id: string): Promise<any> {
    const card = this.cards.find((card) => card.id == id);
    return card;
  }

  async findByTitle(titulo: string) {
    const card = this.cards.find((card) => card.titulo == titulo);
    return card;
  }

  async list() {
    return this.cards;
  }

  async create(
    id: string,
    titulo: string,
    conteudo: string,
    lista: string
  ): Promise<any | null> {
    const newCard = { id, titulo, conteudo, lista };
    this.cards.push(newCard);
    return newCard;
  }

  async update(
    id: string,
    titulo: string,
    conteudo: string,
    lista: string
  ): Promise<any> {
    const cardsFiltered = this.cards.filter((item) => item.id != id);
    const cardAtualizado = { id, titulo, conteudo, lista };
    cardsFiltered.push(cardAtualizado);
    this.cards = cardsFiltered;
    return cardAtualizado;
  }

  async delete(id: string): Promise<any> {
    const indexElement = this.cards.findIndex((card) => card.id == id);

    if (indexElement !== -1) {
      this.cards = this.cards.splice(indexElement, 1);
    }

    return [];
  }
}

export { InMemoryCardRepository };
