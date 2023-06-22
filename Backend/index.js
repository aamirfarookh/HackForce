// const express = require("express");
// const app = express();
// app.use(express.json())


require("dotenv").config()

const { Configuration, OpenAIApi } =require("openai") 
const readline = require("readline")
const openAi = new OpenAIApi(
  new Configuration({
    apiKey: process.env.OPEN_AI_API_KEY,
  })
)

const userInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})


// app.post("/yourprompt",async(req,res)=>{

// })

userInterface.prompt()
userInterface.on("line", async input => {
  const response = await openAi.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: input }]
  })
  console.log(response.data.choices[0].message.content)
  userInterface.prompt()
})


