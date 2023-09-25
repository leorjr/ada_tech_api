interface UserRepository {
  create(id: string, login: string, password: string): Promise<any | null>;
  findByLogin(login: string): Promise<any | null>;
}

export { UserRepository };
