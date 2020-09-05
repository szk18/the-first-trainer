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

@JsonController("/user")
export class UserController {
  @Post("/create")
  post(@BodyParam("name") name: string) {
    return `create user(name:${name}) and return token`;
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
