import { app } from "./app";
import { getAllUsersEx1A, getAllUsersEx1B, getAllUsersEx2, getAllUsersEx3, getAllUsersEx4 } from "./endpoints/getAllUsers";

//Exercicio 1A
app.get("/users1A",getAllUsersEx1A )

//Exercicio 1B
app.get("/users1B", getAllUsersEx1B)

//Exercicio 2
app.get("/users2", getAllUsersEx2)

//Exercicio3
app.get("/users3", getAllUsersEx3)

//Exercicio4
app.get("/users4",getAllUsersEx4)