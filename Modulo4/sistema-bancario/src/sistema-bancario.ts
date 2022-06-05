import express from "express";
import cors from "cors"; 
import { getUserBalance, getUsers, registerClientBill, putValueToUserBalance, registerUser, updateAccountBalance, createTransfer } from "./endpoints";


//creating type for transactions
//Exercicio 3
export type Transaction = {
    value: number, 
    date: string, 
    description: string
}


//crating type for user
//unique cpfs always, starting balance 0
//Exercicio 1
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

//exercicio 6
//gets all users
app.get("/users", getUsers);

//exercicio 5 e 7 e Desafio 1
//validates and adds new user
app.post("/users", registerUser )

//desafio 2
//get a user's balance by cpf 
app.get("/users/:cpf", getUserBalance)

//desafio 3 e desafio 4
//updates balance of a user
app.put("/users/:cpf", putValueToUserBalance)

//desafio 5 e desafio 7 e desafio 8
//registers a bill of a client given the cpf
app.post("/users/:cpf", registerClientBill)

//desafio 6
//updates the account balance , given a cpf
app.put("/users/:cpf/balance", updateAccountBalance)

//desafio 9,10,11
//validates transfer between two accounts
app.post("users/:cpf/transfer", createTransfer )

//starting server
app.listen(3003, ()=> {
    console.log("Server listening and serving at port 3003")
})


