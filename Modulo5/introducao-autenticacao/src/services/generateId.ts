import { v4 } from "uuid";
import * as jwt from "jsonwebtoken"; 

export function generateId():string {
    return v4(); 
}


export const generateToken = (id:AuthenticationData): string => {
    const expiresIn = "1min"
    const token = jwt.sign({
        id
    },
    process.env.JWT_KEY as string,{
        expiresIn
    }
    );
    return token; 
}

const getData = (token: string): AuthenticationData => {
  const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
  const result = {
    id: payload.id,
  };
  return result;
};

export type AuthenticationData= {
    id:string
}