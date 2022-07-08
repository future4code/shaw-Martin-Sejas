import { Request, Response } from "express";
import { LabookPostBusiness } from "../business/LabookPostBusiness";
import { LabookPost, LabookPostByIdDTO, LabookPostCreationDTO } from "../model/Post";


export class LabookPostController {
    constructor(
        protected postBusiness:LabookPostBusiness
    ){}

    createPost = async(req:Request,res:Response) => {
        let {authorization} = req.headers; 
        if(!authorization) 
        {
            throw new Error("Missing or Invalid Authorization token")
        }
        let {picture, description, postType} = req.body; 

        let newLabookPost:LabookPostCreationDTO = {
            authorization: authorization as string,
            picture,
            description,
            postType
        }

        try {
            await this.postBusiness.createNewPost(newLabookPost)
            res.status(201).send({message: "Post successful!"})
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

    getPostbyId = async(req:Request, res:Response) => {
        let {authorization} = req.headers; 

        if(!authorization) 
        {
            throw new Error("Missing or Invalid Authorization token")
        }
        let {id} = req.params; 

        let postById:LabookPostByIdDTO = {
            authorization: authorization as string, 
            id
        }

        try {
            let post:LabookPost = await this.postBusiness.getPostById(postById);
            res.status(200).send({post})
        } catch (error) {
            if( error instanceof Error)
            {
                res.status(400).send({
                    error: error.message
                })
            }
            else {
                res.status(500).send({error: "Unexpected Server Error"})
            }
            
        }
    }
}