import {Request, Response} from "express"; 
import { cookenuUserTable } from ".."; 
import { MainDatabaseConnection } from "../services/MainDatabaseConnection";
import { PasswordHasher } from "../services/PasswordHasher";
import { WebTokenHandler } from "../services/WebTokenHandler";
import { CookenuUser } from "../types/CookenuUser";

export const signupUser = async (req:Request, res:Response) => {
    let statusCode = 400; 
    try {
        //body is good
        
        //check if email exists
        let response = await cookenuUserTable.findUserEmail(req.body.email); 
        
        if (response.length !== 0)
        {
          throw new Error("Error on signup, email already exists")
        }

        //if no email found proceed with signup
        
        //create id
        let id = MainDatabaseConnection.generateId(); 

        //hash password
        let hasher = new PasswordHasher(); 
        let password = await hasher.hashPassword(req.body.password); 
        // retrieve remaining info from body
        let {name, email} = req.body; 

        //create user entity to input record on database
        let newCookenuUser:CookenuUser = {
            id,
            name, 
            email,
            password
        }

        //insert information

        await cookenuUserTable.insertNewUser(newCookenuUser); 

        //need to generate id and hash password and return token
        let tokenHandler = new WebTokenHandler(); 

        let token = tokenHandler.generateToken({id}); 

        res.status(201).send({
            access_token: token
        })

    } catch (error:any) {
        
        if (error.message || error.sqlMessage)
        {
            res.status(400).send({error: error.message})
        }
        else {
            res.status(500).send({error: error.message})
        }
    }
    
}