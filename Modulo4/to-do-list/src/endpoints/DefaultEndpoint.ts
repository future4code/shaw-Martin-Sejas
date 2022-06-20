import { Request, Response } from "express"

export const INSERT_NAME = async (req:Request, res:Response) => {
    let statusCode = 400; 
    try {
 
    } catch (error:any) {
        if(error.message === undefined)
        {
            res.status(500).send("Internal server error"); 
        }
        else if (error.sqlMessage)
        {
            res.status(statusCode).send({message: error.sqlMessage})
        }
        else{
            res.status(statusCode).send({message: error.message})
        }
        
    }
}