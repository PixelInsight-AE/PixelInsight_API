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

app.get("/", (req, res) => {
  res.send("Welcome to Pixel APi");
});

app.post("/api/OMDB", async (request, response) => {
  console.log(request.body);
  // response.status(200).send({ message: "success" });
  const { movieSearch } = request.body;
  console.log(movieSearch);
  try {
    const movie = await fetch(
      `https://www.omdbapi.com/?s=${movieSearch}&apikey=${
        process.env.OMDB_API_KEY || 73740781
      }`
    )
      .then((res) => res.json())
      .then((data) => data.Search);

    console.log(movie);
    response.status(200).send(movie);
  } catch (error) {
    console.log(error);
    response.status(500).send({ message: "error" });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
