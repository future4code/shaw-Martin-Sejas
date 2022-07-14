
import {Request, Response} from "express"; 
import { cookenuRecipesTable, cookenuUserTable } from "..";
import { MainDatabaseConnection } from "../services/MainDatabaseConnection";
import { WebTokenHandler } from "../services/WebTokenHandler";
import { CookenuRecipe } from "../types/CookenuRecipe";


export const getRecipeById  = async(req:Request, res:Response) => {
    try {
        //no need for body to get get checked 
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

        let requestedRecipe = await cookenuRecipesTable.findRecipeById(id); 

        if(requestedRecipe.length === 0){
            res.status(200).send(requestedRecipe);
        }
        else {
            let cookenuRecipe:CookenuRecipe = requestedRecipe[0]; 
            res.status(200).send(cookenuRecipe); 
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