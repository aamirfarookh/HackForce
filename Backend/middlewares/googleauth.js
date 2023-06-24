const GoogleStrategy = require('passport-google-oauth20').Strategy;
require("dotenv").config()
const passport=require("passport")
const {usermodel}=require("../models/usermodel")
const { v4: uuidv4 } = require('uuid');
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:8800/user/auth/google/callback"
  },
  async function(accessToken, refreshToken, profile, cb) {
    console.log(profile)
    try {
        let email=profile._json.email
        console.log(email)
        const user=await usermodel.findOne({email})
        //console.log(user)
  
        if(!user){
          console.log("adding new user")
          let newuser=new usermodel({
            
            name:profile._json.name,
            email,
            password:"12345",
            
          })
          await newuser.save()
          return cb(null, newuser)
        }else{
          console.log("user is present db")
          return cb(null, user)
  
        }
      } catch (error) {
        console.log(error)
      }
   }
));

module.exports={passport}