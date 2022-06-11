import { Request, Response } from "express"
import insertUser from "../data/InsertUser";



export const CreateUser = async (req:Request, res:Response) => {
    let statusCode = 400; 
    try {
        let {name, nickname, email} = req.body; 

        if(!name || !nickname || !email) {
            throw new Error("Request Body must have the following fields 'name'(string) 'nickname'(string) email(string)");
        }

        if (typeof name !== 'string' || typeof nickname !== 'string' || typeof email !== 'string')
        {
          throw new Error("Request Body must have the following fields 'name'(string) 'nickname'(string) email(string)");
        }

       let response = await insertUser(name,nickname, email)  
       
       res.status(201).send({message: "user created",
                             data: {
                                id: response[0],
                                name, 
                                nickname,
                                email
                             }})


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