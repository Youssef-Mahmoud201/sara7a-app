import mongoose from "mongoose";

export const dbConnect = mongoose.connect('mongodb://localhost:27017/sarahApp').then(()=>{
    console.log("database connected successfully.")
})