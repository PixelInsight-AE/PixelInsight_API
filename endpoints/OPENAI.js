import { Router } from "express";
import { Configuration, OpenAIApi } from "openai";

const router = Router();

const configuration = new Configuration({
  apiKey: process.env.OPEN_AI_KEY,
});

const openai = new OpenAIApi(configuration);

router.post("/", async (req, res) => {
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
});

router.get("/", (req, res) => {
  res.send("Welcome to the OPENAI API");
});

export default router;
