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

<<<<<<< HEAD
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

=======
//! setting up backend to have a viewable page
app.get("/", (req, res) => {
  res.send("Welcome to Pixel APi");
});

app.get("/api/OPENAI", (req, res) => {
  res.send("Welcome to Pixel APi");
});

//? calling the OMDBRouter from endpoints/OMDB.js
app.use("/api/OMDB", OMDBRouter);

//? calling the OPENAIRouter from endpoints/OPENAI.js
app.use("/api/OPENAI", OPENAIRouter);

// app.post("/api/OPENAI", async (req, res) => {
//   const { prompt } = req.body;
//   console.log(prompt);
//   try {
//     const response = await openai
//       .createImage({
//         prompt: prompt, // ? prompt is the text you want to generate an image from
//         n: 9, // ? n is the number of images you want to generate, sizes available are 256x256, 512x512, 1024x1024
//         size: "256x256", // ? size is the size of the image you want to generate
//       })
//       .catch((error) => {
//         console.log(`OPENAI ERR: ${error}`);
//       });

//     console.log(response.data);

//     const image_url = response.data;
//     console.log(image_url);

//     res.status(200).send(image_url);
//   } catch (error) {
//     console.log(`ERR: ${error}`);
//   }
// });

>>>>>>> a239de17cc8c871ab8cade04c4e4450d2c461563
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
