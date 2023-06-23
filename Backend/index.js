
const express = require("express");
require("dotenv").config();
const { Configuration, OpenAIApi } = require("openai");
const readline = require("readline");


const app = express();

//Open AI configuration
const openAi = new OpenAIApi(
    new Configuration({
      apiKey: process.env.OPEN_AI_API_KEY,
    })
  );
const cors = require("cors");

app.use(cors())


app.use(express.json());


let conversationHistory = [];

const initialPrompts = [
    {
      role: "system",
      content: "You are an interviewer. Ask relevant questions about the role of a node backend developer one at a time."
    },
    {
      role: "assistant",
      content: "Great, let's start the interview."
    }
  ];

  // Add initial prompts to the conversation history
// conversationHistory.push(...initialPrompts)


app.post("/startprompt",async(req,res)=>{
    const {prompt} = req.body;
    conversationHistory.push({ role: "user", content: prompt })
    const response = await openAi.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: conversationHistory,
        max_tokens: 100
      });

      const reply = response.data.choices[0].message.content.trim()

      if (reply) {
        conversationHistory.push({ role: "assistant", content: reply });
       
        return res.status(200).send({status:200,res:reply})
      }
      return res.status(500).send({status:500,msg:"Try again after some time"})
    
})

app.listen(4500,()=>{
    console.log("Server is running on port 4500")
})



