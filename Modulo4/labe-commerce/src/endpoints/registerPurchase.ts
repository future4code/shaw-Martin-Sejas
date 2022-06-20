import { Request, Response } from "express";
import { createPurchase } from "../data/createPurchase";
import {Purchase }from "../types";


export const registerPurchase = (req:Request, res:Response) => {
    let statusCode = 400; 
    try {
        let {user_id, product_id,quantity} = req.body; 

        if(!user_id || !product_id || !quantity)
        {
            throw new Error("Body incomplete, must have user_id:string, product_id:number, quantity:number")
        }

        if(typeof user_id !== 'string' || typeof product_id !== 'number' || typeof quantity !== 'number')
        {
            throw new Error("Please make sure user_id:string, product_id:number, quantity:number")
        }

      
        let newPurchase:Purchase = {
           user_id,
           product_id,
           quantity
        }
      

      createPurchase(newPurchase).then( (response) => {
        res.status(201).send( {message: "Purchase created!", 
        Purchase: response})
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