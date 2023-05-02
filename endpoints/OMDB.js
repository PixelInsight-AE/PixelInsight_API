import { Router } from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";
dotenv.config();

//! establish a router
const router = Router();

//? create a route for the OMDB API call
//! use home route, in home will set endpoint to /api/OMDB
router.post("/", async (request, response) => {
  //log the request body to the console
  console.log(request.body);
  //destructure the request body
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

//? setup welcome message
router.get("/", (req, res) => {
  res.send("Welcome to the OMDB API");
});

//? export the router
//? this will allow us to import the router in index.js
//? all endpoints in folder will be exported as router
//! in index.js is where router is called and routes are defined
export default router;
