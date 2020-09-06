import "reflect-metadata";
import express from "express";
import { Container, Inject } from "typedi";
import { createConnection } from "typeorm";
import { useContainer as typeormUseContainer } from "typeorm";
import {
  useContainer as routingUseContainer,
  useExpressServer,
} from "routing-controllers";
import { UserController } from "./controller/UserController";
import { CharacterController } from "./controller/CharacterContorllers";
import { GachaController } from "./controller/GachaControllers";

export class App {
  public readonly expressApp: express.Application;

  constructor() {
    this.expressApp = express();
    routingUseContainer(Container);
    typeormUseContainer(Container);
    useExpressServer(this.expressApp, {
      controllers: [UserController, CharacterController, GachaController],
    });
  }

  public async startExpressServer() {
    const connection = await createConnection();
    const server = await this.expressApp.listen(3000);
    return server;
  }
}
