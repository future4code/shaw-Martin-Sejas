import { LabookUser } from "../model/User";
import { LabookUserFindbyEmailResponse } from "../types/LabookUserFindbyEmailResponse";
import { MainDatabaseConnection } from "./MainDatabaseConnection";

export class LabookUsersDatabaseTable extends MainDatabaseConnection {
    protected TABLE_NAME = "Labook_Users"; 

    constructor(){
        super();
    }

    findUserByEmail = async (email:string) => {
        try {

            let queryResponse: LabookUserFindbyEmailResponse = await this.connection(this.TABLE_NAME)
                .select('*')
                .where({ email });

            return queryResponse[0]
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

    insertNewUser = async (newUser:LabookUser) => {
        try {
            await this.connection(this.TABLE_NAME).insert(newUser); 
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

}