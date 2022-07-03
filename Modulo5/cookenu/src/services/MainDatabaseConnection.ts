import knex, {Knex} from "knex"; 
import { v4 } from "uuid";

export class MainDatabaseConnection {
     
    public connection:Knex; 

    public static generateId():string{
        return v4();
    }

    constructor(){
        this.connection = knex({
            client: "mysql",
            connection:{
                host: process.env.DB_HOST, 
                port: 3306, 
                user: process.env.DB_USER, 
                password: process.env.DB_PASS, 
                database: process.env.DB_NAME
            }
            
        })
    }
}
