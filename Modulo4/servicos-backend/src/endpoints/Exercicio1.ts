import axios from "axios";
import Address from "../types";

//Exercicio 1
export default async function getAddressFromCep(cep:string){
    console.log("cheguei aqui")
let response = await axios.get(`http://www.viacep.com.br/ws/22793760/json/`); 
let address:Address = {
    logradouro: response.data.logradouro,
    bairro: response.data.bairro,
    cidade: response.data.localidade,
    estado: response.data.uf
}

return address; 

}