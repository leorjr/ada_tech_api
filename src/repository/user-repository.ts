interface UserRepository {
  create(login: string, password: string): Promise<any>;
  findUserByLogin(login: any): Promise<any>;
}

export { UserRepository };
