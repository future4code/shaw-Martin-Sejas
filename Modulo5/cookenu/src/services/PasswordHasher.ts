import * as bcrypt from "bcryptjs"; 

export class PasswordHasher{
    public hashPassword = async (password:string):Promise<string> => {

        let hashingRounds = Number(process.env.BCRYPT_COST); 
        let salt = await bcrypt.genSalt(hashingRounds); 
        let hashedPassword = await bcrypt.hash(password, salt);
        return hashedPassword; 
    }

    public validatePassword = async (password:string, hashedPassword:string): Promise<boolean> => {
        return bcrypt.compare(password, hashedPassword) ; 
    }

    }

