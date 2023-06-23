const express = require("express");
const cookie=require("cookie-parser")
const {connection}=require("./config/db")
const {userRoute}=require("./routes/userroute")
const app = express();
app.use(express.json())
app.use(cookie())

require("dotenv").config()

app.use("/user",userRoute)
// const { Configuration, OpenAIApi } =require("openai") 
// const readline = require("readline")
// const openAi = new OpenAIApi(
//   new Configuration({
//     apiKey: process.env.OPEN_AI_API_KEY,
//   })
// )

// const userInterface = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// })



// userInterface.prompt()
// userInterface.on("line", async input => {
//   const response = await openAi.createChatCompletion({
//     model: "gpt-3.5-turbo",
//     messages: [{ role: "user", content: input }]
//   })
//   console.log(response.data.choices[0].message.content)
//   userInterface.prompt()
// })


app.listen(process.env.port,async()=>{
  try {
      await connection
      console.log("Server connected to DB..")
  } catch (error) {
      console.log(error)
  }
  console.log("server is running...")
})