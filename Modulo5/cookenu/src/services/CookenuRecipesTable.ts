import { CookenuRecipe } from "../types/CookenuRecipe";
import { MainDatabaseConnection } from "./MainDatabaseConnection";

export class CookenuRecipesTable extends MainDatabaseConnection{
    private TABLE_NAME = "Cookenu_Recipes"; 
    constructor()
    {
      super()   
    }

    async findRecipeByTitle(title:string){
        return await this.connection(this.TABLE_NAME).select('*').where({title})
    }

    async insertNewRecipe(newRecipe:CookenuRecipe):Promise<void>{
        await this.connection(this.TABLE_NAME).insert(newRecipe); 
    }

    async findRecipeById(id:string){
        return await this.connection(this.TABLE_NAME).select('*').where({id})
    }

}