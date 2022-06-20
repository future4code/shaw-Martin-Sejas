import axios from "axios";


//Exercicio 2

//A)Nao muita, a arrow function eh callback e pode ser usada como parametro



let getSubscribers = async ():Promise<any>=> {
  const response = await axios.get(`https://labenews.herokuapp.com/subscribers`);
  return response.data; 
      
}

async function  main():Promise<void>{
   
 let subscribers = await getSubscribers().then((response) => {
 return response}).catch((error) => console.log(error.message)) 

 console.log(subscribers)
   
}

main()