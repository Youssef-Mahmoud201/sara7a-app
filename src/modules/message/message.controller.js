import { Message } from "../../../db/models/message.model.js";
import { catchError } from "../../middleware/catchError.js";
import { appError } from "../../utils/appError.js";

const addMessage=catchError(async(req,res)=>{
    let message = await Message.insertMany(req.body)
    res.status(201).json({message:"The message was sent successfully"})
})
const deleteMessage = catchError(async(req,res,next)=>{
    let message = await Message.findByIdAndDelete({_id:req.params.id,user:req.user.userId})
    if(!message) return next(new appError('not found',401));
    res.status(201).json({message:"The message has been deleted"})
})
const getAllmessage= catchError(async(req,res,next)=>{
    let messages = await Message.find({ user:req.user.userId })
    if(!messages) return next(new appError('null',401))
    res.status(201).json({message:"the messages are",messages})
})
export{
    deleteMessage,
    getAllmessage,
    addMessage
}