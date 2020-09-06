import "reflect-metadata";
import { Service } from "typedi";
import { Connection, getConnection, Repository } from "typeorm";
import { v1 as uuidv1 } from "uuid";
import { User } from "../entity/User";

@Service()
export class UserService {
  userRepository = getConnection().getRepository(User);
  async insertUser(name: string) {
    const token = uuidv1();
    const user = new User(name, token);
    await this.userRepository.save(user);
    return { token };
  }

  async getUser(token: string) {
    const user = await this.userRepository.findOne({ token });
    if (!user) throw new Error("no such user exists");
    return { name: user.name };
  }

  async updateUser(newName: string, token: string) {
    const currentUser = await this.userRepository.findOne({
      token,
    });
    if (!currentUser) throw new Error("no such user exists");
    currentUser.name = newName;
    await this.userRepository.save(currentUser);
    return {};
  }
}
