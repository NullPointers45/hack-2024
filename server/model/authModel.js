const mongoose = require("mongoose");

const userSchema= mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    contact:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    role:{
        type:String,
        enum:['Farmer','Buyer','Transport'],
        required: true
    }
},{timestamps:true});

module.exports=mongoose.model("user", userSchema);