import dotenv from "dotenv"; 
import {AddressInfo} from "net"; 
import app from "./app";
import { getOwnProfile } from "./endpoints/GetOwnProfile";
import { getProfileById } from "./endpoints/GetProfileById";
import { loginUser } from "./endpoints/LoginUser";
import { signupUser } from "./endpoints/SignupUser";
import { CookenuUsersTable } from "./services/CookenuUsersTable";
import { schemaValidation } from "./services/SchemaValidation";
import { cookenuUserSignUpSchema } from "./validations/CookenuUserValidationSchema";
import { userLoginValidationSchema } from "./validations/UserLoginValidationSchema";


dotenv.config();  
export const cookenuUserTable = new CookenuUsersTable(); 

//establish endpoints
app.post("/signup",schemaValidation(cookenuUserSignUpSchema), signupUser); 
app.post("/login", schemaValidation(userLoginValidationSchema),loginUser); 
app.get("/user/profile", getOwnProfile)
app.get("/user/:id", getProfileById)


//server definition
let server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        let serverAddress = server.address() as AddressInfo; 
        console.log(`server is listening and serving at  localhost:${serverAddress.port}`);      
    }
    else {
        console.log("Error starting up server")
    }
})
