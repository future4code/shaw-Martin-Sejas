import connection from "../connection";

export default async function insertUser(name:string,nickname:string, email:string)  {
    const result = await connection('ToDoListUser').insert({name:name, nickname: nickname, email: email});
    return result; 
}