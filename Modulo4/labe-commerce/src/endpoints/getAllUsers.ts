import { Request, Response } from "express";
import { getUsers } from "../data/getUsers";


export const getAllUsers = (req:Request, res:Response) => {
    let statusCode= 400; 
    try {
        getUsers().then( (response) => {
            res.status(200).send(response)
        })
    } catch (error:any) {
         if(!error.message)
        {
            statusCode = 500; 
            res.status(statusCode).send("Unexpected server error")
        }
        else {
            statusCode = 400; 
            res.status(statusCode).send(error.message)
        }
        
    }

}