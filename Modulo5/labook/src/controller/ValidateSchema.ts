import { AnyObjectSchema } from "yup";
import { Request, Response } from "express";

export const validateSchema = (schema:AnyObjectSchema) => async (req:Request, res:Response, next:Function) => {
    try {
        let body = req.body; 
        await schema.validate(body); 
        next(); 
    } catch (error:any) {
        res.status(400).send({error: error.message})
        
    }
    
}