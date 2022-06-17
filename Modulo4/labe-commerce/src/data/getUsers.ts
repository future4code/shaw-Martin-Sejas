import connection from "../connection";


export async function getUsers() {
    let response = await connection("labecommerce_users").select('*');
    return response; 
    
}