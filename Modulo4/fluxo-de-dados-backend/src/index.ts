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

let myProducts:Product[] = products;

//Exercicio 3 e Exercicio 7
app.post("/products", (req:Request, res:Response) => {
    //check for body contents and send relevant reponses
    let {name, price} = req.body; 
    try {
        if (!name || !price)
        {
            throw new Error("Body está incompleto, por favor verificar")
        }

        if(typeof name !== "string") 
        {
            throw new Error("Parâmetro 'name' não está no formato string")
        }

        if (typeof price !=='number')
        {
            throw new Error("Parâmetro 'price' não está no formato number")
        }

        if(price <= 0)
        {
            throw new Error("Preço não pode ser zero, ou menos que zero")
        }

        //pegar id novo, e criar novo item na lista

        let newId = myProducts.length+1; 

        let newProduct:Product = {
            id: newId.toString(),
            name: name, 
            price: price
        }

        myProducts= [...myProducts, newProduct]; 

        res.status(201).send(myProducts); 

        
    } catch (error:any) {
        switch (error.message) {
            case "Body está incompleto, por favor verificar" ||"Parâmetro 'name' não está no formato string" || "Parâmetro 'price' não está no formato number" || "Preço não pode ser zero, ou menos que zero": 
            res.status(400); 
            break; 
            default:
            res.status(500); 
        }

        res.send(error.message)
        
    }
})

//Exercicio 4 e Exercicio 10
app.get("/products", (req:Request, res:Response) => {

    try {
        //if there is a query, filter by query after mapping
        if (req.query.search !== undefined)
        {
            let search = req.query.search as string; 
            let filteredResult = myProducts.map( (product) => {
                return product;
            }).filter( (product) => {
                return product.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
            })
            res.status(200).send(filteredResult);
        }
        //else just send product array
        else {
            res.status(200).send(myProducts)
        }
        
    } catch (error) {
        res.status(500).send("Server Error")
    }
})

//Exercicio 5  e Exercicio 8 e Exercicio 11
app.put("/products/:id", (req:Request, res:Response) => {
    //change price of a product
    let productId = req.params.id;
    let {name, price} = req.body; 
    try {
        if(!price && !name) {
            throw new Error("Erro, body em formato errado, por favor enviar price (number) e/ou name (string")
        }

        if (price && typeof price !== 'number'){
            throw new Error("Erro, price tem que ser um number"); 
        }

        if (name && typeof name !== 'string' )
        {
            throw new Error("Error, name tem que estar em formato string"); 
        }

        if (price && price <= 0)
        {
            throw new Error("Preco tem que ser maior que zero")
        }

        if (parseInt(productId) < 0 || parseInt(productId) > myProducts.length)
        {
            throw new Error("Erro, produto nao encontrado")
        }

        for( let i =0; i<myProducts.length; i++)
        {
            if(myProducts[i].id === productId)
            {
                myProducts[i].name = name === undefined? myProducts[i].name : name; 
                myProducts[i].price = price === undefined? myProducts[i].price: price; 
            }
        }

        res.status(200).send(myProducts)
        
    } catch (error:any) {
        switch (error.message) {
            case "Erro, body em formato errado, por favor enviar price (number) e/ou name (string": 
            res.status(400); 
            break; 

            case "Erro, price tem que ser um number":
                res.status(400);
                break; 

            case "Error, name tem que estar em formato string": 
                res.status(400); 
                break; 

            case "Preco tem que ser maior que zero": 
                res.status(400)
                break; 

            case "Erro, produto nao encontrado": 
            res.status(404)
            break; 

            default: 
            error.message = "Unexpected server error"; 
            res.status(500); 
            break; 
        }

        res.send(error.message)
        
    }
})

//Exercicio 6 e Exercicio 9
app.delete("/products/:id", (req:Request, res:Response) => {
    //delete a product
    let productId = req.params.id

    try {
        
        //for loop slicing id
        let beforeLength = myProducts.length; 

        for(let i =0; i < myProducts.length; i++)
        {
            if(myProducts[i].id === productId)
            {
                myProducts.splice(i,1); 
            }
        }

        //if unable to delete, no product found
        if (myProducts.length === beforeLength)
        {
            throw new Error("Produto nao encontrado")
        }

        res.status(200).send(myProducts)
        
        
    } catch (error:any) {
        switch(error.message){
            case  "Produto nao encontrado": 
            res.status(400); 
            break; 

            default: 
            res.status(500); 
            error.message("Unexpected Server Error")
        }

        res.send(error.message)
        
    }
})


app.listen(3003,()=> {
    console.log('Server listening and serving at port 3003')
})

