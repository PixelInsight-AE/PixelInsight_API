import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import OMDBRouter from "./endpoints/OMDB.js";
import OPENAIRouter from "./endpoints/OPENAI.js";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log("In the middleware!");
  next();
});

//! setting up backend to have a viewable page
app.get("/", (req, res) => {
  res.send("Welcome to Pixel APi");
});

//? calling the OMDBRouter from endpoints/OMDB.js
app.use("/api/OMDB", OMDBRouter);

//? calling the OPENAIRouter from endpoints/OPENAI.js
app.use("/api/OPENAI", OPENAIRouter);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
