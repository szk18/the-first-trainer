import { Controller, Get } from "routing-controllers";

@Controller()
export class UserController {
  @Get("/users")
  getAll() {
    return "this action returns all users";
  }
}
