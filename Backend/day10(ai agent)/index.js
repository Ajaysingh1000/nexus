const { GoogleGenAI } = require("@google/genai");
const readlineSync = require("readline-sync");
const fetch = require("node-fetch");

const ai = new GoogleGenAI({
  apiKey: "AIzaSyBk_JH1dFHjaTV3Qgn7dA6_sLSUU6vF5GA",
});

let conversationHistory = [];

async function main(conversationHistory) {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: conversationHistory.map(item => item.content),
  });
//   console.log(response.text);
  return response.text;
}

async function getWeather(locations) {
  const weatherInfo = [];

  for (const {city, date} of locations) {

    if (date === "today") {
        const response = await fetch(
          `http://api.weatherapi.com/v1/current.json?key=71bcb85dc38b4175b89193511250401&q=${city}&aqi=yes`
        );
        const data = await response.json();
        weatherInfo.push(data);
    }else{
        const response = await fetch(
            `http://api.weatherapi.com/v1/current.json?key=71bcb85dc38b4175b89193511250401&q=${city}&aqi=yes`
          );
          const data = await response.json();
          weatherInfo.push(data); 
    }
  }

  return weatherInfo;
}

async function getAns() {
  const username = readlineSync.question("May I have your name please? ");
  const prompt = `
    You are an AI agent that responds only in JSON format.

    Your task is to analyze the user's query and extract two key details:
    1. City
    2. Date

    Date handling:
    - If the user asks for future weather, format the date as "yyyy-mm-dd".
    - If the user asks for today's weather, set the date value as "today".

    User asked this question: ${username}

    Please provide the output in the following format:I can relocate to…
-
￼
    {
    "city": "city_name",
    "date": "date_value"
    }
    `;
  conversationHistory.push({ role: "user", content: prompt });

  try {
    let response = await main(conversationHistory);
    response = response.replace(/^```json\s*|\s*```$/g, "").trim();
    conversationHistory.push({ role: "assistant", content: response });
    console.log(response);
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

getAns();

