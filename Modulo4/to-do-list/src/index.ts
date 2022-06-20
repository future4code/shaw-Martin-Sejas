import app from "./app";
import { CreateTask } from "./endpoints/CreateTask";
import { CreateUser } from "./endpoints/CreateUser";
import { EditUser } from "./endpoints/EditUser";
import { GetTask } from "./endpoints/GetTask";
import { GetUser } from "./endpoints/GetUser";

export const ConvertDate= (date:string):Date => {
    let [day,month,year] = date.split("/");

   let  d = parseInt(day); 
   let m= parseInt(month) -1; 
   let y = parseInt(year); 

   return new Date(y,m,d)
}

//Exercicio 2
app.get("/user/:id", GetUser)

//Exercicio 1
app.post("/user", CreateUser)

//Exercicio 3
app.put("/user/edit/:id", EditUser)

//Exercicio 4
app.post("/task", CreateTask)

//Exercicio 5
app.get("/task/:id",GetTask )

//Exercicio 6
