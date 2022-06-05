import express from "express";
import cors from "cors"; 
import { getUserBalance, getUsers, registerClientBill, depositValueToUser, registerUser, updateAccountBalance, createTransfer } from "./endpoints";


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
// GET localhost:3003/users
app.get("/users", getUsers);





//exercicio 5 e 7 e Desafio 1
//validates and adds new user
// POST localhost:3003/users
/* 
sample_request_body = {
    name:string, 
    cpf:string - (format: 000.000.000-00),
    dateOfBirth:string - (format: DD/MM/YYYY)
}
*/ 
app.post("/users", registerUser )




//desafio 2
//get a user's balance by cpf 
//need valid cpf as param
app.get("/users/:cpf", getUserBalance)



//desafio 3 e desafio 4
//makes a deposit to a a user
/* 
sample_request_body = {
    name:string, 
    value:number
}
*/
app.put("/users/:cpf", depositValueToUser)





//desafio 5 e desafio 7 e desafio 8
//registers a bill of a client given the cpf
/* 
sample_request_body = {
    date(optonal):string, 
    value:number,
    description:string
}
*/
app.post("/users/:cpf", registerClientBill)

//desafio 6
//updates the account balance , given a cpf
app.put("/users/:cpf/balance", updateAccountBalance)

//desafio 9,10,11
//validates transfer between two accounts
/* 
sample_request_body = {
    accountName:string, 
    recipientName:string,
    recipientCpf:string,
    value:number
}
*/
app.post("/users/:cpf/transfer", createTransfer )

//starting server
app.listen(3003, ()=> {
    console.log("Server listening and serving at port 3003")
})


