import mongoose from "mongoose";

const {Schema, model} = mongoose

const commentSchema = new Schema({
    content : {
        type : String,
        required :true
    },
    createdBy : {
        type : Schema.Types.ObjectId,
        ref : "users"
    },
    toBlogId : {
        type : Schema.Types.ObjectId,
        ref : "blogs"
    }
}, {timestamps : true})

const Comment = model("comments", commentSchema)

export default Comment