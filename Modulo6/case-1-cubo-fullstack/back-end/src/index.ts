import dotenv from "dotenv"; 
import express from "express"; 
import cors from "cors";
import { validateSchema } from "./controller/validations/ValidateSchema";
import { CuboUserSchema } from "./controller/validations/CuboUserSchema";
import { CuboUserBusiness } from "./business/CuboUserBusiness";
import { CuboUserController } from "./controller/CuboUserController";
import { CuboUserData } from "./data/CuboUserDatabase";
import {AddressInfo} from "net"

dotenv.config(); 

const app = express(); 
app.use(express.json()); 
app.use(cors()); 

const cuboUserBusiness = new CuboUserBusiness(new CuboUserData()); 
const cuboUserController = new CuboUserController(cuboUserBusiness)


app.post("/users",validateSchema(CuboUserSchema), cuboUserController.createUser); 
app.get("/users", cuboUserController.getAllUsers); 
app.delete("/users", cuboUserController.deleteAllUsers);

const server = app.listen(3003, ()=> {
    if(server){

    const address = server.address() as AddressInfo; 
    console.log(`Server is running in http:localhost:${address.port}`)
    } 
    else {
        console.log("Error starting server")
    }
})