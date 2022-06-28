import * as bycrypt from "bcryptjs";
import dotenv from "dotenv";

dotenv.config();

export async function generateHash(s:string):Promise<string> {
    const rounds= Number(process.env.BCRYPT_COST); 
    const salt = await bycrypt.genSalt(rounds); 
    const result = await bycrypt.hash(s, salt); 

    return result; 
}