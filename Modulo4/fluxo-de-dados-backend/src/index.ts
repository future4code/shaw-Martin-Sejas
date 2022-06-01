import express, { Request, Response } from "express";;
import cors from "cors";
import {products} from "./data"

const app = express(); 

app.use(express.json());
app.use(cors()); 


//Exercicio 1
app.get("/test", (req:Request, res:Response) => {
    res.status(200).send("API is online!")
})


//Exercicio 2
type Product = {
    id: string, 
    name: string, 
    price:number
}

//Exercicio 3 e Exercicio 7
app.post("/products", (req:Request, res:Response) => {
    //check for body contents and send relevant reponses
})

//Exercicio 4 e Exercicio 10
app.get("/products", (req:Request, res:Response) => {
    res.status(200).send(products)
})

//Exercicio 5  e Exercicio 8 e Exercicio 11
app.put("/products/:id", (req:Request, res:Response) => {
    //change price of a product
})

//Exercicio 6 e Exercicio 9
app.delete("products/:id", (req:Request, res:Response) => {
    //delete a product
})





app.listen(3003,()=> {
    console.log('Server listening and serving at port 3003')
})

