import { Request, Response } from "express";
import { LabookUserBusiness } from "../business/LabookUserBusiness";
import { LabookUserLoginDTO, LabookUserRegistrationDTO } from "../model/User";


export class LabookUserController {
    constructor(
        protected userBusiness:LabookUserBusiness
    ){}

    registerNewUser = async(req:Request, res:Response) => {
        let {name, email, password} = req.body; 
       
        let userRegistrationInformation:LabookUserRegistrationDTO = {
            name, 
            email,
            password
        }

        try {
            let token = await this.userBusiness.registerNewUser(userRegistrationInformation)

            res.status(201).send({
                message: "Usuario criado!", 
                token
            })
            
        } catch (error) {
            if( error instanceof Error)
            {
                res.status(400).send({ 
                                     error: error.message
                                    })
            }
            else {
                res.status(500).send({error: "Error inesperado no signup"})
            }
        }
    }
    
    loginUser = async(req:Request, res:Response) => {
        let {email, password} = req.body; 

        let userLoginInformation:LabookUserLoginDTO = {
            email, 
            password
        }

        try {
            let token = await this.userBusiness.loginUser(userLoginInformation)
            res.status(200).send({message: "Login Efetuado!",
                                  token})
        } catch (error) {
            if( error instanceof Error)
            {
                res.status(400).send({ 
                                     error: error.message
                                    })
            }
            else {
                res.status(500).send({error: "Error inesperado no login"})
            }
        }
    }
}