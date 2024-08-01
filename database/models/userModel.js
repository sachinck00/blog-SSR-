import mongoose from "mongoose";
import bcrypt from 'bcryptjs'

const { Schema , model } = mongoose

const userSchema = new Schema({
   fullName : {
    type :String,
    required : true
   },
   email : {
    type : String ,
    required : true,
    unique : true
   }, 
   salt :{
    type : String , 
   }, 
   password : {
    type :String,
    required : true
   },
   profileImage : {
    type : String ,
    default : "./images/default avatar.png"
   },
   role : {
    type : String,
    enum : ["USER", "ADMIN"],
    default : "USER"
   }
}, {timestamps : true})

userSchema.pre('save', async function(next){
   const user = this
   if(!user.isModified("password")) return
   const salt = await bcrypt.genSalt(10)
   const hashPassword = await bcrypt.hash(user.password , salt)
   this.salt = salt
   this.password = hashPassword
   next()
})


const User = model("users", userSchema)

export default User