const express = require("express");
const User = require("../models/user.model");
// const Users = require("../models/user.model")
const app = express.Router();

app.post("/",async (req,res)=>{
    let {name, level }= req.body;
    console.log('n', name);
    
    try{
        let user = await User.create({name, level})
        return res.send({user,  message: "Success"})
    
      }catch(e){
        res.status(404).send(e.message);
      }
})
app.patch("/:id",async (req,res)=>{
    let {id }= req.params;
    let {score}= req.body
    console.log(score);
    // score = +score;
    try{
        let user = await User.findById(id)
        let s= user.score
        console.log("s", s+score);
        let s1 = s+score;
        let user1 = await User.findByIdAndUpdate(id, {score : s1}, {new: true})
        
        return res.send(user1)
    
      }catch(e){
        res.status(404).send(e.message);
      }
})
app.get("/",async (req,res)=>{
    
    try{
        let user = await User.find()
        return res.send(user)
    
      }catch(e){
        res.status(404).send(e.message);
      }
})
module.exports = app