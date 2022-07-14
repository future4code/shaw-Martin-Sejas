import { Request, Response } from "express";
import { getUsers } from "../data/getUsers";
import app from "../app";


app.get("/users", (req:Request, res:Response) => {
    let statusCode= 400; 
    try {
        //getUsers eh uma funcao de data para SQL 
        getUsers().then( (response) => {
            res.status(200).send(response)
        })
    } catch (error:any) {
         if(!error.message)
        {
            statusCode = 500; 
            res.status(statusCode).send("Unexpected server error")
        }
        else {
            statusCode = 400; 
            res.status(statusCode).send(error.message)
        }
        
    }

})

