import express, { Request, Response } from "express";
import cors from "cors"; 
import dotenv from "dotenv"; 
import {AddressInfo} from "net"; 
import getAddressFromCep from "./endpoints/Exercicio1";
import getAddressFromCepEx3 from "./endpoints/Exercicio3";
import saveAddressOnTable from "./data/saveAddressOnTable";

dotenv.config(); 

let app = express(); 
app.use(express.json());
app.use(cors()); 

//Exercicio 1
app.get("/cep", (req:Request, res:Response) => {
    try {
      getAddressFromCep("22793760").then((address) => {
        res.status(200).send(address)
      }).catch( (error) => {
        throw new Error(error.message)
      })

       
    } catch (error) {
        
    }
})


//Exercicio 3
app.get("/cep/:cep", (req:Request, res:Response) => {
    try {
        let cep = req.params.cep as string; 

        if(!cep)
        {
            throw new Error("Por favor botar um cep")
        }

       getAddressFromCepEx3(cep).then( (address) => {
         saveAddressOnTable(address).then( (response) => {
            res.status(200).send(response)
         })
       }).catch( (error) => {
        throw new Error(error.message)
       })
        
    } catch (error:any) {
        res.status(500).send({message: "Internal Server Error"}); 
        
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



