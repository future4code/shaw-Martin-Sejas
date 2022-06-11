import connection from "../connection";

export default async function SelectUser(id:number){
    const result = connection('ToDoListUser').select('id').select('nickname').where({id});
    return result; 
}