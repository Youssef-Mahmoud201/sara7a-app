process.on('uncaughtException',()=>{
    console.log("error in code ")
})
import express from "express"
import { dbConnect } from "./db/dbConnection.js"
import { globalError } from "./src/middleware/globalError.js"
import userRouter from "./src/modules/user/user.routes.js"
import { appError } from "./src/utils/appError.js"
import messageRouter from "./src/modules/message/message.routes.js"
import jwt from "jsonwebtoken"
import { User } from "./db/models/user.model.js"




const app =express()
const port =3000
app.use(express.json())

app.use('/auth',userRouter)
app.use('/message',messageRouter)
app.use('*',(req,res,next)=>{
    next(new appError(`route not found${req.originalUrl}`,404))
})
app.get('/verify/:token',async(req,res)=>{
    jwt.verify(req.params.token,'youssefmahmoud888',async(err,payload)=>{
        if(err) return res.json(err)
        await User.findOneAndUpdate({ email:payload.email ,})
        res.json({message:"success",email:payload.email})
    })
    

})
app.use(globalError)
process.on('unhandledRejection',(err)=>{
    console.log(err)
})
app.get('/',(req,res)=>res.send('hallo wrold!'))
app.listen(port,()=>console.log(` example app listening on port ${port}!`))