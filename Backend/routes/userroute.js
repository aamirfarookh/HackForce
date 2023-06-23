const express=require("express")
const {client}=require("../config/redis")
const userRoute=express.Router()
const {usermodel}=require("../models/usermodel")
const jwt=require("jsonwebtoken")
const bcrypt=require("bcrypt")

userRoute.post("/register",async(req,res)=>{
    
    const {name,email,password}=req.body
    try{
        const userpresent=await usermodel.findOne({email})
        if(userpresent){
            res.send("User Already Present Please Login")
        }
        bcrypt.hash(password,8,async(err, hash)=> {
            if(err) res.send({"msg":"Something went wrong","error":err.message})
            else{
                const user=new usermodel({name,email,password:hash})
                await user.save()
                res.status(200).send({"msg":"Registration Successfull!!"})
           }
        });


       
    }catch(error){
        res.send({"msg":"Something went wrong","error":error.message})
    }
})

userRoute.post("/login",async(req,res)=>{
    const {email,password}=req.body
    try {
        const user=await usermodel.findOne({email})
        console.log(user)
        if(!user){
            return res.status(400).send({"msg":"User not found please register!!"})
        }
        let decrypt=await bcrypt.compare(password,user.password)
        
        if(!decrypt){
            return res.status(400).send({"msg":"Incorrect password"})
        }
        let token=jwt.sign({email:user.email,userid:user._id},process.env.secretkey,{expiresIn:"6hr"})
        let refreshtoken=jwt.sign({email:user.email,userid:user._id},process.env.refreshsecretkey,{expiresIn:"1d"})
        client.set('token', token, 'EX', 21600);
        client.set('refreshtoken', refreshtoken, 'EX', 86400);
        res.status(200).send({msg:"Login successfull!!","token":token})
    } catch (error) {
        res.status(400).send({message:"User Login Failed!!"})
    }
})

userRoute.get("/logout",async(req,res)=>{
    try {
        let usertoken = await client.get('token');

        let userrefreshtoken = await client.get('refreshtoken');

        let blacklisttoken1 = new blackmodel( { token : usertoken } );
        let blacklisttoken2 = new blackmodel( { token : userrefreshtoken } );

        await blacklisttoken1.save();
        await blacklisttoken2.save();

       

        res.send({"msg":"Logout successfull"})
    } catch (error) {
        console.log(error)
    }
})





module.exports={userRoute}