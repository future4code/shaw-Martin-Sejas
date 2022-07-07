import dotenv from "dotenv"; 
import { LabookUserBusiness } from "./business/LabookUserBusiness";
import app from "./controller/app";
import { LabookUserController } from "./controller/LabookUserController";
import { validateSchema } from "./controller/Validation/ValidateSchema";
import { labookUserRegistrationSchema } from "./controller/Validation/validationSchemas/LabookUserRegistrationSchema";
import { LabookUsersDatabaseTable } from "./data/UserData";
import { HashManager } from "./services/HashManager";
import { IdGenerator } from "./services/IdGenerator";
import { WebTokenAuthenticator } from "./services/WebTokenAuthenticator";
import {AddressInfo} from "net"; 
import { labookUserLoginSchema } from "./controller/Validation/validationSchemas/LabookUserLoginSchema";
import { labookPostCreationSchema } from "./controller/Validation/validationSchemas/LabookPostCreationSchema";


dotenv.config(); 

const userBusiness = new LabookUserBusiness(
    new HashManager(), 
    new IdGenerator, 
    new WebTokenAuthenticator(),
    new LabookUsersDatabaseTable()
)

const userController = new LabookUserController(userBusiness)

app.post("/register", validateSchema(labookUserRegistrationSchema), userController.registerNewUser); 
app.post("/login",validateSchema(labookUserLoginSchema),userController.loginUser );
app.post("/posts", validateSchema(labookPostCreationSchema), postController.createPost)


const server = app.listen(process.env.PORT || 3003, ()=> {
    if(server){
        const address = server.address() as AddressInfo; 
        console.log(`Server is running in http://localhost:${address.port}`)
    }
    else {
        console.error("Unable to start server")
    }
})