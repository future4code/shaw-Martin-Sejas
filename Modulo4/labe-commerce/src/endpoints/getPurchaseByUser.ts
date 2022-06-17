import { Request, Response } from "express";
import { selectUserPurchases } from "../data/selectUserPurchases";



export const getPurchaseByUser = (req:Request, res:Response) => {
    let statusCode= 400; 
    let user_id = req.params.user_id as string; 
    try {
        if(!user_id)
        {
            throw new Error("Invalid user ID must be a string")
        }


        selectUserPurchases(user_id).then( (response) => {
            res.status(200).send(response)
        }).catch( (error:any) => {
            res.status(404).send({error: error.sqlMessage})
        })
    } catch (error:any) {
         if(!error.message)
        {
            statusCode = 500; 
            res.status(statusCode).send("Unexpected server error")
        }
        else {
           
            res.status(statusCode).send(error.message)
        }
        
    }

}