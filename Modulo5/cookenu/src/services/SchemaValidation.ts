import {AnyObjectSchema} from "yup"; 
import { Request, Response } from "express";

export const schemaValidation= (schema:AnyObjectSchema) => async (req:Request,res:Response,next:Function) => {
    let body = req.body; 
    try {
        await schema.validate(body); 
        next()
    } catch (error:any) {
        return res.status(400).send({error: error.message})
    }
}