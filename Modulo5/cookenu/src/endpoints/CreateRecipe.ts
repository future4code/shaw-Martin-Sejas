import {Request, Response} from "express"; 
import { cookenuRecipesTable, cookenuUserTable } from "..";
import { MainDatabaseConnection } from "../services/MainDatabaseConnection";
import { WebTokenHandler } from "../services/WebTokenHandler";
import { CookenuRecipe } from "../types/CookenuRecipe";


export const createRecipe = async(req:Request, res:Response) => {
    try {
        //body is already checked 
           let tokenHandler = new WebTokenHandler(); 
        let {authorization} = req.headers;  


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

        let {title, description} = req.body; 
        //check if recipe with same title exists
        let recipe = await cookenuRecipesTable.findRecipeByTitle(title);

        if(recipe.length !== 0)
        {
            throw new Error("A recipe with this name already exists")
        }

        // create new Recipe
        let newCookenuRecipe:CookenuRecipe = {
            id: MainDatabaseConnection.generateId(),
            title, 
            description, 
            createdAt: new Date (Date.now()) 
        }

        //insert on database 
        await cookenuRecipesTable.insertNewRecipe(newCookenuRecipe); 

        res.status(201).send({
            message: "New recipe created!", 
            recipe: newCookenuRecipe
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