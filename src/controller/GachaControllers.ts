import "reflect-metadata";
import {
  Body,
  BodyParam,
  HeaderParam,
  JsonController,
  Post,
} from "routing-controllers";
import { GachaService } from "../service/GachaService";

@JsonController("/gacha")
export class GachaController {
  constructor(private gachaService: GachaService) {}

  @Post("/draw")
  async post(
    @BodyParam("times") times: number,
    @HeaderParam("x-token") token: string
  ) {
    return await this.gachaService.draw(times, token);
  }
}
