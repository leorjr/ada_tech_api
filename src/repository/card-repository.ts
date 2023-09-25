interface CardRepository {
  listAll(): Promise<any | null>;
  getById(id: string): Promise<any | null>;
  delete(id: string): Promise<any | null>;
  createACard(
    id: string,
    titulo: string,
    conteudo: string,
    lista: string
  ): Promise<any | null>;
  findCardByTitle(title: string): Promise<any | null>;
  update(
    id: string,
    titulo: string,
    conteudo: string,
    lista: string
  ): Promise<any | null>;
}

export { CardRepository };
