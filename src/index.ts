import "reflect-metadata";
import { createExpressServer } from "routing-controllers";
import { CharacterController } from "./controller/CharacterContorllers";
import { GachaController } from "./controller/GachaControllers";
import { UserController } from "./controller/UserController";

const app = createExpressServer({
  controllers: [UserController, GachaController, CharacterController],
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
