const jwt = require('jsonwebtoken');
const {usermodel}=require("../models/usermodel")
const {blackmodel}=require("../models/blacklistmodel")
require("dotenv").config()
const {client}=require("../config/redis")

const authenticate = async(req, res, next) => {
    let token = await client.get('token');
    let refreshtoken = await client.get('refreshtoken');
if(!token){
    if(!refreshtoken){
        return res.status(404).send({"msg":"Please Login first"})
    }
    return res.status(404).send({"msg":"Please Login first"})
}

    let decoded=jwt.verify(token,process.env.secretkey)

if(decoded){
    req.body.userid=decoded.userid

    req.body.email=decoded.email
    next()          
}else{
    res.status(400).send({"msg":"Invalid Token"})
}
    
}

module.exports = {authenticate}

