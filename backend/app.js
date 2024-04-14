const express = require('express')
const cors = require('cors');
const { db } = require('./db/db');
const {readdirSync} = require('fs')
require('./dbls/config');
const User = require("./dbls/Users");
const nodemailer = require("nodemailer");
const Jwt = require('jsonwebtoken');
const jwtkey = "e-commerce";
const app = express()

require('dotenv').config()

const PORT = process.env.PORT || 5000

//middlewares
app.use(express.json())
app.use(cors())

//routes
readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/' + route)))

const server = () => {
    db()
    app.listen(PORT, () => {
        console.log('listening to port:', PORT)
    })
}


const transporter=nodemailer.createTransport({

    service:"gmail",
    auth:{
      user:"sejalkadam270@gmail.com",
      pass:"sejal123"
  
    }
  })
  
  app.post("/register",async (req,resp)=>{
    let users= new User(req.body);
    let result= await users.save();
    result=result.toObject();
    delete result.password;
    Jwt.sign({result},jwtkey,{expiresIn:"2h"},(err,token)=>{
      if(err){
        resp.send({result:"something is wrong"});
      }
      resp.send({result,auth:token});
    });
  })
  
  app.post("/login",async(req,resp)=>{
  
    if(req.body.password && req.body.email){
  let user= await User.findOne(req.body).select("-password");
  if(user){
    Jwt.sign({user},jwtkey,{expiresIn:"2h"},(err,token)=>{
      if(err){
        resp.send({result:"something is wrong"});
      }
      resp.send({user,auth:token});
    });
  
  }else{
    resp.send({result:"no user found"});
  }
  }
    else{
    resp.send({result:"no user found"});
  }
  
  })


server()