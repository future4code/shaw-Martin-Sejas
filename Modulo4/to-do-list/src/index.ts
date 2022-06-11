import app from "./app";
import { CreateUser } from "./endpoints/CreateUser";
import { GetUser } from "./endpoints/GetUser";

//Exercicio 2
app.get("/user/:id", GetUser)

//Exercicio 1
app.post("/user", CreateUser)

//Exercicio 3
app.put("/user/edit/:id")