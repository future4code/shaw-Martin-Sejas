import { MainDatabaseConnection } from "./MainDatabaseConnection";


export class LabookPostsDatabaseTable extends MainDatabaseConnection{
    protected TABLE_NAME = "Labook_Posts"; 

    constructor(){
        super()
    }
}