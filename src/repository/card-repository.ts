interface CardRepository {
  listAll(): Promise<any | null>;
}

export { CardRepository };
