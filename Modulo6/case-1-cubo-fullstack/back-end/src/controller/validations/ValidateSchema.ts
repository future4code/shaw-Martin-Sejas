import { Request,Response } from "express";
import * as yup from "yup";

export const  validateSchema = (schema:yup.AnyObjectSchema) => async (req:Request, res:Response, next:Function) => {
    let body = req.body; 
    try {
        await schema.validate(body); 
        next(); 
    } catch (error:any) {
        res.status(400).send({error: error.message})
    }

}