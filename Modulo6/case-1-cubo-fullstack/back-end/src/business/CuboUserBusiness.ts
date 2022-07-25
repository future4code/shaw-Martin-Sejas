import { CuboUserData } from "../data/CuboUserDatabase";
import { CuboUserDTO } from "../types/CuboUserDTO";

export class CuboUserBusiness {
    constructor(private cuboUserData:CuboUserData)
    {

    }

    createNewUser = async (newCuboUser:CuboUserDTO) => {
        await this.cuboUserData.insertUser(newCuboUser)
    }

    getAllUsers = async () => {
        let cuboUsers =  await this.cuboUserData.selectAllUsers(); 
       return cuboUsers; 
    }

    deleteAllUsers = async () => {
        await this.cuboUserData.deleteAllUsers(); 
    }
}