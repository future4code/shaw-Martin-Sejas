import { CuboUser } from "../model/CuboUser";
import { CuboUserDTO } from "../types/CuboUserDTO";
import { MainDatabaseConnection } from "./MainDatabaseConnection";

export class CuboUserData extends MainDatabaseConnection {
   private TABLE_NAME:string = "Cubo_Users"; 

   constructor()
   {
    super()
   }

   insertUser = async (newCuboUser:CuboUserDTO) => {
    try {
        let newUser = {
            first_name: newCuboUser.firstName, 
            last_name:newCuboUser.lastName, 
            participation: newCuboUser.participation
        }
        await this.connection(this.TABLE_NAME).insert(newUser); 
        
    } catch (error:any) {
        if(error.sqlMessage) throw new Error(error.sqlMessage); 
        else {
            throw new Error("Error acessing database")
        }
    }
   }

   selectAllUsers = async () => {
    try {
         let users:CuboUser[] = await this.connection(this.TABLE_NAME).select('id').select('first_name as firstName').select('last_name as lastName').select('participation'); 
         let totalParticipation = await this.connection(this.TABLE_NAME).sum('participation as totalParticipation'); 
         let response = {
            users: users,
            totalParticipation: totalParticipation[0].totalParticipation
         }
         return response;  
    } catch (error:any) {
        if(error.sqlMessage) throw new Error(error.sqlMessage); 
        else {
            throw new Error("Error acessing database")
        }
    }
   }

   deleteAllUsers = async() => {
    try {
        
          
         await this.connection.schema.dropTable(this.TABLE_NAME); 

         await this.connection.schema.createTable(this.TABLE_NAME, function(table) {
            table.increments('id').primary();
            table.string("first_name",255).notNullable();
            table.string("last_name", 255).notNullable(); 
            table.integer("participation").notNullable(); 
         })
          
    } catch (error:any) {
        if(error.sqlMessage) throw new Error(error.sqlMessage); 
        else {
            throw new Error("Error accessing database")
        }
    }
   }
}