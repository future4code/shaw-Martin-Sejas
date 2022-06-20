import { connection } from "./connection"

//
export default async function selectAllUsersEx4(orderBy:string, order:string, name:string, type:string, limit:number, offset:number):Promise<any> {

    if(!name && !type)
    {
        let result = await connection('aula48_exercicio').select('*').limit(limit).offset(offset);
        return result; 
    }
    else if(name && !type)
    {
        let result =  await connection('aula48_exercicio').select('*').where('name', 'like',`%${name}%`).orderBy(orderBy,order).limit(limit).offset(offset);
        return result; 
    }
    else if(!name && type){
        let result =  await connection('aula48_exercicio').select('*').where('type','like',`%${type}%`).orderBy(orderBy,order).limit(limit).offset(offset);
        return result; 
    }
    else {
        let result =  await connection('aula48_exercicio')
        .select('*')
        .where('type','like',`%${type}%`)
        .andWhere('name','like',`%${name}%`)
        .orderBy(orderBy,order)
        .limit(limit)
        .offset(offset);
        return result; 
    }
 }