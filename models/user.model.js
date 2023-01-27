const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {type:String, required: true},
    
    level: {
        type: String,
        enum : ['High level','Medium level', 'Low level'],
        default: "Low Level"
    },
    score: {type: Number, default: 0}
   
},{
    versionKey: false,
    timestamps:true
});
const User = mongoose.model("user", userSchema);

module.exports = User;