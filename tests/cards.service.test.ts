import express, { Application } from "express";
import { InMemoryCardRepository } from "../src/repository/in-memory/in-memory-card-repository";
import { v4 as uuidv4 } from "uuid";

describe("Card Service", () => {
  let app: Application;

  const cardRepository = new InMemoryCardRepository();

  const card = {
    id: uuidv4(),
    titulo: "Primeiro album da Lady Gaga",
    conteudo: "Primeiro album da Lady Gaga",
    lista: "musicas internacionais",
  };

  beforeAll(() => {
    app = express();
    app.use(express.json());
  });

  it("should get a list of cards", async () => {
    const response = await cardRepository.list();
    expect(response).toEqual([]);
  });

  it("should be abble to create a card", async () => {
    const response = await cardRepository.create(
      card.id,
      card.titulo,
      card.conteudo,
      card.lista
    );

    expect(response).toEqual(card);
  });

  it("should get a card by id", async () => {
    const response = await cardRepository.findById(card.id);

    expect(response).toEqual(card);
  });

  it(`should get a card by title`, async () => {
    const response = await cardRepository.findByTitle(card.titulo);

    expect(response).toEqual(card);
  });

  it(`should be abble to update a card`, async () => {
    const novoCard = {
      id: uuidv4(),
      titulo: "The Fame",
      conteudo: "Primeiro album da Lady Gaga",
      lista: "musicas internacionais",
    };

    const response = await cardRepository.update(
      novoCard.id,
      novoCard.titulo,
      novoCard.conteudo,
      novoCard.lista
    );

    expect(response).toEqual(novoCard);
  });

  it(`should be abble to delete a card`, async () => {
    const response = await cardRepository.delete(card.id);

    expect(response).toEqual([]);
  });
});
