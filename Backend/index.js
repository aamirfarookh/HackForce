
const express = require("express");
const cookie=require("cookie-parser")
const {connection}=require("./config/db")
const {userRoute}=require("./routes/userroute")
const { InterviewModel } = require("./models/interviewModel");
const { Configuration, OpenAIApi } = require("openai");
const cors = require("cors");

const app = express();
app.use(express.json())
app.use(cookie())
app.use(cors())

require("dotenv").config();
//Open AI configuration
const openAi = new OpenAIApi(
  new Configuration({
    apiKey: process.env.OPEN_AI_API_KEY,
  })
);

app.use("/user",userRoute)


let conversationHistory = [];

const initialPrompts = [
    {
      role: "system",
      content:"You are an interviewer. Ask 5 easy relevant questions about nodejs to the student, one at a time and keep the conversation going. If the student is unable to answer, move on to the next question without providing an explanation. After asking all the questions, provide feedback to the student regarding areas of improvement based on their answers."
    },
    {
      role: "assistant",
      content: "Great, let's start the interview."
    }
  ];

  // Add initial prompts to the conversation history
conversationHistory.push(...initialPrompts)

// Interview bot route
app.post("/startprompt",async(req,res)=>{
    const {prompt} = req.body;
    conversationHistory.push({ role: "user", content: prompt })
    const response = await openAi.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: conversationHistory,
        max_tokens: 1000
      });

      const reply = response.data.choices[0].message.content.trim()

      if (reply) {
        if(conversationHistory.length===13){
          conversationHistory.push({ role: "assistant", content: reply });
          let feedback = conversationHistory[13].content;
          feedback = feedback.split("\n")[1]
          console.log(feedback)
          let rating = response.data.choices[0].rating;
          console.log(rating)
           const newInterview = new InterviewModel({studentId:"1",role:"Node",conversation:conversationHistory,feedback:feedback,rating:rating})
           await newInterview.save()
           return res.status(200).send({status:200,res:reply,msg:"interview is done"})
        }
        else{
          conversationHistory.push({ role: "assistant", content: reply });
          return res.status(200).send({status:200,res:reply,msg:"ongoing"})
        }
        
       
        
      }
      return res.status(500).send({status:500,msg:"Try again after some time"})
    
})




app.get("/",(req,res)=>{
  res.send("homepage")
})




app.listen(process.env.port,async()=>{
  try {
      await connection
      console.log("Server connected to DB..")
  } catch (error) {
      console.log(error)
  }
  console.log("server is running...")
})