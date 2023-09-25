interface CardRepository {
  list(): Promise<any | null>;
  findById(id: string): Promise<any | null>;
  delete(id: string): Promise<any | null>;
  create(
    id: string,
    titulo: string,
    conteudo: string,
    lista: string
  ): Promise<any | null>;
  findByTitle(title: string): Promise<any | null>;
  update(
    id: string,
    titulo: string,
    conteudo: string,
    lista: string
  ): Promise<any | null>;
}

export { CardRepository };
