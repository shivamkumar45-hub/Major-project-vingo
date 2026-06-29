
import mongoose from "mongoose";
const userschema = new mongoose.Schema({
    fullName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        
    },
    mobile:{
        type:String,
        required:true,

}, {timestamps:true})