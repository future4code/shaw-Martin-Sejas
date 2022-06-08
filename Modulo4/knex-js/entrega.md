### Exercicio 1

A) Ela entrega o resultado da da query, como primeira indice de uma array, e os dados do banco de dados no segundo indice, a resposta eh uma array contendo estes 2 indices. 

B) 
``` javascript 
const getActorByName = async (actorName:string): Promise<any> => {
    const result = await connection.raw(`
    SELECT * FROM Actor WHERE name = "${actorName}"; `)

    return result
}

```
C)
```javascript
const getActorByGender = async(gender:string): Promise<any> => {
  const result = await connection.raw(`
  SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}";
  `)

  return result; 
}
```

### Exercicio 2

A)

```javascript
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
```


```javascript
const updateSalary = async (actorId:string, actorSalary:number):Promise<any> => {
  await connection.update({
    salary: actorSalary
  }).where({id: actorId}).into('Actor')

};
``` 

B) 
```javascript 
const deleteActor = async(actorId:string): Promise<any> => {
  await connection.delete('*').where({id: actorId}).into('Actor')
}
```

C) 
```javascript
const getAverageSalary = async(gender:string): Promise<any> => {
 const result = await connection.avg("salary as average_salary").where({gender: gender}).into('Actor')

  return result
}
```

### Exercicio 3

a) 
```javascript
app.get("/actor/:id", async (req:Request, res:Response) => {
 try {
  let {id} = req.params; 
  const actor = await getActorById(id); 

  res.status(200).send(actor[0]);
 } catch (error) {
   res.status(400).send(error)
 } 
})


const getActorById = async (id:string): Promise<any> => {
  const result = await connection.raw(`
  SELECT * FROM Actor WHERE id = "${id}" ; `)

  return result
}
```


B) 
```javascript
app.get("/actor", async (req:Request, res:Response) => {
  try {
    let gender:string = req.query.gender as string; 

   const actors = await getActorByGender(gender);
   res.status(200).send(actors); 
  } catch (error) {
    res.status(400).send(error)
    
  }
})
```

```javascript
const getActorByGender = async(gender:string): Promise<any> => {
  const result = await connection.raw(`
  SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}";
  `)

  return result; 
}
```

### Exercicio 4

A) 
```javascript 
const updateSalary = async (actorId:string, actorSalary:number):Promise<any> => {
  await connection.update({
    salary: actorSalary
  }).where({id: actorId}).into('Actor')

};

app.put("/updateSalary", (req:Request, res:Response) => {
  updateSalary("008", 50000).then( (response)=> {
    console.log(response)
    res.status(201).send("updated")
  }).catch( (error) => console.log(error))
})
``` 


B) 

```javascript
app.delete("/deleteActor", (req:Request, res:Response) => {
  deleteActor("008").then((response) => {
    console.log(response); 
    res.status(200).send("deleted")
  }).catch( (error) => console.log(error))
})

const deleteActor = async(actorId:string): Promise<any> => {
  await connection.delete('*').where({id: actorId}).into('Actor')
}

```


