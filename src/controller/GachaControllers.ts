import {
  Body,
  BodyParam,
  HeaderParam,
  JsonController,
  Post,
} from "routing-controllers";

@JsonController("/gacha")
export class GachaController {
  @Post("/draw")
  post(
    @BodyParam("times") times: number,
    @HeaderParam("x-token") token: string
  ) {
    return `return gacha ${times} times. token: ${token}`;
  }
}
