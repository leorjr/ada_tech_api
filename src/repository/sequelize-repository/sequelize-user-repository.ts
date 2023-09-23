import { User } from "../../models/user.model";
import { UserRepository } from "../user-repository";

class SequelizeUserRepository implements UserRepository {
  async create(login: string, password: string) {
    const user = await User.create({ login, password });
    return user;
  }

  async findUserByLogin(login: string) {
    const user = await User.findOne({ where: { login } });
    return user;
  }
}

export { SequelizeUserRepository };
