import app from "./app"; 
import {AddressInfo} from "net"; 
import { registerUser } from "./endpoints/registerUser";
import { getAllUsers } from "./endpoints/getAllUsers";
import { registerProduct } from "./endpoints/registerProduct";
import { getAllProducts } from "./endpoints/getAllProducts";
import { registerPurchase } from "./endpoints/registerPurchase";
import { getPurchaseByUser } from "./endpoints/getPurchaseByUser";


//Exercicio2
app.get("/users", getAllUsers)

//Exercicio 1
app.post("/users", registerUser)

//Exercicio 3
app.post("/products",registerProduct )

//Exercicio 4
app.get("/products", getAllProducts)

//Exercicio 5
app.post("/purchases", registerPurchase)


//Exercicio 6
app.get("/users/:user_id/purchases", getPurchaseByUser)


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo; 
        console.log(`Server is running in http://locahost: ${address.port}`); 
    }else {
        console.error(`Failure upon starting server.`)
    }
}); 