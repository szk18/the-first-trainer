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
import { Inject } from "typedi";
import { User } from "../entity/User";
import { UserService } from "../service/UserService";
import "reflect-metadata";

@JsonController("/user")
export class UserController {
  constructor(private userService: UserService) {}

  @Post("/create")
  public async post(@BodyParam("name") name: string) {
    const token = "sample token";
    const user = new User(name, token);
    await this.userService.insertUser(user);
    return { token };
  }
  @Get("/get")
  getOne(@HeaderParam("x-token") token: string) {
    return `return one user(token:${token})`;
  }
  @Put("/update")
  put(@BodyParam("name") name: string, @HeaderParam("x-token") token: string) {
    return `update user(name:${name} token:${token})`;
  }
}
