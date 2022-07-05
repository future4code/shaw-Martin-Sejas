import {Request, Response} from "express"; 
import { cookenuUserTable } from ".."; 
import { WebTokenHandler} from "../services/WebTokenHandler";
import { CookenuUser } from "../types/CookenuUser";

export const getProfileById = async (req:Request, res:Response) => {
    try {
        let tokenHandler = new WebTokenHandler(); 
        let {authorization} = req.headers; 
        let {id} = req.params; 


        if(authorization === undefined || typeof authorization !== 'string')
        {
            throw new Error("Access token missing or invalid")
        }
        let tokenData = tokenHandler.getTokenData(authorization); 

        if(!tokenData){
            throw new Error("Access token missing or invalid")
        }

        let response = await cookenuUserTable.findUserbyId(tokenData.id)
        
        if(response.length === 0)
        {
            throw new Error("Access token missing or invalid")
        }

        let requestedUser = await cookenuUserTable.findUserbyId(id); 

        if(requestedUser.length === 0)
        {
            res.status(200).send(requestedUser); 
        }
        else {

            let cookenuUser:CookenuUser = requestedUser[0]; 
            res.status(200).send({
                id: cookenuUser.id,
                name: cookenuUser.name,
                email: cookenuUser.email
        })
        }

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

