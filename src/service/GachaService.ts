import { Service } from "typedi";
import { getConnection } from "typeorm";
import { Character } from "../entity/Character";
import { Possession } from "../entity/Possession";

@Service()
export class GachaService {
  gachaRepository = getConnection().getRepository(Character);
  possessionRepository = getConnection().getRepository(Possession);

  async draw(times: number, token: string) {
    const characters: any[] = [];
    return { results: characters };
  }
}
