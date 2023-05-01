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
  //send response to client
  response.status(200).send("Hello from the server!");
});

/* app.post("/posts", async (req, res) => {
  const { prompt } = req.body;
  console.log(prompt);
  try {
    const response = await openai
      .createImage({
        prompt: prompt, // ? prompt is the text you want to generate an image from
        n: 9, // ? n is the number of images you want to generate, sizes available are 256x256, 512x512, 1024x1024
        size: "256x256", // ? size is the size of the image you want to generate
      })
      .catch((error) => {
        console.log(`OPENAI ERR: ${error}`);
      });

    console.log(response.data);

    const image_url = response.data;
    console.log(image_url);

    res.status(200).send(image_url);
  } catch (error) {
    console.log(`ERR: ${error}`);
  }
}); */

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
