import { CookenuUser } from "../types/CookenuUser";
import { MainDatabaseConnection } from "./MainDatabaseConnection";

export class CookenuUsersTable extends MainDatabaseConnection{
    private TABLE_NAME = "Cookenu_Users"
     constructor()
     {
        super(); 
     }


     //complete function to check if email already exists 
    async findUserEmail(email:string){
      //check for given email in database
     return await this.connection(this.TABLE_NAME).select('*').where({email}); 
   }

   async insertNewUser(newUser:CookenuUser):Promise<void>{
    let result =  await this.connection(this.TABLE_NAME).insert(newUser); 
   }
   
   async findUserbyId(id:string){
      return await this.connection(this.TABLE_NAME).select('*').where({id}); 
   }
}