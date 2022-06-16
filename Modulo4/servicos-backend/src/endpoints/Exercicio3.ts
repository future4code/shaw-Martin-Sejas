import axios from "axios";
import Address from "../types";

//Exercicio 3
export default async function getAddressFromCepEx3(cep:string){
    console.log("cheguei aqui")
let response = await axios.get(`http://www.viacep.com.br/ws/${cep}/json/`); 
let address= {
    cep: response.data.cep,
    logradouro: response.data.logradouro,
    numero: Number(response.data.ibge),
    bairro: response.data.bairro,
    cidade: response.data.localidade,
    estado: response.data.uf
}

return address; 

}