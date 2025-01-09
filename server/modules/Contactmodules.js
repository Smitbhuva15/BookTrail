const mongoose = require("mongoose");

const contactSceama=new mongoose.Schema({
    
        name:{
            type:String,
            required:true,
        },
        email:{
            type:String,
            required:true,
        },
        country:{
            type:String,
            required:true,
        },
        contactNo:{
            type:String,
            required:true,
        },
        message:{
            type:String,
            required:true,
        },
    
})

const contactModel=mongoose.model("Contact",contactSceama);
exports.contactModel=contactModel