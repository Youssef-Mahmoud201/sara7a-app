import { Schema, Types, model } from "mongoose";

const schema = new Schema({
    content : String,
    user:{
        type: Types.ObjectId,
        ref :'User'
    }
},{
    versionKey:false
})
export const Message = model('Message',schema)