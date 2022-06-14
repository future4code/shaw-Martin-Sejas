import { connection } from "./connection"

//
export default async function selectAllUsersEx1B(tipo:string):Promise<any> {

    const result = await connection('aula48_exercicio').select('*').where('type',`${tipo}`);
    return result;
 }