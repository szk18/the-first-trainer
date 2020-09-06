import "reflect-metadata";
import { Service } from "typedi";
import { Connection, getConnection, Repository } from "typeorm";
import { User } from "../entity/User";

@Service()
export class UserService {
  public async insertUser(user: User): Promise<User> {
    const userRepository = getConnection().getRepository(User);
    await userRepository.save(user);
    return user;
  }
}
