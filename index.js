import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log("In the middleware!");
  next();
});

app.post("/api", async (request, response) => {
  console.log(request.body);
  response.status(200).send({ message: "success" });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
