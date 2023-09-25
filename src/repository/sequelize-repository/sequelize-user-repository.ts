import { User } from "../../models/user.model";
import { UserRepository } from "../user-repository";

class SequelizeUserRepository implements UserRepository {
  async create(id: string, login: string, password: string) {
    const user = await User.create({ id, login, password });
    return user;
  }

  async findByLogin(login: string) {
    const user = await User.findOne({ where: { login } });
    return user;
  }
}

export { SequelizeUserRepository };
