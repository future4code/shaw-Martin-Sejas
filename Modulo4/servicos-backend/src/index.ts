import express, { Request, Response } from "express";
import cors from "cors"; 
import dotenv from "dotenv"; 
import {AddressInfo} from "net"; 
import getAddressFromCep from "./data/Exercicio1";

dotenv.config(); 

let app = express(); 
app.use(express.json());
app.use(cors()); 


app.get("/cep", (req:Request, res:Response) => {
    try {
        getAddressFromCep("22793760");

        res.status(200).send({message: "GoodJob!"})
    } catch (error) {
        
    }
})

let server = app.listen(process.env.PORT || 3003, () => {
    if(server)
    {
        const address = server.address() as AddressInfo; 
        console.log(`Server is running in http://localhost:${address.port}`)
       
    }
else {
    console.log("Failure to start server")
}
})



