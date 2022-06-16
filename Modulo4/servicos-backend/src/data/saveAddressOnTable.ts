import connection from "../connection";

export default async function saveAddressOnTable(address:object) {
    let response = await connection('Cep').insert(address);
    return response; 
}