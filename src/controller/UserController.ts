import {
  Body,
  Controller,
  Get,
  JsonController,
  Param,
  Post,
  Put,
} from "routing-controllers";

@JsonController("/user")
export class UserController {
  @Post("/create")
  post(@Body() name: string) {
    return "create user and return token";
  }
  @Get("/get")
  getOne() {
    return "this action returns user";
  }
  @Put("/update")
  put(@Body() name: string) {
    return "update user info";
  }
}
