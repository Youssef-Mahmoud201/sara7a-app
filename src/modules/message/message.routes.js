import { Router } from "express";
import { verifyToken } from "../../middleware/verifyToken.js";
import { addMessage, deleteMessage, getAllmessage } from "./message.controller.js";
import { validate } from "../../middleware/validate.js";
import { addMessageVal } from "./message.validation.js";


const messageRouter =Router()
messageRouter.post('/',validate(addMessageVal),addMessage)
messageRouter.get('/',getAllmessage)
messageRouter.delete('/:id',verifyToken,deleteMessage)
export default messageRouter;