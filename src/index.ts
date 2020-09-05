import express from "express";
import * as mysql from "mysql";

const app: express.Express = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const router: express.Router = express.Router();
router.get("/", (req, res) => {
  res.send("hello, tsukuba");
});
router.post("/user/create", (req, res) => {
  res.send(req.body);
});

app.use(router);

app.listen(3000, () => {
  console.log("listening on port 3000");
});
