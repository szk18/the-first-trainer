import { Body, JsonController, Post } from "routing-controllers";

@JsonController("/gacha")
export class GachaController {
  @Post("/draw")
  post(@Body() times: number) {
    return "return gacha result";
  }
}
