import * as jwt from "jsonwebtoken"
import { AuthenticatorData } from "../types"
export class Authenticator {
    private static EXPIRES_IN = "10m"

    public generateToken = (payload: AuthenticatorData) => {
        const token = jwt.sign(payload,
            process.env.JWT_KEY as string,
            {
            })
        return token
    }
    public getData = (token: string): AuthenticatorData => {
        const data = jwt.verify(token, process.env.JWT_KEY as string) as AuthenticatorData
        return data
    }
}