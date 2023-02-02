// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import Error from "next/error";
import { Configuration, OpenAIApi } from "openai";

type Data = {
  name: string;
};

const configuration = new Configuration({
  apiKey: process.env.NEXT_OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  const data = req.body as { topic: string; category: string; mood: string };
  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: generatePrompt(data.topic, data.category, data.mood),
      temperature: 0.6,
      max_tokens: 200,
    });

    console.log("completion.data.choices[0].text",completion.data.choices[0].text);
    res.status(200).json({ result: completion.data.choices[0].text });
  } catch (error: any) {
    // Consider adjusting the error handling logic for your use case
    if (error.response) {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json({
        error: {
          message: "An error occurred during your request.",
        },
      });
    }
  }
}

function generatePrompt(topic: string, category: string, mood: string, type: "tweets" | "linkedin post" = "tweets") {
  return `Generate 1 ${type} on the topic of ${htmlEntities(topic)} with 1 hashtags and clearly labeled "1.". 
        Make sure there is a touch of ${htmlEntities(mood)}  in there. 
            Make sure each generated ${type} is at max 5 words and base it on ${htmlEntities(category)}`;
}

/**
 *  String the user input and replace malicious code with normal string
 * @param {string} str input
 * @return {string}
 */
export function htmlEntities(str: string) {
  if (str === "" || !str) return "";
  return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
