import { Router } from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";
dotenv.config();
const router = Router();

router.post("/", async (request, response) => {
  console.log(request.body);
  const { movieSearch } = request.body;
  console.log(movieSearch);
  try {
    const movie = await fetch(
      `https://www.omdbapi.com/?s=${movieSearch}&apikey=${process.env.OMDB_API_KEY}`
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

export default router;
