import "reflect-metadata";
import { createExpressServer } from "routing-controllers";
import { CharacterController } from "./controller/CharacterContorllers";
import { GachaController } from "./controller/GachaControllers";
import { UserController } from "./controller/UserController";
import { User } from "./entity/User";
import { createConnection } from "typeorm";

createConnection()
  .then(async (connection) => {
    const app = createExpressServer({
      controllers: [UserController, GachaController, CharacterController],
    });

    const user = new User("suzuki", "hoge token");
    const userRepository = connection.getRepository(User);
    await userRepository.save(user);
    console.log("user has beeb saved");

    app.listen(3000, () => {
      console.log("listening on port 3000");
    });
  })
  .catch((error) => console.error(error));
