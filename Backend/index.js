
const express = require("express");
const cookie=require("cookie-parser")
const {connection}=require("./config/db")
const {userRoute}=require("./routes/userroute")

const app = express();
app.use(express.json())
app.use(cookie())

require("dotenv").config();


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



// //Open AI configuration
// const openAi = new OpenAIApi(
//     new Configuration({
//       apiKey: process.env.OPEN_AI_API_KEY,
//     })
//   );










// userInterface.prompt()
// userInterface.on("line", async input => {
//   const response = await openAi.createChatCompletion({
//     model: "gpt-3.5-turbo",
//     messages: [{ role: "user", content: input }]
//   })
//   console.log(response.data.choices[0].message.content)
//   userInterface.prompt()
// })


// const initialPrompts = [
//     {
//       role: "system",
//       content: "You are an interviewer. Ask relevant questions about the role of a node backend developer one at a time."
//     },
//     {
//       role: "assistant",
//       content: "Great, let's start the interview."
//     }
//   ];

  // Add initial prompts to the conversation history
// conversationHistory.push(...initialPrompts)


// app.post("/startprompt",async(req,res)=>{
//     const {prompt} = req.body;
//     conversationHistory.push({ role: "user", content: prompt })
//     const response = await openAi.createChatCompletion({
//         model: "gpt-3.5-turbo",
//         messages: conversationHistory,
//         max_tokens: 100
//       });

//       const reply = response.data.choices[0].message.content.trim()

//       if (reply) {
//         conversationHistory.push({ role: "assistant", content: reply });
       
//         return res.status(200).send({status:200,res:reply})
//       }
//       return res.status(500).send({status:500,msg:"Try again after some time"})
    
// })



app.get("/",(req,res)=>{
  res.send("homepage")
})

// app.get('/auth/google',
//   passport.authenticate('google', { scope: ['profile',"email"] }));

//   app.get('/auth/google/callback', 
//   passport.authenticate('google', { failureRedirect: '/login',session:false }),
//   function(req, res) {
    
//     // console.log(req.user)
//     const user=req.user
//     console.log(user)
//     let token=jwt.sign({email:user.email,userid:user._id},process.env.secretkey,{expiresIn:"6hr"})
//         let refreshtoken=jwt.sign({email:user.email,userid:user._id},process.env.refreshsecretkey,{expiresIn:"1d"})
//     client.set('token', token, 'EX', 21600);
//     client.set('refreshtoken', refreshtoken, 'EX', 86400);
    
//     res.send("login")
//   });


app.listen(process.env.port,async()=>{
  try {
      await connection
      console.log("Server connected to DB..")
  } catch (error) {
      console.log(error)
  }
  console.log("server is running...")
})