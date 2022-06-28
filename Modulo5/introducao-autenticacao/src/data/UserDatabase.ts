import { user } from "../types";
import { BaseDatabase } from "./BaseDatabase";

//Exercicio 2
export class UserDatabase extends BaseDatabase {
    public create = async (newUser: user) => {
        await this.getConnection()
            ('User')
            .insert(newUser)

    }
    public edit = async (id: string, columnsUpdate: { name: string, nickname: string }) => {
        await this.getConnection()('to_do_list_users')
            .update(columnsUpdate)
            .where({ id })
    }
    public getByEmail = async (email: string) => {
        const [result] = await this.getConnection()('to_do_list_users')
            .where({ email })
        return result
    }

    
}