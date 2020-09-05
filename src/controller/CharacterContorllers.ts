import { Get, JsonController } from "routing-controllers";

@JsonController("/character")
export class CharacterController {
  @Get("/list")
  getAll() {
    return "return all characters";
  }
}
