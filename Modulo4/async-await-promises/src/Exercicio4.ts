import axios from "axios";


//Exercicio 4

//A)Eh um put

type News = {
    title:string, 
    content:string, 
    date: Date
}

let createNews = async (body:News):Promise<void> => {
    axios.put(`https://labenews.herokuapp.com/news`, body);
    
}


