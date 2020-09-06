import "reflect-metadata";

import { App } from "./app";
import Container from "typedi";
const application = Container.get(App);
application.startExpressServer().then(() => console.log("starting on 3000"));
