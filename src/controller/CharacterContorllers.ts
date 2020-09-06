import "reflect-metadata";
import { Get, HeaderParam, JsonController } from "routing-controllers";

@JsonController("/character")
export class CharacterController {
  @Get("/list")
  getAll(@HeaderParam("x-token") token: string) {
    return `return all characters. token: ${token}`;
  }
}
