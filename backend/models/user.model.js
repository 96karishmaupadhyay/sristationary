import mongoose, { Schema,model } from "mongoose";
const userSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    confirmPassword:{
        type:String,
        required:true
    }
})
const userModel=model('usersdb',userSchema)
export default userModel;