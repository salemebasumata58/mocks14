const mongoose = require("mongoose");

const wordSchema = new mongoose.Schema({
  word:{type : String}
   
},{
    versionKey: false,
    timestamps:true
});
const Words = mongoose.model("words", wordSchema);

module.exports = Words;