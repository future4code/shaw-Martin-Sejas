import * as jwt from "jsonwebtoken"; 
import { AuthenticationData } from "../types/AuthenticationData";

export class WebTokenHandler{

    /**
     * generateToken
     */
    public generateToken(input:AuthenticationData) { 
        return jwt.sign(
            input,
            String(process.env.JWT_KEY),
            {expiresIn: process.env.JWT_EXPIRATION}
        )
    }

    public getTokenData(token:string): AuthenticationData | null {
        try {
            let {id} = jwt.verify(token, String(process.env.JWT_KEY)) as AuthenticationData; 
            return {id}; 
        } catch (error) {
            console.log("invalid token")
            return null;
        }
    }


}