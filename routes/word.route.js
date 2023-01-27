const express = require("express");
const words = require("../models/word.model")
const app = express.Router();

app.get("/", async(req,res)=>{
    // let word = req.body;
console.log(req.body);
    // let len= (word.length);
    try{
    //   let w = await words.findOne({word: word })
    //   if(w){
    //   return res.send("correct")
    //   }else{
    //     return res.send("wrong")
    //   }
    let w = await words.find()
    return res.send(w)
    }catch(e){
      res.status(404).send(e.message);
    }
  })
  app.post("/", async(req,res)=>{
    let {word} = req.body;
    console.log(word)
    try{
      let w = await words.create({word})
      return res.send({w,  message: "Success"})
  
    }catch(e){
      res.status(404).send(e.message);
    }
  })
  module.exports = app