import nodemailer from "nodemailer"
import jwt from "jsonwebtoken"
import { catchError } from "../middleware/catchError"
export const sendMail= catchError(async(req,res,next)=>{
    const transporter = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:'youssefmahmoud988@gmail.com',
            pass:'',
        },
    });
    jwt.sign({email},'youssefmahmoud888',async(err,token)=>{
        const info = await transporter.sendMail({

        from:'"sarah app" <youssefmahmoud988@gmail.com>',
        to: email,
        subject:"welcome",
       // html: ,
    });
    console.log("Message sent: %s",info.messageId);
    })

}) 