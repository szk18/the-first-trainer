import {
  Body,
  BodyParam,
  Controller,
  Get,
  HeaderParam,
  JsonController,
  Param,
  Post,
  Put,
} from "routing-controllers";
import { UserService } from "../service/UserService";
import "reflect-metadata";

@JsonController("/user")
export class UserController {
  constructor(private userService: UserService) {}

  @Post("/create")
  async post(@BodyParam("name") name: string) {
    return this.userService.insertUser(name);
  }

  @Get("/get")
  async getOne(@HeaderParam("x-token") token: string) {
    return await this.userService.getUser(token);
  }

  @Put("/update")
  async put(
    @BodyParam("name") newName: string,
    @HeaderParam("x-token") token: string
  ) {
    return this.userService.updateUser(newName, token);
  }
}
