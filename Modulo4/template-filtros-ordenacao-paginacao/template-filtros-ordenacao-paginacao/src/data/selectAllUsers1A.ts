import { connection } from "./connection"

//
export default async function selectAllUsersEx1A(nome:string):Promise<any> {

    const result = await connection('aula48_exercicio').select('*').where('name',`${nome}`);
    console.log(result)
    return result;
 }