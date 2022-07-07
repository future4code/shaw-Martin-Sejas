import { LabookPostsDatabaseTable } from "../data/PostData";
import { LabookPost, LabookPostCreationDTO } from "../model/Post";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { WebTokenAuthenticator } from "../services/WebTokenAuthenticator";
import { AuthenticationData } from "../types/AuthenticationData";


export class LabookPostBusiness {
   constructor(
    protected hashManager:HashManager,
    protected idGenerator:IdGenerator,
    protected tokenAuthenticator:WebTokenAuthenticator,
    protected LabookPostsData:LabookPostsDatabaseTable
   ){} 

   authenticateToken = (token:string):string => {
     let authenticatedData:AuthenticationData = this.tokenAuthenticator.decodeTokenData(token); 
     return authenticatedData.id; 
   }

   createNewPost = async (newLabookPost:LabookPostCreationDTO) => {
      let creatorId = this.authenticateToken(newLabookPost.Authorization); 
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

      //insert post on database, check if creatorId is correct perhaps?
   }
}