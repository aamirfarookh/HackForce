const mongoose = require("mongoose");

const interviewSchema = mongoose.Schema({
    studentId: String,
    role: String,
    conversation: [{
        role: String,
        content: String
      }],
    feedback:String,    
      rating:String
  });

const InterviewModel = mongoose.model("interviews",interviewSchema);

module.exports ={InterviewModel}