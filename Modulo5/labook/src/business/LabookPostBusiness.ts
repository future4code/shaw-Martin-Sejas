import { LabookPostsDatabaseTable } from "../data/PostData";
import { LabookUsersDatabaseTable } from "../data/UserData";
import { LabookPost, LabookPostByIdDTO, LabookPostCreationDTO } from "../model/Post";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { WebTokenAuthenticator } from "../services/WebTokenAuthenticator";
import { AuthenticationData } from "../types/AuthenticationData";


export class LabookPostBusiness {
   constructor(
    protected hashManager:HashManager,
    protected idGenerator:IdGenerator,
    protected tokenAuthenticator:WebTokenAuthenticator,
    protected labookPostsData:LabookPostsDatabaseTable,
   ){} 

   authenticateToken = (token:string):string => {
     let authenticatedData:AuthenticationData = this.tokenAuthenticator.decodeTokenData(token); 
     return authenticatedData.id; 
   }

   createNewPost = async (newLabookPost:LabookPostCreationDTO) => {
      let creatorId = this.authenticateToken(newLabookPost.authorization); 
    

      let {picture, description, postType} = newLabookPost; 
      let id = this.idGenerator.generateId(); 
      let createdAt:Date = new Date(Date.now()); 

      let newPost:LabookPost = {
         id,
         creatorId,
         picture,
         description,
         createdAt,
         postType
      }

      await this.labookPostsData.insertNewPost(newPost); 
   }

   getPostById = async (postById:LabookPostByIdDTO) => {
     let creatorId = this.authenticateToken(postById.authorization); 

     let {id} = postById; 

     let retrievedPosts:LabookPost[] = await this.labookPostsData.getPostById(id); 

     if(retrievedPosts.length === 0)
     {
      throw new Error("Unable to find post with this id")
     }

     else {
      return retrievedPosts[0]; 
     }

   }
}