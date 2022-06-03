import express from "express";
import cors from "cors"; 
import fs from 'fs'; 
import { getUsers, registerUser } from "./endpoints";




//creating type for transactions
export type Transaction = {
    value: number, 
    date: string, 
    description: string
}


//crating type for user
//unique cpfs always, starting balance 0
export type User = {
    name: string, 
    cpf: string, 
    dateOfBirth: string, 
    accountBalance: number, 
    transactions: (Transaction| undefined)[]
}

//json file representing global array of users
export let users:User[] = require("../data/users.json")

//initializing express instances
const app = express(); 
app.use(express.json()); 
app.use(cors()); 

//endpoints (imported from endpoints.ts)

//gets all users
app.get("/users", getUsers);

//validates and adds new user if accepted
app.post("/users", registerUser )



//starting server
app.listen(3003, ()=> {
    console.log("Server listening and serving at port 3003")
})


