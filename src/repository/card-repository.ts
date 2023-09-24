interface CardRepository {
  listAll(): Promise<any | null>;
  createACard(
    id: string,
    titulo: string,
    conteudo: string,
    lista: string
  ): Promise<any | null>;
}

export { CardRepository };
