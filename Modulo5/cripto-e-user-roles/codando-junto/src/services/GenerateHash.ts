import * as bcrypt from "bcryptjs";

export const hashPassword = async(s:string): Promise<string> => {

const rounds = Number(process.env.BCRYPT_COST);
const salt = await bcrypt.genSalt(rounds);
const result = await bcrypt.hash(s, salt);
console.log("encrypted message: ", result);
return result; 
}

export const compareAttemptedPasswordToStoredHash = async(attemptedPassword:string, storedHash:string): Promise<boolean> => {
    return  bcrypt.compare(attemptedPassword, storedHash); 
}
