import mongoose from "mongoose";

const { Schema, model } = mongoose

const blogSchema = new Schema({
    title : {
        type : String,
        required : true
    },
    body : {
        type : String,
        required : true
    },
    coverImageUrl : {
        type : String ,
        required  : false
    },
    createdBy : {
        type : Schema.Types.ObjectId,
        ref : "users"
    }
}, {timestamps : true})

const Blog = model("blogs", blogSchema)

export default Blog