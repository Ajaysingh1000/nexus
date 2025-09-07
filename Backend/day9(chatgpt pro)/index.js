// import { GoogleGenAI } from "@google/genai";
const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({ apiKey:"AIzaSyBk_JH1dFHjaTV3Qgn7dA6_sLSUU6vF5GA"});

async function main(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: prompt,
  });
  console.log(response.text);
  return response.text
}

// main();
module.exports = main