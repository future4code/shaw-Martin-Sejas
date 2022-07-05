import dotenv from "dotenv"; 
import {AddressInfo} from "net"; 
import app from "./app";
import { createRecipe } from "./endpoints/CreateRecipe";
import { getOwnProfile } from "./endpoints/GetOwnProfile";
import { getProfileById } from "./endpoints/GetProfileById";
import { getRecipeById } from "./endpoints/GetRecipeById";
import { loginUser } from "./endpoints/LoginUser";
import { signupUser } from "./endpoints/SignupUser";
import { CookenuRecipesTable } from "./services/CookenuRecipesTable";
import { CookenuUsersTable } from "./services/CookenuUsersTable";
import { schemaValidation } from "./services/SchemaValidation";
import { cookenuRecipeValidationSchema } from "./validations/CookenuRecipeValidationSchema";
import { cookenuUserSignUpSchema } from "./validations/CookenuUserValidationSchema";
import { userLoginValidationSchema } from "./validations/UserLoginValidationSchema";


dotenv.config();  
export const cookenuUserTable = new CookenuUsersTable(); 
export const cookenuRecipesTable = new CookenuRecipesTable(); 

//establish endpoints
app.post("/signup",schemaValidation(cookenuUserSignUpSchema), signupUser); 
app.post("/login", schemaValidation(userLoginValidationSchema),loginUser); 
app.get("/user/profile", getOwnProfile)
app.get("/user/:id", getProfileById)
app.post("/recipe", schemaValidation(cookenuRecipeValidationSchema), createRecipe )
app.get("/recipe/:id", getRecipeById)


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
