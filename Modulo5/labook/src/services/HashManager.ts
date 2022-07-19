import * as bcrypt from "bcryptjs"; 

export class HashManager{

    hashPassword = async (plainPassword:string):Promise<string> => {
        let rounds = Number(process.env.BCRYPT_COST); 
        let salt = await bcrypt.genSalt(rounds); 
        return await bcrypt.hash(plainPassword, salt)
    }

comparePasswords = async (plainText:string, hashedText:string) => {
       return await bcrypt.compare(plainText, hashedText);  
    }
}