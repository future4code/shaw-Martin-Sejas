import { connection } from "./connection"

//
export default async function selectAllUsersEx3(offset:number):Promise<any> {

    const result = await connection('aula48_exercicio').select('*').limit(5).offset(offset);
    return result;
 }