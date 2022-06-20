import { Request, Response } from "express";
import {v4 as uuidv4} from "uuid"; 
import { createUser } from "../data/createUser";
import {User} from "../types";


export const registerUser = (req:Request, res:Response) => {
    let statusCode = 400; 
    try {
        let {name, email, password} = req.body; 

        if(!name || !email || !password)
        {
            throw new Error("Body incomplete, must have name:string, email:string, password:string")
        }

        if(typeof name !== 'string' || typeof email !== 'string' || typeof password !== 'string')
        {
            throw new Error("Please make sure all 3 fields are strings")
        }

        let id = uuidv4() ; 

        let newUser:User = {
            id,
            name, 
            email,
            password
        }

       createUser(newUser).then( () => {
        res.status(201).send( {message: "User created!", 
        user: newUser})
       }).catch( (error) => {
        res.status(400).send({Error: error.sqlMessage})
       })
        
        
    } catch (error:any) {
        if(!error.message)
        {
            statusCode = 500; 
            res.status(statusCode).send("Unexpected server error")
        }
        else (!error.sqlMessage)
        {
            res.status(statusCode).send({error: error.message})
        }
      
        
        
    }
} 