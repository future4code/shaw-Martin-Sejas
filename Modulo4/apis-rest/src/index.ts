import express, {Request, Response} from "express";
import cors from "cors"; 

const app = express(); 
//Exercicio 1
app.use(express.json()); 
app.use(cors());

enum ROLES {
    ADMIN = "ADMIN", 
    NORMAL = "NORMAL"
}

type User = {
    id: number, 
    name: string, 
    email: string, 
    type: ROLES,
    age: number
}

let users:User[] = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: ROLES.ADMIN,
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: ROLES.NORMAL,
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: ROLES.NORMAL,
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: ROLES.NORMAL,
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: ROLES.ADMIN,
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: ROLES.ADMIN,
        age: 60
    }
]

//a) GET
//b) Users

//Exercicio 2,3
app.get("/users", (req:Request, res:Response) => {
let statusCode = 400;
    try {
        //check for query params
       
        let type = req.query.type 
        let search = req.query.search

        if(type === undefined && search === undefined)
        {
            res.status(200).send(users)
        }
        //if we have only the type, check if its part of the enum
        else if(type !== undefined && search === undefined)
        { 
            type = (type as string).toUpperCase();
            if(Object.values(ROLES).includes(type as string as ROLES))
            {
                let filteredUsers = users.map( (user) => {
                    return user
                }).filter((user) => {
                    return user.type === type
                })
                
                res.status(200).send(filteredUsers);
            }
            else {
                throw new Error("Invalid User Role");
            }       
        }

        else if(type === undefined && search !== undefined)
        {

            let filteredUsers = users.map( (user) => {
                return user;
            }).filter( (user) => {
                return user.name.toLowerCase().includes((search as string).toLowerCase())
            })

            res.status(200).send(filteredUsers)
        }
        else {
            type = (type as string).toUpperCase();
            if(Object.values(ROLES).includes(type as string as ROLES))
            {
                let filteredUsers = users.map( (user) => {
                    return user
                }).filter((user) => {
                    return user.type === type && user.name.toLowerCase().includes((search as string).toLowerCase())
                })
                
                res.status(200).send(filteredUsers);
            }
            else {
                throw new Error("Invalid User Role");
            }  
        }


    } catch (error:any) {
        if (error.message === "Invalid User Role")
        {res.status(statusCode).send({message: error.message})}

        else {
            res.status(500).send({message: "Unexpected error"})
        }
    }
})


//exercicio 4
app.post("/users", (req:Request, res:Response) => {
    let statusCode = 400; 
    try {
        
        let {name, email, type, age} = req.body; 

        if(!name || !email || !type || !age)
        {
            throw new Error("Bad request, please check body")
        }

        if(typeof name !== 'string' || typeof email !== 'string' || typeof type !== 'string' || typeof age !== 'number')
        {
            throw new Error("Please check body variable types, following format expected: name:string, email: string, type:string('ADMIN' or 'NORMAL'), age: number")
        }

        if(!email.includes('@'))
        {
            throw new Error("Please input a valid email ")
        }

        if(!Object.values(ROLES).includes(type as string as ROLES))
        {
            throw new Error("Field 'type' can only have values ('ADMIN' or 'USER')")
        }

        let id = users[users.length-1].id +1; 

        let newUser:User = {
            id,
            name,
            email,
            type: type as string as ROLES,
            age
        }

        users.push(newUser); 

        res.status(201).send( {
            message: "Created!",
            data: users
        })


    } catch (error:any) {
        if(error.message === undefined)
        {
            res.status(500).send("Unexpected Server Error")
        }
        else {
            res.status(statusCode).send({message: error.message})
        }

        
    }
})


app.listen(3003, ()=> [
    console.log("Server listening and serving on port 3003")
])