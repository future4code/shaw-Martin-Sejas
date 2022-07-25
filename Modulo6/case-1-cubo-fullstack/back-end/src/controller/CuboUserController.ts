import { Request, Response } from "express";
import { CuboUserBusiness } from "../business/CuboUserBusiness";
import { CuboUserDTO } from "../types/CuboUserDTO";



export class CuboUserController{
    constructor(private cuboUserBusiness:CuboUserBusiness)
    {
         
    }

     createUser = async (req:Request, res:Response) => {
        try {
            let {firstName, lastName, participation} = req.body; 

            let newCuboUser:CuboUserDTO = {
                firstName,
                lastName,
                participation
            }

            await this.cuboUserBusiness.createNewUser(newCuboUser); 
            res.status(201).send("User successfully created!")
            
        } catch (error:any) {
            res.status(400).send({error: error.message})
        }
    }

    getAllUsers = async (req:Request, res:Response) => {
        try {
            let cuboUsers = await this.cuboUserBusiness.getAllUsers()
            res.status(200).send(cuboUsers); 
        } catch (error:any) {
            res.status(400).send({error:error.message})
        }
    }

    deleteAllUsers = async (req:Request, res:Response) => {
        try {
            await this.cuboUserBusiness.deleteAllUsers(); 
            res.status(200).send("Users deleted!")
        } catch (error:any) {
            res.status(400).send({error:error.message})
        }
    }
}