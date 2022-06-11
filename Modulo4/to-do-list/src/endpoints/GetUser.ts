import { Request, Response } from "express"
import SelectUser from "../data/SelectUser";

export const GetUser = async (req:Request, res:Response) => {
    let statusCode = 400; 
    let userId = parseInt(req.params.id as string); 
    try {
        if(isNaN(userId))
        {
            throw new Error("Please input a valid userId (number)")
        }

        const response = await SelectUser(userId); 
        if(response[0] === undefined)
        {
            throw new Error("User not found with this id")
        }
        res.status(200).send(response[0])


 
    } catch (error:any) {
        if(error.message === undefined)
        {
            res.status(500).send("Internal server error"); 
        }
        else if (error.sqlMessage)
        {
            statusCode = 404;
            res.status(statusCode).send({message: error.sqlMessage})
        }
        else{
            res.status(statusCode).send({message: error.message})
        }
        
    }
}