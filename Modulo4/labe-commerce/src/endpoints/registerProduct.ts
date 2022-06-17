import { Request, Response } from "express";
import { createProduct } from "../data/createProduct";
import {Product }from "../types";


export const registerProduct = (req:Request, res:Response) => {
    let statusCode = 400; 
    try {
        let {name, price, image_url} = req.body; 

        if(!name || !price || !image_url)
        {
            throw new Error("Body incomplete, must have name:string, price:number, image_url:string")
        }

        if(typeof name !== 'string' || typeof price !== 'number' || typeof image_url !== 'string')
        {
            throw new Error("Please make sure name:string, price:number, image_url:string")
        }

      
        let newProduct:Product = {
            name,
            price, 
            image_url
        }
      

       createProduct(newProduct).then( () => {
        res.status(201).send( {message: "Product created!", 
        Product: newProduct})
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