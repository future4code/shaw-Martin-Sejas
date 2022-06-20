import connection from "../connection";

export default async function UpdateUser(id:number, name?:string, nickname?:string) {
    let body:object; 

    if(name && nickname)
    {
        body = {
            name,
            nickname
        }
    }

    else if(name && !nickname)
    {
        body = {
            name
        }
    }
    else{
        body = {
            nickname
        }
    }
    let response = await connection('ToDoListUser').update(body).where({id});
    return response; 
}