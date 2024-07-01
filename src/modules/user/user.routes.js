import { Router } from "express";
import { singIn, singUp } from "./user.controller.js";
import { checkEmail } from "../../middleware/checkEmail.js";
import { validate } from "../../middleware/validate.js";
import { signinVal, signupVal } from "./user.validation.js";

const userRouter =Router()
userRouter.post('/signup',validate(signupVal),checkEmail,singUp)
userRouter.post('/login',validate(signinVal),singIn)


export default userRouter;