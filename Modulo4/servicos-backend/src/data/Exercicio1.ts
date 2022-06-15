import axios from "axios";
import Address from "../types";


export default async function getAddressFromCep(cep:string){
    console.log("cheguei aqui")
let response = await axios.get(`http://www.viacep.com.br/ws/22793760/json/`); 
console.log(response); 


}