import { Request, Response } from "express";
import app from "./app";
import connection from "./connection";


const getActors = async (): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor 
    `)
  
      return result
  }


const getActorByName = async (actorName:string): Promise<any> => {
    const result = await connection.raw(`
    SELECT * FROM Actor WHERE name = "${actorName}"; `)

    return result
}

const getActorById = async (id:string): Promise<any> => {
  const result = await connection.raw(`
  SELECT * FROM Actor WHERE id = "${id}" ; `)

  return result
}

const getActorByGender = async(gender:string): Promise<any> => {
  const result = await connection.raw(`
  SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}";
  `)

  return result; 
}

type Actor = {
  id:string, 
  name:string, 
  salary:number, 
  dateOfBirth: Date, 
  gender:string, 
}

const createActor = async(myActor:Actor):Promise<void> => {
  let {id,name,salary,dateOfBirth,gender} = myActor; 
  await connection.insert({
    id,
    name,
    salary,
    birth_date: dateOfBirth, 
    gender
  }).into('Actor')
  
}; 

const updateSalary = async (actorId:string, actorSalary:number):Promise<any> => {
  await connection.update({
    salary: actorSalary
  }).where({id: actorId}).into('Actor')

};


const deleteActor = async(actorId:string): Promise<any> => {
  await connection.delete('*').where({id: actorId}).into('Actor')
}

const getAverageSalary = async(gender:string): Promise<any> => {
 const result = await connection.avg("salary as average_salary").where({gender: gender}).into('Actor')

  return result
}


app.get("/",(req:Request, res:Response)=> {

    getActors().then( (result) => {
        console.log(result)
        res.status(200).send(result[0])
    }).catch( (err) => console.log(err))

} )

app.get("/actor", async (req:Request, res:Response) => {
  try {
    let gender:string = req.query.gender as string; 

   const actors = await getActorByGender(gender);
   res.status(200).send(actors); 
  } catch (error) {
    res.status(400).send(error)
    
  }
})

app.post("/actor/:id", (req: Request, res: Response) => {
  let myActor:Actor = {
    id: "008",
    name: "Martin Sejas",
    salary: 100000,
    dateOfBirth: new Date(Date.parse("1997-02-14")),
    gender:"male"
  }

  createActor(myActor).then( (response) => {
    console.log(response); 
    res.status(201).send("created!"); 
  }).catch((error) => console.log(error))
})

app.put("/updateSalary", (req:Request, res:Response) => {
  updateSalary("008", 50000).then( (response)=> {
    console.log(response)
    res.status(201).send("updated")
  }).catch( (error) => console.log(error))
})

app.delete("/deleteActor", (req:Request, res:Response) => {
  deleteActor("008").then((response) => {
    console.log(response); 
    res.status(200).send("deleted")
  }).catch( (error) => console.log(error))
})

app.get("/averageSalary", (req:Request, res:Response) => {
  getAverageSalary("female").then( (response) => {
    console.log(response); 

    res.status(200).send(response)
  }).catch( (error)  => console.log(error))
})


app.get("/actor/:id", async (req:Request, res:Response) => {
 try {
  let {id} = req.params; 
  const actor = await getActorById(id); 

  res.status(200).send(actor[0]);
 } catch (error) {
   res.status(400).send(error)
 } 
})