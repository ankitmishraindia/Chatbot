import mongoose, { Schema } from "mongoose";

//message Schema
const messageSchema=new Schema({
     role:{
        type:String,
        enum:['user','bot'],
        required:true
     },
     content:{
        type:String,
        required:true
     },
     timestamp:{
        type:Date,
        default:Date.now
     }
})

//All chat conversation Schema
const conversationSchema=new Schema({
    context:{
        type:String,
        required:true,
        unique:true
    },
    messages:[messageSchema]
})

const Conversation=mongoose.model('Conversation',conversationSchema)
export default Conversation;