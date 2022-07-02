import { MainDatabaseConnection } from "./MainDatabaseConnection";

export class CookenuUsersTable extends MainDatabaseConnection{
     TABLE_NAME = "Cookenu_Users"
     constructor()
     {
        super(); 
     }

    async checkExistingEmail(email:string):boolean{
        
     }
}