import { Request, Response } from "express"
import UpdateUser from "../data/UpdateUser";

export const EditUser = async (req:Request, res:Response) => {
    let statusCode = 400; 
    try {
        let name = req.body.name as string; 
        let nickname = req.body.nickname as string; 
        let id = parseInt(req.params.id); 

        if (isNaN(id))
        {
            throw new Error("Id must be a number")
        }

        if(!name && !nickname)
        {
            throw new Error("Body fields are empty please input at least a name or nickname to change");
        }

        if(name && typeof name !== 'string')
        {
            throw new Error("Please input name as a string")
        }

        if(nickname && typeof nickname !== 'string')
        {
            throw new Error("Please input nickname as a string")
        }

        if(!name)
        {
            let response = UpdateUser(,nickname)
        }


 
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