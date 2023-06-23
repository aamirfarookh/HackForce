const  mongoose=require("mongoose")

const userschema=mongoose.Schema({
    name:{type:String,reqiure:true},
    email:{type:String,require:true,unique:true},
    password:{type:String,require:true},
    feedback:{type:Number,default:null}
})

const usermodel=mongoose.model("user",userschema)

module.exports={usermodel}