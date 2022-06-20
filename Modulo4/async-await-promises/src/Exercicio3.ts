import axios from "axios";


//Exercicio 3

//A)Nao temos erro

//B) Para poder usar o Promise.all que resulta mais rapido

type User = {
    id:string, 
    name:string, 
    email:string
}


let getSubscribers = async ():Promise<User[]>=> {
  const response = await axios.get(`https://labenews.herokuapp.com/subscribers`);
  return response.data.map( (res:any) => {
    return(
        {
            id: res.id, 
            name: res.name, 
            email: res.email
        }
    )
  }); 
      
}

async function  main():Promise<void>{
   
 let subscribers = await getSubscribers().then((response) => {
 return response}).catch((error) => console.log(error.message)) 

 console.log(subscribers)
   
}

main()