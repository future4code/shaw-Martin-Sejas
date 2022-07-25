import knex, { Knex } from "knex";

export abstract class MainDatabaseConnection {
    protected connection:Knex; 
    protected schemaName:string | undefined;
    constructor(){
        this.schemaName = process.env.DB_NAME; 
        this.connection = knex({
            client: "mysql", 
            connection: {
                database: process.env.DB_NAME,
                password: process.env.DB_PASSWORD,
                host: process.env.DB_HOST,
                user: process.env.DB_USER, 
                port: Number(process.env.DB_PORT), 
                multipleStatements: true
            }
        })}

        
}