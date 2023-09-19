import Express from "express";
import { router } from "./routes";

const app = Express();

app.use(Express.json())
app.use(router);

app.listen(3000, () => {
  console.log("Server is running on PORT 3000");
})