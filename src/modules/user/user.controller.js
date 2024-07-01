import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import { User } from "../../../db/models/user.model.js";
import { catchError } from "../../middleware/catchError.js";
import { appError } from "../../utils/appError.js";

const singUp=catchError(async(req,res)=>{
    let user = await User.insertMany(req.body)
    user[0].password= undefined
    res.status(201).json({message:"welcome",user})
})
const singIn = catchError(async(req,res,next)=>{
    let user =await User.findOne({email:req.body.email})
    if(!user || !bcrypt.compareSync(req.body.password,user.password)){
        return next(new appError('the email or password is incorrect',409))
    }
    jwt.sign({userId:user._id,name:user.name},'yossefmahmoud888',(err,token)=>{
        res.json({message:"success",token})
    })

})
export{
    singIn,
    singUp
}