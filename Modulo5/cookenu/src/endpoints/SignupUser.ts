import {Request, Response} from "express"; 

export const signupUser = async (req:Request, res:Response) => {
    let statusCode = 400; 
    try {
        //body is good
        //check if email exists
        //if it doesn't
        //need to generate id and hash password and return token

    } catch (error:any) {
        if (error.message)
        {
            res.status(500).send({error: error.message})
        }
    }
    
}