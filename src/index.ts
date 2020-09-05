import "reflect-metadata";
import { createExpressServer } from "routing-controllers";
import { UserController } from "./controller/UserController";

const app = createExpressServer({
  controllers: [UserController],
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
