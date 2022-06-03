import express from "express";
import cors from "cors"; 
import { getUserBalance, getUsers, putValueToUserBalance, registerUser } from "./endpoints";


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


//initializing express instances
const app = express(); 
app.use(express.json()); 
app.use(cors()); 

//endpoints (imported from endpoints.ts)

//gets all users
app.get("/users", getUsers);

//validates and adds new user if accepted
app.post("/users", registerUser )

//get a user by cpf as param
app.get("/users/:cpf", getUserBalance)

//updates user balance of a user
app.put("/users/:cpf", putValueToUserBalance)



//starting server
app.listen(3003, ()=> {
    console.log("Server listening and serving at port 3003")
})


