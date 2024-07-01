import Joi from "joi";
 const addMessageVal =Joi.object({
    content:Joi.string().min(40).required(),

})
export{
    addMessageVal
}