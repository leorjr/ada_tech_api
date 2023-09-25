interface UserRepository {
  create(id: string, login: string, password: string): Promise<any | null>;
  findUserByLogin(login: string): Promise<any | null>;
}

export { UserRepository };
