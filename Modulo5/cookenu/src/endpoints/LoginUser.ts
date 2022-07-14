import {Request, Response} from "express"; 
import { cookenuUserTable } from ".."; 
import { PasswordHasher } from "../services/PasswordHasher";
import { WebTokenHandler} from "../services/WebTokenHandler";
import { AuthenticationData } from "../types/AuthenticationData";
import { CookenuUser } from "../types/CookenuUser";

export const loginUser = async (req:Request, res:Response) => {
 
    //body automatically checked
    try {
        let {password, email} = req.body; 
        let response = await cookenuUserTable.findUserEmail(email); 

        // if no email found, send error
        if(response.length === 0)
        {
            throw new Error("Error on login, incorrect email and/or password"); 
        }

        let registeredUser:CookenuUser = response[0]; 

        //check if password matches database
        let hasher = new PasswordHasher(); 

        //if false throw error
        if( !(await hasher.validatePassword(password,response[0].password)))
        {
            throw new Error("Error on login, incorrect email and/or password")
        }

        //create token handler object to generate token
        let webTokenHandler = new WebTokenHandler();
        let authenticationData:AuthenticationData = {id:registeredUser.id}
        let token = webTokenHandler.generateToken(authenticationData); 

        //send token over
        res.status(200).send({access_token: token})


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