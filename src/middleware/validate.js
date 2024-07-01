import { appError } from "../utils/appError.js"

export const validate= (sehema)=>{
    return(req,res,next)=>{
        let { error }= sehema.validate({...req.body,...req.params,...req.query})
        if(!error){
            next()
        }else{
            let errMsg =error.details.map(err=>err.message)
            next(new appError(errMsg,401))
        }
    }
}