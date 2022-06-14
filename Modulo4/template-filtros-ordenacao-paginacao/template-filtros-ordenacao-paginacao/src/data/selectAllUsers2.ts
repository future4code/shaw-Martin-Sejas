import { connection } from "./connection"

//
export default async function selectAllUsersEx2(orderBy:string, order:string, name?:string, type?:string):Promise<any> {

    if(!name && !type)
    {
        let result = await connection('aula48_exercicio').select('*').orderBy(orderBy,order);
        return result; 
    }
    else if(name && !type)
    {
        let result =  await connection('aula48_exercicio').select('*').where('name', 'like',`%${name}%`).orderBy(orderBy,order);
        return result; 
    }
    else if(!name && type){
        let result =  await connection('aula48_exercicio').select('*').where('type','like',`%${type}%`).orderBy(orderBy,order);
        return result; 
    }
    else {
        let result =  await connection('aula48_exercicio').select('*').where('type','like',`%${type}%`).andWhere('name','like',`%${name}%`).orderBy(orderBy,order);
        return result; 
    }
 }