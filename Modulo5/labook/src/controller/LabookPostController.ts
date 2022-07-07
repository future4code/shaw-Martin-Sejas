import { Request, Response } from "express";
import { LabookPostBusiness } from "../business/LabookPostBusiness";
import { LabookPostCreationDTO } from "../model/Post";


export class LabookPostController {
    constructor(
        protected postBusiness:LabookPostBusiness
    ){}

    createPost = async(req:Request,res:Response) => {
        let {Authorization} = req.headers; 
        let {picture, description, postType} = req.body; 

        let newLabookPost:LabookPostCreationDTO = {
            Authorization: Authorization as string,
            picture,
            description,
            postType
        }

        try {
            await this.postBusiness.createNewPost(newLabookPost)
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
}