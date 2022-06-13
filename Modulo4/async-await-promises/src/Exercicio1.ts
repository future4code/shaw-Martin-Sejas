import axios from "axios";


//Exercicio 1

//A) Devo utilizar GET, e o endpoint https://labenews.herokuapp.com/subscribers

//B Nao precisa, implicitamente com o async function conseguimos isso


async function getSubscribers ():Promise<any[]>{
  const response = await axios.get(`https://labenews.herokuapp.com/subscribers`);
  return response.data; 
      
}

async function  main():Promise<void>{
   
 let subscribers = await getSubscribers().then((response) => {
 return response}).catch((error) => console.log(error.message)) 

 console.log(subscribers)
   
}

main()