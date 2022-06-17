import connection from "../connection";
import {User} from "../types";

export async function createUser(newUser:User):Promise<void> {
  await connection('labecommerce_users').insert(newUser);
    
}