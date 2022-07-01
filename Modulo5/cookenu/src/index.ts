import dotenv from "dotenv"; 
import {AddressInfo} from "net"; 
import app from "./app";

dotenv.config();  

//establish endpoints

//server definition
let server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        let serverAddress = server.address() as AddressInfo; 
        console.log(`server is listening and serving at ${serverAddress}`);      
    }
    else {
        console.log("Error starting up server")
    }
})
