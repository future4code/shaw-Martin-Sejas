import jwt from "jsonwebtoken"; 
import { AuthenticationData } from "../types/AuthenticationData";

export class WebTokenAuthenticator{

    generateWebToken = (payload:AuthenticationData):string => {
       return jwt.sign( payload, process.env.JWT_KEY as string,{expiresIn: process.env.JWT_DURATION})
    }

    decodeTokenData = (token:string):AuthenticationData => {
        return jwt.verify(token, process.env.JWT_KEY as string) as AuthenticationData; 
    }
}