import { LabookPost } from "../model/Post";
import { MainDatabaseConnection } from "./MainDatabaseConnection";


export class LabookPostsDatabaseTable extends MainDatabaseConnection{
    protected TABLE_NAME = "Labook_Posts"; 

    constructor(){
        super()
    }

    insertNewPost = async (newPost:LabookPost) => {
        try {
            await this.connection(this.TABLE_NAME).insert(newPost); 
            
        } catch (error:any) {
            if(error.sqlMessage)
            {
                throw new Error(error.sqlMessage)
            }
            else {
                throw new Error("Error accessing database")
            }
        
        }
    }

    getPostById = async (postId:string) => {
        try {
            let queryResponse:LabookPost[] = await this.connection(this.TABLE_NAME).select('*').where({id: postId});
            return queryResponse; 
        } catch (error:any) {
           if(error.sqlMessage)
           {
            throw new Error(error.sqlMessage)
           } 
           else{
            throw new Error("Error accessing database")
           }
        }
    }
}