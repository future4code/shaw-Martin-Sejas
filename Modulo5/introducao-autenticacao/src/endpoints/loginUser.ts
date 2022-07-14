import {Request, Response} from "express"

export const loginUser = async(req:Request, res:Response) => {
    let statusCode = 400; 
    try {
        let {email, password} = req.body; 

        if(!email || !password) {
            throw new Error("Por favor preencha os campos de email e senha!");             
        }

        if(typeof email !== 'string' && typeof password !== 'string') {
            throw new Error("Email e Senha devem ser do formato string")
        }

        



    } catch (error:any) {
        if(!error.message){
            res.status(500).send("Internal server error"); 
        }

        else if(error.message){
            res.status(statusCode).send({message: error.message}); 
        }
    }
}