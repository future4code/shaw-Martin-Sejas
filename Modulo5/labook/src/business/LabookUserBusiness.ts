import { LabookUsersDatabaseTable } from "../data/UserData";
import { LabookUser, LabookUserLoginDTO, LabookUserRegistrationDTO } from "../model/User";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { WebTokenAuthenticator } from "../services/WebTokenAuthenticator";
import { AuthenticationData } from "../types/AuthenticationData";

export class LabookUserBusiness {
   constructor(
    protected hashManager:HashManager,
    protected idGenerator:IdGenerator,
    protected tokenAuthenticator:WebTokenAuthenticator,
    protected LabookUsersData:LabookUsersDatabaseTable
   ){} 

   registerNewUser = async (newUserRegistrationInformation:LabookUserRegistrationDTO) => {

    let {name, email, password} = newUserRegistrationInformation; 

    let existingUser = await this.LabookUsersData.findUserByEmail(email);

    if(existingUser)
    {
        throw new Error("Email already registered!")
    }

    let id = this.idGenerator.generateId(); 

    password = await this.hashManager.hashPassword(password); 

    let newUser:LabookUser = {
        id, 
        name, 
        email,
        password
    }

    await this.LabookUsersData.insertNewUser(newUser); 
        
    let authenticationData:AuthenticationData = { id }; 

    return this.tokenAuthenticator.generateWebToken(authenticationData);
    
   }

   loginUser = async(userLoginInformation:LabookUserLoginDTO) => {
    let {email,password} = userLoginInformation; 

    let existingUser = await this.LabookUsersData.findUserByEmail(email); 

    if(!existingUser) 
    {
        throw new Error("Email and/or password invalid")
    }

    let hashedPassword = existingUser.password; 

    if(await this.hashManager.comparePasswords(password, hashedPassword))
    {
        let authenticationData:AuthenticationData = {id: existingUser.id};
        return  this.tokenAuthenticator.generateWebToken(authenticationData)
    }
    else {
        throw new Error("Email and/or password invalid")
    }
   }
}